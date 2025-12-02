import { MapPin, Phone, Mail, ContactRound } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-16 bg-white">
      <section className="relative bg-[#f8faf8] overflow-hidden pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 mt-3">
            We’re here to help you with any inquiries.
          </p>
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
          <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <linearGradient id="petalGradContact" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#dff3ea" />
                <stop offset="100%" stopColor="#ecf8ef" />
              </linearGradient>
            </defs>

            <g transform="translate(120,40) scale(1.05)">
              <path
                d="M210 80 C170 20 95 12 60 72 C120 66 170 92 210 140"
                fill="url(#petalGradContact)"
                stroke="none"
                opacity="0.45"
              />
              <path
                d="M310 90 C365 20 440 18 480 78 C428 72 380 98 330 142"
                fill="url(#petalGradContact)"
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

            <g transform="translate(360,140) rotate(-8)" opacity="0.55">
              <path d="M0 0 C40 -40 80 -60 120 -40" fill="none" stroke="#cfeadb" strokeWidth="4" strokeLinecap="round" />
              <path d="M20 10 C60 -30 100 -50 140 -30" fill="none" stroke="#cfeadb" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 140" className="w-full" preserveAspectRatio="none">
            <path d="M0 40 C 360 140 1080 -60 1440 40 V 140 H 0 V 40 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
            <p className="text-[#759c7c] italic text-lg">Get in touch</p>

            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2 leading-snug">
              We will be in touch shortly
            </h2>

            <p className="text-slate-600 mt-4 leading-relaxed">
              Reach out to us for appointments, queries or Ayurvedic guidance. 
              We are happy to help you.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#82a68a] bg-opacity-30 flex items-center justify-center">
                  <MapPin size={26} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Location</h4>
                  <p className="text-slate-700 mt-1 leading-snug">
                    C/2, “H” Colony, Nehru Nagar<br />
                    Ahmedabad, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#82a68a] bg-opacity-30 flex items-center justify-center">
                  <Mail size={26} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Email us</h4>
                  <p className="text-slate-700 mt-1 leading-snug">
                    support@sarvhita.com<br />
                    care@sarvhita.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#82a68a] bg-opacity-30 flex items-center justify-center">
                  <Phone size={26} className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Call us</h4>
                  <p className="text-slate-700 mt-1 leading-snug">
                    +91 9876543210<br />
                    +91 9428725550
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
            <p className="text-[#759c7c] italic text-lg">Send us a message</p>

            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2 leading-snug">
              Have other questions?
            </h2>

            <p className="text-slate-600 mt-4">
              Fill out the form and our team will get back to you soon.
            </p>

            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-b border-slate-300 focus:border-[#759c7c] outline-none py-2"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border-b border-slate-300 focus:border-[#759c7c] outline-none py-2"
                  />
                </div>
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-slate-300 focus:border-[#759c7c] outline-none py-2"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-slate-300 focus:border-[#759c7c] outline-none py-2"
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="w-full border-b border-slate-300 focus:border-[#759c7c] outline-none py-2 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#85a98a] hover:bg-[#759c7c] text-white font-semibold py-3 rounded-full transition text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
