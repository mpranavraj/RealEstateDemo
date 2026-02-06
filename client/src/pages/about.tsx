import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Building, History, Star, Target, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAM = [
  { name: "Vikram Reddy", role: "Chairman & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
  { name: "Sarah Jenkins", role: "Chief Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
  { name: "Arjun Kapoor", role: "Director of Sales", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-secondary selection:text-primary overflow-x-hidden" ref={containerRef}>
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/hero-interior.png"
            alt="Our Legacy"
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#050505]" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1 border border-secondary/30 rounded-full text-secondary text-xs uppercase tracking-[0.4em] mb-8 backdrop-blur-sm bg-secondary/5">
              Est. 1995
            </span>
            <h1 className="text-7xl md:text-[9rem] font-serif font-black leading-[0.85] tracking-tighter">
              OUR<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/70 to-secondary/30">LEGACY</span>
            </h1>
            <p className="mt-8 text-lg font-light text-white/50 max-w-xl mx-auto">
              Building dreams, crafting lifestyles, and defining skylines for three decades.
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-secondary" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover</span>
        </motion.div>
      </section>

      {/* The Story - Parallax Section */}
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
              <div className="space-y-6">
                <span className="text-secondary tracking-[0.4em] text-xs uppercase font-bold">The Journey</span>
                <h2 className="text-6xl md:text-8xl font-serif font-bold leading-tight">
                  From Vision<br />
                  <span className="text-secondary italic">To Legacy.</span>
                </h2>
              </div>
              <p className="text-2xl font-light text-white/60 leading-relaxed max-w-xl">
                Prestige Estates began with a simple vision: to create living spaces that inspire. Over three decades, we have grown from a boutique developer to one of the most trusted names in luxury real estate.
              </p>
              <p className="text-lg font-light text-white/40 leading-relaxed max-w-xl">
                Our commitment to quality, transparency, and innovation has earned us the trust of over 10,000 families. We don't just build buildings — we build communities that endure.
              </p>
              <div className="flex items-center gap-6">
                <div className="h-12 w-[1px] bg-secondary/30" />
                <p className="text-sm font-light tracking-widest text-white/50 uppercase leading-relaxed">
                  Redefining the<br />Architectural Landscape
                </p>
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
                  src="/images/hero-exterior.png"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  alt="Prestige Legacy"
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
                  <path id="aboutCirclePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] uppercase tracking-[0.2em] font-bold">
                    <textPath href="#aboutCirclePath">Since 1995 • Trusted Builder • Award Winner • </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "25+", label: "Years Experience" },
              { val: "50+", label: "Projects Completed" },
              { val: "10k+", label: "Happy Families" },
              { val: "15", label: "Cities Present" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <h4 className="text-6xl md:text-8xl font-serif font-bold text-secondary mb-4 transition-transform group-hover:scale-110">
                  {stat.val}
                </h4>
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - White Section */}
      <section className="py-40 bg-white text-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-12 mb-32">
            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-sm">What Drives Us</span>
            <h2 className="text-6xl md:text-9xl font-serif font-black tracking-tighter max-w-5xl leading-none">
              OUR CORE<br /><span className="italic text-secondary">VALUES.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: Award, title: "Excellence", label: "Quality", desc: "We strive for perfection in every brick laid, every detail designed." },
              { icon: Heart, title: "Customer First", label: "Service", desc: "Your satisfaction is our only metric of success and growth." },
              { icon: Target, title: "Innovation", label: "Technology", desc: "Adopting the latest technologies for better, smarter living." },
              { icon: Star, title: "Transparency", label: "Trust", desc: "Honest dealings and clear communication, always and forever." },
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
                <p className="font-light opacity-60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-sm">Leadership</span>
            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter">
              THE <span className="italic text-secondary">VISIONARIES</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 border-[12px] border-white/5 m-4 pointer-events-none transition-all duration-1000 group-hover:m-2 group-hover:border-secondary/20" />
                </div>
                <h3 className="text-3xl font-serif font-bold tracking-tight">{member.name}</h3>
                <p className="text-secondary font-bold uppercase text-xs tracking-[0.3em] mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter">
            JOIN THE <span className="italic text-secondary">LEGACY</span>
          </h2>
          <p className="text-xl font-light text-white/40 max-w-2xl mx-auto">
            Experience the Prestige difference — where every home is a masterpiece.
          </p>
          <Button className="bg-secondary hover:bg-white text-primary px-16 py-8 rounded-none text-xl font-bold transition-all duration-500 group">
            GET IN TOUCH
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </motion.span>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
