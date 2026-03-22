/*
 * MATIGNON — Recommendations
 * Design: Editorial Aesthetic — conseils, produits, palette champagne
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
    <div className="phone-frame" style={{ background: "#fbf9f7", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <div className="px-8 pt-14 pb-6">
        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", fontWeight: 600 }}>
          Personnalisé pour vous
        </p>
        <h1 style={{ fontFamily: "'Noto Serif', serif", fontSize: "2rem", color: "#313331", letterSpacing: "-0.01em", fontWeight: 700 }}>
          Mes conseils
        </h1>
      </div>

      <div className="px-8 space-y-6">
        {/* Prochain retour recommandé */}
        <div className="editorial-card p-5" style={{ background: "#ffffff" }}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#f5f3f1" }}>
              <Sparkles size={18} style={{ color: "#755b2e" }} />
            </div>
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", fontWeight: 600 }}>
                Prochain retour recommandé
              </p>
              <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.3rem", color: "#313331", letterSpacing: "-0.01em", marginTop: "4px", fontWeight: 700 }}>
                {prochainRetour.traitement}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.5rem", color: "#755b2e", fontWeight: 700 }}>
                  {prochainRetour.dateRecommandee}
                </span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f" }}>
                  · tous les {prochainRetour.intervalle}
                </span>
              </div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#5f5f5f", marginTop: "4px", lineHeight: 1.6 }}>
                {prochainRetour.raison}
              </p>
            </div>
          </div>
          <button className="gradient-button mt-4 w-full py-2.5 rounded text-sm font-semibold tracking-wide transition-all active:scale-95"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem" }}>
            Réserver maintenant
          </button>
        </div>

        {/* Conseils personnalisés */}
        <div>
          <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.1rem", color: "#313331", letterSpacing: "-0.01em", marginBottom: "12px", fontWeight: 700 }}>
            Conseils personnalisés
          </h2>
          <div className="space-y-3">
            {conseils.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="editorial-card p-4" style={{ background: "#ffffff" }}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: c.priorite === "haute" ? "#f5f3f1" : "#ffffff" }}>
                      <Icon size={15} style={{ color: c.priorite === "haute" ? "#755b2e" : "#5f5f5f" }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem", color: "#313331", fontWeight: 600 }}>
                          {c.titre}
                        </h3>
                        <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.6rem", color: c.priorite === "haute" ? "#755b2e" : "#5f5f5f", background: c.priorite === "haute" ? "#f5f3f1" : "#ffffff", padding: "2px 6px", borderRadius: "0.25rem", textTransform: "uppercase", fontWeight: 600 }}>
                          {c.categorie}
                        </span>
                      </div>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#5f5f5f", lineHeight: 1.6 }}>
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
          <div className="flex items-center justify-between mb-4">
            <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: "1.1rem", color: "#313331", letterSpacing: "-0.01em", fontWeight: 700 }}>
              Produits recommandés
            </h2>
            <button className="flex items-center gap-1" style={{ color: "#755b2e", fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", fontWeight: 600 }}>
              Shop <ChevronRight size={14} />
            </button>
          </div>

          {/* Products hero */}
          <div className="rounded-lg overflow-hidden mb-3" style={{ height: "120px" }}>
            <img src={PRODUCTS_IMG} alt="Produits Dr. Patricia Delarive" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-2">
            {produits.map((p, i) => (
              <div key={i} className="editorial-card flex items-center gap-3 p-3" style={{ background: "#ffffff" }}>
                <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "#f5f3f1" }}>
                  <ShoppingBag size={16} style={{ color: "#755b2e" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#313331", fontWeight: 600 }}>
                      {p.nom}
                    </h3>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.6rem", color: "#ffffff", background: "#755b2e", padding: "2px 6px", borderRadius: "0.25rem", textTransform: "uppercase", flexShrink: 0, fontWeight: 600 }}>
                      {p.badge}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#5f5f5f", marginTop: "1px" }}>
                    {p.raison}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={10} style={{ color: "#755b2e", fill: "#755b2e" }} />
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#5f5f5f", fontWeight: 500 }}>{p.note}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#313331", fontWeight: 600 }}>{p.prix}</p>
                  <button className="mt-1 px-2 py-1 rounded text-xs transition-all active:scale-95"
                    style={{ background: "#f5f3f1", color: "#755b2e", fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", fontWeight: 600 }}>
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
