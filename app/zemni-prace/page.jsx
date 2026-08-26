import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { site, seznamPraci } from "@/lib/site";
import { lokality } from "@/lib/lokality";
import { sluzbyDetail } from "@/lib/sluzbyDetail";

export const metadata = {
  title: "Zemní a výkopové práce Praha-východ",
  description:
    "Zemní a výkopové práce v okrese Praha-východ: výkopy základů, přípojky inženýrských sítí, bazény, drenáže, terénní úpravy, bagr s obsluhou a odvoz zeminy.",
  alternates: { canonical: "/zemni-prace" },
};

const obecneOtazky = [
  {
    q: "Kolik stojí zemní práce?",
    a:
      "Účtujeme hodinovou sazbu za stroj i s obsluhou, od " +
      site.priceRange +
      ", a jednorázově dopravu techniky na místo. U větších zakázek dáme cenu za celou práci po prohlídce pozemku.",
  },
  {
    q: "Jak rychle můžete přijet?",
    a: "V Babicích u Říčan a nejbližších obcích obvykle do jednoho až tří dnů. V hlavní sezóně od dubna do října se termíny plní dřív, proto se vyplatí ozvat dopředu.",
  },
  {
    q: "Zvládnete práci na malé zahradě nebo v úzkém průjezdu?",
    a: "Ano. Na stísněná místa máme minirypadlo 3,5 t a kompaktní traktorbagr CityMaster, nejužší úseky dokopáváme ručně.",
  },
  {
    q: "Postaráte se i o odvoz zeminy?",
    a: "Ano, máme vlastní nosič kontejnerů i sklápěč, takže odvoz a uložení na skládku nemusíte řešit u další firmy.",
  },
  {
    q: "V jakém okolí pracujete?",
    a: "Vyjíždíme z Babic u Říčan do okruhu přibližně 25 km – Říčany, Mukařov, Mnichovice, Úvaly, Šestajovice, Velké Popovice, Kamenice, Český Brod a další obce Praha-východ.",
  },
];

export default function ZemniPrace() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ name: "Zemní práce" }]} />
          <h1>Zemní a výkopové práce v okrese Praha-východ</h1>
          <p className="lead">
            Kopeme základy, přípojky, bazény i drenáže a děláme terénní úpravy – vlastní
            technikou a s vlastním odvozem zeminy. Sídlíme v Babicích u Říčan, takže na
            Říčansko se dostaneme rychle a doprava techniky zůstává levná.
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-primary" href={site.phoneHref}>
              Zavolat {site.phone}
            </a>
            <Link className="btn btn-outline" href="/kontakt">
              Nezávazná poptávka
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2>Hlavní služby</h2>
          <p className="lead">
            Klikněte na to, co potřebujete – u každé služby najdete postup, ceny i odpovědi
            na časté otázky.
          </p>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {sluzbyDetail.map((s) => (
              <Link key={s.slug} className="card" href={"/sluzby/" + s.slug}>
                <div className="ico">▣</div>
                <h3>{s.title}</h3>
                <p>{s.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Kde pracujeme</h2>
          <p className="lead">
            Vyberte svoji obec – u každé popisujeme, jaké podloží tam čekat a co v ní
            nejčastěji řešíme.
          </p>
          <ul className="chip-row">
            {lokality.map((l) => (
              <li key={l.slug}>
                <Link className="chip" href={"/zemni-prace/" + l.slug}>
                  {l.name} <span className="km">{l.km} km</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
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
              Široký rozsah těchto prací zajistíme vlastní technikou, stejně jako{" "}
              <strong>odvoz a likvidaci přebytečné zeminy</strong> či dodání potřebného
              materiálu. V případě potřeby přistavíme kontejner a zajistíme odvoz a uložení
              suti, betonu, zeminy a dalších materiálů. Jak taková zakázka vypadá v praxi,
              se můžete podívat v našich <Link href="/reference">referencích</Link>.
            </p>
          </div>
        </div>
      </section>

      <Faq items={obecneOtazky} title="Časté otázky k zemním pracím" />

      <section className="section">
        <div className="container center">
          <h2>Potřebujete cenovou nabídku?</h2>
          <p className="lead">Popište nám svůj projekt a my se vám ozveme do 24 hodin.</p>
          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" href="/kontakt">
              Nezávazná poptávka
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
