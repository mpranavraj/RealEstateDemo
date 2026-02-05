import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "The Golden Mile",
    location: "Financial District",
    status: "Ongoing",
    image: "/images/hero-exterior.png",
    desc: "A mixed-use development comprising luxury residences, corporate offices, and high-end retail."
  },
  {
    title: "Lakeview Sanctuary",
    location: "Kukatpally",
    status: "Completed",
    image: "/images/amenity-pool.png",
    desc: "Waterfront villas designed for those who seek tranquility without compromising on connectivity."
  },
  {
    title: "Urban Horizon",
    location: "Madhapur",
    status: "Ongoing",
    image: "/images/hero-interior.png",
    desc: "The tallest residential tower in the district, offering unmatched views and sky-high luxury."
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Projects</h1>
          <p className="text-white/70 max-w-xl">Landmarks that define the skyline and redefine living standards.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="space-y-24">
            {PROJECTS.map((project, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 aspect-[16/9] relative group overflow-hidden">
                        <img src={project.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4">
                            <Badge className="bg-white text-primary hover:bg-white">{project.status}</Badge>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="space-y-2">
                            <p className="text-secondary font-medium tracking-widest uppercase text-sm">{project.location}</p>
                            <h2 className="text-4xl font-serif font-bold text-primary">{project.title}</h2>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed">{project.desc}</p>
                        <div className="grid grid-cols-2 gap-8 py-4 border-y border-border/50">
                            <div>
                                <p className="font-bold text-2xl text-primary">500+</p>
                                <p className="text-xs uppercase text-muted-foreground">Units</p>
                            </div>
                            <div>
                                <p className="font-bold text-2xl text-primary">2026</p>
                                <p className="text-xs uppercase text-muted-foreground">Completion</p>
                            </div>
                        </div>
                        <Button variant="outline" className="border-primary text-primary rounded-none px-8 py-6">
                            View Project Details <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
