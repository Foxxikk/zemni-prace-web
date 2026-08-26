import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { reference } from "@/lib/site";
import { pripadoveStudie } from "@/lib/pripadoveStudie";

export const metadata = {
  title: "Reference – případové studie zakázek",
  description:
    "Konkrétní zakázky z Praha-východ: obec, rozsah práce, doba trvání a použitá technika. Výkopy základů, přípojky, terénní úpravy i odvoz zeminy.",
  alternates: { canonical: "/reference" },
};

export default function Reference() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ name: "Reference" }]} />
          <h1>Reference – jak vypadají naše zakázky</h1>
          <p className="lead">
            U každé zakázky uvádíme obec, co konkrétně bylo potřeba udělat, jak dlouho to
            trvalo a s jakou technikou jsme pracovali. Ať víte, co od nás čekat, ještě než
            zvednete telefon.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {pripadoveStudie.map((p) => (
              <article key={p.slug} className="case-card">
                <div style={{ position: "relative", aspectRatio: "4 / 3" }}>
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 540px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="case-body">
                  <h3>{p.title}</h3>
                  <p>{p.zadani}</p>
                  <ul className="case-meta">
                    <li>
                      <b>Obec:</b>{" "}
                      <Link href={"/zemni-prace/" + p.obecSlug}>{p.obec}</Link>
                    </li>
                    <li>
                      <b>Rozsah:</b> {p.rozsah}
                    </li>
                    <li>
                      <b>Doba trvání:</b> {p.doba}
                    </li>
                    <li>
                      <b>Technika:</b> {p.stroje.join(", ")}
                    </li>
                    <li>
                      <b>Výsledek:</b> {p.vysledek}
                    </li>
                    <li>
                      <Link href={"/sluzby/" + p.sluzbaSlug}>
                        Podrobnosti o této službě →
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Galerie z realizací</h2>
          <p className="lead">
            Fotky ze staveb v okolí Babic u Říčan. Galerii průběžně doplňujeme.
          </p>
          <div className="gallery" style={{ marginTop: 24 }}>
            {reference.map((r) => (
              <a
                key={r.src}
                className="tile"
                href={r.src}
                target="_blank"
                rel="noopener noreferrer"
                title={r.alt}
              >
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
