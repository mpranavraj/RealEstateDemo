import { Link } from "wouter";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold">Govira<span className="text-secondary">.</span></h3>
            <p className="text-white/70 leading-relaxed">
              Crafting landmarks that redefine luxury living. We build homes, not just houses, with a legacy of trust and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/"><a className="text-white/70 hover:text-white transition-colors">Home</a></Link></li>
              <li><Link href="/properties"><a className="text-white/70 hover:text-white transition-colors">Properties</a></Link></li>
              <li><Link href="/projects"><a className="text-white/70 hover:text-white transition-colors">Projects</a></Link></li>
              <li><Link href="/about"><a className="text-white/70 hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/contact"><a className="text-white/70 hover:text-white transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li>123 Luxury Lane, Jubilee Hills</li>
              <li>Hyderabad, Telangana 500033</li>
              <li>+91 987 654 3210</li>
              <li>info@Goviraestates.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">Subscribe to get the latest updates on new launches.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-none focus-visible:ring-secondary" />
              <Button size="icon" className="rounded-none bg-secondary hover:bg-secondary/90 text-white shrink-0">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; 2026 Govira Estates. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
