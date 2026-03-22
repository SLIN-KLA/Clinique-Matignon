/*
 * MATIGNON — Dashboard
 * Design: Dark Medical Luxury
 * Contenu: prochain RDV, progression traitement, alertes, recommandations rapides
 */
import { Bell, ChevronRight, Clock, Zap, TrendingUp, AlertCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Link } from "wouter";

// Mock data — à remplacer par des données réelles
const client = {
  prenom: "Sophie",
  clinique: "Lausanne — Rue de Bourg",
  avatar: "SO",
};

const nextAppointment = {
  traitement: "HydraFacial Super Boost",
  date: "Jeudi 27 mars 2026",
  heure: "14h30",
  praticien: "Dr. Patricia Delarive",
  daysLeft: 9,
};

const treatments = [
  {
    nom: "Épilation Permanente",
    seances: 5,
    total: 8,
    prochaine: "27 mars",
    statut: "en cours",
  },
  {
    nom: "HydraFacial",
    seances: 3,
    total: 4,
    prochaine: "27 mars",
    statut: "en cours",
  },
  {
    nom: "Microneedling",
    seances: 2,
    total: 3,
    prochaine: "15 avr.",
    statut: "planifié",
  },
];

const alerts = [
  { type: "rappel", message: "Votre crème solaire SPF50 est à renouveler", urgent: true },
  { type: "conseil", message: "Évitez l'exposition solaire 48h avant votre séance laser", urgent: false },
];

export default function Dashboard() {
  return (
    <div className="phone-frame" style={{ background: "#0A0A0A", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4" style={{ background: "linear-gradient(180deg, oklch(0.10 0 0) 0%, #0A0A0A 100%)" }}>
        <div className="flex items-center justify-between">
          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#B8FF00", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Bonjour
            </p>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#FFFFFF", letterSpacing: "0.04em", lineHeight: 1.1 }}>
              {client.prenom}
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.50 0 0)", marginTop: "2px" }}>
              {client.clinique}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full" style={{ background: "oklch(0.14 0 0)", border: "1px solid oklch(0.22 0 0)" }}>
              <Bell size={18} style={{ color: "oklch(0.70 0 0)" }} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: "#B8FF00" }} />
            </button>
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "#B8FF00", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "#0A0A0A", letterSpacing: "0.05em" }}>
              {client.avatar}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 space-y-5">
        {/* Prochain RDV — carte principale */}
        <div className="animate-slide-up">
          <div className="relative overflow-hidden rounded-lg p-5"
            style={{ background: "linear-gradient(135deg, oklch(0.14 0 0) 0%, oklch(0.12 0 0) 100%)", border: "1px solid oklch(0.22 0 0)", borderLeft: "3px solid #B8FF00" }}>
            {/* Countdown badge */}
            <div className="absolute top-4 right-4">
              <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full"
                style={{ border: "2px solid #B8FF00", background: "rgba(184,255,0,0.06)" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#B8FF00", lineHeight: 1 }}>
                  {nextAppointment.daysLeft}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", color: "#B8FF00", letterSpacing: "0.1em" }}>
                  JOURS
                </span>
              </div>
            </div>

            <div className="neon-badge inline-block mb-3">Prochain RDV</div>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#FFFFFF", letterSpacing: "0.04em", lineHeight: 1.2, maxWidth: "70%" }}>
              {nextAppointment.traitement}
            </h2>

            <div className="mt-3 space-y-1.5">
              <div className="flex items-center gap-2">
                <Clock size={13} style={{ color: "#B8FF00" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.75 0 0)" }}>
                  {nextAppointment.date} · {nextAppointment.heure}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={13} style={{ color: "#B8FF00" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.75 0 0)" }}>
                  {nextAppointment.praticien}
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Link href="/appointment">
                <button className="px-4 py-2 rounded text-xs font-semibold tracking-wider uppercase transition-all active:scale-95"
                  style={{ background: "#B8FF00", color: "#0A0A0A", fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                  Voir les détails
                </button>
              </Link>
              <button className="px-4 py-2 rounded text-xs transition-all active:scale-95"
                style={{ background: "transparent", color: "oklch(0.55 0 0)", border: "1px solid oklch(0.22 0 0)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem" }}
                onClick={() => {}}>
                Reporter
              </button>
            </div>
          </div>
        </div>

        {/* Alertes */}
        {alerts.length > 0 && (
          <div className="space-y-2 animate-slide-up animate-slide-up-delay-1">
            {alerts.map((alert, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg"
                style={{ background: alert.urgent ? "rgba(184,255,0,0.05)" : "oklch(0.12 0 0)", border: `1px solid ${alert.urgent ? "rgba(184,255,0,0.25)" : "oklch(0.18 0 0)"}` }}>
                <AlertCircle size={15} style={{ color: alert.urgent ? "#B8FF00" : "oklch(0.50 0 0)", marginTop: "1px", flexShrink: 0 }} />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: alert.urgent ? "oklch(0.85 0 0)" : "oklch(0.60 0 0)", lineHeight: 1.5 }}>
                  {alert.message}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Mes traitements en cours */}
        <div className="animate-slide-up animate-slide-up-delay-2">
          <div className="flex items-center justify-between mb-3">
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "0.06em" }}>
              MES TRAITEMENTS
            </h2>
            <Link href="/treatments">
              <button className="flex items-center gap-1" style={{ color: "#B8FF00", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem" }}>
                Voir tout <ChevronRight size={14} />
              </button>
            </Link>
          </div>

          <div className="space-y-3">
            {treatments.map((t, i) => {
              const progress = (t.seances / t.total) * 100;
              return (
                <div key={i} className="matignon-card p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#FFFFFF", fontWeight: 600 }}>
                        {t.nom}
                      </h3>
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "oklch(0.50 0 0)", marginTop: "2px" }}>
                        Prochaine séance : {t.prochaine}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
                      color: t.statut === "en cours" ? "#B8FF00" : "oklch(0.55 0 0)",
                      background: t.statut === "en cours" ? "rgba(184,255,0,0.08)" : "oklch(0.16 0 0)",
                      padding: "2px 8px", borderRadius: "2px", textTransform: "uppercase", letterSpacing: "0.08em"
                    }}>
                      {t.statut}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: "oklch(0.20 0 0)" }}>
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${progress}%`, background: "linear-gradient(90deg, #B8FF00, rgba(184,255,0,0.6))" }} />
                    </div>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "oklch(0.50 0 0)", whiteSpace: "nowrap" }}>
                      {t.seances}/{t.total} séances
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stat rapide */}
        <div className="animate-slide-up animate-slide-up-delay-3">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Séances\neffectuées", value: "12", icon: TrendingUp },
              { label: "Jours depuis\ndernier soin", value: "18", icon: Clock },
              { label: "Score\npeau", value: "8.4", icon: Zap },
            ].map(({ label, value, icon: Icon }, i) => (
              <div key={i} className="p-3 rounded-lg text-center"
                style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(0.18 0 0)" }}>
                <Icon size={16} style={{ color: "#B8FF00", margin: "0 auto 6px" }} />
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#FFFFFF", lineHeight: 1 }}>
                  {value}
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: "oklch(0.45 0 0)", marginTop: "3px", whiteSpace: "pre-line", lineHeight: 1.3 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommandation rapide */}
        <div className="animate-slide-up animate-slide-up-delay-4">
          <Link href="/recommendations">
            <div className="relative overflow-hidden rounded-lg p-4 cursor-pointer transition-all active:scale-98"
              style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(0.20 0 0)" }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="neon-badge inline-block mb-2">Recommandé pour vous</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "0.04em" }}>
                    DAILY SERUM 405
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0 0)", marginTop: "2px" }}>
                    Sérum antioxydant · Dr. Patricia Delarive
                  </p>
                </div>
                <ChevronRight size={20} style={{ color: "#B8FF00" }} />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
