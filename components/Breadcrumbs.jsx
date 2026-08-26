import Link from "next/link";
import { site } from "@/lib/site";

// Drobeckova navigace + strukturovana data BreadcrumbList.
// items: [{ name, href }] - posledni polozka je aktualni stranka.
export default function Breadcrumbs({ items = [] }) {
  const all = [{ name: "Úvod", href: "/" }, ...items];

  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: site.url + it.href } : {}),
    })),
  };

  return (
    <>
      <nav className="breadcrumb" aria-label="Drobečková navigace">
        {all.map((it, i) => {
          const last = i === all.length - 1;
          return (
            <span key={it.name}>
              {i > 0 ? <span aria-hidden="true"> / </span> : null}
              {it.href && !last ? (
                <Link href={it.href}>{it.name}</Link>
              ) : (
                <span aria-current="page">{it.name}</span>
              )}
            </span>
          );
        })}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
