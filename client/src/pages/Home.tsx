/*
 * MATIGNON — Home (Splash / Login)
 * Design: Editorial Aesthetic — The Clinical Atelier
 * Hero image avec overlay soft, typographie Noto Serif, palette champagne
 */
import { useLocation } from "wouter";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266302/ZXJt3AjXKDTezKpica76ko/matignon-hero-bg-iFg5ajUqgXXB9onV7mjWSG.webp";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="phone-frame flex flex-col" style={{ background: "#fbf9f7", minHeight: "100vh" }}>
      {/* Hero Image */}
      <div className="relative flex-1" style={{ minHeight: "65vh" }}>
        <img
          src={HERO_IMG}
          alt="Matignon Médecine Esthétique"
          className="w-full h-full object-cover object-top"
          style={{ minHeight: "65vh" }}
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(251,249,247,0.15) 0%, rgba(251,249,247,0.7) 60%, #fbf9f7 100%)" }} />

        {/* Logo overlay — asymmetric positioning */}
        <div className="absolute top-14 left-6">
          <div className="flex flex-col gap-1">
            <h1 style={{ fontFamily: "'Noto Serif', serif", fontSize: "2.2rem", color: "#313331", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              MATIGNON
            </h1>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#755b2e", letterSpacing: "0.05rem", textTransform: "uppercase", fontWeight: 600 }}>
              Médecine Esthétique
            </p>
          </div>
        </div>
      </div>

      {/* Bottom content — tonal layering */}
      <div className="px-8 pb-12 pt-6 animate-slide-up" style={{ background: "#fbf9f7" }}>
        <div style={{ height: "12px" }} />

        <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: "2.4rem", color: "#313331", lineHeight: 1.15, letterSpacing: "-0.015em", fontWeight: 700 }}>
          Mon espace<br />
          <span style={{ color: "#755b2e" }}>client</span>
        </h2>

        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#5f5f5f", marginTop: "1rem", lineHeight: 1.7 }}>
          Suivez vos traitements, recevez des rappels personnalisés et découvrez les soins adaptés à votre profil.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="gradient-button w-full mt-8 py-4 font-semibold tracking-wide uppercase transition-all active:scale-95"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.95rem",
            letterSpacing: "0.05rem",
            border: "none"
          }}>
          Accéder à mon espace
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="ghost-button w-full mt-3 py-3 transition-all active:scale-95"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.85rem",
          }}>
          Créer un compte
        </button>

        <p className="text-center mt-8" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.65rem", color: "#5f5f5f", letterSpacing: "0.05rem", textTransform: "uppercase" }}>
          Clinique Matignon · Lausanne · Genève · Valais
        </p>
      </div>
    </div>
  );
}
