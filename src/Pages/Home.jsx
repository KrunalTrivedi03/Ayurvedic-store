import React from "react";
import {
  MessageCircle,
  HeartPulse,
  ShoppingBag,
  Phone,
  HelpCircle,
  Leaf,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  return (
    <main className="pt-16 bg-white w-full overflow-x-hidden">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 py-16 lg:py-28">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-base md:text-lg tracking-wide text-[#759c7c]">
              Welcome to Sarv Hita
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Natural care for <br className="hidden lg:block" /> natural
              health.
            </h1>

            <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Authentic Ayurvedic treatments, Panchakarma therapies, and herbal
              medicines to restore balance to body and mind.
            </p>

            <div className="mt-4 flex justify-center lg:justify-start">
              <button className="rounded-full bg-[#759c7c] text-white px-10 py-3 text-base font-semibold hover:bg-[#678b6b] shadow">
                Discover more
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[460px] h-64 sm:h-80 md:h-96 lg:h-[460px]">
              <div className="absolute inset-0 rounded-full bg-[#ecf6ef] transform scale-[1.03]" />

              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="relative w-full h-full flex items-center justify-center"
              >
                <SwiperSlide className="flex items-center justify-center">
                  <img
                    src="https://fullkit.moxcreative.com/bagasaka/wp-content/uploads/sites/9/2022/07/1-2.png"
                    alt="Herbal capsules"
                    className="relative z-10 max-h-full object-contain drop-shadow-2xl"
                  />
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center">
                  <img
                    src="https://fullkit.moxcreative.com/bagasaka/wp-content/uploads/sites/9/2022/07/3.png"
                    alt="Ayurvedic herbs"
                    className="relative z-10 max-h-full object-contain drop-shadow-2xl"
                  />
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center">
                  <img
                    src="https://fullkit.moxcreative.com/bagasaka/wp-content/uploads/sites/9/2022/07/2-1.png"
                    alt="Natural products"
                    className="relative z-10 max-h-full object-contain drop-shadow-2xl"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
              <MessageCircle className="text-[#759c7c]" size={36} />
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Consultations
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Personalized Ayurvedic consultation for your body type and
                  lifestyle.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[linear-gradient(90deg,#759c7c,#678b6b)] text-white shadow-lg p-6 flex items-start gap-4">
              <HeartPulse size={36} />
              <div>
                <h3 className="text-xl font-semibold">Treatments</h3>
                <p className="text-sm mt-1">
                  Joint pain, digestive issues, skin problems, diabetes and
                  more.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
              <ShoppingBag className="text-[#759c7c]" size={36} />
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Ayurvedic Store
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Herbal medicines, oils, kadhas, teas and wellness products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-sm text-[#759c7c] italic">How it works</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Easy steps to start your Ayurvedic journey.
            </h2>
            <p className="text-slate-600 max-w-xl">
              Book your consultation, follow your personalized Ayurvedic plan,
              and experience natural healing with the right guidance, diet, and
              therapies.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-3">
                <Phone className="text-[#759c7c]" />
                <div>
                  <p className="text-xs text-slate-400">Need help? Call us</p>
                  <p className="text-sm font-semibold text-slate-900">
                    98765-43210
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-3">
                <HelpCircle className="text-[#759c7c]" />
                <div>
                  <p className="text-xs text-slate-400">Customer service?</p>
                  <p className="text-sm font-semibold text-slate-900">
                    Let's talk
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-[linear-gradient(90deg,#759c7c,#678b6b)] text-white p-5 flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold">Consultation with our expert</h3>
                <p className="text-sm mt-1">
                  Share your health history and lifestyle with our Ayurvedic
                  doctor.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-100 p-5 flex gap-4 items-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#ecf6ef] text-[#759c7c] flex items-center justify-center text-lg font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Get an appointment
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Schedule your visit for Panchakarma or treatment sessions.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-100 p-5 flex gap-4 items-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#ecf6ef] text-[#759c7c] flex items-center justify-center text-lg font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Enjoy your healing
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Follow the plan, therapies and diet for sustained health and
                  wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://fullkit.moxcreative.com/bagasaka/wp-content/uploads/sites/9/2022/07/ayurvedic-neem-or-azadirachta-indica-it-s-by-products.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Discount up to 15% on selected products.
          </h2>
          <p className="text-sm md:text-base text-slate-100 mb-6">
            Limited-time offer on Ayurvedic medicines, herbal teas and wellness
            packages.
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-[#759c7c] px-8 py-3 text-sm font-semibold hover:bg-[#678b6b]">
            View offers
          </button>
        </div>
      </section>

      <section className="bg-[#ecf6f0] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Pure Ayurveda
            </h2>
            <p className="text-[#759c7c] mt-2 font-medium">
              Best for your body & mind
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
            <div className="order-2 lg:order-1 flex flex-col items-start gap-6 px-4 lg:px-10">
              {[
                "100% Organic",
                "Best Quality",
                "Hygienic Product",
                "Quality Tested",
                "Health Care",
              ].map((t, i) => (
                <div
                  key={i}
                  className="w-full flex items-center lg:justify-end gap-6"
                >
                  <p className="text-base lg:text-lg text-slate-800">{t}</p>
                  <div className="hidden lg:block flex-1 max-w-[260px]">
                    <div className="h-px border-t border-dashed border-[#bfe1cf]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-[420px] h-[420px] rounded-full border-2 border-dashed border-[#bfe1cf] flex items-center justify-center">
                  <div className="w-[240px] h-[240px] rounded-full bg-[#eaf8ef] flex items-center justify-center">
                    <div className="rounded-full flex items-center justify-center">
                      <img
                        src="https://kamleshyadav.com/html/pure-ayurveda/html/ayurveda-html/assets/images/herbal.svg"
                        alt="Ayurveda Herbal Icon"
                        className="w-[200px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-3 flex flex-col items-end gap-6 px-4 lg:px-10">
              {[
                "100% Herbal",
                "Trusted Formulations",
                "Safe for Long Term",
                "Expert Supervision",
                "Holistic Approach",
              ].map((t, i) => (
                <div key={i} className="w-full flex items-center gap-6">
                  <div className="hidden lg:block flex-1 max-w-[260px]">
                    <div className="h-px border-t border-dashed border-[#bfe1cf]" />
                  </div>
                  <p className="text-base lg:text-lg text-slate-800 text-right">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}