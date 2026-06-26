import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden bg-transparent">
      
      {/* Background soft parchment shading */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#EFEAE2]/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#E5DFD3]/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1000px] flex flex-col gap-6">

        {/* Contact Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/40 border border-[#E5DFD3] text-[#1C1917] p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-lg rounded-[2.5rem] backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />

          <p className="text-xs uppercase tracking-[0.4em] text-[#6e1227] mb-6 font-bold">
            Connect
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-none uppercase font-serif text-[#1C1917]">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-[#6e1227]">
              Intelligent
            </span>
          </h1>

          <p className="text-zinc-600 mb-12 leading-relaxed max-w-xl font-light text-sm md:text-base">
            Whether you are looking to collaborate on research, discuss enterprise AI/ML solutions, or explore professional opportunities, my inbox is always open. Let's connect and build something impactful.
          </p>

          {/* Fun Interactive Grid (Reduced to 2 buttons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg mb-16">
            
            <a
              href="https://www.linkedin.com/in/jaishree-b-ab7718235"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/50 border border-[#E5DFD3] rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:border-[#6e1227]/30 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(110,18,39,0.05)]"
            >
              <Linkedin className="w-8 h-8 text-zinc-500 group-hover:text-[#6e1227] transition-colors" />
              <span className="font-semibold tracking-[0.2em] text-xs uppercase text-zinc-600 group-hover:text-[#1C1917]">LinkedIn</span>
            </a>

            <a
              href="https://github.com/Jaishree-baskaran"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/50 border border-[#E5DFD3] rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:border-[#6e1227]/30 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(110,18,39,0.05)]"
            >
              <Github className="w-8 h-8 text-zinc-500 group-hover:text-[#6e1227] transition-colors" />
              <span className="font-semibold tracking-[0.2em] text-xs uppercase text-zinc-600 group-hover:text-[#1C1917]">GitHub</span>
            </a>

          </div>

          {/* Resume View Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <a
              href="/resumes/JaishreeResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#6e1227] border border-[#6e1227]/20 text-white rounded-full hover:bg-[#540c1c] transition-all duration-300 text-xs tracking-widest font-bold uppercase shadow-[0_4px_25px_rgba(110,18,39,0.15)] hover:-translate-y-0.5"
            >
              Tech Resume
            </a>

            <a
              href="/resumes/Jays_design_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-transparent border border-[#6e1227] text-[#6e1227] rounded-full hover:bg-[#6e1227] hover:text-white transition-all duration-300 text-xs tracking-widest font-bold uppercase hover:-translate-y-0.5"
            >
              Design Resume
            </a>
          </div>

          <div className="mt-16 w-12 h-0.5 bg-[#E5DFD3] rounded-full mx-auto" />

          <p className="mt-8 text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase">
            © 2026 Jaishree Baskaran.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;