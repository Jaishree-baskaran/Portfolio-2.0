import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  time: string;
  type: string;
  tags: string[];
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "CANIT Solutions",
    role: "Software Developer Intern",
    time: "Jan 2026",
    type: "WORK",
    tags: ["Python", "FastAPI", "Supabase", "LLM"],
    details: [
      "Engineered high-performance machine learning pipelines and optimized database queries to improve execution speeds.",
      "Integrated secure FastAPI endpoints, facilitating smooth data ingestion for Large Language Model (LLM) workflows.",
      "Optimized query execution times and designed scalable backend schemas."
    ]
  },
  {
    company: "SIMS Hospital",
    role: "Web App Developer Intern",
    time: "2025",
    type: "WORK",
    tags: ["React", "TS", "Dashboard"],
    details: [
      "Designed and deployed responsive web dashboards, improving real-time access to patient diagnostics.",
      "Enhanced frontend loading speeds by 30% through modular component structures and lazy loading patterns.",
      "Assisted in configuring access controls to comply with secure clinical data management guidelines."
    ]
  },
  {
    company: "Revature",
    role: "AI/ML Developer Intern",
    time: "2025",
    type: "WORK",
    tags: ["Python", "ML", "NLP", "SQL"],
    details: [
      "Built and evaluated predictive ML models utilizing classification and regression techniques.",
      "Engineered automated data preprocessing pipelines to clean and structure high-dimensional telemetry data.",
      "Integrated Natural Language Processing (NLP) models into existing developer workflows."
    ]
  },
  {
    company: "Rotork",
    role: "Software Engineer Intern",
    time: "2024",
    type: "WORK",
    tags: ["APIs", "Firmware", "C#", "Testing"],
    details: [
      "Developed modular firmware scripts and integrated third-party hardware interface APIs.",
      "Created automated test cases for system validation, raising test coverage by 20%.",
      "Collaborated with cross-functional engineering teams on code reviews and system documentation."
    ]
  },
  {
    company: "CSE Association",
    role: "President",
    time: "University",
    type: "LEADERSHIP",
    tags: ["Management", "Symposium", "Leadership"],
    details: [
      "Led an executive team of 15 members to plan and execute major inter-university technical symposiums.",
      "Organized coding bootcamps, workshops on emerging technologies, and expert guest lectures.",
      "Facilitated collaborations with industry partners for student placement prep programs."
    ]
  },
  {
    company: "Campus Newsletter",
    role: "Editorial Head",
    time: "University",
    type: "LEADERSHIP",
    tags: ["Curation", "Editorial", "Layout"],
    details: [
      "Oversaw the end-to-end design, curation, copyediting, and print layout of the campus newsletter.",
      "Managed a team of 10 student journalists, coordinating coverage of academic events.",
      "Implemented digital newsletters to expand readership by 40%."
    ]
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background shading */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#FAF9F6] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col gap-12">

        {/* Title */}
        <div className="bg-white border border-[#E5DFD3] px-8 py-5 flex items-center justify-center relative overflow-hidden rounded-[2rem] shadow-sm backdrop-blur-md">
          <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] relative z-10 text-center uppercase text-[#1C1917] font-archivo">
            Professional Journey
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedExp(exp)}
              className="group relative bg-transparent p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none"
            >
              {/* Custom Bracket Borders (Mockup styling) */}
              <div className="absolute top-0 inset-x-0 h-3 border-t-2 border-l-2 border-r-2 border-[#E5DFD3] group-hover:border-[#E30613] transition-colors duration-300" />
              <div className="absolute bottom-0 inset-x-0 h-3 border-b-2 border-l-2 border-r-2 border-[#E5DFD3] group-hover:border-[#E30613] transition-colors duration-300" />

              {/* Top Card Info */}
              <div className="flex flex-col gap-2">
                <span className="text-[#E30613] font-archivo font-black text-[10px] tracking-widest uppercase">
                  {exp.type} • {exp.time}
                </span>
                
                <h3 className="text-2xl font-archivo font-black uppercase text-[#1C1917] tracking-tight transition-colors duration-300 group-hover:text-[#E30613]">
                  {exp.company}
                </h3>
                
                <h4 className="text-zinc-500 font-bold uppercase tracking-wider text-xs font-archivo">
                  {exp.role}
                </h4>
              </div>

              {/* Bottom Card Info */}
              <div className="mt-8 flex flex-col gap-6">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2.5">
                  {exp.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="text-[10px] font-archivo font-bold uppercase tracking-wider text-zinc-600 bg-white border border-[#E5DFD3] px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end text-zinc-400 group-hover:text-[#E30613] transition-colors duration-300">
                  <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Center Modal Panel */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm">
            {/* Modal Backdrop Click */}
            <div className="absolute inset-0" onClick={() => setSelectedExp(null)} />

            {/* Modal Box */}
            <div className="bg-white rounded-[2.5rem] border-2 border-[#E5DFD3] p-8 md:p-12 max-w-xl w-full relative z-10 shadow-2xl flex flex-col gap-6 overflow-hidden">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col gap-2">
                <span className="text-[#E30613] font-archivo font-black text-xs tracking-widest uppercase">
                  {selectedExp.type} • {selectedExp.time}
                </span>
                
                <h2 className="text-3xl font-archivo font-black uppercase text-[#1C1917] tracking-tight leading-none">
                  {selectedExp.company}
                </h2>
                
                <h3 className="text-zinc-600 font-bold uppercase tracking-wider text-xs font-archivo">
                  {selectedExp.role}
                </h3>
              </div>

              <div className="w-12 h-1 bg-[#E30613]" />

              <div className="flex flex-col gap-6">
                {/* Description details */}
                <div>
                  <h4 className="font-archivo font-black text-xs uppercase tracking-widest text-[#E30613] mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3 list-disc list-inside text-zinc-700 text-sm leading-relaxed font-sans">
                    {selectedExp.details.map((detail, idx) => (
                      <li key={idx} className="pl-1">
                        <span className="relative left-[-2px]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-archivo font-black text-xs uppercase tracking-widest text-[#E30613] mb-3">
                    Tech Stack / Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedExp.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="text-[10px] font-archivo font-bold uppercase tracking-wider text-zinc-700 bg-[#FAF9F6] border border-[#E5DFD3] px-3 py-1.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Experience;