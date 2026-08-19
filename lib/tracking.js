// Centralni helper pro mereni (GA4 + Google Ads).
// ID se nacitaji z env promennych. GA4 ID ma navic fallback natvrdo (measurement ID je
// verejny identifikator webu, ne tajny klic), aby mereni fungovalo i bez env na hostingu.

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-X0F1GY7JX5";
export const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";

export const LABELS = {
  form: process.env.NEXT_PUBLIC_GADS_LABEL_FORM || "",
  tel: process.env.NEXT_PUBLIC_GADS_LABEL_TEL || "",
  mail: process.env.NEXT_PUBLIC_GADS_LABEL_MAIL || "",
};

export const ATTR_COOKIE = "kruk_attr";

export function track(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export function adsConversion(label, { value = 0, transaction_id } = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!ADS_ID || !label) return;
  window.gtag("event", "conversion", {
    send_to: ADS_ID + "/" + label,
    value,
    currency: "CZK",
    transaction_id,
  });
}

// Precte ulozenou atribuci (gclid, utm...) z first-party cookie.
export function readAttribution() {
  if (typeof document === "undefined") return {};
  const m = document.cookie.match(/(?:^|;\s*)kruk_attr=([^;]*)/);
  if (!m) return {};
  try {
    return JSON.parse(decodeURIComponent(m[1])) || {};
  } catch {
    return {};
  }
}
