# Nikoo Asadnejad Portfolio

Static Next.js portfolio containing Nikoo's professional profile, projects, resume, certifications, and contact information. All content is local; the site makes no API requests and requires no backend.

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

The production build is written to `out/`.

The site defaults to `https://nikoo-asadnejad.github.io` for canonical URLs, the sitemap, and robots.txt. If you connect a custom domain, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before building.

## Hosting the static files

Upload the contents of `out/` to any static hosting provider and configure `out` as the publish directory. The generated routes use trailing-slash folders, so no application server is required.

To preview the exported files locally:

```bash
npx serve out
```

## Container hosting

```bash
docker build -t nikoo-portfolio .
docker run --rm -p 8080:80 nikoo-portfolio
```

Open `http://localhost:8080`.
