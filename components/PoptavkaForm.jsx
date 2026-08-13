"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sluzby } from "@/lib/site";
import { readAttribution, track } from "@/lib/tracking";

export default function PoptavkaForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);

  function onFirstFocus() {
    if (started) return;
    setStarted(true);
    track("form_start", { form: "poptavka" });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const attr = readAttribution();

    try {
      const res = await fetch("/api/poptavka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          gclid: attr.gclid || "",
          gbraid: attr.gbraid || "",
          wbraid: attr.wbraid || "",
          utm_source: attr.utm_source || "",
          utm_medium: attr.utm_medium || "",
          utm_campaign: attr.utm_campaign || "",
          utm_term: attr.utm_term || "",
          page: window.location.pathname,
          referrer: attr.referrer || document.referrer || "",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Odeslání se nezdařilo.");

      // Jednorazovy priznak - konverze se odpali az na dekovne strance.
      try {
        sessionStorage.setItem(
          "lead_pending",
          JSON.stringify({
            id:
              typeof crypto !== "undefined" && crypto.randomUUID
                ? crypto.randomUUID()
                : String(Date.now()),
            service: data.service || "",
            locality: data.locality || "",
            email: data.email || "",
            phone: data.phone || "",
          })
        );
      } catch (storageErr) {
        // sessionStorage nemusi byt dostupny, konverze se pak jen neposle
      }

      form.reset();
      setStatus("ok");
      router.push("/poptavka-odeslana");
    } catch (err) {
      setStatus("error");
      const msg =
        err.message || "Něco se pokazilo. Zkuste to prosím znovu nebo zavolejte.";
      setError(msg);
      track("form_error", { form: "poptavka", error: msg });
    }
  }

  // Fallback, kdyby presmerovani na dekovnou stranku neproslo.
  if (status === "ok") {
    return (
      <div className="alert alert-ok" aria-live="polite">
        Děkujeme za poptávku! Ozveme se vám do 24 hodin. Pokud spěcháte, klidně zavolejte.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} onFocus={onFirstFocus} noValidate>
      {/* honeypot proti spamu */}
      <input
        className="hp"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Jméno a příjmení *</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefon *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="774 248 497"
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="locality">Obec / lokalita *</label>
          <input id="locality" name="locality" required placeholder="Např. Říčany" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">Typ práce</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Vyberte…
          </option>
          {sluzby.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Jiné">Jiné / nevím</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Popis projektu *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={4000}
          placeholder="Stručně popište, co potřebujete – rozsah, termín, přístup na pozemek…"
        />
      </div>

      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          Souhlasím se zpracováním osobních údajů za účelem vyřízení poptávky. *
        </span>
      </label>

      {status === "error" && (
        <div className="alert alert-err" aria-live="polite">
          {error}
        </div>
      )}

      <div>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
        </button>
      </div>
      <p className="form-note">* Povinné údaje. Ozveme se vám do 24 hodin.</p>
    </form>
  );
}
