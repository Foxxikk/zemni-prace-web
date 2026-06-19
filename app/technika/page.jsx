import CtaBand from "@/components/CtaBand";
import { technika } from "@/lib/site";

export const metadata = {
  title: "Technika a strojový park",
  description:
    "Náš strojový park: JCB 3CX, JCB 3CX CityMaster, CAT T320, minirypadlo Kubota 3,5 t a kolový nakladač Kubota R090. Technika pro výkopy i stísněné podmínky.",
  alternates: { canonical: "/technika" },
};

export default function Technika() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / Technika</p>
          <h1>Náš strojový park</h1>
          <p className="lead">
            Disponujeme vlastní technikou pro zemní a výkopové práce – od minirypadel pro stísněné
            prostory po výkonná rypadla a nakladače pro větší zakázky.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {technika.map((m) => (
              <div key={m.name} className="machine">
                <span className="type">{m.type}</span>
                <h3>{m.name}</h3>
                <p>{m.use}</p>
              </div>
            ))}
          </div>
          <p className="form-note" style={{ marginTop: 24 }}>
            Popisy využití jsou orientační – konkrétní nasazení rádi doporučíme podle vašeho projektu.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
