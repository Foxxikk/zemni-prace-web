"use client";

import { useEffect } from "react";
import { track, adsConversion, LABELS } from "@/lib/tracking";

// Odpali konverzi POUZE po skutecnem odeslani formulare.
// Priznak nastavuje PoptavkaForm, takze refresh ani zalozka konverzi nezdvoji.
export default function LeadConversion() {
  useEffect(() => {
    let lead = null;
    try {
      const raw = sessionStorage.getItem("lead_pending");
      if (!raw) return;
      sessionStorage.removeItem("lead_pending");
      lead = JSON.parse(raw);
    } catch (e) {
      return;
    }
    if (!lead) return;

    // Enhanced conversions for leads - musi byt pred samotnou konverzi.
    if (typeof window.gtag === "function") {
      const digits = String(lead.phone || "").replace(/\D/g, "");
      window.gtag("set", "user_data", {
        email: lead.email || undefined,
        phone_number: digits.length >= 9 ? "+420" + digits.slice(-9) : undefined,
      });
    }

    track("generate_lead", {
      value: 600,
      currency: "CZK",
      service: lead.service || "",
      locality: lead.locality || "",
    });
    adsConversion(LABELS.form, { value: 600, transaction_id: lead.id });
  }, []);

  return null;
}
