// Sekce castych otazek + strukturovana data FAQPage.
// Pouziva nativni <details>, takze nepotrebuje zadny klientsky JavaScript
// a stranka zustava rychla i prehledna pro zakaznika.
export default function Faq({
  items = [],
  title = "Časté otázky",
  intro = null,
  schema = true,
  alt = true,
}) {
  if (!items.length) return null;

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className={alt ? "section section-alt" : "section"}>
      <div className="container">
        <h2>{title}</h2>
        {intro ? <p className="lead">{intro}</p> : null}
        <div className="faq-list">
          {items.map((it) => (
            <details key={it.q} className="faq-item">
              <summary>{it.q}</summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ) : null}
    </section>
  );
}
