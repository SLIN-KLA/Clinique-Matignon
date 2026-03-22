/*
 * MATIGNON — Recommendations
 * Design: Dark Medical Luxury
 * Contenu: conseils personnalisés, produits recommandés, rappels soins à domicile
 */
import { Sparkles, ShoppingBag, Sun, Droplets, Shield, ChevronRight, Star } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const PRODUCTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266302/ZXJt3AjXKDTezKpica76ko/matignon-skincare-products-abxqCZgM7btsp9AwYvScW7.webp";

const conseils = [
  {
    icon: Sun,
    titre: "Protection solaire",
    message: "Appliquez un SPF 50+ chaque matin, surtout après votre séance laser du 27 mars. Évitez l'exposition directe pendant 72h post-traitement.",
    priorite: "haute",
    categorie: "Post-traitement",
  },
  {
    icon: Droplets,
    titre: "Hydratation intensive",
    message: "Suite à votre Microneedling, utilisez le RESCUE SPRAY 103 matin et soir pendant 5 jours pour calmer et hydrater la peau.",
    priorite: "haute",
    categorie: "Soin post-séance",
  },
  {
    icon: Shield,
    titre: "Routine anti-âge",
    message: "Votre profil peau recommande l'ajout d'un sérum vitamine C le matin. Le DAILY SERUM 405 est idéal pour optimiser les résultats de vos traitements.",
    priorite: "normale",
    categorie: "Routine quotidienne",
  },
];

const produits = [
  {
    nom: "DAILY SERUM 405",
    description: "Sérum antioxydant à la vitamine C et niacinamide",
    prix: "CHF 95.–",
    note: 4.8,
    badge: "Recommandé",
    raison: "Complète votre HydraFacial",
  },
  {
    nom: "RESCUE SPRAY 103",
    description: "Spray fraîcheur anti-rougeur",
    prix: "CHF 45.–",
    note: 4.6,
    badge: "Post-laser",
    raison: "Essentiel après votre séance",
  },
  {
    nom: "NIGHT CREAM 554",
    description: "Densifie, répare, lisse & nourrit",
    prix: "CHF 125.–",
    note: 4.9,
    badge: "Best-seller",
    raison: "Amplifie les résultats Microneedling",
  },
  {
    nom: "EYE CREAM 334",
    description: "Contour des yeux ciblé",
    prix: "CHF 85.–",
    note: 4.7,
    badge: "Nouveau",
    raison: "Adapté à votre tranche d'âge",
  },
];

const prochainRetour = {
  traitement: "HydraFacial Super Boost",
  dateRecommandee: "Juin 2026",
  intervalle: "3 mois",
  raison: "Maintien de l'éclat et de l'hydratation optimale",
};

export default function Recommendations() {
  return (
    <div className="phone-frame" style={{ background: "#0A0A0A", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-5">
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#B8FF00", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Personnalisé pour vous
        </p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "#FFFFFF", letterSpacing: "0.04em" }}>
          MES CONSEILS
        </h1>
      </div>

      <div className="px-5 space-y-6">
        {/* Prochain retour recommandé */}
        <div className="relative overflow-hidden rounded-lg p-5"
          style={{ background: "linear-gradient(135deg, rgba(184,255,0,0.08) 0%, oklch(0.12 0 0) 60%)", border: "1px solid rgba(184,255,0,0.20)" }}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(184,255,0,0.12)", border: "1px solid rgba(184,255,0,0.30)" }}>
              <Sparkles size={18} style={{ color: "#B8FF00" }} />
            </div>
            <div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#B8FF00", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Prochain retour recommandé
              </p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#FFFFFF", letterSpacing: "0.04em", marginTop: "2px" }}>
                {prochainRetour.traitement}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: "#B8FF00" }}>
                  {prochainRetour.dateRecommandee}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "oklch(0.50 0 0)" }}>
                  · tous les {prochainRetour.intervalle}
                </span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0 0)", marginTop: "4px", lineHeight: 1.5 }}>
                {prochainRetour.raison}
              </p>
            </div>
          </div>
          <button className="mt-4 w-full py-2.5 rounded text-sm font-semibold tracking-wider transition-all active:scale-95"
            style={{ background: "#B8FF00", color: "#0A0A0A", fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.9rem", letterSpacing: "0.1em" }}>
            Réserver maintenant
          </button>
        </div>

        {/* Conseils personnalisés */}
        <div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "0.06em", marginBottom: "12px" }}>
            CONSEILS PERSONNALISÉS
          </h2>
          <div className="space-y-3">
            {conseils.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="p-4 rounded-lg"
                  style={{
                    background: "oklch(0.12 0 0)",
                    border: `1px solid ${c.priorite === "haute" ? "rgba(184,255,0,0.20)" : "oklch(0.18 0 0)"}`,
                    borderLeft: `3px solid ${c.priorite === "haute" ? "#B8FF00" : "oklch(0.28 0 0)"}`
                  }}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: c.priorite === "haute" ? "rgba(184,255,0,0.10)" : "oklch(0.16 0 0)" }}>
                      <Icon size={15} style={{ color: c.priorite === "haute" ? "#B8FF00" : "oklch(0.50 0 0)" }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#FFFFFF", fontWeight: 600 }}>
                          {c.titre}
                        </h3>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", color: c.priorite === "haute" ? "#B8FF00" : "oklch(0.45 0 0)", background: c.priorite === "haute" ? "rgba(184,255,0,0.08)" : "oklch(0.16 0 0)", padding: "1px 5px", borderRadius: "2px", textTransform: "uppercase" }}>
                          {c.categorie}
                        </span>
                      </div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.58 0 0)", lineHeight: 1.6 }}>
                        {c.message}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Produits recommandés */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "0.06em" }}>
              PRODUITS RECOMMANDÉS
            </h2>
            <button className="flex items-center gap-1" style={{ color: "#B8FF00", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem" }}>
              Shop <ChevronRight size={14} />
            </button>
          </div>

          {/* Products hero */}
          <div className="rounded-lg overflow-hidden mb-3" style={{ height: "120px" }}>
            <img src={PRODUCTS_IMG} alt="Produits Dr. Patricia Delarive" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-2">
            {produits.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg"
                style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(0.18 0 0)" }}>
                <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.16 0 0)", border: "1px solid oklch(0.22 0 0)" }}>
                  <ShoppingBag size={16} style={{ color: "#B8FF00" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#FFFFFF", fontWeight: 500 }}>
                      {p.nom}
                    </h3>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", color: "#0A0A0A", background: "#B8FF00", padding: "1px 5px", borderRadius: "2px", textTransform: "uppercase", flexShrink: 0 }}>
                      {p.badge}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "oklch(0.45 0 0)", marginTop: "1px" }}>
                    {p.raison}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={10} style={{ color: "#B8FF00", fill: "#B8FF00" }} />
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "oklch(0.55 0 0)" }}>{p.note}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 500 }}>{p.prix}</p>
                  <button className="mt-1 px-2 py-1 rounded text-xs transition-all active:scale-95"
                    style={{ background: "rgba(184,255,0,0.10)", color: "#B8FF00", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", border: "1px solid rgba(184,255,0,0.20)" }}>
                    Acheter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
