import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  const { name, phone, email, locality, service, message, consent, website } = body || {};

  // Antispam honeypot – pokud je vyplněn, tváříme se jako úspěch.
  if (website) return Response.json({ ok: true });

  if (!name || !phone || !locality || !message) {
    return Response.json({ error: "Vyplňte prosím všechna povinná pole." }, { status: 400 });
  }
  if (!consent) {
    return Response.json({ error: "Je nutné odsouhlasit zpracování osobních údajů." }, { status: 400 });
  }

  const subject = `Nová poptávka: ${service || "zemní práce"} – ${locality}`;
  const html = `
    <h2>Nová poptávka z webu</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><b>Jméno</b></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><b>Telefon</b></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><b>E-mail</b></td><td>${escapeHtml(email || "—")}</td></tr>
      <tr><td><b>Obec / lokalita</b></td><td>${escapeHtml(locality)}</td></tr>
      <tr><td><b>Typ práce</b></td><td>${escapeHtml(service || "—")}</td></tr>
      <tr><td valign="top"><b>Zpráva</b></td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.MAIL_TO || "krukbabice@gmail.com";
  const from = process.env.MAIL_FROM || "Poptavka z webu <onboarding@resend.dev>";

  // Pokud e-mail zatím není nakonfigurován, poptávku jen zalogujeme a vrátíme úspěch,
  // aby web fungoval i před nastavením domény/klíče (viz README).
  if (!apiKey || !to || !from) {
    console.log("[POPTÁVKA] (e-mail není nakonfigurován):", { name, phone, email, locality, service, message });
    return Response.json({ ok: true, note: "logged" });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: email || undefined,
      subject,
      html,
    });
    if (error) throw new Error(error.message || "Resend error");
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Chyba odeslání poptávky:", err);
    return Response.json(
      { error: "Poptávku se nepodařilo odeslat. Zkuste to prosím znovu nebo zavolejte." },
      { status: 500 }
    );
  }
}
