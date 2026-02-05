import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyCard } from "@/components/property-card";
import { PROPERTIES } from "@/lib/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

export default function Properties() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Collection</h1>
          <p className="text-white/70 max-w-xl">Explore our handpicked selection of premium residences, from sky villas to sprawling estates.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Filter By</h3>
              <Separator className="mb-6" />
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">Property Type</h4>
                  <div className="space-y-2">
                    {["Apartment", "Villa", "Penthouse", "Loft"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <Label htmlFor={type} className="font-normal">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">Location</h4>
                  <div className="space-y-2">
                    {["Jubilee Hills", "Banjara Hills", "Gachibowli", "Hitech City", "Kondapur"].map((loc) => (
                      <div key={loc} className="flex items-center space-x-2">
                        <Checkbox id={loc} />
                        <Label htmlFor={loc} className="font-normal">{loc}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">Price Range</h4>
                  <Slider defaultValue={[33]} max={100} step={1} className="my-4" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$500k</span>
                    <span>$10M+</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-8">
              {PROPERTIES.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
