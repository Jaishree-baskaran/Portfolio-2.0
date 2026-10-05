import { ArrowUpRight } from "lucide-react";

import electricityImg from "@/assets/Electricity.jpeg";
import numberImg from "@/assets/number.jpeg";
import radarImg from "@/assets/Radar.jpeg";
import WnsImg from "@/assets/WnS.png";
import InventoryImg from "@/assets/Inventory.jpeg";
import QQImg from "@/assets/QQ.png";

interface ProjectItem {
  number: string;
  category: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: ProjectItem[] = [
  {
    number: "01",
    category: "Real-time Usage Tracking",
    title: "Electricity Management System",
    image: electricityImg,
    description: "An elegant, highly optimized architecture tracking real-time electricity consumption. Seamlessly built with JavaScript and C to process localized usage metrics with precision.",
    tags: ["JavaScript", "C", "Analytics"],
    link: "https://github.com/Jaishree-baskaran/library-management"
  },
  {
    number: "02",
    category: "Graph Algorithm Engine",
    title: "Search the Number",
    image: numberImg,
    description: "A sophisticated Python engine utilizing Dijkstra's algorithm. It intuitively navigates complex graph structures to compute the optimal shortest path in a dynamic gaming environment.",
    tags: ["Python", "Dijkstra", "Graph Theory"],
    link: "#"
  },
  {
    number: "03",
    category: "Spatial Hardware Integration",
    title: "RADAR Sensor System",
    image: radarImg,
    description: "A cutting-edge ultrasonic hardware integration powered by Arduino. It provides real-time spatial awareness and object detection, translating physical environments into actionable data.",
    tags: ["Arduino", "Ultrasonic", "C++"],
    link: "#"
  },
  {
    number: "04",
    category: "Machine Learning Pipeline",
    title: "Write 'n Sight",
    image: WnsImg,
    description: "A robust machine learning pipeline designed to seamlessly convert handwritten manuscripts into digitized text, bridging the gap between analog writing and digital accessibility.",
    tags: ["Python", "Computer Vision", "PyTorch"],
    link: "https://github.com/Jaishree-baskaran/write-n-Sight/"
  },
  {
    number: "05",
    category: "Live Data Synchronization",
    title: "Panda management system",
    image: InventoryImg,
    description: "A sleek, responsive React application integrated with Firebase. It delivers instantaneous data synchronization for meticulous household and organizational inventory management.",
    tags: ["React", "Firebase", "Realtime DB"],
    link: "https://github.com/Jaishree-baskaran/PandaStock_Inventory_Management_App"
  },
  {
    number: "06",
    category: "Holistic Health Platform",
    title: "Quantum Qulambu",
    image: QQImg,
    description: "A premium digital platform bridging the gap between South Indian gourmet delivery and holistic health. Designed to foster community well-being through curated culinary experiences.",
    tags: ["Full Stack", "React", "HealthTech"],
    link: "https://github.com/Jaishree-baskaran/quantum-qulambu-eats-gold"
  }
];

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-24 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background shading */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#FFF8EF] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12 font-sans">

        {/* Title Pill */}
        <div className="bg-[#FFF8EF] border border-[#E5DFD3] px-8 py-5 flex items-center justify-center relative overflow-hidden rounded-[2rem] shadow-sm">
          <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] relative z-10 text-center uppercase text-[#1C1917] font-archivo">
            Featured Projects
          </h1>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {projects.map((project, idx) => {
            // Alternate visual emphasis: 
            // Indices 0, 3, 4: Image on top, text below (Vertical)
            // Indices 1, 2, 5: Image / text side-by-side split (Split)
            const isSplitLayout = idx === 1 || idx === 2 || idx === 5;

            return (
              <div
                key={project.number}
                className="group relative bg-[#FFF8EF] border border-[#E5DFD3] rounded-[2rem] p-7 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#930500]/30 hover:-translate-y-1 select-none"
              >
                {isSplitLayout ? (
                  /* Layout B: Image / Text Side-by-Side Split */
                  <div className="flex flex-col sm:flex-row gap-6 h-full items-stretch">
                    {/* Preview Image */}
                    <div className="relative w-full sm:w-[42%] aspect-[16/10] sm:aspect-auto min-h-[190px] sm:min-h-full rounded-2xl overflow-hidden border border-[#E5DFD3] bg-zinc-100 shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-between flex-1 gap-4">
                      <div className="flex flex-col gap-2">
                        {/* Meta */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[#930500] font-archivo font-black text-[10px] md:text-[11px] tracking-widest uppercase">
                            {project.category}
                          </span>
                          <span className="font-mono text-xs text-zinc-400 font-bold">
                            {project.number}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl md:text-2xl font-archivo font-black text-[#1C1917] uppercase tracking-tight leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs md:text-sm leading-relaxed text-zinc-600 font-sans">
                          {project.description}
                        </p>
                      </div>

                      {/* Footer: Tags & Action */}
                      <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#E5DFD3]/60 mt-auto">
                        <div className="flex flex-wrap gap-1.5">
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
                            className="w-9 h-9 rounded-full bg-[#930500] hover:bg-[#1C1917] text-white flex items-center justify-center transition-all duration-200 shadow-sm shrink-0"
                            aria-label={`View ${project.title}`}
                          >
                            <ArrowUpRight size={16} />
                          </a>
                        ) : (
                          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold px-1.5 py-0.5">
                            LAB
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Layout A: Image on Top, Text Below */
                  <div className="flex flex-col gap-5 h-full justify-between">
                    <div className="flex flex-col gap-4">
                      {/* Preview Image */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#E5DFD3] bg-zinc-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <span className="text-[#930500] font-archivo font-black text-[10px] md:text-[11px] tracking-widest uppercase">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-zinc-400 font-bold">
                          {project.number}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-archivo font-black text-[#1C1917] uppercase tracking-tight leading-snug">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm leading-relaxed text-zinc-600 font-sans">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer: Tags & Action */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#E5DFD3]/60 mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-archivo font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#E5DFD3] bg-[#FFF8EF] text-zinc-600"
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
                          className="w-9 h-9 rounded-full bg-[#930500] hover:bg-[#1C1917] text-white flex items-center justify-center transition-all duration-200 shadow-sm shrink-0"
                          aria-label={`View ${project.title}`}
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold px-1.5 py-0.5">
                          LAB
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Projects;
