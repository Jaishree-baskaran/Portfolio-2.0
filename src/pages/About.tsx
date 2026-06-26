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
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden">
      
      {/* Y2K Tribal Chrome Background Elements */}
      <div className="fixed inset-0 z-0 bg-[#ebebeb] pointer-events-none overflow-hidden">
        <img src={y2kBg} alt="Y2K Chrome Background" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.85]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-6">

        {/* Hero Pill */}
        <div className="glass-pill bg-[#0a0a0a] text-white p-8 md:p-16 relative flex flex-col xl:flex-row items-center gap-16 overflow-hidden shadow-2xl">
           
           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
           
           {/* LEFT CONTENT */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             className="flex-1 space-y-10 relative z-10"
           >
             <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
               ABOUT ME
             </h1>

             <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full" />

             <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
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
             className="w-full xl:w-[450px] relative z-10 shrink-0"
           >
             <div className="relative rounded-[2rem] overflow-hidden p-3 bg-gradient-to-tr from-white/10 to-white/30 backdrop-blur-md shadow-2xl">
               <div className="rounded-[1.5rem] overflow-hidden w-full aspect-[4/5] relative bg-black">
                 <img
                   src={aboutImage}
                   alt="Jaishree"
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-80 hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/10 pointer-events-none mix-blend-overlay" />
               </div>
             </div>
           </motion.div>

        </div>

        {/* Education Section */}
        <div className="glass-pill bg-[#0a0a0a] text-white p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="bg-gradient-to-r from-white to-gray-300 text-black px-8 py-3 rounded-full font-bold text-sm md:text-base uppercase tracking-widest shadow-lg">
               Education
             </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase text-white/80">
                    {edu.batch}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {edu.institution}
                </h3>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-6">
                  {edu.degree}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed font-light">
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