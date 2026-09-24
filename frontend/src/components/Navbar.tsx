"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/content/portfolio";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/resume/", label: "Resume" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Nikoo Asadnejad home" onClick={() => setOpen(false)}>
          <span className="brand-avatar" aria-hidden="true">
            <Image src={profile.portrait} alt="" width={44} height={44} priority />
          </span>
          <span>
            <strong>Nikoo Asadnejad</strong>
            <small>Senior Software Engineer</small>
          </span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${open ? "nav-links-open" : ""}`} id="primary-menu">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.slice(0, -1));
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            );
          })}
          <Link className="button button-small" href="/contact/" onClick={() => setOpen(false)}>Let&apos;s talk</Link>
        </div>
      </nav>
    </header>
  );
}
