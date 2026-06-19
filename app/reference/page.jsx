import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Reference a galerie",
  description:
    "Ukázky našich realizací – výkopy základů, přípojky, terénní úpravy a další zemní práce v okrese Praha-východ.",
  alternates: { canonical: "/reference" },
};

// Placeholder dlaždice – po dodání fotek nahraďte komponentou <Image> a reálnými soubory.
const tiles = [
  "Výkop základů RD",
  "Přípojky sítí",
  "Hloubení bazénu",
  "Terénní úpravy zahrady",
  "Skrývka ornice",
  "Výkop pro plot",
  "Drenáže",
  "Zahradní jezírko",
  "Úprava terénu hřiště",
];

export default function Reference() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / Reference</p>
          <h1>Reference a galerie realizací</h1>
          <p className="lead">
            Vybrané ukázky našich prací. Fotogalerii průběžně doplňujeme o nové zakázky.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery">
            {tiles.map((t) => (
              <div key={t} className="tile"><span>{t}</span></div>
            ))}
          </div>
          <p className="form-note" style={{ marginTop: 20 }}>
            Ukázkové dlaždice – nahraďte reálnými fotografiemi realizací (viz README, sekce „Galerie").
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
