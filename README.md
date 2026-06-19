# Web – Zemní a výkopové práce (MVP)

Moderní prezentační web pro firmu poskytující zemní a výkopové práce v okrese Praha-východ.
Postaveno na **Next.js (App Router)**, připraveno k nasazení na **Vercel**.

## Co web obsahuje

- **Domů** – hero s CTA, přehled služeb, proč my, ukázka techniky, region působnosti
- **Zemní práce** – kompletní výčet služeb (hlavní SEO stránka)
- **Technika** – strojový park (JCB 3CX, JCB 3CX CityMaster, CAT T320, Kubota 3,5 t, Kubota R090)
- **Reference** – galerie (placeholder dlaždice, viz níže)
- **O nás** – text + údaje firmy
- **Kontakt** – poptávkový formulář s odesíláním e-mailem, kontakty, mapa
- Sticky header, mobilní menu, plovoucí tlačítko „Zavolat"
- SEO: metadata, Open Graph, `sitemap.xml`, `robots.txt`, schema.org LocalBusiness
- GDPR souhlas u formuláře + stránka Ochrana osobních údajů, antispam (honeypot)

## Lokální spuštění

```bash
npm install
cp .env.example .env.local   # vyplňte hodnoty (volitelné pro běh, nutné pro odesílání e-mailů)
npm run dev                  # http://localhost:3000
```

Bez nastavených e-mailových proměnných web funguje i tak – poptávka se zaloguje do konzole serveru
a formulář vrátí potvrzení. E-mail se začne odesílat po doplnění proměnných níže.

## Nasazení na Vercel

1. Nahrajte projekt do Git repozitáře (GitHub / GitLab).
2. Na [vercel.com](https://vercel.com) zvolte **Add New → Project** a importujte repozitář.
   Vercel Next.js detekuje sám – žádné další nastavení buildu netřeba.
3. V **Project → Settings → Environment Variables** přidejte proměnné (viz níže).
4. Deploy. Poté v **Settings → Domains** připojte vlastní doménu.

## Proměnné prostředí (Environment Variables)

| Proměnná | Popis |
|---|---|
| `RESEND_API_KEY` | API klíč z [resend.com](https://resend.com) pro odesílání e-mailů |
| `MAIL_FROM` | Odesílatel na **ověřené doméně**, např. `Poptávka <poptavka@vase-domena.cz>` |
| `MAIL_TO` | Kam chodí poptávky (firemní e-mail); více adres oddělte čárkou |
| `NEXT_PUBLIC_SITE_URL` | Veřejná URL webu (pro sitemap a metadata) |

### Napojení e-mailu na doménu (Resend)

1. Založte účet na **Resend** a v sekci **Domains** přidejte svoji doménu.
2. Resend vám vypíše DNS záznamy (SPF, DKIM) – přidejte je u svého správce domény.
   Po ověření můžete posílat z adres `@vase-domena.cz`.
3. Vytvořte **API Key** a vložte ho do `RESEND_API_KEY` na Vercelu.
4. Nastavte `MAIL_FROM` na adresu na ověřené doméně a `MAIL_TO` na firemní schránku.

> Alternativa: lze použít i jinou službu (Postmark, SendGrid) – stačí upravit `app/api/poptavka/route.js`.

## Co upravit před spuštěním (placeholdery)

- **`lib/site.js`** – název firmy, telefon, e-mail, IČO, DIČ, adresa, seznam obcí, popisy techniky.
- **`app/reference/page.jsx`** – nahradit ukázkové dlaždice reálnými fotkami (viz Galerie).
- **`app/ochrana-osobnich-udaju/page.jsx`** – zkontrolovat znění dle reálných procesů.
- **Mapa** na `/kontakt` – aktuálně OpenStreetMap výřez regionu; lze nahradit Google Maps embedem.

### Galerie – přidání fotek

1. Vložte fotky do složky `public/reference/` (např. `zaklady-1.jpg`).
2. V `app/reference/page.jsx` nahraďte placeholder dlaždice komponentou `next/image`:
   ```jsx
   import Image from "next/image";
   // <Image src="/reference/zaklady-1.jpg" width={800} height={600} alt="Výkop základů RD Říčany" />
   ```
3. Pro SEO vždy vyplňte výstižný `alt` (typ práce + lokalita).

## Struktura projektu

```
app/
  layout.jsx                 # společný layout, SEO metadata, schema.org
  page.jsx                   # Domů
  zemni-prace/page.jsx
  technika/page.jsx
  reference/page.jsx
  o-nas/page.jsx
  kontakt/page.jsx
  ochrana-osobnich-udaju/page.jsx
  api/poptavka/route.js      # serverless odeslání poptávky e-mailem
  sitemap.js / robots.js
components/                  # Header, Footer, CtaBand, Fab, PoptavkaForm
lib/site.js                  # centrální data (firma, služby, technika)
app/globals.css              # styly
```

## Doporučené další kroky

- Založit a propojit **Google Business Profile** (zásadní pro lokální SEO).
- Přidat **Google Analytics 4** + měření konverzí (odeslání formuláře, proklik na telefon).
- Doplnit reálné fotky techniky a realizací.
