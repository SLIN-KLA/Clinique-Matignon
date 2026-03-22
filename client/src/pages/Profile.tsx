/*
 * MATIGNON — Profile
 * Design: Dark Medical Luxury
 * Contenu: profil client, type de peau, historique, paramètres notifications
 */
import { Bell, ChevronRight, Edit3, LogOut, Shield, FileText, Heart, Settings } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const PROFILE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266302/ZXJt3AjXKDTezKpica76ko/matignon-profile-bg-Z9ziPDphRbRSor4iT6i2uk.webp";

const client = {
  prenom: "Sophie",
  nom: "Martin",
  email: "sophie.martin@email.com",
  telephone: "+41 79 123 45 67",
  dateNaissance: "15 mars 1988",
  clinique: "Lausanne — Rue de Bourg",
  membre: "Depuis janvier 2024",
  typePeau: "Mixte à tendance sèche",
  objectifs: ["Anti-âge", "Éclat du teint", "Épilation définitive"],
  allergies: "Aucune connue",
};

const menuSections = [
  {
    titre: "Mon compte",
    items: [
      { icon: Edit3, label: "Modifier mes informations", action: "edit" },
      { icon: Bell, label: "Notifications & rappels", action: "notif", badge: "3 actives" },
      { icon: Heart, label: "Mes objectifs beauté", action: "goals" },
    ],
  },
  {
    titre: "Médical",
    items: [
      { icon: FileText, label: "Mon dossier médical", action: "dossier" },
      { icon: Shield, label: "Confidentialité & données", action: "privacy" },
    ],
  },
  {
    titre: "Application",
    items: [
      { icon: Settings, label: "Préférences", action: "settings" },
      { icon: LogOut, label: "Se déconnecter", action: "logout", danger: true },
    ],
  },
];

export default function Profile() {
  return (
    <div className="phone-frame" style={{ background: "#0A0A0A", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header with background */}
      <div className="relative" style={{ height: "220px" }}>
        <img src={PROFILE_BG} alt="Profile background" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, #0A0A0A 100%)" }} />

        {/* Avatar & name */}
        <div className="absolute bottom-0 left-5 right-5 pb-4">
          <div className="flex items-end gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#B8FF00", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#0A0A0A", letterSpacing: "0.05em", border: "3px solid #0A0A0A" }}>
              {client.prenom[0]}{client.nom[0]}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#FFFFFF", letterSpacing: "0.04em", lineHeight: 1 }}>
                {client.prenom} {client.nom}
              </h1>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "#B8FF00", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {client.membre}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 space-y-5 mt-2">
        {/* Profil peau */}
        <div className="p-4 rounded-lg" style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(0.20 0 0)", borderLeft: "3px solid #B8FF00" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#B8FF00", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            Profil peau
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.45 0 0)" }}>Type de peau</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#FFFFFF", fontWeight: 500, marginTop: "2px" }}>{client.typePeau}</p>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.45 0 0)" }}>Allergies</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#FFFFFF", fontWeight: 500, marginTop: "2px" }}>{client.allergies}</p>
            </div>
          </div>
          <div className="mt-3">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.45 0 0)", marginBottom: "6px" }}>Objectifs</p>
            <div className="flex flex-wrap gap-2">
              {client.objectifs.map((obj, i) => (
                <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "#B8FF00", background: "rgba(184,255,0,0.08)", border: "1px solid rgba(184,255,0,0.20)", padding: "3px 8px", borderRadius: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {obj}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Infos contact */}
        <div className="p-4 rounded-lg" style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(0.18 0 0)" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "oklch(0.40 0 0)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
            Coordonnées
          </p>
          <div className="space-y-3">
            {[
              { label: "Email", value: client.email },
              { label: "Téléphone", value: client.telephone },
              { label: "Date de naissance", value: client.dateNaissance },
              { label: "Clinique habituelle", value: client.clinique },
            ].map(({ label, value }, i) => (
              <div key={i} className="flex items-center justify-between">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.45 0 0)" }}>{label}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu sections */}
        {menuSections.map((section, si) => (
          <div key={si}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "oklch(0.40 0 0)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
              {section.titre}
            </p>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid oklch(0.18 0 0)" }}>
              {section.items.map((item, ii) => {
                const Icon = item.icon;
                return (
                  <button key={ii} className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all active:bg-white/5"
                    style={{ borderBottom: ii < section.items.length - 1 ? "1px solid oklch(0.15 0 0)" : "none", background: "oklch(0.12 0 0)" }}>
                    <Icon size={16} style={{ color: (item as any).danger ? "oklch(0.65 0.22 25)" : "oklch(0.55 0 0)", flexShrink: 0 }} />
                    <span className="flex-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: (item as any).danger ? "oklch(0.65 0.22 25)" : "#FFFFFF", fontWeight: 400 }}>
                      {item.label}
                    </span>
                    {(item as any).badge && (
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#0A0A0A", background: "#B8FF00", padding: "2px 6px", borderRadius: "2px" }}>
                        {(item as any).badge}
                      </span>
                    )}
                    {!(item as any).danger && <ChevronRight size={14} style={{ color: "oklch(0.35 0 0)" }} />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Version */}
        <p className="text-center pb-2" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "oklch(0.28 0 0)", letterSpacing: "0.08em" }}>
          MATIGNON APP v1.0 · MÉDECINE ESTHÉTIQUE
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
