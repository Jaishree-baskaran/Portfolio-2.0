import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "@/assets/cool jb.jpeg";
import { Brain, Globe, BarChart, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Data Science & AI",
    skills: ["Machine Learning", "Artificial Intelligence", "NLP", "Deep Learning", "Transformers", "Regression Models", "LangChain", "LLMs", "RAG Applications", "Data Mining & Analytics"]
  },
  {
    title: "Technical",
    skills: ["Python", "React", "HTML", "CSS", "JavaScript", "FastAPI", "MySQL", "TensorFlow", "Bootstrap", "PHP", "Matplotlib", "Power BI", "Flutter", "Pandas", "node.js", "Git"]
  },
  {
    title: "Design",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Spline", "Notion", "Canva"]
  },
  {
    title: "Language",
    skills: ["English (Proficient)", "Tamil (Proficient)", "French (A2)", "Hindi (Proficient)", "Korean (Conversational)"]
  },
  {
    title: "Soft Skills & Leadership",
    skills: ["Communication", "Teamwork", "Creativity", "Adaptability", "Leadership", "Multitasking", "President (Assoc. of CSE)", "Editorial Head (Campus Newsletter)"]
  },
  {
    title: "Interests",
    skills: ["Astronomy", "Dancing", "Reading", "Writing", "Video Editing", "Animation", "Cooking"]
  }
];

const Index = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-32 px-4 md:px-12 overflow-hidden bg-transparent">
      
      {/* Dynamic Purple Nebula Blur Orbs (Reference Photo Style) */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[450px] h-[450px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
        
        {/* Left Column: Typography & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start gap-4"
        >
          <div className="text-sm font-semibold text-purple-400 tracking-[0.3em] uppercase">
            // Welcome to my space
          </div>

          <div className="flex flex-col tracking-[-0.04em] leading-[0.9] mt-2 font-sans">
            <h1 className="text-[3.8rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[6.8rem] font-extrabold text-white uppercase tracking-tighter">
              JAISHREE
            </h1>
            <h1 className="text-[3.8rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[6.8rem] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 pb-2 tracking-tighter">
              BASKARAN
            </h1>
          </div>

          <p className="text-zinc-400 text-base md:text-lg font-light max-w-md mt-4 leading-relaxed">
            Building intelligent AI/ML systems, exploring data structures, and designing high-impact computational solutions.
          </p>

          <div className="mt-4 flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/5 px-5 py-2.5 shadow-sm">
            <span className="text-[10px] font-bold text-purple-300 tracking-[0.2em] uppercase">
              AI/ML Analyst at Canit Solutions
            </span>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Link to="/projects">
              <button className="px-8 py-3.5 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_4px_25px_rgba(255,255,255,0.15)]">
                VIEW PROJECTS ↗
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3.5 rounded-full border border-zinc-800 text-zinc-300 bg-transparent text-xs font-bold tracking-widest uppercase hover:border-white hover:text-white transition-colors flex items-center gap-2">
                CONTACT ME ↗
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Orbital Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative flex justify-center items-center h-[500px] md:h-[600px] w-full mt-10 md:mt-0"
        >
          {/* The Orbit Ring */}
          <div className="absolute inset-0 m-auto w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full border border-white/5 shadow-[0_0_50px_rgba(168,85,247,0.03)] flex items-center justify-center pointer-events-none">
            {/* Tiny Metallic Spheres on Orbit */}
            <div className="absolute top-[10%] left-[8%] w-4 h-4 rounded-full bg-gradient-to-br from-zinc-700 to-black shadow-inner border border-white/10" />
            <div className="absolute bottom-[20%] left-[-2%] w-6 h-6 rounded-full bg-gradient-to-br from-zinc-800 to-black shadow-inner border border-white/10" />
            <div className="absolute bottom-[5%] right-[12%] w-5 h-5 rounded-full bg-gradient-to-br from-zinc-700 to-black shadow-inner border border-white/10" />
            
            {/* The Main Picture Circle */}
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-[6px] border-[#0c0c0e] shadow-[0_0_60px_rgba(168,85,247,0.2)] z-10 pointer-events-auto">
              <img 
                src={profileImage} 
                alt="Jaishree Baskaran" 
                className="w-full h-full object-cover object-center scale-[1.4] transition-transform duration-500 hover:scale-[1.5]"
              />
            </div>

            {/* Floating Glass Pills */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[-2%] left-[2%] z-20 flex items-center gap-3 px-4 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl pointer-events-auto"
            >
              <div className="p-2 bg-white/5 rounded-full border border-white/5">
                <Brain className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-xs font-bold text-white tracking-[0.15em] uppercase">AI / ML</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-[12%] right-[-8%] z-20 flex items-center gap-3 px-4 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl pointer-events-auto"
            >
              <div className="p-2 bg-white/5 rounded-full border border-white/5">
                <Globe className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-[10px] font-bold text-white tracking-[0.15em] leading-tight uppercase">
                SPACE<br/>ENTHUSIAST
              </span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-[20%] left-[-15%] z-20 flex items-center gap-3 px-4 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl pointer-events-auto"
            >
              <div className="p-2 bg-white/5 rounded-full border border-white/5">
                <BarChart className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-[10px] font-bold text-white tracking-[0.15em] leading-tight uppercase">
                DATA<br/>SCIENCE
              </span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              className="absolute bottom-[-2%] right-[8%] z-20 flex items-center gap-3 px-4 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl pointer-events-auto"
            >
              <div className="p-2 bg-white/5 rounded-full border border-white/5">
                <Code2 className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-[10px] font-bold text-white tracking-[0.15em] leading-tight uppercase">
                PROBLEM<br/>SOLVER
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* --- Skills Section --- */}
      <div className="relative z-10 w-full max-w-[1300px] mt-48 flex flex-col items-center">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-purple-400 tracking-[0.3em] uppercase block mb-3">
            // Core capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-white">
            Areas of Expertise
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillCategories.map((cat, idx) => (
             <motion.div 
               key={idx} 
               whileHover={{ y: -5 }} 
               className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-[2rem] p-8 shadow-2xl flex flex-col gap-6 hover:border-purple-500/20 transition-all duration-300"
             >
                <h3 className="text-lg font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                   {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3.5 py-1.5 bg-white/5 text-zinc-300 text-[10px] font-semibold uppercase tracking-widest rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                   ))}
                </div>
             </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Index;