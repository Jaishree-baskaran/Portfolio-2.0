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
    <div className="relative min-h-screen w-full flex flex-col items-center pt-32 pb-32 px-4 md:px-12 overflow-hidden bg-gradient-to-br from-white via-[#f4f6f9] to-[#e8ebf2]">
      
      {/* Pure CSS Chrome Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-gray-200 via-gray-100 to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-indigo-100 via-purple-50 to-transparent opacity-50 blur-2xl pointer-events-none" />
      <div className="absolute bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-blue-100 via-gray-100 to-transparent opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-purple-100 via-indigo-50 to-transparent opacity-40 blur-2xl pointer-events-none" />

      {/* Metallic Sparkle Dots */}
      <div className="absolute top-[18%] left-[28%] w-2 h-2 bg-gradient-to-br from-white to-gray-400 rounded-full shadow-[0_0_12px_3px_rgba(100,100,180,0.15)]" />
      <div className="absolute top-[35%] right-[22%] w-2.5 h-2.5 bg-gradient-to-br from-white to-gray-300 rounded-full shadow-[0_0_15px_4px_rgba(100,100,180,0.1)]" />
      <div className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 bg-gradient-to-br from-white to-gray-400 rounded-full shadow-[0_0_10px_2px_rgba(100,100,180,0.15)]" />
      <div className="absolute top-[60%] right-[35%] w-1 h-1 bg-gradient-to-br from-white to-gray-300 rounded-full shadow-[0_0_8px_2px_rgba(100,100,180,0.1)]" />

      <div className="relative z-10 w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
        
        {/* Left Column: Typography & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start gap-3"
        >
          <div className="text-xl md:text-2xl text-gray-500 font-medium flex items-center gap-2 tracking-wide">
            Hi, I'm
          </div>

          <div className="flex flex-col tracking-tighter leading-[0.85] mt-2">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-black text-black uppercase">
              JAISHREE
            </h1>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600 pb-2">
              BASKARAN
            </h1>
          </div>

          <p className="text-gray-700 text-lg md:text-xl font-medium max-w-md mt-4 leading-relaxed tracking-wide">
            Building AI systems,<br/>
            exploring space data,<br/>
            and occasionally breaking things.
          </p>

          <div className="mt-6 flex items-center gap-3 rounded-full border border-purple-200 bg-[#f4effc] px-5 py-2 shadow-sm">
            <span className="text-[11px] font-bold text-purple-800 tracking-widest uppercase">
              Working as AI/ML Analyst at Canit Solutions
            </span>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Link to="/projects">
              <button className="px-8 py-3.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg">
                VIEW PROJECTS ↗
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3.5 rounded-full border border-gray-400 text-gray-800 bg-transparent text-xs font-bold tracking-widest uppercase hover:border-black hover:text-black transition-colors flex items-center gap-2">
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
          <div className="absolute inset-0 m-auto w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-gray-300 shadow-[0_0_40px_rgba(0,0,0,0.03)] flex items-center justify-center pointer-events-none">
            {/* Tiny Metallic Spheres on Orbit */}
            <div className="absolute top-[10%] left-[8%] w-4 h-4 rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[0_2px_5px_rgba(0,0,0,0.2)] border border-gray-200" />
            <div className="absolute bottom-[20%] left-[-2%] w-6 h-6 rounded-full bg-gradient-to-br from-white to-gray-500 shadow-[0_4px_10px_rgba(0,0,0,0.3)] border border-gray-300" />
            <div className="absolute bottom-[5%] right-[12%] w-5 h-5 rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[0_2px_8px_rgba(0,0,0,0.2)] border border-gray-200" />
            <div className="absolute top-[30%] right-[-2%] w-3 h-3 rounded-full bg-gradient-to-br from-white to-gray-300 shadow-[0_1px_4px_rgba(0,0,0,0.2)] border border-gray-200" />
            
            {/* The Main Picture Circle */}
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-10 pointer-events-auto">
              <img 
                src={profileImage} 
                alt="Jaishree Baskaran" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Glass Pills */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[-2%] left-[2%] z-20 flex items-center gap-3 px-4 py-2.5 bg-white/90 backdrop-blur-md border border-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
            >
              <div className="p-2 bg-gray-100 rounded-full border border-gray-200">
                <Brain className="w-5 h-5 text-gray-800" />
              </div>
              <span className="text-sm font-black text-black tracking-widest uppercase">AI / ML</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-[12%] right-[-8%] z-20 flex items-center gap-3 px-4 py-2.5 bg-white/90 backdrop-blur-md border border-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
            >
              <div className="p-2 bg-gray-100 rounded-full border border-gray-200">
                <Globe className="w-5 h-5 text-gray-800" />
              </div>
              <span className="text-[11px] font-black text-black tracking-widest leading-tight uppercase">
                SPACE<br/>ENTHUSIAST
              </span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-[20%] left-[-15%] z-20 flex items-center gap-3 px-4 py-2.5 bg-white/90 backdrop-blur-md border border-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
            >
              <div className="p-2 bg-gray-100 rounded-full border border-gray-200">
                <BarChart className="w-5 h-5 text-gray-800" />
              </div>
              <span className="text-[11px] font-black text-black tracking-widest leading-tight uppercase">
                DATA<br/>SCIENCE
              </span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              className="absolute bottom-[-2%] right-[8%] z-20 flex items-center gap-3 px-4 py-2.5 bg-white/90 backdrop-blur-md border border-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
            >
              <div className="p-2 bg-gray-100 rounded-full border border-gray-200">
                <Code2 className="w-5 h-5 text-gray-800" />
              </div>
              <span className="text-[11px] font-black text-black tracking-widest leading-tight uppercase">
                PROBLEM<br/>SOLVER
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* --- Skills Section --- */}
      <div className="relative z-10 w-full max-w-[1300px] mt-40 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-black mb-16 text-center drop-shadow-sm">
          My Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {skillCategories.map((cat, idx) => (
             <motion.div 
               key={idx} 
               whileHover={{ y: -5 }} 
               className="bg-white/70 backdrop-blur-md border border-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex flex-col gap-5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300"
             >
                <h3 className="text-xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 tracking-wide">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                   {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-4 py-2 bg-white/80 text-gray-800 text-[11px] font-black uppercase tracking-widest rounded-xl border border-gray-200 shadow-sm"
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