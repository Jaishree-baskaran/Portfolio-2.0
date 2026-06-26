import { motion } from "framer-motion";
import y2kBg from "@/assets/chrome-bg-2.png";

// Publications Images
import neuroImg from "@/assets/Nuro .png";
import cosmoImg from "@/assets/cosmo.png";
import carbonIqImg from "@/assets/carbon-iq.png";

// Achievement Images
import f1Img from "@/assets/F1.jpeg";
import ideathonImg from "@/assets/Ideathon.png";
import upgradImg from "@/assets/FLSP.png";
import riseImg from "@/assets/RISE.png";
import sihImg from "@/assets/SIH.png";

const publications = [
  {
    title: "CarbonIQ – AI Driven Carbon Footprint Intelligence System",
    date: "Best Paper Award - ICISD’26",
    description: "AI-driven carbon footprint system using Random Forest & K-Means, aligned with Indian standards, supporting scalable analysis from household to industry level with personalized sustainability. (LLM, Python tools, ML tools, Scikit-learn)",
    image: carbonIqImg,
  },
  {
    title: "NeuroVox: A Dyslexia Screening Approach Using Vocal Biomarkers",
    date: "TIJER - International Research Journal • Nov 11, 2025",
    description: "Voice-based ML system detecting potential dyslexia using vocal biomarkers for early screening.",
    image: neuroImg,
  },
  {
    title: "CosmoScan – A Galaxy Type Identifier Using Computer Vision",
    date: "IJIREEICE • Nov 3, 2025",
    description: "AI-powered galaxy classification system combining astronomy and deep learning.",
    image: cosmoImg,
  },
];

const achievements = [
  {
    title: "F1 Race Performance Predictions",
    description: "ML model predicting Formula 1 race performance using weather-based feature engineering.",
    image: f1Img,
  },
  {
    title: "Ideathon 4.0 - 3rd Place (200 Teams)",
    description: "Team Hakathon of SRM - Feb 2023",
    image: ideathonImg,
  },
  {
    title: "Upgrad Abroad - Future Leader Scholarship",
    description: "High Distinction - Sep 2021",
    image: upgradImg,
  },
  {
    title: "RISE Global Challenge",
    description: "Quarter Finalist (2020-2021)",
    image: riseImg,
  },
  {
    title: "Smart India Hackathon - Internal Hackathon",
    description: "Participated in SRM Internal Hackathon under Smart India Hackathon 2025.",
    image: sihImg,
  },
];

const technicalCerts = [
  "Deep Learning A-Z (Udemy)",
  "Object Oriented Design (Coursera)",
  "Data Structures in C++ (Scaler)",
  "Fundamentals of Operating System (Scaler)",
  "JAVA & OOP (Coursera)",
  "Cybersecurity Job Simulation (Mastercard)",
  "Demystifying Network (IIT-NPTEL)",
  "Employment Communication (Gold) (IIT-NPTEL)"
];

const spaceScienceCerts = [
  "Predicting Stars/Galaxies (Udemy)",
  "Rocket Propulsion (NoxJet)"
];

const dataScienceCerts = [
  "Introduction to MongoDB",
  "Quantitative Research Job Simulation",
  "Introduction to Data Science",
  "Tools for Data Science",
  "Data Processing & Visualisation (Gold)"
];

const Impact = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background shading for the Impact page */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#FAF7F2] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-24 mt-10 font-sans">

        {/* ================= PUBLICATIONS ================= */}
        <section className="w-full">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#6e1227] tracking-[0.3em] uppercase block mb-3 font-sans">
              // Scientific Contributions
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-[#1C1917] font-serif">
              Publications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-[#FCFAF7] border border-[#E5DFD3] rounded-3xl overflow-hidden shadow-sm flex flex-col backdrop-blur-md hover:border-[#6e1227]/25 hover:shadow-md transition-all duration-300"
              >
                <div className="w-full h-56 overflow-hidden bg-zinc-100">
                  <img 
                    src={pub.image} 
                    alt={pub.title} 
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                  />
                </div>
                
                <div className="p-6 flex flex-col">
                  <div className="text-[#6e1227] text-xs font-semibold tracking-wider mb-3 uppercase font-sans">
                    {pub.date}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 leading-snug font-serif">
                    {pub.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-light">
                    {pub.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section className="w-full">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#6e1227] tracking-[0.3em] uppercase block mb-3 font-sans">
              // Highlights & Awards
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-[#1C1917] font-serif">
              Achievements
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-[#FCFAF7] border border-[#E5DFD3] rounded-3xl overflow-hidden shadow-sm flex flex-col backdrop-blur-md hover:border-[#6e1227]/25 hover:shadow-md transition-all duration-300"
              >
                <div className="w-full h-48 overflow-hidden bg-zinc-100">
                  <img 
                    src={ach.image} 
                    alt={ach.title} 
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                  />
                </div>
                
                <div className="p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-[#1C1917] mb-2 leading-snug font-serif">
                    {ach.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-light">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section className="w-full mt-4">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#6e1227] tracking-[0.3em] uppercase block mb-3 font-sans">
              // Professional Credentials
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-[#1C1917] font-serif">
              Certifications
            </h2>
          </div>

          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
             {/* Technical */}
             <div>
               <h3 className="text-[#6e1227]/60 font-bold tracking-[0.5em] text-xs uppercase mb-6 border-b border-[#E5DFD3] pb-4 text-center md:text-left font-serif">Technical</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {technicalCerts.map((cert, i) => (
                     <div key={i} className="bg-white border border-[#E5DFD3]/60 p-5 rounded-2xl flex items-center justify-center text-center shadow-sm hover:border-[#6e1227]/20 hover:bg-zinc-50/50 transition-all duration-300">
                        <span className="font-sans text-zinc-700 text-xs md:text-sm font-light tracking-wide">{cert}</span>
                     </div>
                  ))}
               </div>
             </div>

             {/* Space Science */}
             <div>
               <h3 className="text-[#6e1227]/60 font-bold tracking-[0.5em] text-xs uppercase mb-6 border-b border-[#E5DFD3] pb-4 text-center md:text-left font-serif">Space Science</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {spaceScienceCerts.map((cert, i) => (
                     <div key={i} className="bg-white border border-[#E5DFD3]/60 p-5 rounded-2xl flex items-center justify-center text-center shadow-sm hover:border-[#6e1227]/20 hover:bg-zinc-50/50 transition-all duration-300">
                        <span className="font-sans text-zinc-700 text-xs md:text-sm font-light tracking-wide">{cert}</span>
                     </div>
                  ))}
               </div>
             </div>

             {/* Data Science */}
             <div>
               <h3 className="text-[#6e1227]/60 font-bold tracking-[0.5em] text-xs uppercase mb-6 border-b border-[#E5DFD3] pb-4 text-center md:text-left font-serif">Data Science</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {dataScienceCerts.map((cert, i) => (
                     <div key={i} className="bg-white border border-[#E5DFD3]/60 p-5 rounded-2xl flex items-center justify-center text-center shadow-sm hover:border-[#6e1227]/20 hover:bg-zinc-50/50 transition-all duration-300">
                        <span className="font-sans text-zinc-700 text-xs md:text-sm font-light tracking-wide">{cert}</span>
                     </div>
                  ))}
               </div>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Impact;