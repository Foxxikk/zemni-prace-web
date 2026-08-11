import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata = {
  title: "Ceník zemních a výkopových prací",
  description:
    "Ceník zemních prací: hodina práce technikou 1 000 Kč, doprava techniky 1 000 Kč v okruhu do 20 km. Ostatní práce dle poptávky – Říčany a okres Praha-východ.",
  alternates: { canonical: "/cenik" },
};

const cenik = [
  {
    title: "Hodina práce technikou",
    price: "1 000 Kč / hod",
    desc:
      "Cena zahrnuje stroj i jeho obsluhu. Účtujeme skutečně odpracovaný čas na stavbě, takže platíte jen za práci, která se udělala.",
  },
  {
    title: "Doprava techniky",
    price: "1 000 Kč",
    desc:
      "Přesun stroje na místo určení a zpět v okruhu do 20 km od našeho sídla v Babicích u Říčan. U vzdálenějších lokalit cenu dopravy upřesníme podle kilometrů.",
  },
];

const zahrnuje = [
  "Stroj včetně obsluhy a paliva",
  "Doprava stroje na stavbu a zpět",
  "Doporučení vhodné techniky před zahájením prací",
  "Účtování skutečně odpracovaných hodin",
  "Dohoda o postupu prací přímo na místě",
  "Základní úklid pracoviště po dokončení",
];

export default function Cenik() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / Ceník</p>
          <h1>Ceník zemních a výkopových prací</h1>
          <p className="lead">
            Základní ceny za práci technikou a její dopravu. Rozsáhlejší zakázky a specifické práce
            oceňujeme individuálně podle rozsahu, podloží a přístupu na pozemek.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {cenik.map((i) => (
              <div key={i.title} className="card">
                <h3>{i.title}</h3>
                <p style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink)", margin: ".2rem 0 .8rem" }}>
                  {i.price}
                </p>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
          <p className="form-note" style={{ marginTop: 24 }}>
            Uvedené ceny platí pro běžné podmínky. Konečnou cenu vždy potvrdíme předem, abyste věděli,
            s čím počítat.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Co je v ceně</p>
          <h2>Přehledně a bez skrytých položek</h2>
          <ul className="checklist" style={{ marginTop: 24 }}>
            {zahrnuje.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Ostatní práce na poptávku</h2>
          <p>
            Výkopy základů, přípojky inženýrských sítí, bazény a jezírka, drenáže, terénní úpravy,
            bourací práce hydraulickým kladivem nebo odvoz a likvidace zeminy – u těchto prací záleží
            na rozsahu a podmínkách na pozemku. Zavolejte nám nebo napište přes poptávkový formulář
            a připravíme vám nezávaznou nabídku.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={site.phoneHref}>Zavolat {site.phone}</a>
            <Link className="btn btn-dark" href="/kontakt">Poptávkový formulář</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
