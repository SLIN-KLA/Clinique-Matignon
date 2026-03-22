/*
 * MATIGNON — Treatments
 * Design: Dark Medical Luxury
 * Contenu: historique complet des traitements, timeline verticale, statuts
 */
import { CheckCircle2, Circle, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";

const TREATMENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266302/ZXJt3AjXKDTezKpica76ko/matignon-treatment-card-drRjJPtw9uo9TcSKJoy2Rr.webp";

const treatments = [
  {
    id: 1,
    nom: "Épilation Permanente",
    categorie: "Laser",
    seances: [
      { num: 1, date: "12 juin 2025", statut: "terminé", notes: "Résultat excellent, peau bien tolérée" },
      { num: 2, date: "15 juil. 2025", statut: "terminé", notes: "Réduction visible dès la 2e séance" },
      { num: 3, date: "20 août 2025", statut: "terminé", notes: "" },
      { num: 4, date: "25 sept. 2025", statut: "terminé", notes: "" },
      { num: 5, date: "30 oct. 2025", statut: "terminé", notes: "" },
      { num: 6, date: "27 mars 2026", statut: "planifié", notes: "" },
      { num: 7, date: "À planifier", statut: "à venir", notes: "" },
      { num: 8, date: "À planifier", statut: "à venir", notes: "" },
    ],
    totalSeances: 8,
    seancesEffectuees: 5,
    prochaine: "27 mars 2026",
    praticien: "Dr. Patricia Delarive",
    clinique: "Lausanne",
  },
  {
    id: 2,
    nom: "HydraFacial Super Boost",
    categorie: "Soin visage",
    seances: [
      { num: 1, date: "5 sept. 2025", statut: "terminé", notes: "Teint éclatant, pores resserrés" },
      { num: 2, date: "10 nov. 2025", statut: "terminé", notes: "" },
      { num: 3, date: "15 janv. 2026", statut: "terminé", notes: "" },
      { num: 4, date: "27 mars 2026", statut: "planifié", notes: "" },
    ],
    totalSeances: 4,
    seancesEffectuees: 3,
    prochaine: "27 mars 2026",
    praticien: "Dr. Patricia Delarive",
    clinique: "Lausanne",
  },
  {
    id: 3,
    nom: "Microneedling",
    categorie: "Resurfacing",
    seances: [
      { num: 1, date: "8 oct. 2025", statut: "terminé", notes: "Légère rougeur post-séance, normale" },
      { num: 2, date: "12 déc. 2025", statut: "terminé", notes: "Amélioration texture visible" },
      { num: 3, date: "15 avr. 2026", statut: "planifié", notes: "" },
    ],
    totalSeances: 3,
    seancesEffectuees: 2,
    prochaine: "15 avr. 2026",
    praticien: "Dr. Sabri Derder",
    clinique: "Genève",
  },
];

function TreatmentCard({ t }: { t: typeof treatments[0] }) {
  const [expanded, setExpanded] = useState(false);
  const progress = (t.seancesEffectuees / t.totalSeances) * 100;

  return (
    <div className="rounded-lg overflow-hidden" style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(0.20 0 0)", borderLeft: "3px solid #B8FF00" }}>
      {/* Header */}
      <button className="w-full p-4 text-left" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#B8FF00", background: "rgba(184,255,0,0.08)", padding: "1px 6px", borderRadius: "2px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {t.categorie}
              </span>
            </div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#FFFFFF", letterSpacing: "0.04em" }}>
              {t.nom}
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0 0)", marginTop: "2px" }}>
              {t.praticien} · {t.clinique}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#B8FF00" }}>
              {t.seancesEffectuees}/{t.totalSeances}
            </span>
            {expanded ? <ChevronUp size={16} style={{ color: "oklch(0.50 0 0)" }} /> : <ChevronDown size={16} style={{ color: "oklch(0.50 0 0)" }} />}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-3">
          <div className="h-1.5 rounded-full" style={{ background: "oklch(0.20 0 0)" }}>
            <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #B8FF00, rgba(184,255,0,0.5))" }} />
          </div>
          <div className="flex justify-between mt-1.5">
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.45 0 0)" }}>
              Prochaine : {t.prochaine}
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "oklch(0.45 0 0)" }}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </button>

      {/* Timeline expanded */}
      {expanded && (
        <div className="px-4 pb-4" style={{ borderTop: "1px solid oklch(0.18 0 0)" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "oklch(0.40 0 0)", letterSpacing: "0.1em", textTransform: "uppercase", padding: "10px 0 8px" }}>
            Historique des séances
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px" style={{ background: "oklch(0.20 0 0)" }} />

            <div className="space-y-3">
              {t.seances.map((s) => (
                <div key={s.num} className="flex items-start gap-3 pl-1">
                  <div className="relative z-10 mt-0.5">
                    {s.statut === "terminé" ? (
                      <CheckCircle2 size={16} style={{ color: "#B8FF00" }} />
                    ) : s.statut === "planifié" ? (
                      <Clock size={16} style={{ color: "oklch(0.65 0 0)" }} />
                    ) : (
                      <Circle size={16} style={{ color: "oklch(0.30 0 0)" }} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: s.statut === "terminé" ? "#FFFFFF" : s.statut === "planifié" ? "oklch(0.70 0 0)" : "oklch(0.35 0 0)", fontWeight: 500 }}>
                        Séance {s.num}
                      </span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: s.statut === "planifié" ? "#B8FF00" : "oklch(0.45 0 0)" }}>
                        {s.date}
                      </span>
                    </div>
                    {s.notes && (
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "oklch(0.50 0 0)", marginTop: "2px", fontStyle: "italic" }}>
                        {s.notes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Treatments() {
  return (
    <div className="phone-frame" style={{ background: "#0A0A0A", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-5">
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#B8FF00", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Suivi
        </p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "#FFFFFF", letterSpacing: "0.04em" }}>
          MES TRAITEMENTS
        </h1>
      </div>

      {/* Hero image */}
      <div className="mx-5 mb-5 rounded-lg overflow-hidden" style={{ height: "140px" }}>
        <img src={TREATMENT_IMG} alt="Traitement laser" className="w-full h-full object-cover" />
        <div className="absolute inset-0 rounded-lg" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
      </div>

      {/* Stats */}
      <div className="px-5 mb-5">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Traitements actifs", value: "3" },
            { label: "Séances totales", value: "10" },
            { label: "Complétés", value: "2" },
          ].map(({ label, value }, i) => (
            <div key={i} className="p-3 rounded-lg text-center" style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(0.18 0 0)" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: "#B8FF00", lineHeight: 1 }}>{value}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: "oklch(0.45 0 0)", marginTop: "3px", lineHeight: 1.3 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment cards */}
      <div className="px-5 space-y-3">
        {treatments.map((t) => (
          <TreatmentCard key={t.id} t={t} />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
