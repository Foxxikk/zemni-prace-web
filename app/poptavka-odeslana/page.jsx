import Link from "next/link";
import { site } from "@/lib/site";
import LeadConversion from "@/components/LeadConversion";

export const metadata = {
  title: "Poptávka odeslána",
  description: "Děkujeme za poptávku. Ozveme se vám do 24 hodin.",
  robots: { index: false, follow: false },
};

export default function PoptavkaOdeslana() {
  return (
    <>
      <LeadConversion />

      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / Poptávka odeslána</p>
          <h1>Děkujeme za poptávku</h1>
          <p className="lead">
            Poptávku jsme přijali a ozveme se vám do 24 hodin. Pokud spěcháte, klidně zavolejte.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="alert alert-ok">
            Co bude dál: projdeme si zadání, případně se douptáme na detaily a připravíme pro vás
            nezávaznou cenovou nabídku.
          </div>

          <p style={{ marginTop: 24 }}>
            <a className="btn btn-primary" href={site.phoneHref}>
              ☎ Zavolat {site.phone}
            </a>
          </p>

          <h2 style={{ marginTop: 32 }}>Než se ozveme</h2>
          <ul>
            <li>
              <Link href="/reference">Fotografie našich realizací</Link>
            </li>
            <li>
              <Link href="/cenik">Ceník zemních a výkopových prací</Link>
            </li>
            <li>
              <Link href="/technika">Technika, se kterou pracujeme</Link>
            </li>
            <li>
              <Link href="/blog">Rady na blogu – výkop základů, drenáže, bazén</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
