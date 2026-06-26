import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "@/assets/cool jb.jpeg";
import secondaryImage from "@/assets/cool jb 2.jpeg";
import { Brain, Globe, BarChart, Code2, ArrowRight } from "lucide-react";

// Import sample images for the 4 vertical cards
import electricityImg from "@/assets/Electricity.jpeg";
import numberImg from "@/assets/number.jpeg";
import radarImg from "@/assets/Radar.jpeg";
import f1Img from "@/assets/F1.jpeg";

const skillCategories = [
  {
    title: "Data Science & AI",
    skills: ["Machine Learning", "Artificial Intelligence", "NLP", "Deep Learning", "Transformers", "Regression Models", "LangChain", "LLMs", "RAG Applications", "Data Mining & Analytics"]
  },
  {
    title: "Technical Stack",
    skills: ["Python", "React", "HTML", "CSS", "JavaScript", "FastAPI", "MySQL", "TensorFlow", "Bootstrap", "PHP", "Matplotlib", "Power BI", "Flutter", "Pandas", "node.js", "Git"]
  },
  {
    title: "Design & Media",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Spline", "Notion", "Canva", "Video Editing", "Animation"]
  }
];

const Index = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#FAF9F6] text-[#1C1917] overflow-x-hidden">
      
      {/* 1. HERO BANNER: Full-Width Deep Red F1 Block */}
      <div className="w-full bg-[#E30613] pt-40 pb-44 px-4 md:px-12 relative overflow-hidden flex flex-col items-center justify-center z-10">
        {/* F1 Tech Grid Backdrop */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        
        {/* Large skewed background monogram */}
        <div className="absolute right-[-5%] bottom-[-5%] text-[15rem] md:text-[25rem] font-black italic tracking-tighter text-black/10 select-none pointer-events-none font-archivo uppercase skew-x-[-12deg]">
          JB
        </div>

        <div className="relative z-10 w-full max-w-[1250px] flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Hero Content */}
          <div className="flex-1 flex flex-col items-start gap-4">
            <div className="bg-black text-white px-3.5 py-1 text-[10px] font-black tracking-[0.25em] uppercase rounded skew-x-[-12deg]">
              <span className="block skew-x-[12deg]">// ENGINE RUNNING</span>
            </div>

            <h1 className="font-archivo font-black italic tracking-tighter text-white uppercase text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.9] skew-x-[-6deg]">
              WELCOME TO <br/>THE ARENA
            </h1>

            <p className="text-white/90 text-sm md:text-base font-medium max-w-lg mt-4 leading-relaxed font-sans">
              Engineering high-performance AI/ML models, optimizing data structures, and designing sleek digital interfaces.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Link to="/projects">
                <button className="px-7 py-3 rounded-full bg-white text-black font-archivo text-xs font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all shadow-md">
                  VIEW PROJECTS ↗
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-7 py-3 rounded-full border border-white text-white font-archivo text-xs font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                  CONTACT ME
                </button>
              </Link>
            </div>
          </div>

          {/* Right Hero Image Frame */}
          <div className="relative flex justify-center items-center w-full lg:w-auto">
            {/* Minimalist slanted picture box */}
            <div className="relative w-[280px] h-[340px] md:w-[340px] md:h-[420px] bg-white p-2.5 rounded-[2rem] shadow-2xl skew-y-[-2deg]">
              <div className="w-full h-full overflow-hidden rounded-[1.7rem] bg-zinc-100 relative">
                <img 
                  src={profileImage} 
                  alt="Jaishree" 
                  className="w-full h-full object-cover object-center scale-[1.3] transition-transform duration-500 hover:scale-[1.4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INFORMATION CARD: The Paper Overlay Effect */}
      <div className="w-full max-w-[1200px] px-4 z-20 -mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-[#E5DFD3]/40 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 flex flex-col items-start">
            <h2 className="font-archivo font-black tracking-tight text-2xl md:text-3xl uppercase mb-6 text-black border-b-[3px] border-[#E30613] pb-2">
              INFORMATION
            </h2>
            <p className="text-zinc-700 font-medium text-sm md:text-base leading-relaxed max-w-2xl font-sans">
              Jaishree Baskaran is an analytical AI/ML systems developer and computational researcher, engineering optimized solutions in data science, predictive modeling, and system architectures. Specializing in Deep Learning, NLP, and high-performance algorithms, she bridges mathematical rigor with modern application design.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <span className="px-3.5 py-1.5 bg-[#FAF9F6] border border-[#E5DFD3] rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                AI/ML Analyst at Canit Solutions
              </span>
              <span className="px-3.5 py-1.5 bg-[#FAF9F6] border border-[#E5DFD3] rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                President of Association of CSE
              </span>
            </div>
          </div>

          {/* Sunscreen style secondary visual */}
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2rem] overflow-hidden border border-[#E5DFD3] bg-zinc-50 shrink-0 shadow-inner">
            <img 
              src={secondaryImage} 
              alt="Jaishree Monogram Visual" 
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        </motion.div>
      </div>

      {/* 4. SPLIT HIGHLIGHT BLOCK: Split layout */}
      <div className="w-full max-w-[1200px] px-4 mt-28">
        <div className="w-full rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-lg min-h-[350px]">
          {/* Left Block: Speed Red Visual */}
          <div className="bg-[#E30613] relative overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
            <div className="text-white text-[120px] font-black italic tracking-tighter select-none font-archivo uppercase skew-x-[-12deg] opacity-25 absolute left-4 bottom-0 leading-none">
              F1
            </div>
            <div className="relative z-10 text-center">
              <h3 className="font-archivo font-black italic text-4xl text-white tracking-tighter uppercase leading-none skew-x-[-6deg]">
                FAST-PACED <br/>DEVELOPMENT
              </h3>
            </div>
          </div>

          {/* Right Block: Dark Charcoal information */}
          <div className="bg-[#1C1917] text-white p-8 md:p-14 flex flex-col justify-center">
            <h3 className="font-archivo font-black text-2xl uppercase tracking-wider mb-4 text-[#E30613]">
              ENGINEERING SPEED
            </h3>
            <p className="text-zinc-300 font-sans font-light text-sm md:text-base leading-relaxed">
              Applying agile methodology and rapid prototyping to machine learning research. Building high-throughput systems that process complex information datasets with absolute reliability.
            </p>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#E30613] hover:text-white uppercase transition-colors">
                MEET JAISHREE <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 5. SKILLS SECTION */}
      <div className="w-full max-w-[1200px] px-4 mt-28 pb-32">
        <h2 className="font-archivo font-black tracking-tight text-3xl uppercase mb-12 text-black text-center">
          CORE CAPABILITIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-sans">
          {skillCategories.map((cat, idx) => (
             <div 
               key={idx} 
               className="bg-white border border-[#E5DFD3] rounded-[2rem] p-8 shadow-sm flex flex-col gap-6 hover:border-[#E30613]/30 transition-all duration-300"
             >
                <h3 className="text-base font-archivo font-black uppercase tracking-wider text-[#E30613]">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                   {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3.5 py-1.5 bg-[#FAF9F6] text-zinc-700 text-[10px] font-bold uppercase tracking-widest rounded-xl border border-[#E5DFD3]/40 hover:bg-[#E5DFD3]/40 transition-colors"
                      >
                        {skill}
                      </span>
                   ))}
                </div>
             </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Index;