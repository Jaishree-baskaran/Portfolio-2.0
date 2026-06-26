import { motion } from "framer-motion";

const workExperience = [
  {
    company: "CANIT Solutions",
    role: "Software Developer Intern",
    time: "Jan 2026",
    type: "WORK",
    details: [
      "Engineered high-performance machine learning pipelines and optimized database queries to improve execution speeds.",
      "Integrated secure FastAPI endpoints, facilitating smooth data ingestion for Large Language Model (LLM) workflows.",
      "Optimized query execution times and designed scalable backend schemas."
    ]
  },
  {
    company: "SIMS Hospital",
    role: "Web App Developer Intern",
    time: "2025",
    type: "WORK",
    details: [
      "Designed and deployed responsive web dashboards, improving real-time access to patient diagnostics.",
      "Enhanced frontend loading speeds by 30% through modular component structures and lazy loading patterns.",
      "Assisted in configuring access controls to comply with secure clinical data management guidelines."
    ]
  },
  {
    company: "Revature",
    role: "AI/ML Developer Intern",
    time: "2025",
    type: "WORK",
    details: [
      "Built and evaluated predictive ML models utilizing classification and regression techniques.",
      "Engineered automated data preprocessing pipelines to clean and structure high-dimensional telemetry data.",
      "Integrated Natural Language Processing (NLP) models into existing developer workflows."
    ]
  },
  {
    company: "Rotork",
    role: "Software Engineer Intern",
    time: "2024",
    type: "WORK",
    details: [
      "Developed modular firmware scripts and integrated third-party hardware interface APIs.",
      "Created automated test cases for system validation, raising test coverage by 20%.",
      "Collaborated with cross-functional engineering teams on code reviews and system documentation."
    ]
  }
];

const leadershipExperience = [
  {
    company: "Association of Computer Science Engineers",
    role: "President",
    time: "University",
    type: "LEADERSHIP",
    details: [
      "Led an executive team of 15 members to plan and execute major inter-university technical symposiums.",
      "Organized coding bootcamps, workshops on emerging technologies, and expert guest lectures.",
      "Facilitated collaborations with industry partners for student placement prep programs."
    ]
  },
  {
    company: "Campus Newsletter",
    role: "Editorial Head",
    time: "University",
    type: "LEADERSHIP",
    details: [
      "Oversaw the end-to-end design, curation, copyediting, and print layout of the campus newsletter.",
      "Managed a team of 10 student journalists, coordinating coverage of academic events.",
      "Implemented digital newsletters to expand readership by 40%."
    ]
  },
  {
    company: "Cybernetics Club",
    role: "Secretary & Assistant Secretary",
    time: "2020 - 2022",
    type: "LEADERSHIP",
    details: [
      "Coordinated club activities, robotics exhibitions, and hackathons.",
      "Conducted weekly workshops introducing microcontroller systems and basic IoT.",
      "Represented the club in regional inter-college robotics competitions."
    ]
  }
];

const Experience = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background shading for the Experience page */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#EFEAE2]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#FAF9F6] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col gap-16">

        {/* Title */}
        <div className="bg-white border border-[#E5DFD3] px-8 py-5 flex items-center justify-center relative overflow-hidden rounded-[2rem] shadow-sm backdrop-blur-md">
          <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] relative z-10 text-center uppercase text-[#1C1917] font-archivo">
            Professional Journey
          </h1>
        </div>

        {/* Professional Jobs Section */}
        <div className="bg-white border border-[#E5DFD3] p-6 md:p-12 relative overflow-hidden rounded-[2.5rem] shadow-sm backdrop-blur-md">
           <div className="flex items-center gap-4 mb-12">
             <div className="w-10 h-10 bg-[#E30613] text-white rounded-full flex items-center justify-center font-archivo font-black text-sm shrink-0">1.</div>
             <h2 className="text-[#E30613] font-archivo font-black text-sm uppercase tracking-widest">
               Work History
             </h2>
           </div>
           
           {/* Timeline list */}
           <div className="relative border-l-2 border-[#E5DFD3] ml-5 md:ml-8 pl-6 md:pl-10 space-y-12">
             {workExperience.map((exp, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="relative group"
               >
                 {/* Timeline node */}
                 <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-[8px] h-[8px] rounded-full bg-[#FAF9F6] border-2 border-[#E30613] group-hover:scale-150 transition-all duration-300 z-10 bg-white" />
                 
                 <div className="bg-[#FAF9F6] border border-[#E5DFD3]/60 rounded-3xl p-6 md:p-8 hover:border-[#E30613]/20 hover:shadow-md transition-all duration-300">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                     <div>
                       <span className="text-[#E30613] font-archivo font-black text-[10px] tracking-widest uppercase mr-3">
                         {exp.type}
                       </span>
                       <h3 className="text-xl font-black text-[#1C1917] font-archivo inline-block">
                         {exp.company}
                       </h3>
                     </div>
                     <span className="text-zinc-500 font-bold tracking-widest text-xs uppercase font-archivo md:text-right">
                       {exp.time}
                     </span>
                   </div>
                   
                   <h4 className="text-zinc-600 font-bold uppercase tracking-wider text-xs mb-4 font-archivo">
                     {exp.role}
                   </h4>

                   <ul className="space-y-2 list-disc list-inside text-zinc-600 text-sm font-light font-sans">
                     {exp.details.map((detail, idx) => (
                       <li key={idx} className="leading-relaxed pl-1">
                         <span className="relative left-[-2px]">{detail}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-white border border-[#E5DFD3] p-6 md:p-12 relative overflow-hidden rounded-[2.5rem] shadow-sm backdrop-blur-md">
           <div className="flex items-center gap-4 mb-12">
             <div className="w-10 h-10 bg-[#E30613] text-white rounded-full flex items-center justify-center font-archivo font-black text-sm shrink-0">2.</div>
             <h2 className="text-[#E30613] font-archivo font-black text-sm uppercase tracking-widest">
               Leadership & Impact
             </h2>
           </div>
           
           {/* Timeline list */}
           <div className="relative border-l-2 border-[#E5DFD3] ml-5 md:ml-8 pl-6 md:pl-10 space-y-12">
             {leadershipExperience.map((exp, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="relative group"
               >
                 {/* Timeline node */}
                 <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-[8px] h-[8px] rounded-full bg-[#FAF9F6] border-2 border-[#E30613] group-hover:scale-150 transition-all duration-300 z-10 bg-white" />
                 
                 <div className="bg-[#FAF9F6] border border-[#E5DFD3]/60 rounded-3xl p-6 md:p-8 hover:border-[#E30613]/20 hover:shadow-md transition-all duration-300">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                     <div>
                       <span className="text-[#E30613] font-archivo font-black text-[10px] tracking-widest uppercase mr-3">
                         {exp.type}
                       </span>
                       <h3 className="text-xl font-black text-[#1C1917] font-archivo inline-block">
                         {exp.company}
                       </h3>
                     </div>
                     <span className="text-zinc-500 font-bold tracking-widest text-xs uppercase font-archivo md:text-right">
                       {exp.time}
                     </span>
                   </div>
                   
                   <h4 className="text-zinc-600 font-bold uppercase tracking-wider text-xs mb-4 font-archivo">
                     {exp.role}
                   </h4>

                   <ul className="space-y-2 list-disc list-inside text-zinc-600 text-sm font-light font-sans">
                     {exp.details.map((detail, idx) => (
                       <li key={idx} className="leading-relaxed pl-1">
                         <span className="relative left-[-2px]">{detail}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;