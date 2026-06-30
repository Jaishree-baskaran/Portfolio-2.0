import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "@/assets/cool jb.jpeg";
import secondaryImage from "@/assets/cool jb 2.jpeg";
import jb2Image from "@/assets/jb 2.jpeg";
import jbProffImage from "@/assets/jb proff.jpg";
import { Brain, Globe, BarChart, Code2, ArrowRight, Pin } from "lucide-react";

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
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#FFF8EF] text-[#1C1917] overflow-x-hidden">
      
      {/* 1. HERO BANNER: Full-Width Deep Red F1 Block */}
      <div className="w-full bg-[#930500] pt-40 pb-44 px-4 md:px-12 relative overflow-hidden flex flex-col items-center justify-center z-10">
        {/* F1 Tech Grid Backdrop */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        
        {/* Large skewed background monogram */}
        <div className="absolute right-[-5%] bottom-[-5%] text-[15rem] md:text-[25rem] font-black italic tracking-tighter text-black/10 select-none pointer-events-none font-archivo uppercase skew-x-[-12deg]">
          JB
        </div>

        <div className="relative z-10 w-full max-w-[1250px] flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Hero Content */}
          <div className="flex-1 flex flex-col items-start gap-4">

            <h1 className="font-archivo font-black italic tracking-tighter text-white uppercase text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.9] skew-x-[-6deg]">
              JAISHREE <br/>BASKARAN
            </h1>

            <p className="text-white/90 text-sm md:text-base font-medium max-w-lg mt-4 leading-relaxed font-sans">
              Engineering high-performance AI/ML models, optimizing data structures, and designing sleek digital interfaces.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Link to="/projects">
                <button className="px-7 py-3 rounded-full bg-[#FFF8EF] text-black font-archivo text-xs font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all shadow-md">
                  VIEW PROJECTS ↗
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-7 py-3 rounded-full border border-white text-white font-archivo text-xs font-black tracking-widest uppercase hover:bg-[#FFF8EF] hover:text-black transition-all">
                  CONTACT ME
                </button>
              </Link>
            </div>
          </div>

          {/* Right Hero Column: Unified ID Card Visual */}
          <div className="relative flex justify-center items-center w-full lg:w-auto h-[480px] md:h-[580px] px-4 md:px-12 select-none shrink-0">
            
            {/* The ID Card Container */}
            <motion.div
              initial={{ rotate: -1.5 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[320px] h-[210px] md:w-[460px] md:h-[290px] bg-[#FFF8EF] border-[2.5px] border-[#1C1917] rounded-[2rem] shadow-2xl p-4 md:p-6 flex items-center justify-between gap-4 md:gap-6 overflow-hidden"
            >
              {/* Pushpin pinning the top edge */}
              <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 z-30 text-[#930500] drop-shadow-lg select-none pointer-events-none">
                <Pin className="w-8 h-8 md:w-10 md:h-10 rotate-[45deg]" />
              </div>

              {/* LEFT SIDE: Passport Photo Frame */}
              <div className="w-[100px] md:w-[140px] h-[160px] md:h-[220px] border border-dashed border-[#1C1917]/50 rounded-[1.2rem] p-1.5 flex flex-col justify-between relative bg-white shrink-0">
                {/* Year Label */}
                <span className="text-[7px] md:text-[9px] font-mono font-bold text-zinc-400">since 2005</span>
                
                {/* Profile Image */}
                <div className="w-full aspect-[4/5] overflow-hidden rounded-[0.8rem] bg-zinc-100 border border-zinc-200">
                  <img 
                    src={jbProffImage} 
                    alt="Jaishree ID" 
                    className="w-full h-full object-cover object-[center_28%] scale-[1.12]"
                  />
                </div>

                {/* Postage Ink Stamp Overlay (Moved to top space) */}
                <div className="absolute -top-4 -right-4 w-10 h-10 md:w-14 md:h-14 rounded-full border border-dashed border-[#930500]/60 flex items-center justify-center rotate-[-15deg] opacity-70 pointer-events-none select-none bg-transparent">
                  <span className="text-[6px] md:text-[8px] font-mono font-bold text-[#930500] leading-none text-center">SRM / IN<br/>2026</span>
                </div>
              </div>

              {/* RIGHT SIDE: Lined Notepad Text & Interests */}
              <div 
                className="flex-1 h-full flex flex-col justify-between py-1.5 pl-2 select-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(#FFF8EF, #FFF8EF 23px, #E5DFD3 24px)'
                }}
              >
                {/* Headers */}
                <div>
                  <h3 className="font-archivo font-black text-base md:text-xl tracking-tight text-[#930500] leading-none uppercase">
                    JAY
                  </h3>
                  <span className="text-[7px] md:text-[9px] font-mono tracking-widest text-zinc-400 uppercase">AI/ML & FULL-STACK ENGINEER</span>
                </div>

                {/* Interests List */}
                <div className="space-y-4 md:space-y-5 text-[8px] md:text-[11px] font-archivo font-bold text-[#1C1917] tracking-wider uppercase leading-none pl-1">
                  <div>● MACHINE LEARNING & AI</div>
                  <div>● SPACE ENTHUSIAST & SCIENCE</div>
                  <div>● DATA SCIENCE ARCHITECTURES</div>
                  <div>● COGNITIVE PROBLEM SOLVER</div>
                </div>

                {/* Bottom Stats */}
                <div className="flex justify-between items-center text-[6px] md:text-[8px] font-mono text-zinc-400">
                  <span>SINCE 2022</span>
                  <span>CHENNAI</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>

      {/* 2. INFORMATION CARD: The Paper Overlay Effect */}
      <div className="w-full max-w-[1200px] px-4 z-20 -mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFF8EF] rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-[#E5DFD3]/40 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 flex flex-col items-start">
            <h2 className="font-archivo font-black tracking-tight text-2xl md:text-3xl uppercase mb-4 text-black border-b-[3px] border-[#930500] pb-2">
              INFORMATION
            </h2>
            
            {/* Active Status Display */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#930500] animate-pulse shrink-0" />
              <span className="font-archivo font-black text-xs md:text-sm uppercase tracking-widest text-[#930500]">
                AI/ML Analyst at Canit Solutions
              </span>
            </div>

            <p className="text-zinc-700 font-medium text-sm md:text-base leading-relaxed max-w-2xl font-sans">
              I am an AI/ML Developer and Full-Stack Software Engineer driven by a passion for transforming complex computational concepts into high-impact digital realities. Leveraging expertise in deep learning, NLP, and modern web architectures, I engineer resilient smart city platforms, AI agents, and predictive analytics models that solve high-stakes problems.
            </p>
          </div>

          {/* Sunscreen style secondary visual */}
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2rem] overflow-hidden border border-[#E5DFD3] bg-zinc-50 shrink-0 shadow-inner">
            <img 
              src={profileImage} 
              alt="Jaishree Monogram Visual" 
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        </motion.div>
      </div>

      {/* 4. SPLIT HIGHLIGHT BLOCK: Split layout */}
      <div className="w-full max-w-[1200px] px-4 mt-28">
        <div className="w-full rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-lg min-h-[350px]">
          {/* Left Block: Telemetry Speed Red Visual */}
          <div className="bg-[#930500] relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 min-h-[300px]">
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
            
            {/* Animated Telemetry Graph */}
            <div className="relative w-full max-w-[340px] flex flex-col gap-4">
              <div className="flex justify-between items-center text-[10px] text-white/80 font-mono font-black tracking-widest bg-black/15 px-3 py-1 rounded">
                <span>GEAR 8</span>
                <span className="text-white/40">|</span>
                <span>RPM 12,420</span>
                <span className="text-white/40">|</span>
                <span className="text-white">328 KM/H</span>
              </div>
              
              <div className="relative h-[120px] bg-black/10 rounded-2xl border border-white/10 p-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 300 100" className="w-full h-full text-white" stroke="currentColor" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  
                  {/* Live Telemetry Path */}
                  <motion.path
                    d="M 10 70 Q 50 20 90 60 T 170 30 T 250 80 T 290 40"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Glowing telemetry tracker dot */}
                  <motion.circle
                    r="4"
                    fill="#FFFFFF"
                    className="shadow-lg"
                    animate={{
                      cx: [10, 50, 90, 130, 170, 210, 250, 290],
                      cy: [70, 40, 60, 45, 30, 55, 80, 40]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>

              <div className="text-center">
                <h3 className="font-archivo font-black italic text-2xl text-white tracking-tighter uppercase leading-none skew-x-[-6deg]">
                  FAST-PACED DEVELOPMENT
                </h3>
              </div>
            </div>
          </div>

          {/* Right Block: Dark Charcoal information */}
          <div className="bg-[#1C1917] text-white p-8 md:p-14 flex flex-col justify-center">
            <h3 className="font-archivo font-black text-2xl uppercase tracking-wider mb-4 text-[#930500]">
              ENGINEERING SPEED
            </h3>
            <p className="text-zinc-300 font-sans font-light text-sm md:text-base leading-relaxed">
              Applying agile methodology and rapid prototyping to machine learning research. Building high-throughput systems that process complex information datasets with absolute reliability.
            </p>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#930500] hover:text-white uppercase transition-colors">
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
               className="bg-[#FFF8EF] border border-[#E5DFD3] rounded-[2rem] p-8 shadow-sm flex flex-col gap-6 hover:border-[#930500]/30 transition-all duration-300"
             >
                <h3 className="text-base font-archivo font-black uppercase tracking-wider text-[#930500]">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                   {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3.5 py-1.5 bg-[#FFF8EF] text-zinc-700 text-[10px] font-bold uppercase tracking-widest rounded-xl border border-[#E5DFD3]/40 hover:bg-[#E5DFD3]/40 transition-colors"
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
