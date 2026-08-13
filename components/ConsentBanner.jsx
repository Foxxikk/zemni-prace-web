"use client";

import { useEffect, useState } from "react";

const KEY = "cookie_consent_v1";
const YEAR = 365 * 24 * 3600 * 1000;

function pushConsent(s) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: s.analytics ? "granted" : "denied",
    ad_storage: s.marketing ? "granted" : "denied",
    ad_user_data: s.marketing ? "granted" : "denied",
    ad_personalization: s.marketing ? "granted" : "denied",
  });
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [decided, setDecided] = useState(true);

  useEffect(() => {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(KEY) || "null");
    } catch (e) {
      saved = null;
    }
    const expired = saved && Date.now() - (saved.ts || 0) > YEAR;
    if (!saved || expired) {
      setOpen(true);
      setDecided(false);
    }

    const onClick = (e) => {
      if (e.target.closest("[data-cookie-settings]")) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-cookiebar", open);
  }, [open]);

  const save = (analytics, marketing) => {
    const s = { analytics, marketing, ts: Date.now(), v: 1 };
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (e) {}
    pushConsent(s);
    setDecided(true);
    setOpen(false);
  };

  if (!open) {
    if (!decided) return null;
    return (
      <button className="cookie-reopen" data-cookie-settings type="button">
        Nastavení cookies
      </button>
    );
  }

  return (
    <div className="cookiebar" role="dialog" aria-label="Nastavení cookies">
      <div className="cookiebar-inner">
        <p>
          Používáme cookies pro měření návštěvnosti a vyhodnocení reklamy. Technicky nutné
          cookies běží vždy, ostatní jen s vaším souhlasem. Podrobnosti najdete v{" "}
          <a href="/ochrana-osobnich-udaju">Ochraně osobních údajů</a>.
        </p>
        <div className="cookiebar-actions">
          <button className="btn btn-primary" type="button" onClick={() => save(true, true)}>
            Přijmout vše
          </button>
          <button className="btn" type="button" onClick={() => save(true, false)}>
            Jen analytické
          </button>
          <button className="btn" type="button" onClick={() => save(false, false)}>
            Odmítnout
          </button>
        </div>
      </div>
    </div>
  );
}
