import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>Máte stavební projekt?</h2>
            <p style={{ margin: 0, color: "rgba(255,255,255,.8)" }}>
              Pošlete nezávaznou poptávku nebo zavolejte – ozveme se do 24 hodin.
            </p>
          </div>
          <div className="actions">
            <Link className="btn btn-primary" href="/kontakt">Nezávazná poptávka</Link>
            <a className="btn btn-outline" href={site.phoneHref}>Zavolat {site.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
