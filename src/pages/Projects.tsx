import { ArrowUpRight } from "lucide-react";

import electricityImg from "@/assets/Electricity.jpeg";
import numberImg from "@/assets/number.jpeg";
import radarImg from "@/assets/Radar.jpeg";
import WnsImg from "@/assets/WnS.png";
import InventoryImg from "@/assets/Inventory.jpeg";
import QQImg from "@/assets/QQ.png";

interface ProjectItem {
  category: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: ProjectItem[] = [
  {
    category: "Real-time Usage Tracking",
    title: "Electricity Management System",
    image: electricityImg,
    description: "An optimized architecture tracking real-time electricity consumption, processing localized usage metrics with precision.",
    tags: ["JavaScript", "C", "Analytics"],
    link: "https://github.com/Jaishree-baskaran/library-management"
  },
  {
    category: "Graph Algorithm Engine",
    title: "Search the Number",
    image: numberImg,
    description: "A Python engine utilizing Dijkstra's algorithm to compute the optimal shortest path in a dynamic gaming graph.",
    tags: ["Python", "Dijkstra", "Graphs"],
    link: "#"
  },
  {
    category: "Spatial Hardware Integration",
    title: "RADAR Sensor System",
    image: radarImg,
    description: "An ultrasonic hardware integration with Arduino providing real-time spatial awareness and object detection.",
    tags: ["Arduino", "Ultrasonic", "C++"],
    link: "#"
  },
  {
    category: "Machine Learning Pipeline",
    title: "Write 'n Sight",
    image: WnsImg,
    description: "A machine learning pipeline converting handwritten manuscripts into digitized text with high accuracy.",
    tags: ["Python", "Vision", "PyTorch"],
    link: "https://github.com/Jaishree-baskaran/write-n-Sight/"
  },
  {
    category: "Live Data Synchronization",
    title: "Panda management system",
    image: InventoryImg,
    description: "A responsive React and Firebase application providing live data synchronization for inventory management.",
    tags: ["React", "Firebase", "Realtime"],
    link: "https://github.com/Jaishree-baskaran/PandaStock_Inventory_Management_App"
  },
  {
    category: "Holistic Health Platform",
    title: "Quantum Qulambu",
    image: QQImg,
    description: "A digital platform connecting South Indian gourmet delivery and holistic wellness for community health.",
    tags: ["Full Stack", "React", "HealthTech"],
    link: "https://github.com/Jaishree-baskaran/quantum-qulambu-eats-gold"
  }
];

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-32 md:pt-36 pb-16 px-4 md:px-8 overflow-x-hidden bg-transparent">
      
      {/* Background shading */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#FFF8EF] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1140px] flex flex-col gap-8 font-sans">

        {/* Compact Header */}
        <div className="text-center flex flex-col items-center gap-1.5">
          <h1 className="text-xl md:text-2xl font-black tracking-[0.25em] uppercase text-[#1C1917] font-archivo">
            PROJECTS
          </h1>
          <p className="text-zinc-600 text-xs sm:text-sm font-sans font-light">
            Selected things I've built & experimented with.
          </p>
        </div>

        {/* 3x2 Compact Editorial Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-[#FFF8EF] border border-[#E5DFD3] rounded-2xl p-4 sm:p-4.5 flex flex-col justify-between shadow-sm hover:border-[#930500]/30 hover:-translate-y-1 transition-all duration-200 select-none"
            >
              {/* Top: Image & Info */}
              <div className="flex flex-col">
                {/* Image */}
                <div className="relative w-full h-[180px] sm:h-[190px] rounded-xl overflow-hidden border border-[#E5DFD3] bg-zinc-100 mb-3 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category */}
                <span className="text-[#930500] font-archivo font-black text-[9px] sm:text-[10px] tracking-widest uppercase">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-archivo font-black text-base sm:text-lg text-[#1C1917] uppercase tracking-tight leading-snug mt-1 truncate">
                  {project.title}
                </h3>

                {/* Description (max 1-2 lines) */}
                <p className="text-zinc-600 text-xs leading-relaxed font-sans mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Tags & Link Button */}
              <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-[#E5DFD3]/60">
                <div className="flex flex-wrap gap-1.5 min-w-0">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-archivo font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#E5DFD3] bg-[#FFF8EF] text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#930500] hover:bg-[#1C1917] text-white flex items-center justify-center transition-all duration-200 shadow-sm shrink-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span className="w-7 h-7 rounded-full border border-[#E5DFD3] text-zinc-400 flex items-center justify-center shrink-0">
                    <ArrowUpRight size={13} className="opacity-40" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
