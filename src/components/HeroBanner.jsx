"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { FiArrowRight, FiSearch, FiCheckCircle } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";

const HeroBanner = () => {
  // স্লাইডারের ডাটা
  const sliders = [
    {
      id: 1,
      title: "Your Health, Our Top Priority",
      subtitle: "Find the best doctors, book appointments, and manage your health records effortlessly with our modern platform.",
      primaryBtn: "Book Appointment",
      primaryLink: "/dashboard",
      secondaryBtn: "Find Doctors",
      secondaryLink: "/doctors",
      highlight: "Trusted by 10k+ Patients",
      // ব্যাকগ্রাউন্ডের জন্য কালার/গ্রেডিয়েন্ট (তুমি চাইলে ইমেজও দিতে পারো)
      bgGradient: "from-sky-50 to-white dark:from-[#0f172a] dark:to-[#090e17]",
      blobColor: "bg-[#006A9C]/20 dark:bg-[#0EA5E9]/15",
    },
    {
      id: 2,
      title: "Expert Doctors at Your Fingertips",
      subtitle: "Connect with top-rated medical professionals from various specialties. Get the care you deserve without the wait.",
      primaryBtn: "Explore Specialties",
      primaryLink: "/specialties",
      secondaryBtn: "Learn More",
      secondaryLink: "/about",
      highlight: "50+ Specialties Available",
      bgGradient: "from-indigo-50 to-white dark:from-[#0f172a] dark:to-[#090e17]",
      blobColor: "bg-indigo-500/15 dark:bg-indigo-500/15",
    },
    {
      id: 3,
      title: "Modern Healthcare, Simplified",
      subtitle: "Experience a seamless digital healthcare journey. Access your dashboard anytime, anywhere, on any device.",
      primaryBtn: "Go to Dashboard",
      primaryLink: "/dashboard",
      secondaryBtn: "Contact Support",
      secondaryLink: "/contact",
      highlight: "24/7 Digital Access",
      bgGradient: "from-emerald-50 to-white dark:from-[#0f172a] dark:to-[#090e17]",
      blobColor: "bg-emerald-500/15 dark:bg-emerald-500/15",
    }
  ];

  return (
    <div className="relative w-full min-h-[90vh] md:min-h-[85vh] flex items-center bg-white dark:bg-[#090e17] overflow-hidden group">
      
      {/* ── CUSTOM SWIPER PAGINATION STYLE ── */}
      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .dark .hero-swiper .swiper-pagination-bullet {
          background-color: #475569;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          background-color: #006A9C;
          opacity: 1;
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
          <SwiperSlide key={slide.id} className="relative w-full h-full flex items-center">
            
            {/* Background Gradient & Animated Blobs */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-colors duration-700 -z-20`}></div>
            
            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>
            
            <div className={`absolute top-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] animate-blob ${slide.blobColor} -z-10`}></div>

            {/* Main Content Container */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 h-full py-20 lg:py-0">
              
              {/* ── LEFT SIDE: TEXT CONTENT ── */}
              <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left z-10 pt-10 lg:pt-0">
                
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm mb-6 animate-[fadeInUp_0.8s_ease-out]">
                  <span className="w-2 h-2 rounded-full bg-[#006A9C] dark:bg-[#0EA5E9] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                    {slide.highlight}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 animate-[fadeInUp_1s_ease-out]">
                  {slide.title.split(',')[0]}
                  {slide.title.includes(',') && ','} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006A9C] to-sky-500 dark:from-[#0EA5E9] dark:to-sky-300">
                    {slide.title.split(',')[1] || ""}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 max-w-xl leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-[fadeInUp_1.4s_ease-out]">
                  {/* Primary Button */}
                  <Link
                    href={slide.primaryLink}
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#006A9C] dark:bg-[#0EA5E9] text-white text-[15px] font-bold rounded-2xl overflow-hidden transition-all duration-300 active:scale-95 shadow-[0_8px_30px_rgba(0,106,156,0.2)] hover:shadow-[0_8px_30px_rgba(0,106,156,0.4)] dark:shadow-[0_8px_30px_rgba(14,165,233,0.2)] dark:hover:shadow-[0_8px_30px_rgba(14,165,233,0.4)] w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-400 ease-out group-hover:w-full z-0"></div>
                    <span className="relative z-10">{slide.primaryBtn}</span>
                    <FiArrowRight className="text-lg relative z-10 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Secondary Button */}
                  <Link
                    href={slide.secondaryLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-[15px] font-bold rounded-2xl transition-all duration-300 active:scale-95 w-full sm:w-auto backdrop-blur-sm"
                  >
                    <FiSearch className="text-lg mb-0.5" />
                    <span>{slide.secondaryBtn}</span>
                  </Link>
                </div>
              </div>

              {/* ── RIGHT SIDE: VISUALS & GLASSMORPHISM CARDS ── */}
              <div className="w-full lg:w-2/5 relative flex justify-center lg:justify-end animate-[fadeInUp_1.6s_ease-out]">
                
                {/* Main Illustration/Image Placeholder */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-full border border-slate-100 dark:border-slate-800 bg-gradient-to-tr from-sky-100 to-white dark:from-slate-800/50 dark:to-slate-900 shadow-2xl flex items-center justify-center overflow-hidden">
                  
                  {/* তুমি চাইলে এখানে Next/Image ব্যবহার করে অরিজিনাল ডক্টরের ছবি দিতে পারো */}
                  <FaUserMd className="text-[150px] sm:text-[200px] text-[#006A9C]/20 dark:text-[#0EA5E9]/20" />

                  {/* Floating Glassmorphism Badge 1 */}
                  <div className="absolute top-10 -left-6 md:-left-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/50 dark:border-slate-600/50 p-4 rounded-2xl shadow-xl animate-[float_4s_ease-in-out_infinite]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
                        <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 text-lg" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-slate-900 dark:text-white">Verified</p>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Professionals</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Glassmorphism Badge 2 */}
                  <div className="absolute bottom-12 -right-4 md:-right-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/50 dark:border-slate-600/50 p-4 rounded-2xl shadow-xl animate-[float_5s_ease-in-out_infinite_reverse]">
                    <div className="flex flex-col gap-1">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-sky-200"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-indigo-200"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-emerald-200"></div>
                      </div>
                      <p className="text-xs font-extrabold text-slate-900 dark:text-white mt-1">10k+ Happy</p>
                      <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Patients connected</p>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── CUSTOM CSS ANIMATIONS ── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
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