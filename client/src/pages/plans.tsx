import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Phone, FileDown, Ruler, Bed, UtensilsCrossed, Bath, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FLOOR_PLANS = {
  1: {
    sqft: "5067", beds: "5", kitchens: "2", baths: "6",
    image: "https://images.unsplash.com/photo-1580587767303-93630f95c432?auto=format&fit=crop&q=80&w=2000",
    title: "The Peak - Signature Unit 01",
    price: "$2.5M",
    features: ["Private Elevator", "Italian Kitchen", "Maid Quarter"]
  },
  2: {
    sqft: "5192", beds: "5", kitchens: "2", baths: "6",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
    title: "The Peak - Signature Unit 02",
    price: "$2.8M",
    features: ["Sunrise View", "Master Terrace", "Wine Cellar"]
  },
  3: { sqft: "4850", beds: "4", kitchens: "2", baths: "5", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000", title: "Luxury Suite 03", price: "$2.1M", features: ["Pool View", "Smart Glass"] },
  4: { sqft: "5500", beds: "6", kitchens: "3", baths: "7", image: "https://images.unsplash.com/photo-1600566753190-17f0bbc2a6c3?auto=format&fit=crop&q=80&w=2000", title: "Presidential Unit 04", price: "$4.5M", features: ["Private Pool", "Gym Room", "Library"] },
};

export default function Plans() {
  const [selectedFlat, setSelectedFlat] = useState(1);
  const currentPlan = FLOOR_PLANS[selectedFlat as keyof typeof FLOOR_PLANS] || FLOOR_PLANS[1];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-secondary">
      <Navbar />
      
      <main className="pt-24 min-h-screen flex flex-col">
        {/* Dynamic Header */}
        <div className="h-[40vh] relative overflow-hidden flex items-center justify-center">
            <motion.div 
                key={selectedFlat}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                className="absolute inset-0"
            >
                <img src={currentPlan.image} className="w-full h-full object-cover blur-sm" />
            </motion.div>
            <div className="relative z-10 text-center space-y-4">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="text-secondary tracking-[0.5em] text-xs uppercase font-bold"
                >
                    Exclusive Architectural Plans
                </motion.span>
                <motion.h1 
                    key={currentPlan.title}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-serif font-bold tracking-tighter"
                >
                    {currentPlan.title.split(' - ')[1]}
                </motion.h1>
            </div>
        </div>

        <div className="container mx-auto px-6 -mt-32 relative z-20 pb-20">
            <div className="grid lg:grid-cols-12 gap-12">
                {/* Side Selection */}
                <div className="lg:col-span-3 space-y-4">
                    <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                        <h3 className="text-xl font-serif font-bold mb-8 flex items-center gap-2">
                            <Maximize2 size={18} className="text-secondary" /> Select Residence
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                            {Object.keys(FLOOR_PLANS).map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setSelectedFlat(parseInt(num))}
                                    className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-500
                                        ${selectedFlat === parseInt(num) ? "bg-secondary text-primary font-bold scale-105" : "hover:bg-white/10 text-white/60"}`}
                                >
                                    <span className="text-sm tracking-widest uppercase">Unit 0{num}</span>
                                    <ChevronRight size={16} className={`${selectedFlat === parseInt(num) ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-secondary text-primary rounded-2xl space-y-6">
                        <h4 className="font-bold uppercase tracking-tighter text-2xl">Pricing</h4>
                        <p className="text-5xl font-serif font-black">{currentPlan.price}</p>
                        <Button className="w-full bg-primary hover:bg-black text-white rounded-xl py-6">ENQUIRE NOW</Button>
                    </div>
                </div>

                {/* Main Visual */}
                <div className="lg:col-span-9 space-y-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedFlat}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-[16/9] bg-white/5 rounded-3xl overflow-hidden border border-white/10 group"
                        >
                            <img src={currentPlan.image} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            
                            {/* Overlay Stats */}
                            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                                <div className="grid grid-cols-4 gap-12">
                                    <div className="space-y-1">
                                        <p className="text-3xl font-serif font-bold">{currentPlan.sqft}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Sq Ft</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-serif font-bold">{currentPlan.beds}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Beds</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-serif font-bold">{currentPlan.baths}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Baths</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-serif font-bold">{currentPlan.kitchens}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Kitchen</p>
                                    </div>
                                </div>
                                <Button size="icon" className="w-16 h-16 rounded-full bg-white text-primary hover:bg-secondary">
                                    <FileDown size={24} />
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {currentPlan.features.map((f, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={f} 
                                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <p className="text-lg font-serif font-bold text-secondary italic mb-2">0{i+1}</p>
                                <p className="text-sm uppercase tracking-widest font-bold">{f}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>

      {/* Horizontal Scroll Journey */}
      <section className="bg-[#050505] py-40 overflow-hidden relative">
        <div className="container mx-auto px-6 mb-20 text-center">
            <h2 className="text-6xl font-serif font-bold tracking-tighter">THE LEGACY <span className="text-secondary italic">ROADMAP</span></h2>
        </div>
        
        <div className="relative h-[400px]">
            <motion.div 
                className="flex gap-24 whitespace-nowrap absolute px-[10%]"
                animate={{ x: [0, -2000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {[...Array(10)].map((_, idx) => (
                    <div key={idx} className="inline-flex flex-col items-center min-w-[400px] relative group">
                        <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center text-primary font-serif text-3xl font-black border-[10px] border-white/5 relative z-10">
                            {2015 + idx}
                        </div>
                        <div className="mt-8 p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl text-left w-full group-hover:bg-secondary group-hover:text-primary transition-all duration-700">
                            <span className="text-xs uppercase tracking-widest font-bold opacity-50 mb-2 block">Milestone 0{idx+1}</span>
                            <h4 className="text-2xl font-serif font-bold mb-4">Govira Heights Phase {idx+1}</h4>
                            <p className="text-sm font-light leading-relaxed max-w-xs">Revolutionizing the skyline with integrated smart technology and sustainable architecture.</p>
                        </div>
                    </div>
                ))}
            </motion.div>
            
            {/* Road Markings Animation */}
            <div className="absolute top-[100px] left-0 w-full h-[200px] border-y border-white/5 flex items-center pointer-events-none">
                <motion.div 
                    animate={{ x: [0, -100] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-[200%] h-1"
                    style={{ backgroundImage: 'linear-gradient(to right, rgba(197, 160, 89, 0.3) 50%, transparent 50%)', backgroundSize: '100px 100%' }}
                />
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
