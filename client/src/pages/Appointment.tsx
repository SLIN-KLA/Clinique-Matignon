/*
 * MATIGNON — Appointment
 * Design: Editorial Aesthetic — RDV, instructions, historique
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
    <div className="phone-frame" style={{ background: "#fbf9f7", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <div className="px-8 pt-14 pb-6">
        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", fontWeight: 600 }}>
          Agenda
        </p>
        <h1 style={{ fontFamily: "'Noto Serif', serif", fontSize: "2rem", color: "#313331", letterSpacing: "-0.01em", fontWeight: 700 }}>
          Mes rendez-vous
        </h1>
      </div>

      <div className="px-8 space-y-5">
        {/* Prendre un nouveau RDV */}
        <button
          className="gradient-button w-full py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", letterSpacing: "0.05rem", boxShadow: "0px 20px 40px rgba(117, 91, 46, 0.12)" }}
          onClick={() => toast.success("Redirection vers la prise de RDV en ligne")}>
          <Calendar size={18} />
          PRENDRE UN RENDEZ-VOUS
        </button>

        {/* Appeler la clinique */}
        <button
          className="w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{ background: "#f5f3f1", color: "#755b2e", fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem", fontWeight: 600 }}
          onClick={() => toast.info("Appel au 0848 801 108")}>
          <Phone size={15} />
          Appeler la clinique — 0848 801 108
        </button>

        {/* Prochains RDV */}
        <div>
          <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.1rem", color: "#313331", letterSpacing: "-0.01em", marginBottom: "12px", fontWeight: 700 }}>
            Prochains rendez-vous
          </h2>

          <div className="space-y-4">
            {upcomingAppointments.map((appt) => (
              <div key={appt.id} className="editorial-card rounded-lg overflow-hidden" style={{ background: "#ffffff" }}>
                {/* RDV header */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#ffffff", background: "#755b2e", padding: "3px 8px", borderRadius: "0.25rem", textTransform: "uppercase", fontWeight: 600 }}>
                        Confirmé
                      </span>
                      <h3 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.15rem", color: "#313331", letterSpacing: "-0.01em", marginTop: "6px", lineHeight: 1.2, fontWeight: 700 }}>
                        {appt.traitement}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} style={{ color: "#755b2e" }} />
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331" }}>
                        {appt.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={13} style={{ color: "#755b2e" }} />
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331" }}>
                        {appt.heure} · {appt.duree}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={13} style={{ color: "#755b2e" }} />
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331" }}>
                        {appt.praticien}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} style={{ color: "#755b2e" }} />
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331" }}>
                        {appt.clinique}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div style={{ borderTop: "1px solid rgba(49, 51, 49, 0.08)" }}>
                  <div className="p-4">
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#5f5f5f", letterSpacing: "0.05rem", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
                      Instructions avant la séance
                    </p>
                    <div className="space-y-2">
                      {appt.instructions.avant.map((instr, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} style={{ color: "#755b2e", marginTop: "2px", flexShrink: 0 }} />
                          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#313331", lineHeight: 1.5 }}>
                            {instr}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4" style={{ borderTop: "1px solid rgba(49, 51, 49, 0.08)", background: "#f5f3f1" }}>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
                      Soins post-séance
                    </p>
                    <div className="space-y-2">
                      {appt.instructions.apres.map((instr, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <AlertCircle size={13} style={{ color: "#755b2e", marginTop: "2px", flexShrink: 0 }} />
                          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#313331", lineHeight: 1.5 }}>
                            {instr}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-4 pb-4 flex gap-2" style={{ borderTop: "1px solid rgba(49, 51, 49, 0.08)", paddingTop: "12px" }}>
                  <button className="flex-1 py-2 rounded text-xs transition-all active:scale-95"
                    style={{ background: "#f5f3f1", color: "#755b2e", fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", fontWeight: 600 }}
                    onClick={() => toast.info("Fonctionnalité de report disponible prochainement")}>
                    Reporter
                  </button>
                  <button className="flex-1 py-2 rounded text-xs transition-all active:scale-95"
                    style={{ background: "#f5f3f1", color: "#755b2e", fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", fontWeight: 600 }}
                    onClick={() => toast.error("Êtes-vous sûr de vouloir annuler ?")}>
                    Annuler
                  </button>
                  <button className="flex-1 py-2 rounded text-xs transition-all active:scale-95"
                    style={{ background: "#755b2e", color: "#ffffff", fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", fontWeight: 600 }}
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
          <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.1rem", color: "#313331", letterSpacing: "-0.01em", marginBottom: "10px", fontWeight: 700 }}>
            Historique
          </h2>
          <div className="rounded-lg overflow-hidden" style={{ background: "#ffffff" }}>
            {pastAppointments.map((p, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3.5 transition-all active:bg-gray-50"
                style={{ borderTop: i > 0 ? "1px solid rgba(49, 51, 49, 0.08)" : "none" }}>
                <CheckCircle2 size={15} style={{ color: "#b1b2b0", flexShrink: 0 }} />
                <div className="flex-1">
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331", fontWeight: 600 }}>{p.traitement}</p>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f", marginTop: "1px" }}>{p.date}</p>
                </div>
                <ChevronRight size={14} style={{ color: "#b1b2b0" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
