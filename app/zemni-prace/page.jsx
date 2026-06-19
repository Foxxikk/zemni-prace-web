import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { site, sluzby, seznamPraci } from "@/lib/site";

export const metadata = {
  title: "Zemní a výkopové práce",
  description:
    "Kompletní zemní a výkopové práce v okrese Praha-východ: výkopy základů, přípojky inženýrských sítí, bazény, jezírka, drenáže, terénní úpravy, hutnění a odvoz materiálu.",
  alternates: { canonical: "/zemni-prace" },
};

export default function ZemniPrace() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / Zemní práce</p>
          <h1>Zemní a výkopové práce v okrese Praha-východ</h1>
          <p className="lead">
            Zaměřujeme se na zemní a výkopové práce ve středních Čechách, zejména v okrese Praha-východ.
            Veškeré práce provádíme na klíč vlastní technikou dle požadavků zákazníka.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2>Hlavní služby</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {sluzby.map((s) => (
              <div key={s.slug} className="card">
                <div className="ico">▣</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Kompletní výčet prací</h2>
          <p className="lead">Provádíme především:</p>
          <ul className="checklist" style={{ marginTop: 20 }}>
            {seznamPraci.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="prose" style={{ marginTop: 28 }}>
            <p>
              Široký rozsah těchto prací zajistíme vlastní technikou, stejně jako <strong>odvoz a likvidaci
              přebytečné zeminy</strong> či dodání potřebného materiálu. V případě potřeby přistavíme kontejner
              a zajistíme odvoz a uložení suti, betonu, zeminy a dalších materiálů.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Potřebujete cenovou nabídku?</h2>
          <p className="lead">Popište nám svůj projekt a my se vám ozveme do 24 hodin.</p>
          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" href="/kontakt">Nezávazná poptávka</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
