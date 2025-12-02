import { Link, NavLink } from "react-router-dom";
import { HeartPulse, ChevronDown, Menu } from "lucide-react";
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
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const linkBase =
    "text-sm font-medium tracking-wide px-3 py-2 transition-colors cursor-pointer";

  const activeUnderline =
    "relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[#759c7c] after:rounded-full";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/100 border-b border-slate-100">
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
              `${linkBase} ${isActive ? `text-slate-900 ${activeUnderline}` : "text-slate-600"}`
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
              className={`absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-slate-100 py-2 text-sm text-slate-700
                        transition-all duration-200 origin-top-right ${servicesOpen ? "opacity-100 scale-100 visible animate-fadeIn" : "opacity-0 scale-95 invisible"}`}
            >
              <Link to="/treatments" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setServicesOpen(false)}>
                Treatments
              </Link>
              <Link to="/panchakarma" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setServicesOpen(false)}>
                Panchakarma
              </Link>
              <Link to="/products" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setServicesOpen(false)}>
                Ayurvedic Store
              </Link>
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? `text-slate-900 ${activeUnderline}` : "text-slate-600"}`
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
              className={`absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-xl border border-slate-100 py-2 text-sm text-slate-700
                        transition-all duration-200 origin-top-right ${pagesOpen ? "opacity-100 scale-100 visible animate-fadeIn" : "opacity-0 scale-95 invisible"}`}
            >
              <Link to="/about" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setPagesOpen(false)}>
                About Us
              </Link>
              {/* <Link to="/products" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setPagesOpen(false)}>
                Shop
              </Link> */}
            </div>
          </div>
        </nav>

        <button className="md:hidden ml-auto" onClick={() => setMobileOpen((p) => !p)}>
          <Menu size={26} className="text-slate-800" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-3 text-sm">
            <NavLink to="/" end className="block py-2" onClick={() => setMobileOpen(false)}>Home</NavLink>

            <div>
              <button
                className="w-full flex items-center justify-between py-2"
                onClick={() => setServicesOpen((p) => !p)}
              >
                Services
                <ChevronDown className={`${servicesOpen ? "rotate-180" : ""} transition-transform`} size={16} />
              </button>
              {servicesOpen && (
                <div className="ml-3 border-l pl-3 space-y-1">
                  <Link to="/treatments" className="block py-1" onClick={() => setMobileOpen(false)}>Treatments</Link>
                  <Link to="/panchakarma" className="block py-1" onClick={() => setMobileOpen(false)}>Panchakarma</Link>
                  <Link to="/products" className="block py-1" onClick={() => setMobileOpen(false)}>Ayurvedic Store</Link>
                </div>
              )}
            </div>

            <NavLink to="/contact" className="block py-2" onClick={() => setMobileOpen(false)}>Contact</NavLink>

            <div>
              <button
                className="w-full flex items-center justify-between py-2"
                onClick={() => setPagesOpen((p) => !p)}
              >
                Pages
                <ChevronDown className={`${pagesOpen ? "rotate-180" : ""} transition-transform`} size={16} />
              </button>
              {pagesOpen && (
                <div className="ml-3 border-l pl-3 space-y-1">
                  <Link to="/about" className="block py-1" onClick={() => setMobileOpen(false)}>About Us</Link>
                  {/* <Link to="/products" className="block py-1" onClick={() => setMobileOpen(false)}>Shop</Link> */}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
