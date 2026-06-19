import { site } from "@/lib/site";

export const metadata = {
  title: "Ochrana osobních údajů",
  description: "Zásady zpracování osobních údajů (GDPR).",
  robots: { index: false, follow: true },
  alternates: { canonical: "/ochrana-osobnich-udaju" },
};

export default function Gdpr() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Ochrana osobních údajů</h1>
        <p>
          Správcem osobních údajů je {site.company}, {site.address}, IČO: {site.ico}. Údaje vyplněné
          v poptávkovém formuláři (jméno, telefon, e-mail, lokalita a text zprávy) zpracováváme výhradně
          za účelem vyřízení vaší poptávky a komunikace s vámi.
        </p>
        <p>
          Údaje neposkytujeme třetím stranám pro marketingové účely a uchováváme je pouze po dobu nezbytně
          nutnou k vyřízení poptávky. Máte právo na přístup ke svým údajům, jejich opravu nebo výmaz –
          stačí nás kontaktovat na <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p className="form-note">
          Toto je vzorové znění pro MVP. Před spuštěním nechte text zkontrolovat dle vašich reálných
          procesů a platné legislativy (GDPR / zákon č. 110/2019 Sb.).
        </p>
      </div>
    </section>
  );
}
