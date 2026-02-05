import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PROPERTIES } from "@/lib/constants";
import { useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Move, MapPin, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotFound from "@/pages/not-found";

export default function PropertyDetails() {
  const [match, params] = useRoute("/property/:id");
  const id = params ? parseInt(params.id) : 0;
  const property = PROPERTIES.find((p) => p.id === id);

  if (!property) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="h-[60vh] relative mt-20 md:mt-0">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-12 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
                        <Badge className="bg-secondary text-white border-none rounded-none mb-4">{property.status}</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">{property.title}</h1>
                        <p className="text-lg md:text-xl opacity-90 flex items-center gap-2">
                            <MapPin size={20} /> {property.location}
                        </p>
                    </div>
                    <div className="text-3xl md:text-5xl font-bold font-serif">{property.price}</div>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
                {/* Specs */}
                <div className="flex justify-between items-center py-8 border-y border-border">
                    <div className="text-center">
                        <div className="text-3xl font-bold font-serif text-primary mb-1">{property.beds}</div>
                        <div className="text-sm uppercase tracking-wider text-muted-foreground">Bedrooms</div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                        <div className="text-3xl font-bold font-serif text-primary mb-1">{property.baths}</div>
                        <div className="text-sm uppercase tracking-wider text-muted-foreground">Bathrooms</div>
                    </div>
                     <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                        <div className="text-3xl font-bold font-serif text-primary mb-1">{property.sqft}</div>
                        <div className="text-sm uppercase tracking-wider text-muted-foreground">Sq Ft</div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h2 className="text-2xl font-serif font-bold mb-4 text-primary">About this property</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">{property.description}</p>
                    <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Amenities */}
                <div>
                    <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden", "Clubhouse", "Power Backup", "Elevator", "Wifi"].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-muted-foreground">
                                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                    <Check size={12} />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Agent Sidebar */}
            <div className="space-y-8">
                <div className="bg-white p-6 shadow-lg border border-border/40 sticky top-32">
                    <h3 className="text-xl font-serif font-bold mb-6 text-primary">Interested in this property?</h3>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Agent" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="font-bold text-lg text-primary">Michael Scott</p>
                            <p className="text-sm text-muted-foreground">Senior Property Consultant</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Button className="w-full rounded-none py-6 text-lg bg-primary hover:bg-primary/90">Request Viewing</Button>
                        <Button variant="outline" className="w-full rounded-none py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white">Download Brochure</Button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
