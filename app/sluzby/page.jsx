import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";
import { lokality } from "@/lib/lokality";
import { sluzbyDetail } from "@/lib/sluzbyDetail";

export const metadata = {
  title: "Přehled služeb – zemní a výkopové práce",
  description:
    "Sedm hlavních služeb: výkopy základů, přípojky, bazény, terénní úpravy, drenáže, bagr s obsluhou a odvoz zeminy. Praha-východ a Říčansko.",
  alternates: { canonical: "/sluzby" },
};

export default function SluzbyPage() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs
            items={[{ name: "Služby" }]}
          />
          <h1>Přehled služeb</h1>
          <p className="lead">
            Zemní práce jsme rozdělili na sedm oblastí, aby se každý rychle dostal k tomu,
            co skutečně řeší. U každé služby najdete, co je v ceně, jak práce probíhá
            i odpovědi na nejčastější otázky.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
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
          <h2>Nevíte, do které kategorie vaše práce patří?</h2>
          <div className="prose">
            <p>
              To je úplně běžné – většina zakázek je kombinace několika věcí. Zavolejte
              a popište, co potřebujete. Řekneme rovnou, jaký stroj je na to vhodný,
              kolik to přibližně zabere a kdy můžeme přijet.
            </p>
          </div>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-primary" href={site.phoneHref}>
              Zavolat {site.phone}
            </a>
            <Link className="btn btn-outline" href="/kontakt">
              Napsat poptávku
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Kde pracujeme</h2>
          <p className="lead">
            Vyjíždíme z Babic u Říčan do okruhu přibližně 25 km, tedy po celém okrese
            Praha-východ.
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

      <CtaBand />
    </>
  );
}
