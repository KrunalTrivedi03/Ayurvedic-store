import { Link, NavLink } from "react-router-dom";
import {
  HeartPulse,
  ChevronDown,
  Menu,
  Home,
  Flower2,
  Phone,
  FileText,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TopBanner from "./TopBanner";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRef = useRef(null);
  const pagesRef = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (mobileOpen) return;

      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setPagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [mobileOpen]);

  const linkBase =
    "text-sm font-medium tracking-wide px-3 py-2 transition-colors cursor-pointer";

  const activeUnderline =
    "relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[#759c7c] after:rounded-full";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <TopBanner />

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <HeartPulse className="text-[#759c7c]" size={28} />
          <span className="text-lg font-semibold text-slate-800 whitespace-nowrap">
            Sarv Hita Natural Ayurvedic
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? `text-slate-900 ${activeUnderline}` : "text-slate-600"
              }`
            }
          >
            Home
          </NavLink>

          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen((p) => !p)}
              className={`${linkBase} flex items-center gap-1 text-slate-600 hover:text-slate-900`}
            >
              Services
              <ChevronDown
                size={16}
                className={`${servicesOpen ? "rotate-180" : ""} transition-transform`}
              />
            </button>

            <div
              className={`absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-slate-100 py-2 text-sm transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <Link to="/treatments" className="block px-4 py-2 hover:bg-slate-50">
                Treatments
              </Link>
              <Link to="/panchakarma" className="block px-4 py-2 hover:bg-slate-50">
                Panchakarma
              </Link>
              <Link to="/products" className="block px-4 py-2 hover:bg-slate-50">
                Ayurvedic Store
              </Link>
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? `text-slate-900 ${activeUnderline}` : "text-slate-600"
              }`
            }
          >
            Contact
          </NavLink>

          <div className="relative" ref={pagesRef}>
            <button
              onClick={() => setPagesOpen((p) => !p)}
              className={`${linkBase} flex items-center gap-1 text-slate-600 hover:text-slate-900`}
            >
              Pages
              <ChevronDown
                size={16}
                className={`${pagesOpen ? "rotate-180" : ""} transition-transform`}
              />
            </button>

            <div
              className={`absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-xl border border-slate-100 py-2 text-sm transition-all duration-200 ${
                pagesOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <Link to="/about" className="block px-4 py-2 hover:bg-slate-50">
                About Us
              </Link>
            </div>
          </div>
        </nav>

        <button className="md:hidden ml-auto" onClick={() => setMobileOpen(true)}>
          <Menu size={28} className="text-slate-800" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[70] transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute bottom-0 left-0 right-0 h-[65%] bg-white rounded-t-xl transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <span className="text-lg font-semibold text-slate-800">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100%-4rem)] px-6 py-4 space-y-4">

            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-3 text-base font-medium text-slate-800"
            >
              <Home size={20} className="text-[#759c7c]" />
              Home
            </NavLink>

            <div className="border-b border-slate-200 pb-2">
              <button
                className="w-full flex items-center justify-between py-3 font-medium text-slate-800"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span className="flex items-center gap-3">
                  <Flower2 size={20} className="text-[#759c7c]" />
                  Services
                </span>

                <ChevronDown
                  size={18}
                  className={`${servicesOpen ? "rotate-180" : ""} transition-transform`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all ${
                  servicesOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="ml-9 mt-1 space-y-2 pb-3">
                  <Link to="/treatments" className="block py-1 text-slate-600" onClick={() => setMobileOpen(false)}>
                    Treatments
                  </Link>
                  <Link to="/panchakarma" className="block py-1 text-slate-600" onClick={() => setMobileOpen(false)}>
                    Panchakarma
                  </Link>
                  <Link to="/products" className="block py-1 text-slate-600" onClick={() => setMobileOpen(false)}>
                    Ayurvedic Store
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-3 text-base font-medium text-slate-800"
            >
              <Phone size={20} className="text-[#759c7c]" />
              Contact
            </NavLink>

            <div className="border-b border-slate-200 pb-2">
              <button
                className="w-full flex items-center justify-between py-3 font-medium text-slate-800"
                onClick={() => setPagesOpen(!pagesOpen)}
              >
                <span className="flex items-center gap-3">
                  <FileText size={20} className="text-[#759c7c]" />
                  Pages
                </span>

                <ChevronDown
                  size={18}
                  className={`${pagesOpen ? "rotate-180" : ""} transition-transform`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all ${
                  pagesOpen ? "max-h-28" : "max-h-0"
                }`}
              >
                <div className="ml-9 mt-1 space-y-2 pb-3">
                  <Link to="/about" className="block py-1 text-slate-600" onClick={() => setMobileOpen(false)}>
                    About Us
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
