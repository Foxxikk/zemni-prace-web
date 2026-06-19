import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata = {
  title: "O nás",
  description:
    "Jsme firma zaměřená na zemní a výkopové práce v okrese Praha-východ. Spolehlivost, dodržování termínů a práce na klíč vlastní technikou.",
  alternates: { canonical: "/o-nas" },
};

export default function ONas() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / O nás</p>
          <h1>O nás</h1>
        </div>
      </div>

      <section className="section">
        <div className="container prose">
          <p className="lead">
            {site.company} se zaměřuje na zemní a výkopové práce ve středních Čechách, zejména v okrese
            Praha-východ. Díky vlastnímu vybavení a zkušenostem provádíme veškeré zemní práce na klíč
            dle požadavků našich zákazníků.
          </p>
          <p>
            Pracujeme pro soukromé stavebníky, stavební firmy i obce. Zakládáme si na spolehlivosti,
            dodržování domluvených termínů a čisté práci. Od přípravy staveniště přes výkopy až po finální
            terénní úpravy zajistíme vše potřebné, včetně odvozu a likvidace přebytečného materiálu.
          </p>
          <h2 style={{ marginTop: 36 }}>Údaje o firmě</h2>
          <p>
            {site.company}<br />
            {site.address}<br />
            IČO: {site.ico} · DIČ: {site.dic}<br />
            Tel: <a href={site.phoneHref}>{site.phone}</a> · E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
