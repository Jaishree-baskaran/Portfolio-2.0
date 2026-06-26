import { motion } from "framer-motion";
import y2kBg from "@/assets/chrome-bg-1.png";

const workExperience = [
  { company: "CANIT Solutions", role: "Software Developer Intern", time: "Jan 2026", type: "WORK" },
  { company: "SIMS Hospital", role: "Web App Developer Intern", time: "2025", type: "WORK" },
  { company: "Revature", role: "AI/ML Developer Intern", time: "2025", type: "WORK" },
  { company: "Rotork", role: "Software Engineer Intern", time: "2024", type: "WORK" },
];

const leadershipExperience = [
  { company: "Association of Computer Science Engineers", role: "President", time: "University", type: "LEADERSHIP" },
  { company: "Campus Newsletter", role: "Editorial Head", time: "University", type: "LEADERSHIP" },
  { company: "Cybernetics Club", role: "Secretary & Asst. Secretary", time: "2020 - 2022", type: "LEADERSHIP" },
];

const Experience = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background glow orbs for the Experience page */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-8">

        {/* Title Pill (Reduced Size) */}
        <div className="bg-white/[0.02] border border-white/5 px-8 py-5 flex items-center justify-center relative overflow-hidden rounded-[2rem] shadow-2xl backdrop-blur-md">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] relative z-10 text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Professional Journey
          </h1>
        </div>

        {/* Professional Jobs Section */}
        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-12 relative overflow-hidden rounded-[2.5rem] shadow-2xl backdrop-blur-md">
           <div className="flex items-center gap-4 mb-10">
             <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1.</div>
             <h2 className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest">
               Work History
             </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
             {workExperience.map((exp, index) => {
               let spanClasses = "col-span-1 row-span-1";
               if (index === 0) spanClasses = "md:col-span-2 md:row-span-2"; // First work exp is huge

               return (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.05 }}
                   whileHover={{ scale: 0.98 }}
                   className={`relative bg-white/[0.01] border border-white/5 rounded-[2rem] p-8 overflow-hidden group cursor-pointer shadow-xl backdrop-blur-md flex flex-col justify-between hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 ${spanClasses}`}
                 >
                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="relative z-10 flex justify-between items-start">
                     <span className="px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[9px] font-bold tracking-widest uppercase text-purple-300">
                       {exp.type}
                     </span>
                     <span className="text-zinc-500 font-bold tracking-widest text-xs uppercase">
                       {exp.time}
                     </span>
                   </div>

                   <div className="relative z-10 mt-auto">
                     <h3 className={`font-extrabold tracking-tight text-white mb-2 leading-tight ${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                       {exp.company}
                     </h3>
                     <p className={`text-zinc-400 font-semibold uppercase tracking-wider ${index === 0 ? 'text-xs md:text-sm' : 'text-[10px]'}`}>
                       {exp.role}
                     </p>
                   </div>
                 </motion.div>
               );
             })}
           </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-12 relative overflow-hidden rounded-[2.5rem] shadow-2xl backdrop-blur-md">
           <div className="flex items-center gap-4 mb-10">
             <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2.</div>
             <h2 className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest">
               Leadership & Impact
             </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
             {leadershipExperience.map((exp, index) => {
               let spanClasses = "col-span-1 row-span-1";
               if (index === 0) spanClasses = "md:col-span-2 row-span-1"; // President is wider

               return (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   whileHover={{ y: -5 }}
                   className={`relative bg-white/[0.01] border border-white/5 rounded-[2rem] p-8 overflow-hidden group cursor-pointer shadow-xl backdrop-blur-md flex flex-col justify-between hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 ${spanClasses}`}
                 >
                   <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="relative z-10 flex justify-between items-start">
                     <span className="px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[9px] font-bold tracking-widest uppercase text-purple-300">
                       {exp.type}
                     </span>
                     <span className="text-zinc-500 font-bold tracking-widest text-xs uppercase">
                       {exp.time}
                     </span>
                   </div>

                   <div className="relative z-10 mt-auto">
                     <h3 className="text-xl font-bold tracking-tight text-white mb-2 leading-tight">
                       {exp.company}
                     </h3>
                     <p className="text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">
                       {exp.role}
                     </p>
                   </div>
                 </motion.div>
               );
             })}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;