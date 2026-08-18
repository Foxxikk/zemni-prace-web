import { Resend } from "resend";

export const runtime = "nodejs";

const MAX = { name: 120, phone: 40, email: 160, locality: 120, service: 120, message: 4000 };

// Jednoduchy in-memory rate limit. Na MVP staci.
const hits = new Map();

function clientIp(req) {
  const h = req.headers.get("x-forwarded-for") || "";
  return h.split(",")[0].trim() || "unknown";
}

function rateLimited(key, max = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(key, arr);
  return arr.length > max;
}

function normalizePhone(v) {
  const d = String(v || "").replace(/\D/g, "");
  if (d.length === 9) return "+420" + d;
  if (d.length === 12 && d.indexOf("420") === 0) return "+" + d;
  return d ? "+" + d : "";
}

function escapeHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label, value) {
  return "<tr><td><b>" + label + "</b></td><td>" + value + "</td></tr>";
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  const {
    name,
    phone,
    email,
    locality,
    service,
    message,
    consent,
    website,
    gclid,
    gbraid,
    wbraid,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    page,
    referrer,
  } = body || {};

  // Antispam honeypot - tvarime se jako uspech.
  if (website) return Response.json({ ok: true });

  if (rateLimited(clientIp(req))) {
    return Response.json(
      { error: "Příliš mnoho pokusů. Zkuste to prosím za chvíli nebo zavolejte na +420 774 248 497." },
      { status: 429 }
    );
  }

  if (!name || !phone || !locality || !message) {
    return Response.json({ error: "Vyplňte prosím všechna povinná pole." }, { status: 400 });
  }
  if (!consent) {
    return Response.json(
      { error: "Je nutné odsouhlasit zpracování osobních údajů." },
      { status: 400 }
    );
  }

  const fields = { name, phone, email, locality, service, message };
  for (const key of Object.keys(fields)) {
    if (fields[key] && String(fields[key]).length > MAX[key]) {
      return Response.json({ error: "Některé z polí je příliš dlouhé." }, { status: 400 });
    }
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email))) {
    return Response.json({ error: "E-mail nemá správný formát." }, { status: 400 });
  }

  const tel = normalizePhone(phone);
  if (tel.replace(/\D/g, "").length < 9) {
    return Response.json(
      { error: "Telefon nemá správný formát. Zadejte prosím 9 číslic." },
      { status: 400 }
    );
  }

  const lead = {
    ts: new Date().toISOString(),
    name,
    phone: tel,
    email: email || "",
    locality,
    service: service || "",
    message,
    gclid: gclid || gbraid || wbraid || "",
    utm_source: utm_source || "",
    utm_medium: utm_medium || "",
    utm_campaign: utm_campaign || "",
    utm_term: utm_term || "",
    page: page || "",
    referrer: referrer || "",
  };

  // Zaloha mimo e-mail, aby se lead neztratil ani pri chybe odesilani.
  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("Lead webhook selhal:", err);
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.MAIL_TO || "krukbabice@gmail.com";
  const from = process.env.MAIL_FROM || "Poptavka z webu <onboarding@resend.dev>";

  // DULEZITE: driv se pri chybejici konfiguraci vracelo tiche ok a poptavka se ztratila.
  if (!apiKey) {
    console.error("[POPTAVKA] Chybi RESEND_API_KEY, poptavku nelze odeslat:", lead);
    if (process.env.NODE_ENV === "production") {
      return Response.json(
        {
          error:
            "Formulář je momentálně nedostupný. Zavolejte prosím na +420 774 248 497.",
        },
        { status: 503 }
      );
    }
    return Response.json({ ok: true, note: "dev-logged" });
  }

  const subject = "Nová poptávka: " + (service || "zemní práce") + " - " + locality;

  const html = [
    "<h2>Nová poptávka z webu</h2>",
    '<table cellpadding="6" style="border-collapse:collapse">',
    row("Jméno", escapeHtml(name)),
    row("Telefon", '<a href="tel:' + escapeHtml(tel) + '">' + escapeHtml(tel) + "</a>"),
    row("E-mail", escapeHtml(email || "-")),
    row("Obec / lokalita", escapeHtml(locality)),
    row("Typ práce", escapeHtml(service || "-")),
    row("Zpráva", escapeHtml(message).replace(/\n/g, "<br>")),
    row(
      "Zdroj",
      escapeHtml(
        [utm_source, utm_medium, utm_campaign].filter(Boolean).join(" / ") || "přímo / neznámý"
      )
    ),
    row("gclid", escapeHtml(lead.gclid || "-")),
    row("Stránka", escapeHtml(page || "-")),
    row("Odesláno", escapeHtml(lead.ts)),
    "</table>",
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      replyTo: email || undefined,
      subject,
      html,
    });
    if (error) throw new Error(error.message || "Resend error");

    // Potvrzeni zakaznikovi. Pripadne selhani zamerne ignorujeme.
    if (email) {
      try {
        await resend.emails.send({
          from,
          to: email,
          subject: "Přijali jsme vaši poptávku - Kruk & Co s.r.o.",
          html: [
            "<p>Dobrý den " + escapeHtml(name) + ",</p>",
            "<p>děkujeme za poptávku. Ozveme se vám do 24 hodin.",
            ' Pokud spěcháte, zavolejte na <a href="tel:+420774248497">+420 774 248 497</a>.</p>',
            "<p>Kruk &amp; Co s.r.o. - zemní a výkopové práce, Praha-východ<br>",
            '<a href="https://zemniprace-prahavychod.cz">zemniprace-prahavychod.cz</a></p>',
          ].join("\n"),
        });
      } catch (err) {
        console.error("Potvrzeni zakaznikovi se nepodarilo odeslat:", err);
      }
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Chyba odeslani poptavky:", err, lead);
    return Response.json(
      {
        error:
          "Poptávku se nepodařilo odeslat. Zkuste to prosím znovu nebo zavolejte na +420 774 248 497.",
      },
      { status: 500 }
    );
  }
}
