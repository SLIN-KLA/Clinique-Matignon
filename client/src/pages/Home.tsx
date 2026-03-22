/*
 * MATIGNON — Home (Splash / Login)
 * Design: Dark Medical Luxury
 * Hero image: femme avec lumière neon verte sur fond noir
 * CTA: Accéder à mon espace client
 */
import { useLocation } from "wouter";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266302/ZXJt3AjXKDTezKpica76ko/matignon-hero-bg-iFg5ajUqgXXB9onV7mjWSG.webp";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="phone-frame flex flex-col" style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      {/* Hero Image */}
      <div className="relative flex-1" style={{ minHeight: "65vh" }}>
        <img
          src={HERO_IMG}
          alt="Matignon Médecine Esthétique"
          className="w-full h-full object-cover object-top"
          style={{ minHeight: "65vh" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.85) 70%, #0A0A0A 100%)" }} />

        {/* Logo overlay */}
        <div className="absolute top-12 left-6">
          <div className="flex items-baseline gap-2">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#FFFFFF", letterSpacing: "0.1em" }}>
              MATIGNON
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "#B8FF00", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>
              Médecine Esthétique
            </span>
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="px-6 pb-12 pt-4 animate-slide-up" style={{ background: "#0A0A0A" }}>
        <div className="neon-divider mb-6" />

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.6rem", color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "0.04em" }}>
          MON ESPACE<br />
          <span style={{ color: "#B8FF00" }}>CLIENT</span>
        </h1>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.60 0 0)", marginTop: "0.75rem", lineHeight: 1.6 }}>
          Suivez vos traitements, recevez des rappels personnalisés et découvrez les soins adaptés à votre profil.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full mt-8 py-4 font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95"
          style={{
            background: "#B8FF00",
            color: "#0A0A0A",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
            border: "none",
            borderRadius: "4px",
            boxShadow: "0 0 30px rgba(184,255,0,0.25)"
          }}>
          Accéder à mon espace
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full mt-3 py-3 transition-all duration-200 active:scale-95"
          style={{
            background: "transparent",
            color: "oklch(0.55 0 0)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            border: "1px solid oklch(0.22 0 0)",
            borderRadius: "4px"
          }}>
          Créer un compte
        </button>

        <p className="text-center mt-6" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "oklch(0.35 0 0)", letterSpacing: "0.08em" }}>
          CLINIQUE MATIGNON · LAUSANNE · GENÈVE · VALAIS
        </p>
      </div>
    </div>
  );
}
