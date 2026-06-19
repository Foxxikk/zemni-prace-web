import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { site, sluzby, technika, reference } from "@/lib/site";

const portfolio = [
  { src: "/reference/07-vykop-zakladu.webp", tag: "Základy", title: "Výkop základů rodinného domu", desc: "Vytyčení stavby, skrývka ornice a hloubení základových pasů na klíč." },
  { src: "/reference/03-pripojky-site.webp", tag: "Přípojky", title: "Přípojky inženýrských sítí", desc: "Výkopy pro kanalizaci, vodu a plyn dle projektu a platných norem." },
  { src: "/reference/08-terenni-upravy.webp", tag: "Terén", title: "Terénní úpravy pozemku", desc: "Svahování, rozprostření ornice, hutnění a finální úpravy zahrad a ploch." },
  { src: "/reference/14-odvoz-zeminy.webp", tag: "Odvoz", title: "Odvoz a likvidace zeminy", desc: "Naložení, odvoz a uložení přebytečné zeminy a stavebního materiálu." },
];

const why = [
  { num: "🚜", t: "Vlastní strojový park", d: "Traktorbagry JCB, pásové rypadlo CAT, minirypadlo Kubota – techniku vozíme vlastní." },
  { num: "🛠️", t: "Práce na klíč", d: "Od skrývky ornice po finální terénní úpravy včetně odvozu a likvidace materiálu." },
  { num: "📍", t: "Lokální dostupnost", d: "Působíme v okrese Praha-východ a okolních obcích – rychle a bez velkých dopravních nákladů." },
  { num: "⏱️", t: "Zkušenosti a spolehlivost", d: "Dodržujeme termíny a domluvenou cenu. Ozveme se do 24 hodin od poptávky." },
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
              Výkopy základů, přípojky inženýrských sítí, bazény, jezírka i terénní úpravy.
              Vše zajistíme vlastní technikou a zkušenou obsluhou.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/kontakt">Nezávazná poptávka</Link>
              <a className="btn btn-outline" href={site.phoneHref}>☎ {site.phone}</a>
            </div>
            <div className="hero-points">
              <span>Vlastní technika</span>
              <span>Práce na klíč</span>
              <span>Odvoz materiálu</span>
              <span>Praha-východ</span>
            </div>
          </div>
          <div className="hero-art only-b">
            <Image src="/hero.webp" alt="Zemní práce – technika v akci" fill sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: "cover" }} priority />
            <span className="hero-badge">Zemní práce na klíč</span>
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

      <section className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Co nabízíme</p>
            <h2>Naše služby</h2>
            <p className="lead">Veškeré zemní a výkopové práce pro stavebníky, firmy i obce.</p>
          </div>
          <div className="grid grid-3 only-a" style={{ marginTop: 36 }}>
            {sluzby.map((s) => (
              <Link key={s.slug} href="/zemni-prace" className="card">
                <div className="ico">▣</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="svc-list only-b">
            {sluzby.map((s) => (
              <Link key={s.slug} href="/zemni-prace" className="svc-row">
                <span className="svc-ico">▣</span>
                <span className="svc-body">
                  <strong>{s.title}</strong>
                  <small>{s.desc}</small>
                </span>
                <span className="svc-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Proč si vybrat nás</p>
            <h2>Spolehlivý partner pro zemní práce</h2>
          </div>
          <div className="why" style={{ marginTop: 36 }}>
            {why.map((w) => (
              <div key={w.t} className="card">
                <div className="num">{w.num}</div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Strojový park</p>
            <h2>Technika, se kterou pracujeme</h2>
            <p className="lead">Díky vlastnímu vybavení zvládneme zakázky od stísněných zahrad po větší výkopy.</p>
          </div>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {technika.slice(0, 3).map((m) => (
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
          <div className="center" style={{ marginTop: 28 }}>
            <Link className="btn btn-dark" href="/technika">Zobrazit celý strojový park</Link>
          </div>
        </div>
      </section>

      {/* Design A: mřížka galerie */}
      <section className="section section-alt only-a">
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

      {/* Design B: tmavé portfolio se střídavými kartami */}
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
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 800px) 100vw, 540px" style={{ objectFit: "cover" }} />
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

      <section className="section">
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
