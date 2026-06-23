import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{site.company}</h4>
            <p>{site.tagline}</p>
            <p>Zemní a výkopové práce na klíč vlastní technikou v regionu {site.region}.</p>
          </div>
          <div>
            <h4>Kontakt</h4>
            <p>
              Tel: <a href={site.phoneHref}>{site.phone}</a><br />
              E-mail: <a href={`mailto:${site.email}`}>{site.email}</a><br />
              {site.address}<br />
              IČO: {site.ico} · DIČ: {site.dic}
            </p>
          </div>
          <div>
            <h4>Rychlé odkazy</h4>
            <p>
              <Link href="/zemni-prace">Zemní práce</Link><br />
              <Link href="/technika">Technika</Link><br />
              <Link href="/reference">Reference</Link><br />
              <Link href="/blog">Blog</Link><br />
              <Link href="/kontakt">Kontakt / poptávka</Link><br />
              <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
            </p>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} {site.company}. Všechna práva vyhrazena.</span>
          <span>Působnost: {site.region}</span>
        </div>
      </div>
    </footer>
  );
}
