import { Building2, Home, Key, MapPin, Phone, Mail, Award, Users } from "lucide-react";

export const PROPERTIES = [
  {
    id: 1,
    title: "The Azure Heights",
    price: "₹2,500,000",
    location: "Financial District, Hyderabad",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "/images/hero-exterior.png",
    type: "Apartment",
    status: "For Sale",
    description: "Experience the pinnacle of luxury living at Azure Heights. These sky villas offer panoramic views of the city skyline, featuring floor-to-ceiling glass, Italian marble flooring, and smart home automation."
  },
  {
    id: 2,
    title: "Serenity Gardens",
    price: "₹1,800,000",
    location: "Gachibowli, Hyderabad",
    beds: 4,
    baths: 4,
    sqft: 3500,
    image: "/images/hero-interior.png",
    type: "Villa",
    status: "For Sale",
    description: "Nestled in nature, Serenity Gardens offers a peaceful retreat from the city buzz. Each villa comes with a private pool, landscaped garden, and access to a world-class clubhouse."
  },
  {
    id: 3,
    title: "Skyline Avenue",
    price: "₹3,200,000",
    location: "Jubilee Hills, Hyderabad",
    beds: 5,
    baths: 6,
    sqft: 5000,
    image: "/images/amenity-pool.png", // Using pool image as placeholder for another property
    type: "Penthouse",
    status: "For Sale",
    description: "The crown jewel of Jubilee Hills. Skyline Avenue defines opulence with its sprawling penthouses, private elevators, and concierge services."
  },
  {
    id: 4,
    title: "Emerald Estate",
    price: "₹1,200,000",
    location: "Kondapur, Hyderabad",
    beds: 3,
    baths: 2,
    sqft: 1900,
    image: "https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?auto=format&fit=crop&q=80&w=2000",
    type: "Apartment",
    status: "Sold",
    description: "Contemporary living spaces designed for the modern family. Emerald Estate features a rooftop jogging track, gym, and children's play area."
  },
  {
    id: 5,
    title: "The Grandeur",
    price: "₹4,500,000",
    location: "Banjara Hills, Hyderabad",
    beds: 6,
    baths: 7,
    sqft: 6500,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
    type: "Villa",
    status: "For Sale",
    description: "A masterpiece of architecture. The Grandeur offers ultra-luxury villas with home theaters, temperature-controlled pools, and bespoke interiors."
  },
  {
    id: 6,
    title: "Urban Loft",
    price: "₹950,000",
    location: "Hitech City, Hyderabad",
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
    type: "Loft",
    status: "For Rent",
    description: "Ideally located for tech professionals, Urban Loft combines industrial chic design with premium amenities and proximity to major IT parks."
  }
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Floor Plans", href: "/plans" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FEATURES = [
  { icon: Building2, title: "Modern Architecture", description: "Designed by world-renowned architects." },
  { icon: Key, title: "Ready to Move", description: "Immediate possession available for select units." },
  { icon: MapPin, title: "Prime Locations", description: "Strategically located in the heart of the city." },
  { icon: Award, title: "Award Winning", description: "Recognized globally for excellence in design." },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "Buying a home with Govira Estates was a seamless experience. The attention to detail in their properties is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Software Architect",
    content: "I love the amenities at Azure Heights. It truly feels like living in a 5-star resort every single day.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  }
];
