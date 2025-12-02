import { Info, MapPin, Phone, Clock } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <main className="pt-16 bg-white">

      <section className="relative bg-[#f8faf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-28">
          <div className="lg:w-3/5">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              About Us
            </h1>
            <p className="text-xl text-slate-600 mt-4">
              Trusted by millions, validated by you.
            </p>
          </div>
        </div>

        <div
          className="pointer-events-none select-none absolute right-0 top-8 opacity-60 -translate-y-6"
          style={{ width: "520px", maxWidth: "48vw", transformOrigin: "top right" }}
          aria-hidden
        >
          <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <linearGradient id="petalGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#dff3ea" />
                <stop offset="100%" stopColor="#ecf8ef" />
              </linearGradient>
            </defs>

            <g transform="translate(120,40) scale(1.05)">
              <path
                d="M210 80 C170 20 95 12 60 72 C120 66 170 92 210 140"
                fill="url(#petalGrad)"
                stroke="none"
                opacity="0.45"
              />
              <path
                d="M310 90 C365 20 440 18 480 78 C428 72 380 98 330 142"
                fill="url(#petalGrad)"
                stroke="none"
                opacity="0.45"
              />
            </g>

            <g transform="translate(80,80) scale(1)">
              <path
                d="M200 160 C140 120 100 60 120 20 C130 44 150 74 186 106"
                fill="none"
                stroke="#8fbda6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
              <path
                d="M260 160 C320 120 360 60 340 20 C330 44 310 74 274 106"
                fill="none"
                stroke="#8fbda6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />

              <path
                d="M230 150 C230 90 260 50 300 30 C260 44 230 80 230 150 Z"
                fill="#eaf8ef"
                stroke="#7aa88a"
                strokeWidth="2"
                opacity="0.95"
              />
              <path
                d="M230 150 C230 90 200 50 160 30 C200 44 230 80 230 150 Z"
                fill="#eaf8ef"
                stroke="#7aa88a"
                strokeWidth="2"
                opacity="0.95"
              />

              <path d="M210 120 C205 105 200 95 190 80" fill="none" stroke="#9fcfb6" strokeWidth="1.2" opacity="0.85"/>
              <path d="M250 120 C255 105 260 95 270 80" fill="none" stroke="#9fcfb6" strokeWidth="1.2" opacity="0.85"/>

              <path
                d="M180 210 C210 240 270 240 300 210 C260 230 215 230 180 210 Z"
                fill="#dff3ea"
                stroke="#8fbda6"
                strokeWidth="2"
                opacity="0.95"
              />
            </g>

            <g transform="translate(360,140) rotate(-8)" opacity="0.55">
              <path d="M0 0 C40 -40 80 -60 120 -40" fill="none" stroke="#cfeadb" strokeWidth="4" strokeLinecap="round"/>
              <path d="M20 10 C60 -30 100 -50 140 -30" fill="none" stroke="#cfeadb" strokeWidth="3" strokeLinecap="round"/>
            </g>
          </svg>
        </div>

        <div className="absolute left-0 right-0 bottom-0">
          <svg
            viewBox="0 0 1440 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 40 C 360 140 1080 -60 1440 40 V 140 H 0 V 40 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#759c7c] mb-6 flex items-center gap-3">
            <Info size={28} className="text-[#759c7c]" />
            Who We Are
          </h2>

          <p className="text-slate-700 text-lg leading-relaxed">
            Sarv Hita Natural Ayurvedic provides authentic Ayurvedic care under the
            expertise of <strong>Vaidya Archana Kedwani (Ayurvedacharya)</strong>. We deliver natural healing solutions,
            herbal medicines, and trusted Panchakarma therapies rooted in classical Ayurvedic principles.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 text-lg">
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <MapPin size={20} className="text-[#759c7c]" />
                Nehru Nagar Cross Road, Ahmedabad
              </p>

              <p className="flex items-center gap-3">
                <Clock size={20} className="text-[#759c7c]" />
                11:00 AM – 5:00 PM
              </p>
            </div>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <Phone size={20} className="text-[#759c7c]" />
                98765-43210 / 94287-25550
              </p>

              <p className="text-sm text-slate-500">
                <strong>Vaidya Archana Kedwani</strong> is a trained Ayurvedacharya with experience in classical
                Panchakarma and chronic disease management. Our clinic follows strict hygiene and quality standards
                for all treatments and herbal medicines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
