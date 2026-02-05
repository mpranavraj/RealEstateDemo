import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Building, History } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/hero-interior.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Our Legacy</h1>
          <p className="text-xl max-w-2xl mx-auto font-light opacity-90">Building dreams, crafting lifestyles, and defining skylines since 1995.</p>
        </div>
      </div>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">The Journey</span>
              <h2 className="text-4xl font-serif font-bold text-primary">From Humble Beginnings to Industry Leaders</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Prestige Estates began with a simple vision: to create living spaces that inspire. Over the last two decades, we have grown from a boutique developer to one of the most trusted names in real estate.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our commitment to quality, transparency, and innovation has earned us the trust of over 10,000 happy families. We don't just build buildings; we build communities.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-4xl font-serif font-bold text-primary mb-2">25+</h3>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif font-bold text-primary mb-2">50+</h3>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif font-bold text-primary mb-2">10k+</h3>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Happy Families</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif font-bold text-primary mb-2">15</h3>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Cities Present</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <img src="/images/hero-exterior.png" className="w-full h-full object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary">Our Core Values</h2>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
            {[
                { icon: Award, title: "Excellence", desc: "We strive for perfection in every brick laid." },
                { icon: Users, title: "Customer First", desc: "Your satisfaction is our only metric of success." },
                { icon: Building, title: "Innovation", desc: "Adopting the latest technologies for better living." },
                { icon: History, title: "Transparency", desc: "Honest dealings and clear communication always." }
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm border border-border/50">
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                        <item.icon size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-secondary font-medium tracking-widest uppercase text-sm">Leadership</span>
                <h2 className="text-4xl font-serif font-bold mt-3 text-primary">Meet The Visionaries</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "Vikram Reddy", role: "Chairman & Founder" },
                    { name: "Sarah Jenkins", role: "Chief Architect" },
                    { name: "Arjun Kapoor", role: "Director of Sales" }
                ].map((member, idx) => (
                    <div key={idx} className="group">
                        <div className="aspect-[3/4] overflow-hidden mb-4 bg-gray-200">
                             <img src={`https://images.unsplash.com/photo-${idx === 1 ? '1573496359142-b8d87734a5a2' : '1560250097-0b93528c311a'}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-primary">{member.name}</h3>
                        <p className="text-secondary font-medium uppercase text-sm tracking-wider">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
