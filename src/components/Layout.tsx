import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { path: "/about", label: "ABOUT" },
  { path: "/projects", label: "PROJECTS" },
  { path: "/Impact", label: "IMPACT" },
  { path: "/experience", label: "EXPERIENCE" },
  { path: "/contact", label: "CONTACT" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const isHome = location.pathname === "/";
  const activeRed = isHome ? "#930500" : "#930500";

  // Light parchment editorial theme background and text colors
  const layoutBg = "noise-bg min-h-screen bg-[#FFF8EF] text-[#1C1917] font-sans relative overflow-x-hidden";
  const navContainer = "bg-[#FFF8EF] border border-[#E5DFD3] text-[#1C1917] flex items-center justify-between px-6 py-3.5 md:px-10 md:py-4 shadow-sm rounded-[2.5rem] relative z-50";

  return (
    <div className={layoutBg}>
      {/* Editorial Vignette / Top Shadows (inspired by the Abyss reference header edge) */}
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-b from-[#EFEAE2]/40 to-transparent pointer-events-none z-0" />

      {/* Classic Editorial Grid Divider Lines (subtle warm beige) */}
      <div className="absolute inset-y-0 left-0 right-0 z-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto px-4 md:px-12 opacity-40">
        <div className="w-px h-full border-l border-dashed border-[#DCD6C8]" />
        <div className="w-px h-full border-l border-dashed border-[#DCD6C8] hidden md:block" />
        <div className="w-px h-full border-l border-dashed border-[#DCD6C8] hidden md:block" />
        <div className="w-px h-full border-l border-dashed border-[#DCD6C8]" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] px-4 md:px-12 z-50 top-6">
        <nav className={navContainer}>
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center group">
              <span className="font-archivo font-black text-2xl md:text-3xl tracking-tighter italic select-none leading-none transition-all duration-300 group-hover:scale-105 block">
                <span className="text-[#930500]">J</span>
                <span className="text-[#1C1917] transition-colors duration-300 group-hover:text-[#930500]">B</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-14">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative text-xs font-bold tracking-[0.25em] transition-colors duration-300 group"
                  style={{ color: isActive ? activeRed : "rgb(113, 113, 122)" }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = activeRed; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgb(113, 113, 122)"; }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" 
                      style={{ backgroundColor: activeRed }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-[2px] bg-zinc-800 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-[2px] bg-zinc-800 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-zinc-800 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 bg-[#FFF8EF]/95"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="relative text-2xl uppercase tracking-[0.35em] font-bold transition-colors"
                  style={{ color: isActive ? activeRed : "rgb(82, 82, 91)" }}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: activeRed }} />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
