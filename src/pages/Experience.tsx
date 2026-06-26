import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  time: string;
  type: string;
  tags: string[];
  details: string; // Plain text paragraph, no bullets
  subRoles?: { role: string; time: string; details: string }[]; // For Association of CSE
}

const workExperience: ExperienceItem[] = [
  {
    company: "CANIT Solutions",
    role: "Software Developer (Technical Lead)",
    time: "Jan 2026 - Present",
    type: "WORK",
    tags: ["Geospatial Viz", "Mapbox", "Leaflet", "AWS", "Predictive Analytics"],
    details: "Architected and built critical geospatial visualization components for a government-backed Smart City platform, including side-by-side comparison views for multi-month spatial data (master-slave layer sync) and AI-powered change detection between time periods. Owned end-to-end development of scalable map-layer infrastructure using Mapbox and Leaflet, integrating QGIS/ArcGIS-sourced spatial data into AWS-backed real-time visualization workflows. Built CANIT Pulse (analytics platform with Meta/YouTube API integration, RBAC, automated reporting) and developed predictive analytics/anomaly detection models for Smart City urban intelligence."
  },
  {
    company: "SIMS Hospital",
    role: "Intern - Web App Developer",
    time: "Jun 2025 - Apr 2026",
    type: "WORK",
    tags: ["React", "TypeScript", "Android TV", "Performance"],
    details: "Engineered a full-stack media management system for SRM Groups using React, TypeScript, and Android TV. Worked with operational data and system metrics to improve uptime and performance across 500+ connected devices."
  },
  {
    company: "Revature",
    role: "Project Intern - AI/ML Developer",
    time: "Jun 2025 - Jul 2025",
    type: "WORK",
    tags: ["ML Engine", "GitHub Bot", "Dashboard UI"],
    details: "Built an ML-based course recommendation engine for personalized training, improving relevance by 25%. Developed an AI-powered GitHub PR bot to automate code reviews, reducing review time by 40%. Improved internal dashboards and UI workflows, enhancing data visibility and user satisfaction by 20%."
  },
  {
    company: "Rotork",
    role: "Project Intern - Software Engineer",
    time: "Jun 2024 - Jul 2024",
    type: "WORK",
    tags: ["Actuator GUI", "Data Integration", "Testing"],
    details: "Designed and implemented a GUI to visualize actuator performance data, increasing data accessibility by 35%. Assisted in requirement gathering, data integration, and testing of performance visualization systems."
  }
];

const leadershipExperience: ExperienceItem[] = [
  {
    company: "Association of Computer Science Engineers",
    role: "President / Joint Head",
    time: "2024 - 2026",
    type: "LEADERSHIP",
    tags: ["Student Council", "Strategic Leadership", "Ubertech symposium"],
    details: "", // Details handled by sub-roles
    subRoles: [
      {
        role: "President (2025 - 2026)",
        time: "2025 - 2026",
        details: "Spearheaded departmental and student council initiatives, driving academic and extracurricular growth through strategic leadership. Directed and motivated a high-performing team of 56 members, fostering innovation and collaboration across key projects."
      },
      {
        role: "Joint Head of Creative Design (2024 - 2025)",
        time: "2024 - 2025",
        details: "Orchestrated national-level events like Ubertech, overseeing design, registrations, and sponsorships with a focus on seamless execution. Led a dynamic team of 14, ensuring timely delivery and impactful event outcomes."
      }
    ]
  },
  {
    company: "Campus Overall Newsletter",
    role: "Head of Student Editorial Team",
    time: "2023 - 2026",
    type: "LEADERSHIP",
    tags: ["Espirito Newsletter", "Content Editing", "Publication Layout"],
    details: "Led the student editorial team for Espirito, managing content creation, editing, and publication, increasing newsletter readership by 45% while ensuring on-time delivery."
  },
  {
    company: "Cybernetics Club",
    role: "Secretary & Asst. Secretary",
    time: "2020 - 2022",
    type: "LEADERSHIP",
    tags: ["Robotics", "Microcontrollers", "Student Tech"],
    details: "Served as Assistant Secretary (2020–2021) and Secretary (2021–2022) of the Cybernetics Club, leading student technology initiatives."
  }
];

const getWorkCardStyles = (idx: number) => {
  const styles = [
    // 0: White
    {
      bg: "bg-white text-[#1C1917]",
      brackets: "border-[#E5DFD3] group-hover:border-[#E30613]",
      tagBg: "bg-[#FAF9F6] border-[#E5DFD3] text-zinc-600",
      arrow: "text-zinc-400 group-hover:text-[#E30613]",
      badge: "text-[#E30613]",
      role: "text-zinc-500",
      time: "text-zinc-400"
    },
    // 1: Black
    {
      bg: "bg-[#1C1917] text-white",
      brackets: "border-zinc-800 group-hover:border-[#E30613]",
      tagBg: "bg-zinc-800 border-zinc-700 text-zinc-300",
      arrow: "text-zinc-400 group-hover:text-[#E30613]",
      badge: "text-[#E30613]",
      role: "text-zinc-400",
      time: "text-zinc-500"
    },
    // 2: Red
    {
      bg: "bg-[#E30613] text-white",
      brackets: "border-red-800 group-hover:border-white",
      tagBg: "bg-red-700/50 border-red-600 text-white",
      arrow: "text-white group-hover:text-black",
      badge: "text-black",
      role: "text-red-200",
      time: "text-red-200"
    },
    // 3: Parchment
    {
      bg: "bg-[#EFEAE2] text-[#1C1917]",
      brackets: "border-[#DCD6C8] group-hover:border-[#E30613]",
      tagBg: "bg-white border-[#DCD6C8] text-zinc-600",
      arrow: "text-zinc-400 group-hover:text-[#E30613]",
      badge: "text-[#E30613]",
      role: "text-zinc-600",
      time: "text-zinc-500"
    }
  ];
  return styles[idx % styles.length];
};

const getLeadershipCardStyles = (idx: number) => {
  const styles = [
    // 0: Black
    {
      bg: "bg-[#1C1917] text-white",
      brackets: "border-zinc-800 group-hover:border-[#E30613]",
      tagBg: "bg-zinc-800 border-zinc-700 text-zinc-300",
      arrow: "text-zinc-400 group-hover:text-[#E30613]",
      badge: "text-[#E30613]",
      role: "text-zinc-400",
      time: "text-zinc-500"
    },
    // 1: Red
    {
      bg: "bg-[#E30613] text-white",
      brackets: "border-red-800 group-hover:border-white",
      tagBg: "bg-red-700/50 border-red-600 text-white",
      arrow: "text-white group-hover:text-black",
      badge: "text-black",
      role: "text-red-200",
      time: "text-red-200"
    },
    // 2: White
    {
      bg: "bg-white text-[#1C1917]",
      brackets: "border-[#E5DFD3] group-hover:border-[#E30613]",
      tagBg: "bg-[#FAF9F6] border-[#E5DFD3] text-zinc-600",
      arrow: "text-zinc-400 group-hover:text-[#E30613]",
      badge: "text-[#E30613]",
      role: "text-zinc-500",
      time: "text-zinc-400"
    }
  ];
  return styles[idx % styles.length];
};

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background shading */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#FAF9F6] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col gap-16">

        {/* Title */}
        <div className="bg-white border border-[#E5DFD3] px-8 py-5 flex items-center justify-center relative overflow-hidden rounded-[2rem] shadow-sm backdrop-blur-md">
          <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] relative z-10 text-center uppercase text-[#1C1917] font-archivo">
            Professional Journey
          </h1>
        </div>

        {/* Professional Jobs Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[#E30613] font-archivo font-black text-sm uppercase tracking-widest pl-2">
            Work History
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {workExperience.map((exp, idx) => {
              const theme = getWorkCardStyles(idx);
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedExp(exp)}
                  className={`group relative p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none rounded-[2rem] shadow-sm ${theme.bg}`}
                >
                  {/* Custom Bracket Borders (Mockup styling) */}
                  <div className={`absolute top-0 inset-x-0 h-3 border-t-2 border-l-2 border-r-2 rounded-t-[2rem] ${theme.brackets}`} />
                  <div className={`absolute bottom-0 inset-x-0 h-3 border-b-2 border-l-2 border-r-2 rounded-b-[2rem] ${theme.brackets}`} />

                  {/* Top Card Info */}
                  <div className="flex flex-col gap-2">
                    <span className={`font-archivo font-black text-[10px] tracking-widest uppercase ${theme.badge}`}>
                      {exp.type} • {exp.time}
                    </span>
                    
                    <h3 className="text-2xl font-archivo font-black uppercase tracking-tight">
                      {exp.company}
                    </h3>
                    
                    <h4 className={`font-bold uppercase tracking-wider text-xs font-archivo ${theme.role}`}>
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
                          className={`text-[10px] font-archivo font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${theme.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow Icon */}
                    <div className={`flex justify-end transition-colors duration-300 ${theme.arrow}`}>
                      <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="flex flex-col gap-6 mt-6">
          <h2 className="text-[#E30613] font-archivo font-black text-sm uppercase tracking-widest pl-2">
            Leadership & Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {leadershipExperience.map((exp, idx) => {
              const theme = getLeadershipCardStyles(idx);
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedExp(exp)}
                  className={`group relative p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none rounded-[2rem] shadow-sm ${theme.bg}`}
                >
                  {/* Custom Bracket Borders (Mockup styling) */}
                  <div className={`absolute top-0 inset-x-0 h-3 border-t-2 border-l-2 border-r-2 rounded-t-[2rem] ${theme.brackets}`} />
                  <div className={`absolute bottom-0 inset-x-0 h-3 border-b-2 border-l-2 border-r-2 rounded-b-[2rem] ${theme.brackets}`} />

                  {/* Top Card Info */}
                  <div className="flex flex-col gap-2">
                    <span className={`font-archivo font-black text-[10px] tracking-widest uppercase ${theme.badge}`}>
                      {exp.type} • {exp.time}
                    </span>
                    
                    <h3 className="text-xl font-archivo font-black uppercase tracking-tight leading-snug">
                      {exp.company}
                    </h3>
                    
                    <h4 className={`font-bold uppercase tracking-wider text-xs font-archivo ${theme.role}`}>
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
                          className={`text-[10px] font-archivo font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${theme.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow Icon */}
                    <div className={`flex justify-end transition-colors duration-300 ${theme.arrow}`}>
                      <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
                {/* Description details (no bulleting, just proper text paragraph) */}
                <div>
                  <h4 className="font-archivo font-black text-xs uppercase tracking-widest text-[#E30613] mb-3">
                    Description & Key Accomplishments
                  </h4>
                  
                  {selectedExp.subRoles ? (
                    <div className="space-y-6">
                      {selectedExp.subRoles.map((sub, sIdx) => (
                        <div key={sIdx} className="flex flex-col gap-2 border-l-2 border-[#E30613]/30 pl-4">
                          <span className="text-zinc-700 font-archivo font-bold text-xs uppercase tracking-wider">{sub.role}</span>
                          <p className="text-zinc-600 text-sm leading-relaxed font-sans">{sub.details}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-zinc-700 text-sm leading-relaxed font-sans">
                      {selectedExp.details}
                    </p>
                  )}
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