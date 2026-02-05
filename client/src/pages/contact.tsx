import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-white/70 max-w-xl">We are here to assist you with any inquiries regarding our properties or services.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="rounded-none bg-muted/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="rounded-none bg-muted/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" className="rounded-none bg-muted/20" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input type="tel" placeholder="+91 ..." className="rounded-none bg-muted/20" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="I am interested in..." className="rounded-none bg-muted/20 min-h-[150px]" />
              </div>
              
              <Button className="w-full rounded-none py-6 text-lg">Send Message</Button>
            </form>
          </div>
          
          <div className="space-y-12">
            <div className="bg-muted/30 p-8 border border-border">
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Corporate Office</h4>
                    <p className="text-muted-foreground">123 Luxury Lane, Jubilee Hills<br />Hyderabad, Telangana 500033</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Phone</h4>
                    <p className="text-muted-foreground">+91 987 654 3210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-muted-foreground">info@prestigeestates.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Office Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-[300px] w-full flex items-center justify-center text-muted-foreground">
              Map Component Placeholder
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
