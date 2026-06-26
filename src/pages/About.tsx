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
      
      {/* Background shading for the About page */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#FAF7F2] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-8">

        {/* Hero Card */}
        <div className="bg-[#FCFAF7] border border-[#E5DFD3] p-8 md:p-16 relative flex flex-col xl:flex-row items-center gap-16 overflow-hidden rounded-[2.5rem] shadow-sm">
           
           <div className="absolute inset-0 bg-gradient-to-br from-white to-[#EFEAE2]/10 pointer-events-none" />
           
           {/* LEFT CONTENT */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             className="flex-1 space-y-8 relative z-10 font-sans"
           >
             <div className="text-xs font-bold text-[#E30613] tracking-[0.25em] uppercase font-sans">
               // Biography
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-archivo">
               ABOUT ME
             </h1>

             <div className="w-20 h-0.5 bg-[#E30613] rounded-full" />

             <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-2xl font-light">
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
             <div className="relative rounded-[2.5rem] overflow-hidden p-2.5 bg-white border border-[#E5DFD3] shadow-md">
               <div className="rounded-[2rem] overflow-hidden w-full aspect-[4/5] relative bg-zinc-100">
                 <img
                   src={aboutImage}
                   alt="Jaishree"
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#EFEAE2]/20 to-transparent pointer-events-none mix-blend-overlay" />
               </div>
             </div>
           </motion.div>

        </div>

        {/* Core Domains of Focus - Portfolio POV Addition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          <div className="bg-[#FCFAF7] border border-[#E5DFD3] p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-lg font-bold text-[#E30613] mb-3 font-archivo">01 / Machine Learning</h3>
            <p className="text-zinc-600 text-sm font-light leading-relaxed">
              Designing advanced prediction models, supervised/unsupervised classifiers, and neural networks to extract structural meaning from high-dimensional datasets.
            </p>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E5DFD3] p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-lg font-bold text-[#E30613] mb-3 font-archivo">02 / Language Processing</h3>
            <p className="text-zinc-600 text-sm font-light leading-relaxed">
              Leveraging transformers, large language models (LLMs), and RAG configurations to build highly responsive, context-aware semantic tools.
            </p>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E5DFD3] p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-lg font-bold text-[#E30613] mb-3 font-archivo">03 / Software Architecture</h3>
            <p className="text-zinc-600 text-sm font-light leading-relaxed">
              Constructing optimized database architectures and robust API endpoints with structured coding standards to scale algorithms efficiently.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-[#FCFAF7] border border-[#E5DFD3] p-8 md:p-12 relative overflow-hidden rounded-[2.5rem] shadow-sm font-sans">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="bg-[#E30613]/5 border border-[#E30613]/25 text-[#E30613] px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest">
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
                className="bg-white border border-[#E5DFD3]/60 p-8 rounded-[2rem] hover:border-[#E30613]/25 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="px-4 py-1.5 rounded-full bg-[#E30613]/5 border border-[#E30613]/20 text-[10px] font-bold tracking-widest uppercase text-[#E30613]">
                    {edu.batch}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1C1917] font-archivo">
                  {edu.institution}
                </h3>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E30613]/80 mb-6">
                  {edu.degree}
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed font-light font-sans">
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