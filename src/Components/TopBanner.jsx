import { Clock, Tag, X } from "lucide-react";
import { useState } from "react";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`
        w-full bg-[#6b8f73] text-white z-[60] overflow-hidden transition-all duration-300
        ${visible ? "max-h-16 py-2 opacity-100" : "max-h-0 py-0 opacity-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm relative">

        <div className="flex items-center gap-2">
          <Tag size={16} className="text-white" />
          <span>Get 15% off on Ayurvedic medicines</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 mr-8">
          <Clock size={16} className="text-white" />
          <span>Open 11:00 AM - 5:00 PM</span>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/20 transition flex items-center justify-center"
        >
          <X size={18} className="text-white" />
        </button>

      </div>
    </div>
  );
}
