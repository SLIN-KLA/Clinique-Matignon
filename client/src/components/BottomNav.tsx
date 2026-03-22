/*
 * MATIGNON — BottomNav
 * Design: Editorial Aesthetic — glassmorphism + tonal layering
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
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50 glass-nav"
      style={{ borderTop: "1px solid rgba(49, 51, 49, 0.08)" }}>
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = location === href || (href === "/dashboard" && location === "/");
          return (
            <Link key={href} href={href}>
              <div className="flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all duration-200"
                style={{ color: isActive ? "#755b2e" : "#5f5f5f" }}>
                <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                <span className="text-[10px] font-semibold tracking-wide"
                  style={{ fontFamily: "'Manrope', sans-serif" }}>
                  {label}
                </span>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#755b2e" }} />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
