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
      <div className="w-full bg-[#D05340] pt-40 pb-44 px-4 md:px-12 relative overflow-hidden flex flex-col items-center justify-center z-10">
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
          <div className="relative flex justify-center items-center w-full lg:w-auto h-[450px] md:h-[550px] px-8 py-12 select-none shrink-0">
            
            {/* Concentric Circles Background */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border border-white/20 rounded-full pointer-events-none z-0" />
            <div className="absolute w-[400px] h-[400px] md:w-[520px] md:h-[520px] border border-white/10 rounded-full pointer-events-none z-0" />

            {/* Circular Profile Photo Frame */}
            <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border-4 border-white shadow-2xl overflow-hidden bg-zinc-100 z-10 flex-shrink-0">
              <img 
                src={profileImage} 
                alt="Jaishree" 
                className="w-full h-full object-cover object-center scale-[1.3] transition-transform duration-500 hover:scale-[1.4]"
              />
            </div>

            {/* Floating Badges */}
            {/* 1. AI/ML: Top Left */}
            <div className="absolute -translate-x-[75px] -translate-y-[100px] md:-translate-x-[115px] md:-translate-y-[130px] z-20 flex items-center gap-2.5 bg-[#FAF9F6]/95 border border-[#E5DFD3] py-2 px-3.5 rounded-2xl shadow-md backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-[#D05340]/10 flex items-center justify-center text-[#D05340] shrink-0">
                <Brain size={14} />
              </div>
              <span className="font-archivo font-black text-[9px] md:text-[10px] tracking-widest text-[#1C1917] uppercase leading-none">AI / ML</span>
            </div>

            {/* 2. Space Enthusiast: Mid-Right */}
            <div className="absolute translate-x-[95px] -translate-y-[50px] md:translate-x-[145px] md:-translate-y-[65px] z-20 flex items-center gap-2.5 bg-[#FAF9F6]/95 border border-[#E5DFD3] py-2 px-3.5 rounded-2xl shadow-md backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-[#D05340]/10 flex items-center justify-center text-[#D05340] shrink-0">
                <Globe size={14} />
              </div>
              <span className="font-archivo font-black text-[9px] md:text-[10px] tracking-widest text-[#1C1917] uppercase leading-none text-left">
                Space <br className="hidden md:block" />Enthusiast
              </span>
            </div>

            {/* 3. Data Science: Bottom Left */}
            <div className="absolute -translate-x-[100px] translate-y-[70px] md:-translate-x-[150px] md:translate-y-[90px] z-20 flex items-center gap-2.5 bg-[#FAF9F6]/95 border border-[#E5DFD3] py-2 px-3.5 rounded-2xl shadow-md backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-[#D05340]/10 flex items-center justify-center text-[#D05340] shrink-0">
                <BarChart size={14} />
              </div>
              <span className="font-archivo font-black text-[9px] md:text-[10px] tracking-widest text-[#1C1917] uppercase leading-none text-left">
                Data <br className="hidden md:block" />Science
              </span>
            </div>

            {/* 4. Problem Solver: Bottom Right */}
            <div className="absolute translate-x-[65px] translate-y-[110px] md:translate-x-[100px] md:translate-y-[145px] z-20 flex items-center gap-2.5 bg-[#FAF9F6]/95 border border-[#E5DFD3] py-2 px-3.5 rounded-2xl shadow-md backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-[#D05340]/10 flex items-center justify-center text-[#D05340] shrink-0">
                <Code2 size={14} />
              </div>
              <span className="font-archivo font-black text-[9px] md:text-[10px] tracking-widest text-[#1C1917] uppercase leading-none text-left">
                Problem <br className="hidden md:block" />Solver
              </span>
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
            <h2 className="font-archivo font-black tracking-tight text-2xl md:text-3xl uppercase mb-4 text-black border-b-[3px] border-[#D05340] pb-2">
              INFORMATION
            </h2>
            
            {/* Active Status Display */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D05340] animate-pulse shrink-0" />
              <span className="font-archivo font-black text-xs md:text-sm uppercase tracking-widest text-[#D05340]">
                AI/ML Analyst at Canit Solutions
              </span>
            </div>

            <p className="text-zinc-700 font-medium text-sm md:text-base leading-relaxed max-w-2xl font-sans">
              Jaishree Baskaran is an AI/ML developer and full-stack software engineer passionate about creating intelligent, scalable, and user-focused applications. With expertise in machine learning, deep learning, natural language processing, and modern web technologies, she builds innovative solutions that bridge artificial intelligence with seamless digital experiences.
            </p>
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
          {/* Left Block: Telemetry Speed Red Visual */}
          <div className="bg-[#D05340] relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 min-h-[300px]">
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
            <h3 className="font-archivo font-black text-2xl uppercase tracking-wider mb-4 text-[#D05340]">
              ENGINEERING SPEED
            </h3>
            <p className="text-zinc-300 font-sans font-light text-sm md:text-base leading-relaxed">
              Applying agile methodology and rapid prototyping to machine learning research. Building high-throughput systems that process complex information datasets with absolute reliability.
            </p>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#D05340] hover:text-white uppercase transition-colors">
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
               className="bg-white border border-[#E5DFD3] rounded-[2rem] p-8 shadow-sm flex flex-col gap-6 hover:border-[#D05340]/30 transition-all duration-300"
             >
                <h3 className="text-base font-archivo font-black uppercase tracking-wider text-[#D05340]">
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
