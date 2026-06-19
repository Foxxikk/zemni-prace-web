import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { site, sluzby, technika } from "@/lib/site";

const why = [
  { num: "🚜", t: "Vlastní strojový park", d: "Traktorbagry JCB, pásové rypadlo CAT, minirypadlo Kubota – techniku vozíme vlastní." },
  { num: "🛠️", t: "Práce na klíč", d: "Od skrývky ornice po finální terénní úpravy včetně odvozu a likvidace materiálu." },
  { num: "📍", t: "Lokální dostupnost", d: "Působíme v okrese Praha-východ a okolních obcích – rychle a bez velkých dopravních nákladů." },
  { num: "⏱️", t: "Zkušenosti a spolehlivost", d: "Dodržujeme termíny a domluvenou cenu. Ozveme se do 24 hodin od poptávky." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
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
      </section>

      <section className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Co nabízíme</p>
            <h2>Naše služby</h2>
            <p className="lead">Veškeré zemní a výkopové práce pro stavebníky, firmy i obce.</p>
          </div>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {sluzby.map((s) => (
              <Link key={s.slug} href="/zemni-prace" className="card">
                <div className="ico">▣</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
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
