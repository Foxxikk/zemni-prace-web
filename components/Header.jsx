"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Úvod" },
  { href: "/zemni-prace", label: "Zemní práce" },
  { href: "/technika", label: "Technika" },
  { href: "/reference", label: "Reference" },
  { href: "/cenik", label: "Ceník" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="mark">ZP</span>
          <span>{site.company}</span>
        </Link>

        <nav className={open ? "nav open" : "nav"}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <a className="header-phone" href={site.phoneHref}>{site.phone}</a>
          <Link className="btn btn-primary" href="/kontakt">Poptávka</Link>
          <button
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
