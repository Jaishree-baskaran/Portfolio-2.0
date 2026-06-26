import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import y2kBg from "@/assets/chrome-bg-3.png";

import electricityImg from "@/assets/Electricity.jpeg";
import numberImg from "@/assets/number.jpeg";
import radarImg from "@/assets/Radar.jpeg";
import WnsImg from "@/assets/WnS.png";
import InventoryImg from "@/assets/Inventory.jpeg";
import QQImg from "@/assets/QQ.png";

const projects = [
  {
    title: "Electricity Management System",
    image: electricityImg,
    description: "An elegant, highly optimized architecture tracking real-time electricity consumption. Seamlessly built with JavaScript and C to process localized usage metrics with precision.",
    highlight: "Real-time Usage Tracking",
  },
  {
    title: "Search the Number",
    image: numberImg,
    description: "A sophisticated Python engine utilizing Dijkstra's algorithm. It intuitively navigates complex graph structures to compute the optimal shortest path in a dynamic gaming environment.",
    highlight: "Graph Algorithm Engine",
  },
  {
    title: "RADAR Sensor System",
    image: radarImg,
    description: "A cutting-edge ultrasonic hardware integration powered by Arduino. It provides real-time spatial awareness and object detection, translating physical environments into actionable data.",
    highlight: "Spatial Hardware Integration",
  },
  {
    title: "Handwriting Digitization",
    image: WnsImg,
    description: "A robust machine learning pipeline designed to seamlessly convert handwritten manuscripts into digitized text, bridging the gap between analog writing and digital accessibility.",
    highlight: "Machine Learning Pipeline",
  },
  {
    title: "Inventory Intelligence",
    image: InventoryImg,
    description: "A sleek, responsive React application integrated with Firebase. It delivers instantaneous data synchronization for meticulous household and organizational inventory management.",
    highlight: "Live Data Synchronization",
  },
  {
    title: "Quantum Qulambu",
    image: QQImg,
    description: "A premium digital platform bridging the gap between South Indian gourmet delivery and holistic health. Designed to foster community well-being through curated culinary experiences.",
    highlight: "Holistic Health Platform",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background shading for the Projects page */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#FAF7F2] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-8 font-sans">

        {/* Title Pill */}
        <div className="bg-white border border-[#E5DFD3] px-8 py-5 flex items-center justify-center relative overflow-hidden rounded-[2rem] shadow-sm backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-[#EFEAE2]/5 pointer-events-none" />
          <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] relative z-10 text-center uppercase text-[#1C1917] font-archivo">
            Featured Projects
          </h1>
        </div>

        {/* Advanced Slider Section */}
        <div className="bg-white border border-[#E5DFD3] p-6 md:p-12 relative flex flex-col items-center justify-center min-h-[600px] shadow-sm rounded-[2.5rem] backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EFEAE2]/5 pointer-events-none rounded-[2.5rem]" />

          {/* Left Arrow Button on the Side */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-14 md:h-14 bg-[#FAF9F6] border border-[#E5DFD3] rounded-full flex items-center justify-center text-zinc-700 hover:bg-[#E30613] hover:text-white transition-all shadow-md shrink-0"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow Button on the Side */}
          <button
            onClick={next}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-14 md:h-14 bg-[#FAF9F6] border border-[#E5DFD3] rounded-full flex items-center justify-center text-zinc-700 hover:bg-[#E30613] hover:text-white transition-all shadow-md shrink-0"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>

          {/* The Slider Container */}
          <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] perspective-[1500px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => {
                const isActive = index === current;
                const isPrev = index === (current === 0 ? projects.length - 1 : current - 1);
                const isNext = index === (current === projects.length - 1 ? 0 : current + 1);

                if (!isActive && !isPrev && !isNext) return null;

                let positionClass = "z-30";
                let xOffset = 0;
                let scale = 1;
                let rotateY = 0;
                let opacity = 1;

                if (isPrev) {
                  positionClass = "z-10 cursor-pointer";
                  xOffset = -250;
                  scale = 0.85;
                  rotateY = 25;
                  opacity = 0.4;
                } else if (isNext) {
                  positionClass = "z-10 cursor-pointer";
                  xOffset = 250;
                  scale = 0.85;
                  rotateY = -25;
                  opacity = 0.4;
                } else {
                  positionClass = "z-30 cursor-default";
                  xOffset = 0;
                  scale = 1;
                  rotateY = 0;
                  opacity = 1;
                }

                // Mobile adjustments
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                if (isMobile) {
                  if (isPrev) xOffset = -100;
                  if (isNext) xOffset = 100;
                }

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      x: xOffset,
                      scale: scale,
                      rotateY: rotateY,
                      opacity: opacity,
                      zIndex: positionClass === "z-30 cursor-default" ? 30 : 10
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute top-0 bottom-0 w-[300px] md:w-[480px] h-full ${positionClass}`}
                    onClick={() => {
                      if (isPrev) prev();
                      if (isNext) next();
                    }}
                  >
                    <div className="w-full h-full bg-white rounded-3xl overflow-hidden border border-[#E5DFD3] shadow-md flex flex-col group backdrop-blur-xl">
                      
                      {/* Image Section */}
                      <div className="h-1/2 relative overflow-hidden bg-zinc-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="h-1/2 p-6 md:p-8 flex flex-col justify-between relative bg-transparent">
                        <div>
                          <div className="text-[#E30613] text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-4 font-archivo">
                            {project.highlight}
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4 tracking-wide text-[#1C1917] font-archivo">
                            {project.title}
                          </h2>
                          <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-light font-sans">
                            {project.description}
                          </p>
                        </div>
                        
                        {isActive && (
                          <div className="mt-4 flex justify-end font-sans">
                            <div className="w-10 h-10 rounded-full bg-[#E30613] hover:bg-black text-white flex items-center justify-center hover:scale-110 transition-all cursor-pointer shadow-[0_4px_15px_rgba(227,6,19,0.25)]">
                              <ExternalLink size={18} />
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Projects;