import { HeartPulse, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#789f7a] to-[#6b8f73] text-white pt-10 pb-6 mt-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

        <div className="flex items-center gap-2">
          <HeartPulse size={26} className="text-white" />
          <span className="text-lg font-semibold">
            Sarv Hita Natural Ayurvedic
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <nav className="flex gap-8 text-sm font-medium">
            <Link to="/about" className="hover:opacity-80">About us</Link>
            <Link to="/services" className="hover:opacity-80">Services</Link>
            <Link to="/contact" className="hover:opacity-80">Contact us</Link>
          </nav>

          <p className="text-xs opacity-80">
            Copyright © {new Date().getFullYear()} Sarv Hita Natural Ayurvedic. 
            All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            <Youtube size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
