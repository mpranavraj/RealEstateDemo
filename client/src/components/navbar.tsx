import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled || !isHome
          ? "bg-white/95 backdrop-blur-md text-primary py-3 shadow-sm border-border/40"
          : "bg-transparent text-white py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-serif font-bold tracking-tight">
            Govira<span className="text-secondary">.</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium uppercase tracking-widest hover:text-secondary transition-colors",
                  location === link.href && "text-secondary"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors">
            <Phone size={16} />
            <span>+91 987 654 3210</span>
          </a>
          <Button variant={isScrolled || !isHome ? "default" : "secondary"} size="sm" className="rounded-none px-6">
            Book a Visit
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white text-primary border-t p-6 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className="text-lg font-serif font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button className="w-full rounded-none mt-4">Book a Visit</Button>
        </div>
      )}
    </nav>
  );
}
