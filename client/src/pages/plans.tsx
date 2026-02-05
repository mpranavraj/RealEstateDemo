import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, FileDown, Ruler, Bed, UtensilsCrossed, Bath } from "lucide-react";

const FLOOR_PLANS = {
  1: {
    sqft: "5067",
    beds: "5",
    kitchens: "2",
    baths: "6",
    image: "https://images.unsplash.com/photo-1580587767303-93630f95c432?auto=format&fit=crop&q=80&w=2000", // Representative architectural plan
    title: "The Peak - Signature Unit 01"
  },
  2: {
    sqft: "5192",
    beds: "5",
    kitchens: "2",
    baths: "6",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
    title: "The Peak - Signature Unit 02"
  },
  // Adding more mock data for the 25 pages goal
  3: { sqft: "4850", beds: "4", kitchens: "2", baths: "5", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000", title: "Luxury Suite 03" },
  4: { sqft: "5500", beds: "6", kitchens: "3", baths: "7", image: "https://images.unsplash.com/photo-1600566753190-17f0bbc2a6c3?auto=format&fit=crop&q=80&w=2000", title: "Presidential Unit 04" },
};

export default function Plans() {
  const [selectedFlat, setSelectedFlat] = useState(1);
  const currentPlan = FLOOR_PLANS[selectedFlat as keyof typeof FLOOR_PLANS] || FLOOR_PLANS[1];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a192f] text-white font-sans">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 uppercase tracking-tighter">
              A Marvel Of <span className="text-[#c5a059] italic">Design</span>
            </h1>
            <p className="text-gray-400 text-lg">The Peak - Luxurious 4 & 5 BHK House Plans in Siripuram, Vizag.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
            {/* Left Selector */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedFlat(num)}
                  className={`text-left py-3 px-6 border-l-2 transition-all duration-300 uppercase tracking-widest text-sm font-bold
                    ${selectedFlat === num ? "border-[#c5a059] text-[#c5a059] bg-[#c5a059]/10" : "border-gray-700 text-gray-500 hover:text-white"}`}
                >
                  Flat No. {num}
                </button>
              ))}
            </div>

            {/* Central Display Card */}
            <div className="lg:col-span-8 bg-[#c5a059] p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedFlat}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white p-4 rounded-xl shadow-inner"
                  >
                    <img 
                      src={currentPlan.image} 
                      alt={currentPlan.title} 
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="space-y-8 text-[#0a192f]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <Ruler className="w-12 h-12 stroke-[1.5]" />
                      <div>
                        <p className="text-3xl font-serif font-bold leading-none">{currentPlan.sqft}</p>
                        <p className="text-sm uppercase font-bold tracking-widest opacity-70">Sq ft Area</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <Bed className="w-12 h-12 stroke-[1.5]" />
                      <div>
                        <p className="text-3xl font-serif font-bold leading-none">{currentPlan.beds}</p>
                        <p className="text-sm uppercase font-bold tracking-widest opacity-70">Bedrooms</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <UtensilsCrossed className="w-12 h-12 stroke-[1.5]" />
                      <div>
                        <p className="text-3xl font-serif font-bold leading-none">{currentPlan.kitchens}</p>
                        <p className="text-sm uppercase font-bold tracking-widest opacity-70">Kitchens</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <Bath className="w-12 h-12 stroke-[1.5]" />
                      <div>
                        <p className="text-3xl font-serif font-bold leading-none">{currentPlan.baths}</p>
                        <p className="text-sm uppercase font-bold tracking-widest opacity-70">Bathrooms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
                <Button className="bg-[#0a192f] hover:bg-[#152a4a] text-white rounded-full px-10 py-7 text-lg font-bold">
                  <Phone className="mr-3 w-5 h-5 fill-white" />
                  62922 66666
                </Button>
                <Button className="bg-white hover:bg-gray-100 text-[#0a192f] rounded-full px-10 py-7 text-lg font-bold shadow-xl">
                  <FileDown className="mr-3 w-5 h-5" />
                  DOWNLOAD BROCHURE
                </Button>
              </div>
            </div>

            {/* Right Selector */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedFlat(num)}
                  className={`text-right py-3 px-6 border-r-2 transition-all duration-300 uppercase tracking-widest text-sm font-bold
                    ${selectedFlat === num ? "border-[#c5a059] text-[#c5a059] bg-[#c5a059]/10" : "border-gray-700 text-gray-500 hover:text-white"}`}
                >
                  Flat No. {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Scrolling Road Animation Section */}
      <section className="bg-white py-20 overflow-hidden relative border-t border-gray-100">
        <div className="container mx-auto px-6 mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#0a192f] text-center">
                Our <span className="text-[#c5a059]">Journey</span> Through Time
            </h2>
        </div>
        
        <div className="relative h-64 flex items-center">
            {/* Moving Road */}
            <motion.div 
                className="flex gap-20 whitespace-nowrap absolute"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                {[2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                    <div key={year} className="flex flex-col items-center min-w-[300px]">
                        <div className="w-20 h-20 rounded-full bg-[#c5a059] flex items-center justify-center text-white font-serif text-xl border-4 border-[#0a192f]">
                            {year}
                        </div>
                        <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm text-[#0a192f] w-full text-center">
                            <h4 className="font-bold mb-2">Prestige Residency {year}</h4>
                            <p className="text-sm text-gray-500">Luxury Living Delivered</p>
                        </div>
                    </div>
                ))}
            </motion.div>
            
            {/* Road Markings */}
            <div className="absolute w-full h-1 bg-gray-200 bottom-1/2 -translate-y-1/2 z-0" style={{ backgroundImage: 'linear-gradient(to right, #ccc 50%, transparent 50%)', backgroundSize: '60px 100%' }} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
