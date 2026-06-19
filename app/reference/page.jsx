import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { reference } from "@/lib/site";

export const metadata = {
  title: "Reference a galerie",
  description:
    "Ukázky našich realizací – výkopy základů, přípojky inženýrských sítí, terénní úpravy a další zemní práce v okrese Praha-východ.",
  alternates: { canonical: "/reference" },
};

export default function Reference() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / Reference</p>
          <h1>Reference a galerie realizací</h1>
          <p className="lead">
            Vybrané ukázky našich prací – výkopy, přípojky, terénní úpravy i odvoz materiálu.
            Galerii průběžně doplňujeme o nové zakázky.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery">
            {reference.map((r) => (
              <a key={r.src} className="tile" href={r.src} target="_blank" rel="noopener noreferrer" title={r.alt}>
                <Image src={r.src} alt={r.alt} fill sizes="(max-width: 900px) 50vw, 360px" style={{ objectFit: "cover" }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
