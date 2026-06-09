import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import customLogo from "@/assets/jb-logo-custom.png";

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

  // Light aesthetic for home, dark for everything else
  const layoutBg = isHome ? "min-h-screen bg-[#f8f9fc] text-gray-900" : "noise-bg min-h-screen bg-black text-white";
  const navContainer = isHome 
    ? "w-full max-w-[1400px] px-4 md:px-12 flex items-center justify-between py-6 relative z-50" 
    : "glass-pill bg-[#0a0a0a] text-white flex items-center justify-between px-6 py-4 md:px-10 md:py-5 shadow-2xl";

  return (
    <div className={layoutBg}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] px-4 md:px-12 z-50 ${isHome ? "top-4" : "top-6"}`}>
        <nav className={navContainer}>
          {/* Custom Y2K Logo & Option A Pill */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <img 
                src={customLogo} 
                alt="JB" 
                className={`w-auto object-contain transition-transform duration-300 origin-left ${isHome ? "h-16 md:h-24 hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]" : "h-14 md:h-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-110"}`}
              />
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
                  className={`relative text-xs md:text-sm font-bold tracking-widest transition-colors duration-300 group
                   ${isHome 
                      ? (isActive ? "text-black" : "text-gray-500 hover:text-black") 
                      : (isActive ? "text-white" : "text-white/60 hover:text-white")}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-[2px] ${isHome ? "bg-black" : "bg-white"}`} />
            <span className={`block w-6 h-[2px] ${isHome ? "bg-black" : "bg-white"}`} />
            <span className={`block w-6 h-[2px] ${isHome ? "bg-black" : "bg-white"}`} />
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
            className={`fixed inset-0 z-40 backdrop-blur-xl flex flex-col items-center justify-center gap-8 ${isHome ? "bg-white/95" : "bg-black/95"}`}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`relative text-3xl uppercase tracking-wider transition-colors 
                              ${isHome ? (isActive ? "text-black" : "text-gray-500") : (isActive ? "text-white" : "text-white/60")}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500 rounded-full" />
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