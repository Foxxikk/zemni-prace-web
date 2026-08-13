import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / 404</p>
          <h1>Tuhle stránku jsme nenašli</h1>
          <p className="lead">
            Odkaz je pravděpodobně zastaralý nebo obsahuje chybu. Zkuste pokračovat odsud.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ul>
            <li>
              <Link href="/">Úvodní stránka</Link>
            </li>
            <li>
              <Link href="/zemni-prace">Zemní a výkopové práce</Link>
            </li>
            <li>
              <Link href="/cenik">Ceník prací</Link>
            </li>
            <li>
              <Link href="/technika">Naše technika</Link>
            </li>
            <li>
              <Link href="/reference">Reference</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt a nezávazná poptávka</Link>
            </li>
          </ul>

          <p style={{ marginTop: 24 }}>
            <a className="btn btn-primary" href={site.phoneHref}>
              ☎ Zavolat {site.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
