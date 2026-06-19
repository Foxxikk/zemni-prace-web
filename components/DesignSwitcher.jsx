"use client";
import { useEffect, useState } from "react";

// Dočasná funkce pro výběr designu. Po rozhodnutí lze celé odstranit (viz README).
export default function DesignSwitcher() {
  const [design, setDesign] = useState("a");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("design")) || "a";
    setDesign(saved);
    document.documentElement.setAttribute("data-design", saved);
  }, []);

  function choose(d) {
    setDesign(d);
    try { localStorage.setItem("design", d); } catch (e) {}
    document.documentElement.setAttribute("data-design", d);
  }

  return (
    <div className={open ? "design-switcher open" : "design-switcher"}>
      <button className="ds-toggle" onClick={() => setOpen((v) => !v)} aria-label="Přepínač designu">
        🎨 Design: <strong>{design.toUpperCase()}</strong>
      </button>
      <div className="ds-panel">
        <p className="ds-title">Vyber vzhled webu</p>
        <button className={design === "a" ? "ds-opt active" : "ds-opt"} onClick={() => choose("a")}>
          <span>Design A</span>
          <small>Moderní / minimalistický</small>
        </button>
        <button className={design === "b" ? "ds-opt active" : "ds-opt"} onClick={() => choose("b")}>
          <span>Design B</span>
          <small>Editorial / patkové nadpisy</small>
        </button>
        <p className="ds-note">Dočasná volba — po rozhodnutí ji odstraníme.</p>
      </div>
    </div>
  );
}
