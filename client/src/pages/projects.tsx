import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Building2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "The Golden Mile",
    location: "Financial District",
    status: "Ongoing",
    image: "/images/hero-exterior.png",
    desc: "A mixed-use development comprising luxury residences, corporate offices, and high-end retail.",
    units: "500+",
    completion: "2027",
    area: "12 Acres",
    investment: "₹250Cr"
  },
  {
    title: "Lakeview Sanctuary",
    location: "Kukatpally",
    status: "Completed",
    image: "/images/amenity-pool.png",
    desc: "Waterfront villas designed for those who seek tranquility without compromising on connectivity.",
    units: "120",
    completion: "2024",
    area: "8 Acres",
    investment: "₹85Cr"
  },
  {
    title: "Urban Horizon",
    location: "Madhapur",
    status: "Ongoing",
    image: "/images/hero-interior.png",
    desc: "The tallest residential tower in the district, offering unmatched views and sky-high luxury.",
    units: "340",
    completion: "2028",
    area: "5 Acres",
    investment: "₹180Cr"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-secondary selection:text-primary overflow-x-hidden">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/hero-exterior.png"
            alt="Our Projects"
            className="w-full h-full object-cover grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1 border border-secondary/30 rounded-full text-secondary text-xs uppercase tracking-[0.4em] mb-8 backdrop-blur-sm bg-secondary/5">
              Landmark Developments
            </span>
            <h1 className="text-7xl md:text-[9rem] font-serif font-black leading-[0.85] tracking-tighter">
              OUR<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/70 to-secondary/30">PROJECTS</span>
            </h1>
            <p className="mt-8 text-lg font-light text-white/50 max-w-xl mx-auto">
              Landmarks that define the skyline and redefine living standards.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-secondary" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore</span>
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section className="py-40">
        <div className="container mx-auto px-6 space-y-40">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 border-[16px] border-white/5 m-6 pointer-events-none transition-all duration-1000 group-hover:m-3" />
                </div>
                {/* Status Badge */}
                <div className="absolute top-10 left-10">
                  <span className={`px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-black backdrop-blur-md ${project.status === "Completed" ? "bg-green-500/90 text-white" : "bg-secondary/90 text-primary"}`}>
                    {project.status}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-secondary" />
                    <span className="text-secondary tracking-[0.4em] text-xs uppercase font-bold">{project.location}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter">
                    {project.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="italic text-secondary">{project.title.split(" ").slice(-1)}</span>
                  </h2>
                </div>

                <p className="text-xl font-light text-white/50 leading-relaxed">{project.desc}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 py-8 border-y border-white/10">
                  {[
                    { icon: Building2, val: project.units, label: "Units" },
                    { icon: Calendar, val: project.completion, label: "Completion" },
                    { icon: MapPin, val: project.area, label: "Total Area" },
                    { icon: TrendingUp, val: project.investment, label: "Investment" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded-full group-hover:bg-secondary/20 transition-colors shrink-0">
                        <stat.icon size={16} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-2xl font-serif font-bold">{stat.val}</p>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="bg-secondary hover:bg-white text-primary px-10 py-7 rounded-none text-base font-bold transition-all duration-500 group">
                  VIEW PROJECT DETAILS
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-sm">By The Numbers</span>
            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter mt-4">
              OUR <span className="italic text-secondary">IMPACT</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "15+", label: "Active Developments" },
              { val: "$2B+", label: "Total Portfolio Value" },
              { val: "50+", label: "Projects Delivered" },
              { val: "12", label: "Cities Across India" },
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

      {/* CTA Section */}
      <section className="py-40 bg-white text-primary">
        <div className="container mx-auto px-6 text-center space-y-12">
          <span className="text-secondary font-bold tracking-[0.5em] uppercase text-sm">Invest in Excellence</span>
          <h2 className="text-6xl md:text-9xl font-serif font-black tracking-tighter max-w-5xl mx-auto leading-none">
            YOUR LEGACY<br /><span className="italic text-secondary">BEGINS HERE.</span>
          </h2>
          <p className="text-xl font-light text-primary/50 max-w-2xl mx-auto">
            Schedule a private consultation with our team to explore exclusive investment opportunities.
          </p>
          <Button className="bg-secondary hover:bg-primary text-primary hover:text-white px-16 py-8 rounded-none text-xl font-bold transition-all duration-500 group">
            SCHEDULE A TOUR
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
