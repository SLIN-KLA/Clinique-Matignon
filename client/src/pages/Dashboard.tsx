/*
 * MATIGNON — Dashboard
 * Design: Editorial Aesthetic — tonal layering, no borders, asymmetric layout
 */
import { Bell, ChevronRight, Clock, Zap, TrendingUp, AlertCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Link } from "wouter";

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
    <div className="phone-frame" style={{ background: "#fbf9f7", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header — asymmetric */}
      <div className="px-8 pt-14 pb-6">
        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", fontWeight: 600 }}>
          Bienvenue
        </p>
        <h1 style={{ fontFamily: "'Noto Serif', serif", fontSize: "2rem", color: "#313331", letterSpacing: "-0.01em", lineHeight: 1.1, fontWeight: 700, marginTop: "4px" }}>
          {client.prenom}
        </h1>
        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#5f5f5f", marginTop: "4px" }}>
          {client.clinique}
        </p>

        {/* Header icons — right aligned */}
        <div className="absolute top-14 right-6 flex items-center gap-3">
          <button className="relative p-2.5 rounded-full" style={{ background: "#f5f3f1" }}>
            <Bell size={18} style={{ color: "#5f5f5f" }} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: "#755b2e" }} />
          </button>
          <div className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "#755b2e", fontFamily: "'Noto Serif', serif", fontSize: "0.9rem", color: "#ffffff", fontWeight: 700 }}>
            {client.avatar}
          </div>
        </div>
      </div>

      <div className="px-8 space-y-6">
        {/* Prochain RDV — carte principale */}
        <div className="animate-slide-up">
          <div className="editorial-card p-6"
            style={{ background: "#ffffff" }}>
            {/* Countdown badge */}
            <div className="absolute top-6 right-6">
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full"
                style={{ background: "#f5f3f1" }}>
                <span style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.6rem", color: "#755b2e", lineHeight: 1, fontWeight: 700 }}>
                  {nextAppointment.daysLeft}
                </span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.6rem", color: "#755b2e", letterSpacing: "0.05rem", fontWeight: 600, marginTop: "2px" }}>
                  JOURS
                </span>
              </div>
            </div>

            <div className="champagne-badge inline-block mb-3">Prochain RDV</div>

            <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.5rem", color: "#313331", letterSpacing: "-0.01em", lineHeight: 1.2, maxWidth: "70%", fontWeight: 700 }}>
              {nextAppointment.traitement}
            </h2>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Clock size={14} style={{ color: "#755b2e" }} />
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331" }}>
                  {nextAppointment.date} · {nextAppointment.heure}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={14} style={{ color: "#755b2e" }} />
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331" }}>
                  {nextAppointment.praticien}
                </span>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <Link href="/appointment">
                <button className="gradient-button px-5 py-2.5 rounded text-xs font-semibold tracking-wide uppercase transition-all active:scale-95"
                  style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem" }}>
                  Voir les détails
                </button>
              </Link>
              <button className="ghost-button px-5 py-2.5 rounded text-xs transition-all active:scale-95"
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", borderBottom: "2px solid #755b2e" }}
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
              <div key={i} className="p-4 rounded-lg"
                style={{ background: alert.urgent ? "#f5f3f1" : "#ffffff" }}>
                <div className="flex items-start gap-3">
                  <AlertCircle size={15} style={{ color: alert.urgent ? "#755b2e" : "#5f5f5f", marginTop: "2px", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#313331", lineHeight: 1.6 }}>
                    {alert.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mes traitements en cours */}
        <div className="animate-slide-up animate-slide-up-delay-2">
          <div className="flex items-center justify-between mb-4">
            <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.1rem", color: "#313331", letterSpacing: "-0.01em", fontWeight: 700 }}>
              Mes traitements
            </h2>
            <Link href="/treatments">
              <button className="flex items-center gap-1" style={{ color: "#755b2e", fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", fontWeight: 600 }}>
                Voir tout <ChevronRight size={14} />
              </button>
            </Link>
          </div>

          <div className="space-y-3">
            {treatments.map((t, i) => {
              const progress = (t.seances / t.total) * 100;
              return (
                <div key={i} className="editorial-card p-4" style={{ background: "#ffffff" }}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem", color: "#313331", fontWeight: 600 }}>
                        {t.nom}
                      </h3>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f", marginTop: "2px" }}>
                        Prochaine séance : {t.prochaine}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem",
                      color: t.statut === "en cours" ? "#755b2e" : "#5f5f5f",
                      background: t.statut === "en cours" ? "#f5f3f1" : "#ffffff",
                      padding: "3px 8px", borderRadius: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05rem", fontWeight: 600
                    }}>
                      {t.statut}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: "#f5f3f1" }}>
                      <div className="h-full rounded-full progress-champagne transition-all duration-700"
                        style={{ width: `${progress}%` }} />
                    </div>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f", whiteSpace: "nowrap", fontWeight: 500 }}>
                      {t.seances}/{t.total}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats rapides */}
        <div className="animate-slide-up animate-slide-up-delay-3">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Séances\neffectuées", value: "12", icon: TrendingUp },
              { label: "Jours depuis\ndernier soin", value: "18", icon: Clock },
              { label: "Score\npeau", value: "8.4", icon: Zap },
            ].map(({ label, value, icon: Icon }, i) => (
              <div key={i} className="editorial-card p-3 text-center" style={{ background: "#ffffff" }}>
                <Icon size={16} style={{ color: "#755b2e", margin: "0 auto 6px" }} />
                <p style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.4rem", color: "#313331", lineHeight: 1, fontWeight: 700 }}>
                  {value}
                </p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.62rem", color: "#5f5f5f", marginTop: "3px", whiteSpace: "pre-line", lineHeight: 1.3, fontWeight: 500 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommandation rapide */}
        <div className="animate-slide-up animate-slide-up-delay-4">
          <Link href="/recommendations">
            <div className="editorial-card p-4 cursor-pointer transition-all active:scale-98" style={{ background: "#ffffff" }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="champagne-badge inline-block mb-2">Recommandé</div>
                  <h3 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.1rem", color: "#313331", letterSpacing: "-0.01em", fontWeight: 700 }}>
                    Daily Serum 405
                  </h3>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#5f5f5f", marginTop: "2px" }}>
                    Sérum antioxydant · Dr. Patricia Delarive
                  </p>
                </div>
                <ChevronRight size={20} style={{ color: "#755b2e" }} />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
