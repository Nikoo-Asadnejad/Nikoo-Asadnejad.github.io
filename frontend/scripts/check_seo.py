"""Check the production export for crawlability and common SEO regressions."""

import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
from xml.etree import ElementTree


OUT = Path(__file__).resolve().parents[1] / "out"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lang = ""
        self.title = ""
        self.in_title = False
        self.headings = []
        self.heading_levels = []
        self.in_h1 = False
        self.meta = {}
        self.canonical = ""
        self.links = []
        self.images = []
        self.json_ld = []
        self.in_json_ld = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.lang = attrs.get("lang", "")
        elif tag == "title":
            self.in_title = True
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.heading_levels.append(int(tag[1]))
            if tag == "h1":
                self.in_h1 = True
                self.headings.append("")
        elif tag == "meta":
            key = attrs.get("name") or attrs.get("property")
            if key:
                self.meta[key] = attrs.get("content", "")
        elif tag == "link" and "canonical" in attrs.get("rel", "").split():
            self.canonical = attrs.get("href", "")
        elif tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        elif tag == "img":
            self.images.append(attrs)
        elif tag == "script" and attrs.get("type") == "application/ld+json":
            self.in_json_ld = True
            self.json_ld.append("")

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag == "h1":
            self.in_h1 = False
        elif tag == "script":
            self.in_json_ld = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_h1:
            self.headings[-1] += data
        if self.in_json_ld:
            self.json_ld[-1] += data


def exported_path(url):
    path = unquote(urlparse(url).path).lstrip("/")
    if not path or path.endswith("/"):
        return OUT / path / "index.html"
    file_path = OUT / path
    return file_path if file_path.suffix else file_path / "index.html"


def main():
    errors = []
    sitemap = OUT / "sitemap.xml"
    robots = OUT / "robots.txt"
    if not sitemap.is_file() or not robots.is_file():
        raise SystemExit("Missing sitemap.xml or robots.txt in production export")

    urls = [element.text for element in ElementTree.parse(sitemap).iter() if element.tag.endswith("}loc")]
    if not urls:
        raise SystemExit("Sitemap contains no page URLs")
    site = urlparse(urls[0]).netloc
    robots_text = robots.read_text()
    if not site or any(urlparse(url).netloc != site or urlparse(url).scheme != "https" for url in urls):
        errors.append("Invalid sitemap URLs")
    if "Disallow: /" in robots_text or f"Sitemap: https://{site}/sitemap.xml" not in robots_text:
        errors.append("robots.txt blocks crawling or omits the sitemap")

    for url in urls:
        file_path = exported_path(url)
        if not file_path.is_file():
            errors.append(f"Missing sitemap page: {url}")
            continue

        page = PageParser()
        page.feed(file_path.read_text())
        if page.lang != "en" or not page.title or not page.meta.get("description"):
            errors.append(f"Missing language, title, or description: {url}")
        if page.canonical != url or page.meta.get("og:url") != url:
            errors.append(f"Canonical or social URL mismatch: {url}")
        if not all(page.meta.get(key) for key in ("og:title", "og:description", "og:image", "twitter:title", "twitter:description", "twitter:image")):
            errors.append(f"Incomplete social metadata: {url}")
        if page.meta.get("og:title") != page.title or page.meta.get("twitter:title") != page.title:
            errors.append(f"Social title differs from page title: {url}")
        if page.meta.get("og:description") != page.meta.get("description") or page.meta.get("twitter:description") != page.meta.get("description"):
            errors.append(f"Social description differs from page description: {url}")
        if "noindex" in page.meta.get("robots", "").lower():
            errors.append(f"Unexpected noindex: {url}")
        if len(page.headings) != 1:
            errors.append(f"Expected one H1: {url}")
        if any(current > previous + 1 for previous, current in zip(page.heading_levels, page.heading_levels[1:])):
            errors.append(f"Heading level skipped: {url}")
        if urlparse(url).path == "/":
            if not page.headings or "Nikoo Asadnejad" not in page.headings[0]:
                errors.append("Homepage H1 omits the full name")
            try:
                schemas = [item for script in page.json_ld for item in json.loads(script)]
                person = next(item for item in schemas if item.get("@type") == "Person")
                website = next(item for item in schemas if item.get("@type") == "WebSite")
                if (
                    person.get("name") != "Nikoo Asadnejad"
                    or person.get("url") != url
                    or person.get("jobTitle") != "Senior Software Engineer"
                    or not person.get("description")
                    or not person.get("knowsAbout")
                    or len(person.get("sameAs", [])) < 3
                    or website.get("url") != url
                ):
                    errors.append("Homepage structured data has missing or incorrect identity details")
            except (AttributeError, ValueError, TypeError, StopIteration):
                errors.append("Homepage Person or WebSite JSON-LD is invalid")

        for href in page.links:
            parsed = urlparse(href)
            if parsed.scheme in ("http", "https") and parsed.netloc != site:
                continue
            if parsed.scheme or parsed.netloc or not parsed.path.startswith("/"):
                continue
            if not exported_path(href).is_file():
                errors.append(f"Broken internal link on {url}: {href}")
        for image in page.images:
            if "alt" not in image:
                errors.append(f"Image missing alt attribute: {url}")
            src = image.get("src", "")
            if src.startswith("/") and not exported_path(src).is_file():
                errors.append(f"Missing image on {url}: {src}")

    not_found = OUT / "404.html"
    if not not_found.is_file() or "noindex" not in not_found.read_text().lower():
        errors.append("404 page is missing or indexable")

    if errors:
        raise SystemExit("SEO export check failed:\n" + "\n".join(sorted(set(errors))))
    print(f"SEO export check passed for {len(urls)} sitemap pages.")


if __name__ == "__main__":
    main()
