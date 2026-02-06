import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyCard } from "@/components/property-card";
import { PROPERTIES } from "@/lib/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

export default function Properties() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <div className="pt-40 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary tracking-[0.4em] text-xs uppercase font-bold mb-4 block">Curated Collection</span>
            <h1 className="text-7xl font-serif font-bold tracking-tighter mb-4">Govira <span className="italic text-secondary">Estates</span></h1>
            <p className="text-white/40 max-w-xl text-lg font-light">Explore a limited selection of architectural masterpieces designed for the visionary.</p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16">
          {/* Elite Filters */}
          <aside className="lg:col-span-3 space-y-12">
            <div className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 sticky top-32">
              <h3 className="font-serif text-2xl font-bold mb-8">Refine Search</h3>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary">Asset Type</h4>
                  <div className="space-y-3">
                    {["Apartment", "Villa", "Penthouse"].map((type) => (
                      <div key={type} className="flex items-center space-x-3 group cursor-pointer">
                        <Checkbox id={type} className="border-white/20 data-[state=checked]:bg-secondary" />
                        <Label htmlFor={type} className="font-light text-white/60 group-hover:text-white transition-colors cursor-pointer">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary">Investment Scale</h4>
                  <Slider defaultValue={[50]} max={100} step={1} className="[&_[role=slider]]:bg-secondary" />
                  <div className="flex justify-between text-[10px] uppercase font-bold text-white/40">
                    <span>$1.0M</span>
                    <span>$10M+</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Master Grid */}
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-12">
              {PROPERTIES.map((property, idx) => (
                <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <PropertyCard {...property} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
