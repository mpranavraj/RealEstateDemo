import { Link } from "wouter";
import { Bed, Bath, Move, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status: string;
  type: string;
}

export function PropertyCard({ id, title, price, location, beds, baths, sqft, image, status, type }: PropertyCardProps) {
  return (
    <Link href={`/property/${id}`}>
      <div className="group cursor-pointer bg-white border border-border/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-primary/90 hover:bg-primary text-white uppercase tracking-wider text-[10px] rounded-none px-3 py-1">
              {status}
            </Badge>
            <Badge variant="secondary" className="uppercase tracking-wider text-[10px] rounded-none px-3 py-1">
              {type}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-4">
            <p className="text-secondary font-medium mb-1">{location}</p>
            <h3 className="text-xl font-serif font-bold group-hover:text-primary/80 transition-colors">{title}</h3>
          </div>
          
          <div className="flex items-center gap-6 text-muted-foreground text-sm mb-6">
            <div className="flex items-center gap-2">
              <Bed size={16} />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath size={16} />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Move size={16} />
              <span>{sqft} sqft</span>
            </div>
          </div>
          
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
            <span className="text-xl font-bold text-primary">{price}</span>
            <span className="flex items-center gap-2 text-sm font-medium text-secondary group-hover:translate-x-1 transition-transform">
              View Details <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
