import Link from "next/link";
import { site } from "@/lib/site";
import { lokality } from "@/lib/lokality";
import { sluzbyDetail } from "@/lib/sluzbyDetail";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{site.company}</h4>
            <p>{site.tagline}</p>
            <p>
              Zemní a výkopové práce na klíč vlastní technikou v regionu {site.region}.
            </p>
          </div>
          <div>
            <h4>Kontakt</h4>
            <p>
              Tel: <a href={site.phoneHref}>{site.phone}</a>
              <br />
              E-mail: <a href={"mailto:" + site.email}>{site.email}</a>
              <br />
              {site.address}
              <br />
              IČO: {site.ico} · DIČ: {site.dic}
            </p>
          </div>
          <div>
            <h4>Služby</h4>
            <ul className="link-list">
              {sluzbyDetail.map((s) => (
                <li key={s.slug}>
                  <Link href={"/sluzby/" + s.slug}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Rychlé odkazy</h4>
            <ul className="link-list">
              <li><Link href="/zemni-prace">Zemní práce</Link></li>
              <li><Link href="/technika">Technika</Link></li>
              <li><Link href="/reference">Reference</Link></li>
              <li><Link href="/cenik">Ceník</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/o-nas">O nás</Link></li>
              <li><Link href="/kontakt">Kontakt / poptávka</Link></li>
              <li><Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link></li>
            </ul>
          </div>
        </div>

        <p className="footer-obce">
          <b>Kam jezdíme: </b>
          {lokality.map((l, i) => (
            <span key={l.slug}>
              {i > 0 ? " · " : null}
              <Link href={"/zemni-prace/" + l.slug}>{l.name}</Link>
            </span>
          ))}
        </p>

        <div className="bottom">
          <span>
            © {new Date().getFullYear()} {site.company}. Všechna práva vyhrazena.
          </span>
          <span>Působnost: {site.region}</span>
        </div>
      </div>
    </footer>
  );
}
