"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { FiArrowRight, FiSearch, FiCheckCircle } from "react-icons/fi";
import {
  FaUserMd,
  FaHeartbeat,
  FaPills,
  FaAmbulance,
  FaStethoscope,
  FaUserShield,
  FaNotesMedical,
} from "react-icons/fa";

const HeroBanner = () => {
  const sliders = [
    {
      id: 1,
      title: "Your Health, Our Top Priority",
      subtitle:
        "Find the best doctors, book appointments, and manage your records effortlessly.",
      primaryBtn: "Book Now",
      secondaryBtn: "Find Doctors",
      highlight: "Trusted by 10k+",

      icon: (
        <FaUserMd className="text-[70px] sm:text-[100px] lg:text-[130px] text-[#006A9C]/30 dark:text-[#0EA5E9]/50 drop-shadow-md" />
      ),
      bgGradient: "from-sky-50 to-white dark:from-[#090e17] dark:to-[#0f172a]",
      blobColor: "bg-[#006A9C]/20 dark:bg-[#0EA5E9]/15",
    },
    {
      id: 2,
      title: "Expert Doctors at Your Fingertips",
      subtitle:
        "Connect with top-rated professionals. Get the care you deserve instantly.",
      primaryBtn: "Specialties",
      secondaryBtn: "Learn More",
      highlight: "50+ Specialties",
      icon: (
        <FaStethoscope className="text-[70px] sm:text-[100px] lg:text-[130px] text-indigo-500/30 dark:text-indigo-400/40 drop-shadow-md" />
      ),
      bgGradient:
        "from-indigo-50 to-white dark:from-[#090e17] dark:to-[#0f172a]",
      blobColor: "bg-indigo-500/15 dark:bg-indigo-500/15",
    },
    {
      id: 3,
      title: "Modern Healthcare, Simplified",
      subtitle:
        "Experience a seamless digital journey. Access your dashboard anytime, anywhere.",
      primaryBtn: "Dashboard",
      secondaryBtn: "Support",
      highlight: "24/7 Access",
      icon: (
        <FaNotesMedical className="text-[70px] sm:text-[100px] lg:text-[130px] text-emerald-500/30 dark:text-emerald-400/40 drop-shadow-md" />
      ),
      bgGradient:
        "from-emerald-50 to-white dark:from-[#090e17] dark:to-[#0f172a]",
      blobColor: "bg-emerald-500/15 dark:bg-emerald-500/15",
    },
    {
      id: 4,
      title: "Emergency Care When Needed",
      subtitle:
        "Fast response ambulances and 24/7 emergency support for critical moments.",
      primaryBtn: "Call Now",
      secondaryBtn: "Services",
      highlight: "Quick Response",
      icon: (
        <FaAmbulance className="text-[70px] sm:text-[100px] lg:text-[130px] text-rose-500/30 dark:text-rose-400/40 drop-shadow-md" />
      ),
      bgGradient: "from-rose-50 to-white dark:from-[#090e17] dark:to-[#0f172a]",
      blobColor: "bg-rose-500/15 dark:bg-rose-500/15",
    },
    {
      id: 5,
      title: "Online Pharmacy & Medicines",
      subtitle:
        "Order your prescribed medicines online and get them delivered to your door.",
      primaryBtn: "Order Meds",
      secondaryBtn: "Upload Rx",
      highlight: "Fast Delivery",
      icon: (
        <FaPills className="text-[70px] sm:text-[100px] lg:text-[130px] text-teal-500/30 dark:text-teal-400/40 drop-shadow-md" />
      ),
      bgGradient: "from-teal-50 to-white dark:from-[#090e17] dark:to-[#0f172a]",
      blobColor: "bg-teal-500/15 dark:bg-teal-500/15",
    },
    {
      id: 6,
      title: "Secure Health Records",
      subtitle:
        "Your data is encrypted and securely stored. Access your medical history instantly.",
      primaryBtn: "View Records",
      secondaryBtn: "Privacy",
      highlight: "100% Secured",
      icon: (
        <FaUserShield className="text-[70px] sm:text-[100px] lg:text-[130px] text-purple-500/30 dark:text-purple-400/40 drop-shadow-md" />
      ),
      bgGradient:
        "from-purple-50 to-white dark:from-[#090e17] dark:to-[#0f172a]",
      blobColor: "bg-purple-500/15 dark:bg-purple-500/15",
    },
    {
      id: 7,
      title: "Personalized Care Plans",
      subtitle:
        "Tailored health plans just for you. Monitor your vitals and stay healthy.",
      primaryBtn: "Get Started",
      secondaryBtn: "Free Checkup",
      highlight: "Tailored For You",
      icon: (
        <FaHeartbeat className="text-[70px] sm:text-[100px] lg:text-[130px] text-amber-500/30 dark:text-amber-400/40 drop-shadow-md" />
      ),
      bgGradient:
        "from-amber-50 to-white dark:from-[#090e17] dark:to-[#0f172a]",
      blobColor: "bg-amber-500/15 dark:bg-amber-500/15",
    },
  ];

  return (
    <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[420px] flex items-center bg-white dark:bg-[#090e17] group border-b border-slate-100 dark:border-slate-800">
      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 10px !important; 
        }
        .hero-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #cbd5e1;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        @media (min-width: 1024px) {
          .hero-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }
        .dark .hero-swiper .swiper-pagination-bullet {
          background-color: #475569;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 6px;
          background-color: #006A9C;
          opacity: 1;
        }
        @media (min-width: 1024px) {
          .hero-swiper .swiper-pagination-bullet-active {
            width: 32px;
          }
        }
        .dark .hero-swiper .swiper-pagination-bullet-active {
          background-color: #0EA5E9;
        }
      `}</style>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full hero-swiper absolute inset-0"
      >
        {sliders.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative w-full h-full flex items-center"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-colors duration-700 -z-20`}
            ></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] lg:bg-[size:40px_40px] -z-10"></div>
            <div
              className={`absolute top-1/4 right-1/4 w-[15rem] sm:w-[25rem] h-[15rem] sm:h-[25rem] rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-blob ${slide.blobColor} -z-10`}
            ></div>

            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 w-full flex flex-row items-center justify-between gap-4 h-full pb-4 lg:pb-6">
              {/* ── LEFT SIDE: TEXT CONTENT ── */}
              <div className="w-[55%] lg:w-[50%] flex flex-col items-start text-left z-10 pt-2 sm:pt-0">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 lg:px-3.5 lg:py-1.5 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm mb-2 sm:mb-3 lg:mb-4 animate-[fadeInUp_0.8s_ease-out]">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#006A9C] dark:bg-[#0EA5E9] animate-pulse"></span>
                  <span className="text-[8px] sm:text-[10px] lg:text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest whitespace-nowrap">
                    {slide.highlight}
                  </span>
                </div>

                <h1 className="text-[20px] leading-[1.15] sm:text-[28px] sm:leading-[1.15] lg:text-[46px] lg:leading-[1.1] font-black tracking-tight text-slate-900 dark:text-white mb-2 sm:mb-3 animate-[fadeInUp_1s_ease-out]">
                  {slide.title.split(",")[0]}
                  {slide.title.includes(",") && ","} <br className="block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006A9C] to-sky-500 dark:from-[#0EA5E9] dark:to-sky-300">
                    {slide.title.split(",")[1] || ""}
                  </span>
                </h1>

                <p className="text-[10px] sm:text-[12px] lg:text-[14px] text-slate-600 dark:text-slate-400 font-medium mb-3 sm:mb-5 lg:mb-6 max-w-[200px] sm:max-w-md lg:max-w-lg leading-snug lg:leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
                  {slide.subtitle}
                </p>

                <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 animate-[fadeInUp_1.4s_ease-out]">
                  <Link
                    href="/dashboard"
                    className="group relative inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-[#006A9C] dark:bg-[#0EA5E9] text-white text-[10px] sm:text-[12px] lg:text-[14px] font-bold rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 active:scale-95 shadow-md w-auto"
                  >
                    <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-400 ease-out group-hover:w-full z-0"></div>
                    <span className="relative z-10 whitespace-nowrap">
                      {slide.primaryBtn}
                    </span>
                    <FiArrowRight className="text-xs sm:text-sm lg:text-base relative z-10 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/doctors"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-[10px] sm:text-[12px] lg:text-[14px] font-bold rounded-lg sm:rounded-xl transition-all duration-300 active:scale-95 w-auto backdrop-blur-sm"
                  >
                    <FiSearch className="text-xs sm:text-sm lg:text-base mb-0.5" />
                    <span className="whitespace-nowrap">
                      {slide.secondaryBtn}
                    </span>
                  </Link>
                </div>
              </div>

              {/* ── RIGHT SIDE: VISUALS ── */}
              <div className="w-[45%] lg:w-[45%] relative flex justify-end animate-[fadeInUp_1.6s_ease-out] z-20">
                <div className="relative w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[280px] lg:h-[280px] rounded-full border border-white/60 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl shadow-xl flex items-center justify-center shrink-0">
                  {slide.icon}

                  <div className="absolute top-0 -left-2 sm:top-2 sm:-left-6 lg:top-6 lg:-left-10 bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl border border-white/50 dark:border-slate-600/50 p-1 sm:p-2 lg:p-3 rounded-md sm:rounded-xl shadow-lg animate-[float_4s_ease-in-out_infinite] z-30">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
                        <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 text-[8px] sm:text-xs lg:text-sm" />
                      </div>
                      <div className="whitespace-nowrap">
                        <p className="text-[7px] sm:text-[9px] lg:text-[12px] font-extrabold text-slate-900 dark:text-white leading-tight">
                          Verified
                        </p>
                        <p className="text-[6px] sm:text-[7px] lg:text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                          Professionals
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 -right-2 sm:bottom-2 sm:-right-4 lg:bottom-6 lg:-right-6 bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl border border-white/50 dark:border-slate-600/50 p-1 sm:p-2 lg:p-3 rounded-md sm:rounded-xl shadow-lg animate-[float_5s_ease-in-out_infinite_reverse] z-30">
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <div className="flex -space-x-1 sm:-space-x-1.5">
                        <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full border border-white dark:border-slate-800 bg-sky-200"></div>
                        <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full border border-white dark:border-slate-800 bg-indigo-200"></div>
                        <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full border border-white dark:border-slate-800 bg-emerald-200"></div>
                      </div>
                      <p className="text-[7px] sm:text-[9px] lg:text-[12px] font-extrabold text-slate-900 dark:text-white mt-0.5 whitespace-nowrap leading-tight">
                        10k+ Happy
                      </p>
                      <p className="text-[6px] sm:text-[7px] lg:text-[10px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap leading-tight">
                        Patients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;
