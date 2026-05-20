"use client";

import React from 'react';
import Link from 'next/link';

import { FiHome, FiGrid, FiArrowRight } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-[#090e17] flex items-center justify-center p-6 relative overflow-hidden font-sans transition-colors duration-500">
      
      {/* ── BACKGROUND GRID & GLOWS (Ultra Modern) ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#006A9C]/20 dark:bg-[#0EA5E9]/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[80px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[80px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-[40rem] h-[40rem] bg-sky-300/20 dark:bg-sky-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl">

        {/* Top Status Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
            Error 404
          </span>
        </div>

        {/* Floating 404 Text */}
        <div className="relative animate-float mb-8">
          <h1 className="text-[140px] md:text-[220px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-400 dark:from-white dark:to-slate-600 drop-shadow-2xl">
            404
          </h1>
        </div>

        {/* Glassmorphism Details Box */}
        <div className="w-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] text-center transform transition-all duration-500 hover:-translate-y-2 group">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Looks like you're lost.
          </h2>
          <p className="text-[16px] text-slate-500 dark:text-slate-400 font-medium mb-10 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, deleted, or possibly never existed. Let's get you back on track.
          </p>

          {/* 🛠️ Action Buttons (Home + Dashboard) */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            
            {/* 1. Home Button (Glassmorphism Style) */}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 text-[15px] font-bold rounded-2xl transition-all duration-300 active:scale-95 w-full sm:w-auto backdrop-blur-md"
            >
              <FiHome className="text-xl mb-0.5" />
              <span>Home</span>
            </Link>

            {/* 2. Dashboard Button (Advanced Hover Sweep) */}
            <Link
              href="/dashboard"
              className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[15px] font-bold rounded-2xl overflow-hidden transition-transform active:scale-95 w-full sm:w-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              {/* Hover Background Sweep */}
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#006A9C] to-sky-500 dark:from-[#0EA5E9] dark:to-sky-400 transition-all duration-400 ease-out group-hover/btn:w-full z-0"></div>

              <FiGrid className="text-xl relative z-10 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:text-white" />
              <span className="relative z-10 transition-colors group-hover/btn:text-white">
                Dashboard
              </span>
              <FiArrowRight className="text-lg relative z-10 opacity-0 -translate-x-4 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0 group-hover/btn:text-white" />
            </Link>
            
          </div>
        </div>
      </div>

      {/* ── CUSTOM CSS ANIMATIONS ── */}
      <style>{`
        /* Floating Animation for 404 */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Background Blob Animation */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Fade In Up Animation for Badge */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
      
    </div>
  );
};

export default NotFound;