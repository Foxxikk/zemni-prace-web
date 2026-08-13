"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { track, adsConversion, LABELS, GA_ID, ATTR_COOKIE } from "@/lib/tracking";

const ATTR_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

// Resi tri veci, ktere App Router sam neumi:
// 1) ulozeni gclid/utm do first-party cookie
// 2) page_view pri klientske navigaci
// 3) mereni kliku na telefon, e-mail a CTA
export default function ClientTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const found = {};
    ATTR_KEYS.forEach((k) => {
      const v = searchParams.get(k);
      if (v) found[k] = v;
    });
    if (!Object.keys(found).length) return;
    found.landing = window.location.pathname;
    found.referrer = document.referrer || "";
    found.ts = new Date().toISOString();
    document.cookie =
      ATTR_COOKIE +
      "=" +
      encodeURIComponent(JSON.stringify(found)) +
      ";path=/;max-age=" +
      90 * 24 * 3600 +
      ";samesite=lax";
  }, [searchParams]);

  useEffect(() => {
    if (!GA_ID) return;
    track("page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
      if (!a) return;
      const isTel = (a.getAttribute("href") || "").startsWith("tel:");
      const where = a.closest("header")
        ? "header"
        : a.classList.contains("fab")
        ? "fab"
        : a.closest(".cta-band")
        ? "cta_band"
        : a.closest("footer")
        ? "footer"
        : "content";
      track(isTel ? "click_to_call" : "click_to_email", {
        link_location: where,
        page_path: pathname,
      });
      adsConversion(isTel ? LABELS.tel : LABELS.mail, { value: isTel ? 300 : 150 });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="/kontakt"]');
      if (!a) return;
      track("cta_poptavka_click", {
        link_location: a.className || "link",
        page_path: pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
