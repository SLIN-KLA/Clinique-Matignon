/*
 * MATIGNON — BottomNav
 * Design: Dark Medical Luxury — navigation bottom bar mobile
 * Icons: lucide-react, fond noir, accent neon vert
 */
import { Home, Calendar, Sparkles, User, ClipboardList } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Accueil" },
  { href: "/treatments", icon: ClipboardList, label: "Traitements" },
  { href: "/recommendations", icon: Sparkles, label: "Conseils" },
  { href: "/appointment", icon: Calendar, label: "RDV" },
  { href: "/profile", icon: User, label: "Profil" },
];

export default function BottomNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50"
      style={{ background: "oklch(0.10 0 0)", borderTop: "1px solid oklch(0.20 0 0)" }}>
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = location === href || (href === "/dashboard" && location === "/");
          return (
            <Link key={href} href={href}>
              <div className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-all duration-200"
                style={isActive ? { color: "#B8FF00" } : { color: "oklch(0.55 0 0)" }}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                <span className="text-[10px] font-medium tracking-wide"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {label}
                </span>
                {isActive && (
                  <div className="w-1 h-1 rounded-full" style={{ background: "#B8FF00" }} />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
