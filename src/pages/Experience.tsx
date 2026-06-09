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
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden">
      
      {/* Y2K Tribal Chrome Background Elements */}
      <div className="fixed inset-0 z-0 bg-[#ebebeb] pointer-events-none overflow-hidden">
        <img src={y2kBg} alt="Y2K Chrome Background" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.85] -scale-x-100" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-6">

        {/* Title Pill (Reduced Size) */}
        <div className="glass-pill bg-[#0a0a0a] text-white px-8 py-5 flex items-center justify-center relative overflow-hidden shadow-2xl">
          <h1 className="text-2xl md:text-3xl font-black tracking-[0.3em] relative z-10 text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Professional Journey
          </h1>
        </div>

        {/* Professional Jobs Section */}
        <div className="glass-pill bg-[#0a0a0a] text-white p-6 md:p-12 relative overflow-hidden shadow-2xl">
           <div className="flex items-center gap-4 mb-10">
             <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-base shrink-0">1.</div>
             <h2 className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest">
               Professional Jobs
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
                   className={`relative bg-gradient-to-br from-white/10 to-black/50 border border-white/10 rounded-[2rem] p-8 overflow-hidden group cursor-pointer shadow-xl backdrop-blur-md flex flex-col justify-between ${spanClasses}`}
                 >
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="relative z-10 flex justify-between items-start">
                     <span className="px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-white/70">
                       {exp.type}
                     </span>
                     <span className="text-white/40 font-black tracking-widest text-sm uppercase">
                       {exp.time}
                     </span>
                   </div>

                   <div className="relative z-10 mt-auto">
                     <h3 className={`font-black tracking-tight text-white mb-2 leading-tight ${index === 0 ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
                       {exp.company}
                     </h3>
                     <p className={`text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 font-bold uppercase tracking-widest ${index === 0 ? 'text-sm md:text-base' : 'text-xs'}`}>
                       {exp.role}
                     </p>
                   </div>
                 </motion.div>
               );
             })}
           </div>
        </div>

        {/* Leadership Section */}
        <div className="glass-pill bg-[#0a0a0a] text-white p-6 md:p-12 relative overflow-hidden shadow-2xl">
           <div className="flex items-center gap-4 mb-10">
             <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-base shrink-0">2.</div>
             <h2 className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest">
               Leadership
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
                   className={`relative bg-white/5 border border-white/10 rounded-[2rem] p-8 overflow-hidden group cursor-pointer shadow-xl backdrop-blur-md flex flex-col justify-between ${spanClasses}`}
                 >
                   <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="relative z-10 flex justify-between items-start">
                     <span className="px-4 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-white/50">
                       {exp.type}
                     </span>
                     <span className="text-white/30 font-black tracking-widest text-xs uppercase">
                       {exp.time}
                     </span>
                   </div>

                   <div className="relative z-10 mt-auto">
                     <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-2 leading-tight">
                       {exp.company}
                     </h3>
                     <p className="text-white/60 font-bold uppercase tracking-widest text-xs">
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