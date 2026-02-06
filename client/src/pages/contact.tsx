import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-secondary selection:text-primary overflow-x-hidden">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/hero-interior.png"
            alt="Contact Us"
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
              Private Consultation
            </span>
            <h1 className="text-7xl md:text-[9rem] font-serif font-black leading-[0.85] tracking-tighter">
              GET IN<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/70 to-secondary/30">TOUCH</span>
            </h1>
            <p className="mt-8 text-lg font-light text-white/50 max-w-xl mx-auto">
              We are here to assist you with exclusive inquiries regarding our properties and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <span className="text-secondary tracking-[0.4em] text-xs uppercase font-bold">Send a Message</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter">
                  Let's Start a<br />
                  <span className="italic text-secondary">Conversation.</span>
                </h2>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-none py-7 focus-visible:ring-secondary focus-visible:border-secondary"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-none py-7 focus-visible:ring-secondary focus-visible:border-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-none py-7 focus-visible:ring-secondary focus-visible:border-secondary"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+91 987 654 3210"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-none py-7 focus-visible:ring-secondary focus-visible:border-secondary"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary">Your Message</label>
                  <Textarea
                    placeholder="I am interested in..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-none min-h-[180px] focus-visible:ring-secondary focus-visible:border-secondary"
                  />
                </div>

                <Button className="w-full bg-secondary hover:bg-white text-primary px-12 py-8 rounded-none text-lg font-bold transition-all duration-500 group">
                  SEND MESSAGE
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.span>
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* Info Card */}
              <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl space-y-10">
                <h3 className="text-3xl font-serif font-bold">Contact <span className="italic text-secondary">Information</span></h3>

                {[
                  {
                    icon: MapPin,
                    title: "Corporate Office",
                    lines: ["123 Luxury Lane, Jubilee Hills", "Hyderabad, Telangana 500033"],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+91 987 654 3210", "+91 987 654 3211"],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["info@prestigeestates.com", "sales@prestigeestates.com"],
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    lines: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"],
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-full group-hover:bg-secondary/20 transition-colors shrink-0">
                      <item.icon size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-white/50 font-light">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[4/3] relative overflow-hidden rounded-3xl border border-white/10 group">
                <img
                  src="/images/hero-exterior.png"
                  alt="Location"
                  className="w-full h-full object-cover grayscale-[0.5] transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={16} className="text-secondary" />
                    <span className="text-secondary tracking-[0.3em] text-[10px] uppercase font-black">Location</span>
                  </div>
                  <p className="text-2xl font-serif font-bold">Jubilee Hills, Hyderabad</p>
                  <p className="text-sm text-white/50 font-light mt-1">Heart of the luxury district</p>
                </div>
              </div>

              {/* Quick Enquiry CTA */}
              <div className="p-10 bg-secondary text-primary rounded-3xl space-y-6">
                <h4 className="font-bold uppercase tracking-tighter text-2xl">Prefer a Call?</h4>
                <p className="text-primary/70 font-light">Our concierge team is available to schedule a private viewing at your convenience.</p>
                <Button className="w-full bg-primary hover:bg-black text-white rounded-xl py-6 font-bold text-base">
                  <Phone size={18} className="mr-3" />
                  CALL NOW: +91 987 654 3210
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 bg-white text-primary">
        <div className="container mx-auto px-6 text-center space-y-12">
          <span className="text-secondary font-bold tracking-[0.5em] uppercase text-sm">Experience Excellence</span>
          <h2 className="text-6xl md:text-9xl font-serif font-black tracking-tighter max-w-5xl mx-auto leading-none">
            YOUR DREAM HOME<br /><span className="italic text-secondary">AWAITS.</span>
          </h2>
          <p className="text-xl font-light text-primary/50 max-w-2xl mx-auto">
            Visit our experience center to explore premium residences firsthand.
          </p>
          <Button className="bg-secondary hover:bg-primary text-primary hover:text-white px-16 py-8 rounded-none text-xl font-bold transition-all duration-500 group">
            BOOK A VISIT
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
