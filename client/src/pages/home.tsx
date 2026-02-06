import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, ShieldCheck, Trophy, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-secondary selection:text-primary overflow-x-hidden" ref={containerRef}>
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/hero-exterior.png" 
            alt="Luxury High Rise" 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1 border border-secondary/30 rounded-full text-secondary text-xs uppercase tracking-[0.4em] mb-8 backdrop-blur-sm bg-secondary/5">
              The Epitome of Living
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif font-black leading-[0.85] tracking-tighter mb-12">
              Govira<br/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/70 to-secondary/30">ESTATES</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
              <Button className="bg-secondary hover:bg-white text-primary px-12 py-8 rounded-none text-xl font-bold transition-all duration-500 group">
                EXPLORE CURATED UNITS
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </motion.span>
              </Button>
              <div className="flex items-center gap-4 text-left">
                <div className="h-12 w-[1px] bg-secondary/30" />
                <p className="text-sm font-light tracking-widest text-white/50 uppercase leading-relaxed">
                  Redefining the<br/>Architectural Landscape
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-secondary" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        </motion.div>
      </section>

      {/* Philosophy - Parallax Content */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <h2 className="text-6xl md:text-8xl font-serif font-bold leading-tight">
                Architectural<br/>
                <span className="text-secondary italic">Poetry.</span>
              </h2>
              <p className="text-2xl font-light text-white/60 leading-relaxed max-w-xl">
                We don't just build structures; we sculpt experiences. Every line, every texture, and every shadow is meticulously curated for the elite.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-4">
                  <Star className="text-secondary w-8 h-8" />
                  <h4 className="text-xl font-bold">Unrivaled Detail</h4>
                  <p className="text-sm text-white/40">Hand-finished materials from the world's most exclusive quarries.</p>
                </div>
                <div className="space-y-4">
                  <ShieldCheck className="text-secondary w-8 h-8" />
                  <h4 className="text-xl font-bold">Ironclad Security</h4>
                  <p className="text-sm text-white/40">Military-grade smart home integration with AI surveillance.</p>
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] overflow-hidden group"
              >
                <img 
                  src="/images/hero-interior.png" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  alt="Interior Design" 
                />
                <div className="absolute inset-0 border-[20px] border-white/5 m-8 pointer-events-none transition-all duration-1000 group-hover:m-4" />
              </motion.div>
              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 w-40 h-40 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-secondary rounded-full opacity-20 blur-2xl" />
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white/20">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] uppercase tracking-[0.2em] font-bold">
                    <textPath href="#circlePath">Best Luxury Developer • Global Award Winner • </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Video/Atmosphere Section */}
      <section className="py-40 bg-white text-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-12 mb-32">
            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-sm">State of Mind</span>
            <h2 className="text-6xl md:text-9xl font-serif font-black tracking-tighter max-w-5xl leading-none">
              WHERE DREAMS<br/><span className="italic text-secondary">RESIDE.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Sparkles, title: "Artistic Lobby", label: "Entrance" },
              { icon: Trophy, title: "Sky Club", label: "Amenities" },
              { icon: Building2, title: "Smart Living", label: "Technology" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -20 }}
                className="p-12 border border-black/5 flex flex-col items-center text-center space-y-6 hover:bg-secondary hover:text-white transition-all duration-700 cursor-pointer group"
              >
                <div className="w-20 h-20 bg-secondary/10 flex items-center justify-center rounded-full group-hover:bg-white/20">
                  <item.icon size={32} className="text-secondary group-hover:text-white" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">{item.label}</span>
                <h3 className="text-3xl font-serif font-bold">{item.title}</h3>
                <p className="font-light opacity-60">Experience the future of residential excellence with bespoke services.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Stats */}
      <section className="py-40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "25+", label: "Award Winning Projects" },
              { val: "10k+", label: "Elite Residents" },
              { val: "4.9", label: "Trust Rating" },
              { val: "35y", label: "Legacy Excellence" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <h4 className="text-6xl md:text-8xl font-serif font-bold text-secondary mb-4 transition-transform group-hover:scale-110">
                  {stat.val}
                </h4>
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
