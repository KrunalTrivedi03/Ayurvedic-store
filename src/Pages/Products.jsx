import {
  ShoppingBag,
  FlaskRound,
  Leaf,
  Coffee,
  Wheat,
  Baby,
} from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "Ayurvedic Medicines",
      desc: "Classical & proprietary medicines prepared using authentic herbs.",
      icon: FlaskRound,
    },
    {
      title: "Oils & Churnas",
      desc: "Pure herbal oils, churnas, kadhas, ghrit & guggulu formulations.",
      icon: Leaf,
    },
    {
      title: "Herbal Drinks",
      desc: "Detox teas, nutritional herbal blends & immunity boosters.",
      icon: Coffee,
    },
    {
      title: "Healthy Foods",
      desc: "Millet-based foods, sugar-free products & natural health snacks.",
      icon: Wheat,
    },
    {
      title: "For All Age Groups",
      desc: "Safe, gentle & effective Ayurvedic wellness products.",
      icon: Baby,
    },
  ];

  return (
    <main className="pt-16 bg-white">

      <section className="relative bg-[#f8faf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-28">
          <div className="lg:w-3/5">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Ayurvedic Products
            </h1>
            <p className="text-lg text-slate-600 mt-4">
              100% authentic, safe & naturally effective.
            </p>
          </div>
        </div>

        <div
          className="
            pointer-events-none 
            select-none 
            absolute 
            right-0 
            top-8 
            opacity-60 
            -translate-y-6
          "
          style={{
            width: "520px",
            maxWidth: "48vw",
            transformOrigin: "top right",
          }}
          aria-hidden
        >
          <svg
            viewBox="0 0 640 480"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
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
                opacity="0.45"
              />
              <path
                d="M310 90 C365 20 440 18 480 78 C428 72 380 98 330 142"
                fill="url(#petalGrad)"
                opacity="0.45"
              />
            </g>

            <g transform="translate(80,80)">
              <path
                d="M200 160 C140 120 100 60 120 20 C130 44 150 74 186 106"
                fill="none"
                stroke="#8fbda6"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                d="M260 160 C320 120 360 60 340 20 C330 44 310 74 274 106"
                fill="none"
                stroke="#8fbda6"
                strokeWidth="3"
                strokeLinecap="round"
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

              <path
                d="M210 120 C205 105 200 95 190 80"
                fill="none"
                stroke="#9fcfb6"
                strokeWidth="1.2"
                opacity="0.85"
              />
              <path
                d="M250 120 C255 105 260 95 270 80"
                fill="none"
                stroke="#9fcfb6"
                strokeWidth="1.2"
                opacity="0.85"
              />

              <path
                d="M180 210 C210 240 270 240 300 210 C260 230 215 230 180 210 Z"
                fill="#dff3ea"
                stroke="#8fbda6"
                strokeWidth="2"
                opacity="0.95"
              />
            </g>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            className="w-full block"
          >
            <path
              d="M0 40 C 360 140 1080 -60 1440 40 V 140 H 0 V 40 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl font-semibold text-[#759c7c] flex items-center gap-2 mb-8 sm:mb-10">
            <ShoppingBag className="text-[#759c7c]" size={26} />
            Our Product Range
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ecf6ef] flex items-center justify-center mb-4">
                    <Icon className="text-[#759c7c]" size={26} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-red-600 font-semibold text-lg">
            *Up to 15% discount on selected medicines.
          </p>

        </div>
      </section>
    </main>
  );
}
