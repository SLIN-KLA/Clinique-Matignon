/*
 * MATIGNON — Appointment
 * Design: Dark Medical Luxury
 * Contenu: prochain RDV détaillé, instructions pré/post, historique des RDV, prise de RDV
 */
import { Calendar, Clock, MapPin, User, ChevronRight, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { toast } from "sonner";

const upcomingAppointments = [
  {
    id: 1,
    traitement: "HydraFacial Super Boost",
    date: "Jeudi 27 mars 2026",
    heure: "14h30",
    duree: "60 min",
    praticien: "Dr. Patricia Delarive",
    clinique: "Lausanne — Rue de Bourg 14",
    statut: "confirmé",
    instructions: {
      avant: [
        "Ne pas appliquer de maquillage le jour J",
        "Éviter l'exposition solaire 48h avant",
        "Arriver 10 min en avance pour l'accueil",
        "Boire suffisamment d'eau la veille",
      ],
      apres: [
        "Appliquer le RESCUE SPRAY 103 matin et soir",
        "SPF 50+ obligatoire pendant 72h",
        "Éviter le sauna et sport intense 24h",
        "Pas de gommage pendant 1 semaine",
      ],
    },
  },
  {
    id: 2,
    traitement: "Épilation Permanente — Séance 6",
    date: "Jeudi 27 mars 2026",
    heure: "16h00",
    duree: "45 min",
    praticien: "Dr. Patricia Delarive",
    clinique: "Lausanne — Rue de Bourg 14",
    statut: "confirmé",
    instructions: {
      avant: [
        "Raser la zone 24h avant (ne pas épiler à la cire)",
        "Peau propre et sans crème le jour J",
        "Éviter l'exposition solaire 2 semaines avant",
      ],
      apres: [
        "Éviter la chaleur (sauna, bain chaud) 48h",
        "SPF 50+ sur les zones traitées",
        "Pas de déodorant si zone aisselles pendant 24h",
      ],
    },
  },
];

const pastAppointments = [
  { traitement: "HydraFacial Super Boost", date: "15 janv. 2026", statut: "effectué" },
  { traitement: "Microneedling — Séance 2", date: "12 déc. 2025", statut: "effectué" },
  { traitement: "Épilation Permanente — Séance 5", date: "30 oct. 2025", statut: "effectué" },
  { traitement: "HydraFacial", date: "10 nov. 2025", statut: "effectué" },
];

export default function Appointment() {
  return (
    <div className="phone-frame" style={{ background: "#0A0A0A", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-5">
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#B8FF00", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Agenda
        </p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "#FFFFFF", letterSpacing: "0.04em" }}>
          MES RENDEZ-VOUS
        </h1>
      </div>

      <div className="px-5 space-y-5">
        {/* Prendre un nouveau RDV */}
        <button
          className="w-full py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{ background: "#B8FF00", color: "#0A0A0A", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.12em", boxShadow: "0 0 25px rgba(184,255,0,0.20)" }}
          onClick={() => toast.success("Redirection vers la prise de RDV en ligne")}>
          <Calendar size={18} />
          PRENDRE UN RENDEZ-VOUS
        </button>

        {/* Appeler la clinique */}
        <button
          className="w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{ background: "transparent", color: "oklch(0.70 0 0)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", border: "1px solid oklch(0.22 0 0)" }}
          onClick={() => toast.info("Appel au 0848 801 108")}>
          <Phone size={15} />
          Appeler la clinique — 0848 801 108
        </button>

        {/* Prochains RDV */}
        <div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "0.06em", marginBottom: "12px" }}>
            PROCHAINS RDV
          </h2>

          <div className="space-y-4">
            {upcomingAppointments.map((appt) => (
              <div key={appt.id} className="rounded-lg overflow-hidden" style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(0.20 0 0)", borderLeft: "3px solid #B8FF00" }}>
                {/* RDV header */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#0A0A0A", background: "#B8FF00", padding: "2px 6px", borderRadius: "2px", textTransform: "uppercase" }}>
                        Confirmé
                      </span>
                      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.15rem", color: "#FFFFFF", letterSpacing: "0.04em", marginTop: "6px", lineHeight: 1.2 }}>
                        {appt.traitement}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} style={{ color: "#B8FF00" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.75 0 0)" }}>
                        {appt.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={13} style={{ color: "#B8FF00" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.75 0 0)" }}>
                        {appt.heure} · {appt.duree}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={13} style={{ color: "#B8FF00" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.75 0 0)" }}>
                        {appt.praticien}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} style={{ color: "#B8FF00" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.75 0 0)" }}>
                        {appt.clinique}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div style={{ borderTop: "1px solid oklch(0.18 0 0)" }}>
                  <div className="p-4">
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "oklch(0.40 0 0)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                      Instructions avant la séance
                    </p>
                    <div className="space-y-2">
                      {appt.instructions.avant.map((instr, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} style={{ color: "#B8FF00", marginTop: "2px", flexShrink: 0 }} />
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.65 0 0)", lineHeight: 1.5 }}>
                            {instr}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4" style={{ borderTop: "1px solid oklch(0.15 0 0)", background: "rgba(184,255,0,0.02)" }}>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#B8FF00", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                      Soins post-séance
                    </p>
                    <div className="space-y-2">
                      {appt.instructions.apres.map((instr, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <AlertCircle size={13} style={{ color: "#B8FF00", marginTop: "2px", flexShrink: 0 }} />
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.65 0 0)", lineHeight: 1.5 }}>
                            {instr}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-4 pb-4 flex gap-2" style={{ borderTop: "1px solid oklch(0.15 0 0)", paddingTop: "12px" }}>
                  <button className="flex-1 py-2 rounded text-xs transition-all active:scale-95"
                    style={{ background: "oklch(0.16 0 0)", color: "oklch(0.60 0 0)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", border: "1px solid oklch(0.22 0 0)" }}
                    onClick={() => toast.info("Fonctionnalité de report disponible prochainement")}>
                    Reporter
                  </button>
                  <button className="flex-1 py-2 rounded text-xs transition-all active:scale-95"
                    style={{ background: "oklch(0.16 0 0)", color: "oklch(0.60 0 0)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", border: "1px solid oklch(0.22 0 0)" }}
                    onClick={() => toast.error("Êtes-vous sûr de vouloir annuler ?")}>
                    Annuler
                  </button>
                  <button className="flex-1 py-2 rounded text-xs transition-all active:scale-95"
                    style={{ background: "rgba(184,255,0,0.10)", color: "#B8FF00", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", border: "1px solid rgba(184,255,0,0.20)" }}
                    onClick={() => toast.success("Rappel ajouté à votre calendrier")}>
                    Rappel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historique */}
        <div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "0.06em", marginBottom: "10px" }}>
            HISTORIQUE
          </h2>
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid oklch(0.18 0 0)" }}>
            {pastAppointments.map((p, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 transition-all active:bg-white/5"
                style={{ borderBottom: i < pastAppointments.length - 1 ? "1px solid oklch(0.14 0 0)" : "none", background: "oklch(0.12 0 0)" }}>
                <CheckCircle2 size={15} style={{ color: "oklch(0.35 0 0)", flexShrink: 0 }} />
                <div className="flex-1">
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.65 0 0)", fontWeight: 500 }}>{p.traitement}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "oklch(0.38 0 0)", marginTop: "1px" }}>{p.date}</p>
                </div>
                <ChevronRight size={14} style={{ color: "oklch(0.30 0 0)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
