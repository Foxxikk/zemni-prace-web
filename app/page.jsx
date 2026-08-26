import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import { site, seznamPraci, technika, reference } from "@/lib/site";
import { lokality } from "@/lib/lokality";
import { sluzbyDetail } from "@/lib/sluzbyDetail";

export const metadata = {
  alternates: { canonical: "/" },
};

const uvodniOtazky = [
  {
    q: "Kolik stojí hodina bagru s obsluhou?",
    a:
      "Sazba začíná na " +
      site.priceRange +
      " za stroj včetně strojníka. K tomu se jednorázově účtuje doprava techniky na místo – na Říčansku je díky blízkosti nízká.",
  },
  {
    q: "Jak daleko od Babic u Říčan jezdíte?",
    a: "Běžně do okruhu přibližně 25 km, tedy po celém okrese Praha-východ. Dál se dá dohodnout u větších zakázek.",
  },
  {
    q: "Kdy můžete přijet?",
    a: "V nejbližších obcích obvykle do jednoho až tří dnů. Zavolejte a řekneme přesný termín.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero hero-photo">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Zemní a výkopové práce · {site.region}
          </p>
          <h1>Zemní a výkopové práce na klíč v okrese Praha-východ</h1>
          <p className="lead">
            Už <strong>20 let na trhu</strong>. Výkopy základů, přípojky inženýrských sítí,
            bazény, jezírka i terénní úpravy — vše zajistíme vlastní technikou a zkušenou
            obsluhou.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/kontakt">Nezávazná poptávka</Link>
            <a className="btn btn-outline" href={site.phoneHref}>☎ {site.phone}</a>
          </div>
          <div className="hero-points">
            <span>20 let na trhu</span>
            <span>Vlastní technika</span>
            <span>Práce na klíč</span>
            <span>Praha-východ</span>
          </div>
        </div>
      </section>

      {/* Sedm hlavnich sluzeb s odkazem na podrobnou stranku */}
      <section className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Co nabízíme</p>
            <h2>Naše služby</h2>
            <p className="lead">
              Vyberte si, co potřebujete – u každé služby najdete postup, ceny i časté otázky.
            </p>
          </div>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {sluzbyDetail.map((s) => (
              <Link key={s.slug} className="card" href={"/sluzby/" + s.slug}>
                <div className="ico">▣</div>
                <h3>{s.title}</h3>
                <p>{s.intro}</p>
              </Link>
            ))}
          </div>
          <p className="work-note" style={{ marginTop: 28 }}>
            Kompletní výčet prací i odvoz zeminy najdete na stránce{" "}
            <Link href="/zemni-prace">zemní práce</Link>.
          </p>
        </div>
      </section>

      {/* Strojový park */}
      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Naše vybavení</p>
            <h2>Strojový park</h2>
            <p className="lead">
              Díky vlastní technice zvládneme zakázky od stísněných zahrad po větší výkopy.
            </p>
          </div>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {technika.map((m) => (
              <div key={m.name} className="machine">
                <div className="machine-img">
                  <Image
                    src={m.img}
                    alt={m.name + " – " + m.type}
                    fill
                    sizes="(max-width: 900px) 100vw, 360px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="type">{m.type}</span>
                <h3>{m.name}</h3>
                <p>{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ukázky realizací */}
      <section className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Naše práce</p>
            <h2>Ukázky realizací</h2>
            <p className="lead">Pár fotek z našich zakázek – výkopy, přípojky i terénní úpravy.</p>
          </div>
          <div className="gallery" style={{ marginTop: 36 }}>
            {reference.slice(0, 6).map((r) => (
              <Link key={r.src} className="tile" href="/reference" title={r.alt}>
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </Link>
            ))}
          </div>
          <div className="center" style={{ marginTop: 28 }}>
            <Link className="btn btn-dark" href="/reference">Případové studie a reference</Link>
          </div>
        </div>
      </section>

      {/* Kde pusobime - prolinkovani na lokalitni stranky */}
      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Kde působíme</p>
            <h2>Okres Praha-východ a okolí</h2>
            <p className="lead">
              Vyjíždíme z Babic u Říčan. Vyberte svoji obec a podívejte se, co v ní nejčastěji
              řešíme.
            </p>
          </div>
          <ul className="chip-row" style={{ justifyContent: "center" }}>
            {lokality.map((l) => (
              <li key={l.slug}>
                <Link className="chip" href={"/zemni-prace/" + l.slug}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="center" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary" href="/kontakt">Poptat práci ve vaší obci</Link>
          </div>
        </div>
      </section>

      <Faq items={uvodniOtazky} title="Nejčastější dotazy" alt={false} />

      <CtaBand />
    </>
  );
}
