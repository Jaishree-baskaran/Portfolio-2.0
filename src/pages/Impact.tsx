import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Award } from "lucide-react";

// Research & Award Images
import carbonIqImg from "@/assets/carbon-iq.png";
import neuroImg from "@/assets/Nuro .png";

// Academic Recognition Images
import ideathonImg from "@/assets/Ideathon.png";
import upgradImg from "@/assets/FLSP.png";
import riseImg from "@/assets/RISE.png";
import sihImg from "@/assets/SIH.png";

interface ResearchEntry {
  category: string;
  title: string;
  venue: string;
  date: string;
  description: string;
  topics: string[];
  image: string;
  awardBadge?: string;
  action?: {
    label: string;
    asset: string;
    modalTitle: string;
    modalSubtitle: string;
  };
}

const researchPapers: ResearchEntry[] = [
  {
    category: "CLIMATE AI · DECISION SUPPORT",
    title: "CarbonIQ — AI-Driven Carbon Footprint Intelligence System",
    venue: "International Conference on Intelligent Systems & Digital Transformation (ICISD'26)",
    date: "April 2026",
    description: "An AI-driven carbon footprint intelligence platform utilizing Random Forest classification and K-Means clustering to deliver scalable emission modeling from household to industrial levels, aligned with regional environmental standards and personalized sustainability metrics.",
    topics: ["Random Forest", "K-Means", "Scikit-Learn", "Climate Intelligence", "Decision Support"],
    image: carbonIqImg,
    awardBadge: "Best Paper Award",
    action: {
      label: "View Award",
      asset: carbonIqImg,
      modalTitle: "ICISD'26 Best Paper Award",
      modalSubtitle: "Presented at the International Conference on Intelligent Systems & Digital Transformation (SRM & Cardiff Metropolitan University)"
    }
  },
  {
    category: "BIOMEDICAL ML · SPEECH ACOUSTICS",
    title: "NeuroVox: A Dyslexia Screening Approach Using Vocal Biomarkers",
    venue: "TIJER - International Research Journal",
    date: "November 11, 2025",
    description: "A machine-learning screening methodology evaluating vocal biomarkers—analyzing hesitation patterns, phonetic variance, and read-aloud latency to detect early acoustic indicators of dyslexia non-invasively.",
    topics: ["Vocal Biomarkers", "Speech Processing", "Acoustic ML", "Dyslexia Screening", "Pediatric AI"],
    image: neuroImg,
    action: {
      label: "View Overview",
      asset: neuroImg,
      modalTitle: "NeuroVox Screening Architecture",
      modalSubtitle: "Vocal biomarker hesitation, phoneme latency, and screening workflow overview"
    }
  }
];

interface AchievementItem {
  title: string;
  venue: string;
  date: string;
  description: string;
  image?: string;
}

const academicHonors: AchievementItem[] = [
  {
    title: "ICISD'26 Best Paper Award",
    venue: "SRM & Cardiff Metropolitan University",
    date: "Apr 2026",
    description: "Best Paper Award for CarbonIQ at the International Conference on Intelligent Systems and Digital Transformation.",
    image: carbonIqImg
  },
  {
    title: "Ideathon 4.0 — 3rd Place",
    venue: "SRM University (200 Teams)",
    date: "Feb 2023",
    description: "Ranked 3rd out of 200 competing university teams in rapid technology prototyping.",
    image: ideathonImg
  },
  {
    title: "Upgrad Abroad — Future Leader Scholarship",
    venue: "High Distinction",
    date: "Sep 2021",
    description: "Selected for prestigious Future Leader Scholarship recognizing academic and leadership distinction.",
    image: upgradImg
  },
  {
    title: "RISE Global Challenge",
    venue: "Schmidt Futures & Rhodes Trust",
    date: "2020 - 2021",
    description: "Named Global Quarter-Finalist in international initiative finding promising young leaders.",
    image: riseImg
  },
  {
    title: "Smart India Hackathon",
    venue: "Ministry of Education & SRM",
    date: "2025",
    description: "Selected participant in the SRM Internal Hackathon stage of Smart India Hackathon.",
    image: sihImg
  }
];

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

const technicalCerts: CertificateItem[] = [
  {
    title: "Deep Learning A-Z",
    issuer: "Udemy",
    date: "2025"
  },
  {
    title: "Object Oriented Design",
    issuer: "Coursera",
    date: "2025"
  },
  {
    title: "Data Structures in C++",
    issuer: "Scaler",
    date: "2024"
  },
  {
    title: "Fundamentals of Operating System",
    issuer: "Scaler",
    date: "2024"
  },
  {
    title: "JAVA & OOP",
    issuer: "Coursera",
    date: "2024"
  },
  {
    title: "Cybersecurity Job Simulation",
    issuer: "Mastercard",
    date: "2025"
  },
  {
    title: "Demystifying Network",
    issuer: "IIT-NPTEL",
    date: "2024"
  },
  {
    title: "Employment Communication (Gold) (IIT-NPTEL)",
    issuer: "IIT-NPTEL",
    date: "2023"
  },
  {
    title: "Nasscom (Gold)",
    issuer: "Nasscom",
    date: "2023"
  }
];

const spaceScienceCerts: CertificateItem[] = [
  {
    title: "Predicting Stars/Galaxies",
    issuer: "Udemy",
    date: "2024"
  },
  {
    title: "Rocket Propulsion",
    issuer: "NoxJet",
    date: "2023"
  }
];

const dataScienceCerts: CertificateItem[] = [
  {
    title: "Deloitte – Data Analytics",
    issuer: "Forage",
    date: "Jan 2026"
  },
  {
    title: "Tools for Data Science",
    issuer: "Coursera",
    date: "Mar 2025"
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB University",
    date: "2025"
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "Forage",
    date: "2025"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Coursera",
    date: "2024"
  },
  {
    title: "Data Processing & Visualisation (Gold)",
    issuer: "IIT-NPTEL",
    date: "2024"
  }
];

const Impact = () => {
  const [modalAsset, setModalAsset] = useState<{
    image: string;
    title: string;
    subtitle: string;
  } | null>(null);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-32 md:pt-36 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background soft parchment shading */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#FFF8EF] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1140px] flex flex-col gap-14 font-sans">

        {/* Compact Editorial Research Header */}
        <div className="text-center flex flex-col items-center gap-2 max-w-2xl mx-auto">
          <span className="text-[#930500] font-archivo font-black text-xs uppercase tracking-[0.3em]">
            RESEARCH & SCHOLARLY WORK
          </span>
          <h1 className="text-2xl md:text-4xl font-archivo font-black uppercase tracking-tight text-[#1C1917]">
            IDEAS, INVESTIGATED.
          </h1>
          <p className="text-zinc-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
            Research at the intersection of intelligent systems, machine learning, and real-world problems.
          </p>
        </div>

        {/* ================= RESEARCH ENTRIES (BALANCED 2-COLUMN GRID) ================= */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 w-full">
            {researchPapers.map((paper, idx) => (
              <article
                key={idx}
                className="group bg-[#FFF8EF] border border-[#E5DFD3] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-[#930500]/30 transition-all duration-200"
              >
                {/* Top Section: Media + Content */}
                <div className="flex flex-col">
                  {/* Research Paper Cover / Overview Visual */}
                  <div 
                    className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-[#E5DFD3] bg-zinc-100 mb-4 cursor-pointer group/img"
                    onClick={() => {
                      if (paper.action) {
                        setModalAsset({
                          image: paper.action.asset,
                          title: paper.action.modalTitle,
                          subtitle: paper.action.modalSubtitle
                        });
                      }
                    }}
                    title={paper.action ? `Click to view ${paper.action.label.toLowerCase()}` : undefined}
                  >
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-102"
                    />

                    {/* Recognition Tag */}
                    {paper.awardBadge && (
                      <div className="absolute top-2.5 right-2.5 bg-[#930500] text-white text-[9px] font-archivo font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Award size={10} />
                        <span>{paper.awardBadge}</span>
                      </div>
                    )}
                  </div>

                  {/* Category & Venue Meta */}
                  <div className="flex flex-col gap-1 mb-2.5">
                    <span className="text-[#930500] font-archivo font-black text-[10px] tracking-widest uppercase">
                      {paper.category}
                    </span>
                    <span className="text-zinc-500 font-sans text-[11px] font-medium leading-snug">
                      {paper.venue} • {paper.date}
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h2 className="font-archivo font-black text-base sm:text-lg text-[#1C1917] uppercase tracking-tight leading-snug mb-2.5">
                    {paper.title}
                  </h2>

                  {/* Concise 2-3 Line Summary */}
                  <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed font-sans font-light mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                </div>

                {/* Bottom Section: Research Topics & Verified Action */}
                <div className="pt-3.5 border-t border-[#E5DFD3]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {paper.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-archivo font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#E5DFD3] bg-[#FFF8EF] text-zinc-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {paper.action && (
                    <button
                      onClick={() => {
                        setModalAsset({
                          image: paper.action!.asset,
                          title: paper.action!.modalTitle,
                          subtitle: paper.action!.modalSubtitle
                        });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-archivo font-black uppercase tracking-wider text-[#930500] hover:text-[#1C1917] transition-colors shrink-0 group/action"
                      aria-label={`${paper.action.label} for ${paper.title}`}
                    >
                      <span>{paper.action.label}</span>
                      <ArrowUpRight size={13} className="transition-transform group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5" />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= ACADEMIC RECOGNITION & HONORS ================= */}
        <section className="w-full">
          <div className="mb-6 pb-2 border-b border-[#E5DFD3] flex items-center justify-between">
            <h2 className="text-[#930500] font-archivo font-black text-xs uppercase tracking-[0.25em]">
              ACADEMIC HONORS & RECOGNITION
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full">
            {academicHonors.map((honor, idx) => (
              <div
                key={idx}
                className="group bg-[#FFF8EF] border border-[#E5DFD3] p-4 rounded-xl flex flex-col justify-between shadow-sm hover:border-[#930500]/30 transition-all duration-200 select-none min-h-[96px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-archivo font-bold text-xs sm:text-sm text-[#1C1917] truncate leading-tight group-hover:text-[#930500] transition-colors">
                      {honor.title}
                    </span>
                    <span className="text-zinc-400 font-sans text-[10px] shrink-0 font-medium">
                      {honor.date}
                    </span>
                  </div>
                  <p className="text-[#930500] text-[10px] font-archivo font-bold uppercase tracking-wider">
                    {honor.venue}
                  </p>
                  <p className="text-zinc-600 text-[11px] leading-relaxed font-sans font-light mt-1.5 line-clamp-2">
                    {honor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section className="w-full">
          <div className="mb-6 pb-2 border-b border-[#E5DFD3] flex items-center justify-between">
            <h2 className="text-[#930500] font-archivo font-black text-xs uppercase tracking-[0.25em]">
              CERTIFICATIONS
            </h2>
          </div>

          <div className="flex flex-col gap-8 w-full">
             {/* Technical */}
             <div>
               <h3 className="text-[#930500] font-bold tracking-[0.4em] text-[11px] uppercase mb-3 font-archivo">
                 Technical
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {technicalCerts.map((cert, i) => (
                    <div
                      key={i}
                      className="group bg-[#FFF8EF] border border-[#E5DFD3] p-3.5 rounded-xl flex flex-col justify-between shadow-sm hover:border-[#930500]/30 transition-all duration-200 select-none min-h-[64px]"
                    >
                      <h4 className="font-archivo font-bold text-xs text-[#1C1917] truncate leading-tight group-hover:text-[#930500] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-zinc-500 text-[11px] font-sans mt-1.5 truncate">
                        {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
                      </p>
                    </div>
                  ))}
               </div>
             </div>

             {/* Space Science */}
             <div>
               <h3 className="text-[#930500] font-bold tracking-[0.4em] text-[11px] uppercase mb-3 font-archivo">
                 Space Science
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {spaceScienceCerts.map((cert, i) => (
                    <div
                      key={i}
                      className="group bg-[#FFF8EF] border border-[#E5DFD3] p-3.5 rounded-xl flex flex-col justify-between shadow-sm hover:border-[#930500]/30 transition-all duration-200 select-none min-h-[64px]"
                    >
                      <h4 className="font-archivo font-bold text-xs text-[#1C1917] truncate leading-tight group-hover:text-[#930500] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-zinc-500 text-[11px] font-sans mt-1.5 truncate">
                        {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
                      </p>
                    </div>
                  ))}
               </div>
             </div>

             {/* Data Science */}
             <div>
               <h3 className="text-[#930500] font-bold tracking-[0.4em] text-[11px] uppercase mb-3 font-archivo">
                 Data Science
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {dataScienceCerts.map((cert, i) => (
                    <div
                      key={i}
                      className="group bg-[#FFF8EF] border border-[#E5DFD3] p-3.5 rounded-xl flex flex-col justify-between shadow-sm hover:border-[#930500]/30 transition-all duration-200 select-none min-h-[64px]"
                    >
                      <h4 className="font-archivo font-bold text-xs text-[#1C1917] truncate leading-tight group-hover:text-[#930500] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-zinc-500 text-[11px] font-sans mt-1.5 truncate">
                        {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
                      </p>
                    </div>
                  ))}
               </div>
             </div>
          </div>
        </section>

      </div>

      {/* Asset Preview Modal */}
      <AnimatePresence>
        {modalAsset && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalAsset(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#FFF8EF] border border-[#E5DFD3] rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col gap-3"
            >
              <div className="flex items-start justify-between pb-2 border-b border-[#E5DFD3] gap-4">
                <div>
                  <h3 className="font-archivo font-black text-sm sm:text-base text-[#1C1917] uppercase tracking-tight">
                    {modalAsset.title}
                  </h3>
                  <p className="text-zinc-600 text-xs font-sans mt-0.5">
                    {modalAsset.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setModalAsset(null)}
                  className="w-8 h-8 rounded-full border border-[#E5DFD3] bg-[#FFF8EF] flex items-center justify-center text-zinc-600 hover:text-black hover:border-black transition-colors shrink-0"
                  aria-label="Close dialog"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="max-h-[75vh] overflow-auto rounded-xl border border-[#E5DFD3] bg-zinc-50 flex items-center justify-center p-2">
                <img
                  src={modalAsset.image}
                  alt={modalAsset.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Impact;
