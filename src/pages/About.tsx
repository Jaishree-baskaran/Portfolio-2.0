import { motion } from "framer-motion";
import aboutImage from "@/assets/cool jb 2.jpeg";
import y2kBg from "@/assets/chrome-bg-2.png";

const educations = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    batch: "2026 Batch",
    details: "Specialized in Natural Language Processing, Database Management Systems, Advanced Programming Practices, and Data Transmission & Management. Topped core subjects including NLP, DBMS, APP, and DTM, with strong expertise across ML, AI, IoT, Robotics, and OS."
  },
  {
    institution: "Anna Adarsh Matriculation Higher Secondary School",
    degree: "Higher Secondary • Senior Secondary",
    batch: "2022 Batch",
    details: "Physics, Chemistry, Mathematics and Computer Science. Explored space research through participation and wins in multiple space-related competitions. Participated in various Olympiads and quiz competitions."
  }
];

const About = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background glow orbs for the About page */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-8">

        {/* Hero Card */}
        <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 md:p-16 relative flex flex-col xl:flex-row items-center gap-16 overflow-hidden rounded-[2.5rem] shadow-2xl">
           
           <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
           
           {/* LEFT CONTENT */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             className="flex-1 space-y-8 relative z-10"
           >
             <div className="text-xs font-semibold text-purple-400 tracking-[0.3em] uppercase">
               // Biography
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
               ABOUT ME
             </h1>

             <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />

             <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
               Jaishree Baskaran is an AI/ML Analyst and Software Engineer specializing in the design and development of intelligent computational systems. Sitting at the intersection of robust logic and technical innovation, she is dedicated to building scalable architectures that translate complex datasets into actionable intelligence.
               <br /><br />
               With a rigorous approach to system development and technical analysis, she prioritizes clarity, structural integrity, and composure in execution. She focuses on questioning assumptions, engineering with purpose, and delivering high-impact solutions.
               <br /><br />
               Her work is driven by a commitment to depth and operational excellence, ensuring that every project she leads or contributes to carries precise intent and responsible execution.
             </p>
           </motion.div>

           {/* RIGHT IMAGE */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="w-full xl:w-[420px] relative z-10 shrink-0"
           >
             <div className="relative rounded-[2.5rem] overflow-hidden p-2.5 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
               <div className="rounded-[2rem] overflow-hidden w-full aspect-[4/5] relative bg-black">
                 <img
                   src={aboutImage}
                   alt="Jaishree"
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-85 hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none mix-blend-overlay" />
               </div>
             </div>
           </motion.div>

        </div>

        {/* Core Domains of Focus - Portfolio POV Addition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-3">01 / Machine Learning</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Designing advanced prediction models, supervised/unsupervised classifiers, and neural networks to extract structural meaning from high-dimensional datasets.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-3">02 / Language Processing</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Leveraging transformers, large language models (LLMs), and RAG configurations to build highly responsive, context-aware semantic tools.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-3">03 / Software Architecture</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Constructing optimized database architectures and robust API endpoints with structured coding standards to scale algorithms efficiently.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden rounded-[2.5rem] shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest">
               Academic Background
             </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.01] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.03] transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-[10px] font-bold tracking-widest uppercase text-purple-400">
                    {edu.batch}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {edu.institution}
                </h3>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-purple-300/80 mb-6">
                  {edu.degree}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;