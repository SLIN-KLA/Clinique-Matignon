/*
 * MATIGNON — Treatments
 * Design: Editorial Aesthetic — timeline, tonal layering
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
    <div className="editorial-card rounded-lg overflow-hidden" style={{ background: "#ffffff" }}>
      {/* Header */}
      <button className="w-full p-4 text-left" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#755b2e", background: "#f5f3f1", padding: "2px 8px", borderRadius: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05rem", fontWeight: 600 }}>
                {t.categorie}
              </span>
            </div>
            <h3 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.15rem", color: "#313331", letterSpacing: "-0.01em", fontWeight: 700 }}>
              {t.nom}
            </h3>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", color: "#5f5f5f", marginTop: "2px" }}>
              {t.praticien} · {t.clinique}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#755b2e", fontWeight: 600 }}>
              {t.seancesEffectuees}/{t.totalSeances}
            </span>
            {expanded ? <ChevronUp size={16} style={{ color: "#5f5f5f" }} /> : <ChevronDown size={16} style={{ color: "#5f5f5f" }} />}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-3">
          <div className="h-1.5 rounded-full" style={{ background: "#f5f3f1" }}>
            <div className="h-full rounded-full progress-champagne" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between mt-1.5">
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f" }}>
              Prochaine : {t.prochaine}
            </span>
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f", fontWeight: 600 }}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </button>

      {/* Timeline expanded */}
      {expanded && (
        <div className="px-4 pb-4" style={{ borderTop: "1px solid rgba(49, 51, 49, 0.08)", background: "#f5f3f1" }}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#5f5f5f", letterSpacing: "0.05rem", textTransform: "uppercase", padding: "10px 0 8px", fontWeight: 600 }}>
            Historique des séances
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px" style={{ background: "rgba(49, 51, 49, 0.12)" }} />

            <div className="space-y-3">
              {t.seances.map((s) => (
                <div key={s.num} className="flex items-start gap-3 pl-1">
                  <div className="relative z-10 mt-0.5">
                    {s.statut === "terminé" ? (
                      <CheckCircle2 size={16} style={{ color: "#755b2e" }} />
                    ) : s.statut === "planifié" ? (
                      <Clock size={16} style={{ color: "#5f5f5f" }} />
                    ) : (
                      <Circle size={16} style={{ color: "#e8e6e4" }} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: s.statut === "terminé" ? "#313331" : s.statut === "planifié" ? "#5f5f5f" : "#b1b2b0", fontWeight: 600 }}>
                        Séance {s.num}
                      </span>
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: s.statut === "planifié" ? "#755b2e" : "#5f5f5f", fontWeight: 500 }}>
                        {s.date}
                      </span>
                    </div>
                    {s.notes && (
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.72rem", color: "#5f5f5f", marginTop: "2px", fontStyle: "italic" }}>
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
    <div className="phone-frame" style={{ background: "#fbf9f7", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <div className="px-8 pt-14 pb-6">
        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", fontWeight: 600 }}>
          Suivi
        </p>
        <h1 style={{ fontFamily: "'Noto Serif', serif", fontSize: "2rem", color: "#313331", letterSpacing: "-0.01em", fontWeight: 700 }}>
          Mes traitements
        </h1>
      </div>

      {/* Hero image */}
      <div className="mx-6 mb-6 rounded-lg overflow-hidden" style={{ height: "140px" }}>
        <img src={TREATMENT_IMG} alt="Traitement laser" className="w-full h-full object-cover" />
      </div>

      {/* Stats */}
      <div className="px-8 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Traitements actifs", value: "3" },
            { label: "Séances totales", value: "10" },
            { label: "Complétés", value: "2" },
          ].map(({ label, value }, i) => (
            <div key={i} className="editorial-card p-3 text-center" style={{ background: "#ffffff" }}>
              <p style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.5rem", color: "#755b2e", lineHeight: 1, fontWeight: 700 }}>{value}</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#5f5f5f", marginTop: "3px", lineHeight: 1.3, fontWeight: 500 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment cards */}
      <div className="px-8 space-y-3">
        {treatments.map((t) => (
          <TreatmentCard key={t.id} t={t} />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
