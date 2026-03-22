/*
 * MATIGNON — Profile
 * Design: Editorial Aesthetic — profil client, infos, paramètres
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
    <div className="phone-frame" style={{ background: "#fbf9f7", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header with background */}
      <div className="relative" style={{ height: "200px" }}>
        <img src={PROFILE_BG} alt="Profile background" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(251,249,247,0.3) 0%, #fbf9f7 100%)" }} />

        {/* Avatar & name */}
        <div className="absolute bottom-0 left-6 right-6 pb-4">
          <div className="flex items-end gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#755b2e", fontFamily: "'Noto Serif', serif", fontSize: "1.4rem", color: "#ffffff", fontWeight: 700, border: "3px solid #fbf9f7" }}>
              {client.prenom[0]}{client.nom[0]}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.7rem", color: "#313331", letterSpacing: "-0.01em", lineHeight: 1, fontWeight: 700 }}>
                {client.prenom} {client.nom}
              </h1>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", fontWeight: 600 }}>
                {client.membre}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 space-y-5 mt-2">
        {/* Profil peau */}
        <div className="editorial-card p-4" style={{ background: "#ffffff" }}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", marginBottom: "10px", fontWeight: 600 }}>
            Profil peau
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f" }}>Type de peau</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331", fontWeight: 600, marginTop: "2px" }}>{client.typePeau}</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f" }}>Allergies</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", color: "#313331", fontWeight: 600, marginTop: "2px" }}>{client.allergies}</p>
            </div>
          </div>
          <div className="mt-3">
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f", marginBottom: "6px" }}>Objectifs</p>
            <div className="flex flex-wrap gap-2">
              {client.objectifs.map((obj, i) => (
                <span key={i} style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#755b2e", background: "#f5f3f1", padding: "3px 8px", borderRadius: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05rem", fontWeight: 600 }}>
                  {obj}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Infos contact */}
        <div className="editorial-card p-4" style={{ background: "#ffffff" }}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#5f5f5f", letterSpacing: "0.05rem", textTransform: "uppercase", marginBottom: "10px", fontWeight: 600 }}>
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
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", color: "#5f5f5f" }}>{label}</span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#313331", fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu sections */}
        {menuSections.map((section, si) => (
          <div key={si}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#5f5f5f", letterSpacing: "0.05rem", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
              {section.titre}
            </p>
            <div className="rounded-lg overflow-hidden" style={{ background: "#ffffff" }}>
              {section.items.map((item, ii) => {
                const Icon = item.icon;
                return (
                  <button key={ii} className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all active:bg-gray-50"
                    style={{ borderTop: ii > 0 ? "1px solid rgba(49, 51, 49, 0.08)" : "none" }}>
                    <Icon size={16} style={{ color: (item as any).danger ? "#c41c3b" : "#755b2e", flexShrink: 0 }} />
                    <span className="flex-1" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem", color: (item as any).danger ? "#c41c3b" : "#313331", fontWeight: 500 }}>
                      {item.label}
                    </span>
                    {(item as any).badge && (
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#755b2e", background: "#f5f3f1", padding: "2px 6px", borderRadius: "0.25rem", fontWeight: 600 }}>
                        {(item as any).badge}
                      </span>
                    )}
                    {!(item as any).danger && <ChevronRight size={14} style={{ color: "#b1b2b0" }} />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Version */}
        <p className="text-center pb-2" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#b1b2b0", letterSpacing: "0.05rem", textTransform: "uppercase" }}>
          Matignon App v1.0 · Médecine Esthétique
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
