import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { site, seznamPraci, technika, reference } from "@/lib/site";

const portfolio = [
  { src: "/reference/07-vykop-zakladu.webp", tag: "Základy", title: "Výkop základů rodinného domu", desc: "Vytyčení stavby, skrývka ornice a hloubení základových pasů na klíč." },
  { src: "/reference/03-pripojky-site.webp", tag: "Přípojky", title: "Přípojky inženýrských sítí", desc: "Výkopy pro kanalizaci, vodu a plyn dle projektu a platných norem." },
  { src: "/reference/08-terenni-upravy.webp", tag: "Terén", title: "Terénní úpravy pozemku", desc: "Svahování, rozprostření ornice, hutnění a finální úpravy zahrad a ploch." },
  { src: "/reference/14-odvoz-zeminy.webp", tag: "Odvoz", title: "Odvoz a likvidace zeminy", desc: "Naložení, odvoz a uložení přebytečné zeminy a stavebního materiálu." },
];

export default function Home() {
  return (
    <>
      <section className="hero hero-photo">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow" style={{ color: "var(--accent)" }}>Zemní a výkopové práce · {site.region}</p>
            <h1>Zemní a výkopové práce na klíč v okrese Praha-východ</h1>
            <p className="lead">
              Už <strong>20 let na trhu</strong>. Výkopy základů, přípojky inženýrských sítí, bazény, jezírka
              i terénní úpravy — vše zajistíme vlastní technikou a zkušenou obsluhou.
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
          <div className="hero-art only-b">
            <Image src="/hero.webp" alt="Zemní práce – technika v akci" fill sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: "cover" }} priority />
            <span className="hero-badge">20 let na trhu</span>
          </div>
        </div>
      </section>

      {/* Design B: amber pruh s kategoriemi */}
      <div className="cat-bar only-b">
        <div className="container">
          <span>Výkopy &amp; základy</span>
          <span>Přípojky sítí</span>
          <span>Bazény &amp; jezírka</span>
          <span>Terénní úpravy</span>
        </div>
      </div>

      {/* Kompletní seznam prací v bodech */}
      <section className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Co nabízíme</p>
            <h2>Naše služby</h2>
            <p className="lead">Kompletní zemní a výkopové práce na klíč. Provádíme především:</p>
          </div>
          <ul className="work-list">
            {seznamPraci.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="work-note">
            Zajistíme i odvoz a likvidaci přebytečné zeminy, dovoz materiálu nebo přistavení kontejneru.
          </p>
        </div>
      </section>

      {/* Strojový park – všechny stroje s fotkami */}
      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Naše vybavení</p>
            <h2>Strojový park</h2>
            <p className="lead">Díky vlastní technice zvládneme zakázky od stísněných zahrad po větší výkopy.</p>
          </div>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {technika.map((m) => (
              <div key={m.name} className="machine">
                <div className="machine-img">
                  <Image src={m.img} alt={`${m.name} – ${m.type}`} fill sizes="(max-width: 900px) 100vw, 360px" style={{ objectFit: "cover" }} />
                </div>
                <span className="type">{m.type}</span>
                <h3>{m.name}</h3>
                <p>{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizace – Design A: galerie */}
      <section className="section only-a">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Naše práce</p>
            <h2>Ukázky realizací</h2>
            <p className="lead">Pár fotek z našich zakázek – výkopy, přípojky i terénní úpravy.</p>
          </div>
          <div className="gallery" style={{ marginTop: 36 }}>
            {reference.slice(0, 6).map((r) => (
              <Link key={r.src} className="tile" href="/reference" title={r.alt}>
                <Image src={r.src} alt={r.alt} fill sizes="(max-width: 900px) 50vw, 360px" style={{ objectFit: "cover" }} />
              </Link>
            ))}
          </div>
          <div className="center" style={{ marginTop: 28 }}>
            <Link className="btn btn-dark" href="/reference">Zobrazit všechny reference</Link>
          </div>
        </div>
      </section>

      {/* Realizace – Design B: tmavé portfolio */}
      <section className="portfolio only-b">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Naše práce</p>
            <h2 className="portfolio-title">Naše realizace</h2>
          </div>
          <div className="portfolio-rows">
            {portfolio.map((p, i) => (
              <div className={i % 2 ? "pf-row reverse" : "pf-row"} key={p.src}>
                <div className="pf-img">
                  <Image src={p.src} alt={p.alt || p.title} fill sizes="(max-width: 800px) 100vw, 540px" style={{ objectFit: "cover" }} />
                </div>
                <div className="pf-text">
                  <span className="pf-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <Link className="pf-link" href="/reference">Více referencí →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Kde působíme</p>
            <h2>Okres Praha-východ a okolí</h2>
            <p className="lead">Jezdíme do obcí jako {site.obce.slice(0, 6).join(", ")} a dalších. Nevíte, jestli k vám dojedeme? Zavolejte.</p>
          </div>
          <div className="center" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary" href="/kontakt">Poptat práci ve vaší obci</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
