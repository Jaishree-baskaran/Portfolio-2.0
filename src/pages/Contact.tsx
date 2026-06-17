import { motion } from "framer-motion";
import { Github, Linkedin, Send, Coffee } from "lucide-react";
import y2kBg from "@/assets/chrome-bg-3.png";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center pt-40 pb-20 px-4 md:px-12 overflow-x-hidden">
      
      {/* Y2K Tribal Chrome Background Elements */}
      <div className="fixed inset-0 z-0 bg-[#ebebeb] pointer-events-none overflow-hidden">
        <img src={y2kBg} alt="Y2K Chrome Background" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.85] -scale-x-100 -scale-y-100" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-[1000px] flex flex-col gap-6">

        {/* Contact Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-pill bg-[#0a0a0a] text-white p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />

          <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-bold">
            Connect
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Intelligent
            </span>
          </h1>

          <p className="text-white/60 mb-12 leading-relaxed max-w-lg font-light">
            Whether you want to discuss the future of AI, collaborate on a groundbreaking project, my inbox is always open. Let's make something amazing.
          </p>

          {/* Fun Interactive Grid (Reduced to 2 buttons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg mb-16">
            
            <a
              href="https://www.linkedin.com/in/jaishree-b-ab7718235"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
            >
              <Linkedin className="w-8 h-8 text-white/70 group-hover:text-black transition-colors" />
              <span className="font-bold tracking-widest text-xs uppercase">LinkedIn</span>
            </a>

            <a
              href="https://github.com/Jaishree-baskaran"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
            >
              <Github className="w-8 h-8 text-white/70 group-hover:text-black transition-colors" />
              <span className="font-bold tracking-widest text-xs uppercase">GitHub</span>
            </a>

          </div>

          {/* Resume View Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <a
              href="/resumes/JaishreeResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors duration-300 text-xs tracking-widest font-bold uppercase"
            >
              Tech Resume
            </a>

            <a
              href="/resumes/Jays_design_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors duration-300 text-xs tracking-widest font-bold uppercase"
            >
              Design Resume
            </a>
          </div>

          <div className="mt-16 w-12 h-1 bg-white/20 rounded-full mx-auto" />

          <p className="mt-8 text-xs text-white/40 font-bold tracking-widest uppercase">
            © 2026 Jaishree Baskaran.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;