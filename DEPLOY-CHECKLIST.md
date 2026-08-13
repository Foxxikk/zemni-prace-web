# Checklist po merge – zprovoznění poptávek a měření

## 1. Env proměnné ve Vercelu (Production + Preview)

| Proměnná | Hodnota | Povinné |
|---|---|---|
| `RESEND_API_KEY` | klíč z resend.com | ANO |
| `MAIL_TO` | krukbabice@gmail.com | ANO |
| `MAIL_FROM` | Poptávka z webu <poptavka@zemniprace-prahavychod.cz> | ANO |
| `NEXT_PUBLIC_SITE_URL` | https://zemniprace-prahavychod.cz | ANO |
| `NEXT_PUBLIC_GA_ID` | G-XXXXXXXXXX | pro měření |
| `LEAD_WEBHOOK_URL` | webhook do Google Sheetu | doporučeno |
| `NEXT_PUBLIC_GADS_ID` | AW-XXXXXXXXX | až s Google Ads |
| `NEXT_PUBLIC_GADS_LABEL_FORM` | label konverze formuláře | až s Google Ads |
| `NEXT_PUBLIC_GADS_LABEL_TEL` | label konverze telefonu | až s Google Ads |
| `NEXT_PUBLIC_GADS_LABEL_MAIL` | label konverze e-mailu | až s Google Ads |

Po přidání proměnných je nutný **nový deploy** (Vercel je nenačte do buďeného buildu).

## 2. Resend – doručitelnost

- V Resendu přidat doménu `zemniprace-prahavychod.cz` a nasadit DNS záznamy SPF a DKIM.
- Doporučený DMARC: `v=DMARC1; p=none; rua=mailto:krukbabice@gmail.com`
- Dokud doména není ověřená, e-maily půjdou z `onboarding@resend.dev` a padají do spamu.

## 3. Vercel – deploy a doména

- Zkontrolovat, že je zapnutá GitHub integrace a auto-deploy z `main`.
  (Zjištěno při auditu: produkce běžela na starším kódu než repozitář.)
- Nastavit jednosměrný redirect mezi `www` a variantou bez `www`.

## 4. Akceptační testy

1. Odeslat poptávku – e-mail dojde na krukbabice@gmail.com a zákazník dostane potvrzení.
2. Po odeslání se URL změní na `/poptavka-odeslana`, stránka je noindex.
3. Refresh děkovné stránky **nevytvoří** druhou konverzi.
4. Bez souhlasu s cookies neexistuje žádná `_ga` ani reklamní cookie.
5. Po souhlasu se v GA4 realtime objeví `page_view`, `click_to_call`, `generate_lead`.
6. Příchod na `/?gclid=test123` se propiše do e-mailu s poptávkou.
7. Neexistující URL vrací českou 404 stránku.
8. Sitemap a canonicaly ukazují na https://zemniprace-prahavychod.cz

## 5. GA4 a Search Console

- Založit GA4 property (časová zóna Praha, měna CZK), získat `G-XXXXXXXXXX`.
- Označit `generate_lead` a `click_to_call` jako klíčové události.
- Search Console: verifikace přes DNS TXT, vložit sitemap, propojit s GA4.

## 6. Co ještě chybí (není v této PR)

- `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.jpg` – binární assety,
  je potřeba dodat grafiku. Dnes `/favicon.ico` vrací 404 a chybí `og:image`.
- Přepsání `app/ochrana-osobnich-udaju/page.jsx` – musí obsahovat GA4, Google Ads,
  Resend jako zpracovatele, dobu uchování a práva subjektu.
- Samostatné landing pages pro jednotlivé služby (`/vykopy-zakladu`, `/pripojky`,
  `/terenni-upravy`) – největší páka na konverzní poměr reklamy.
- Značka sídla v mapě na `/kontakt` (dnes jen bbox výřez OpenStreetMap).
