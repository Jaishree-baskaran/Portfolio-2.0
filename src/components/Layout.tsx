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

  // Unified dark aesthetic across all pages matching the reference design
  const layoutBg = "noise-bg min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden";
  const navContainer = "glass-pill bg-black/40 backdrop-blur-xl border border-white/5 text-white flex items-center justify-between px-6 py-4 md:px-10 md:py-4.5 shadow-2xl relative z-50";

  return (
    <div className={layoutBg}>
      {/* Cosmic Nebula Backdrops (Nebula Purple glow effect from Reference Photo) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none z-0" />

      {/* Thin Vertical Dividers / Alignment Grid Lines (from Reference Photo) */}
      <div className="absolute inset-y-0 left-0 right-0 z-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto px-4 md:px-12 opacity-30">
        <div className="w-px h-full border-l border-dashed border-white/10" />
        <div className="w-px h-full border-l border-dashed border-white/10 hidden md:block" />
        <div className="w-px h-full border-l border-dashed border-white/10 hidden md:block" />
        <div className="w-px h-full border-l border-dashed border-white/10" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] px-4 md:px-12 z-50 top-6">
        <nav className={navContainer}>
          {/* Typographic Monogram Logo (Formal yet high-end aesthetic) */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center group">
              <span className="text-xl md:text-2xl font-black tracking-[0.15em] text-white transition-all duration-300 group-hover:scale-105 select-none font-sans uppercase">
                JAISHREE<span className="text-purple-500">.</span>
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
                  className={`relative text-xs font-semibold tracking-[0.2em] transition-colors duration-300 group
                    ${isActive ? "text-white" : "text-white/40 hover:text-white"}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" 
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
            <span className={`block w-6 h-[2px] bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
            className="fixed inset-0 z-40 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 bg-black/95"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`relative text-2xl uppercase tracking-[0.3em] font-semibold transition-colors 
                              ${isActive ? "text-white" : "text-white/50"}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-500 rounded-full" />
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