import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PROPERTIES, FEATURES, TESTIMONIALS } from "@/lib/constants";
import { ArrowRight, Search, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-exterior.png" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-8 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
            Find Your <span className="italic text-secondary">Sanctuary</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-light tracking-wide">
            Discover a curated collection of the most exclusive properties in Hyderabad's prime locations.
          </p>
          
          {/* Search Box */}
          <div className="bg-white p-4 max-w-4xl mx-auto mt-12 rounded-sm shadow-2xl grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <Select>
                <SelectTrigger className="w-full border-none shadow-none rounded-none text-primary font-medium">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jubilee">Jubilee Hills</SelectItem>
                  <SelectItem value="banjara">Banjara Hills</SelectItem>
                  <SelectItem value="gachibowli">Gachibowli</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-1 border-l border-gray-100 pl-4">
              <Select>
                <SelectTrigger className="w-full border-none shadow-none rounded-none text-primary font-medium">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-1 border-l border-gray-100 pl-4">
               <Select>
                <SelectTrigger className="w-full border-none shadow-none rounded-none text-primary font-medium">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                  <SelectItem value="5m+">$5M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full h-full rounded-none text-lg bg-primary hover:bg-primary/90">
              Search <Search className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Exclusive Listings</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 text-primary">Featured Properties</h2>
            </div>
            <Link href="/properties">
              <Button variant="outline" className="hidden md:flex rounded-none border-primary text-primary hover:bg-primary hover:text-white">
                View All Properties <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/properties">
              <Button variant="outline" className="w-full rounded-none border-primary text-primary">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <img src="/images/hero-interior.png" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Redefining Luxury Real Estate in Hyderabad
              </h2>
              <p className="text-white/80 text-lg font-light leading-relaxed">
                With over two decades of experience, Prestige Estates has established itself as the premier developer of luxury residences. We believe a home is more than just a structure; it's a sanctuary where life unfolds.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="space-y-3">
                    <feature.icon className="h-8 w-8 text-secondary" />
                    <h3 className="text-xl font-serif font-bold">{feature.title}</h3>
                    <p className="text-sm text-white/60">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <Link href="/about">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 py-6 text-lg mt-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] md:aspect-square">
                <img 
                  src="/images/hero-interior.png" 
                  alt="Interior" 
                  className="w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs hidden md:block">
                  <p className="font-serif text-4xl font-bold text-primary mb-2">25+</p>
                  <p className="text-muted-foreground uppercase tracking-widest text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl font-serif font-bold mt-3 text-primary">Client Experiences</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 shadow-sm border border-border/40 relative">
                <div className="text-secondary text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                <p className="text-muted-foreground italic mb-6 relative z-10 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/amenity-pool.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready to find your dream home?</h2>
          <p className="text-xl max-w-2xl mx-auto text-white/80 font-light">
            Schedule a private viewing of our exclusive properties today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 py-6 text-lg">
              Contact Us
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none px-8 py-6 text-lg">
              View Properties
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
