"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import { FiAlertTriangle, FiRefreshCcw, FiGrid, FiHome } from "react-icons/fi";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-[#090e17] flex items-center justify-center p-6 relative overflow-hidden font-sans transition-colors duration-500">
      
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/20 dark:bg-rose-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[80px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-400/20 dark:bg-orange-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[80px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-[40rem] h-[40rem] bg-red-500/10 dark:bg-red-500/5 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] animate-blob animation-delay-4000"></div>

      
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl">

        {/* Top Status Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
            System Error
          </span>
        </div>

        {/* Animated Error Icon */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-rose-500/20 dark:bg-rose-500/30 blur-2xl rounded-full scale-150 transition-transform duration-500 group-hover:scale-110"></div>
          <div className="w-28 h-28 md:w-32 md:h-32 bg-white dark:bg-slate-900 border-2 border-rose-100 dark:border-rose-900/50 rounded-full flex items-center justify-center relative z-10 shadow-xl shadow-rose-500/10 animate-float">
            <FiAlertTriangle className="text-[60px] md:text-[70px] text-rose-500 dark:text-rose-500" />
          </div>
        </div>

        {/* Glassmorphism Details Box */}
        <div className="w-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] text-center transform transition-all duration-500 hover:-translate-y-1">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
            Oops! Something went wrong
          </h2>
          <p className="text-[15px] text-slate-500 dark:text-slate-400 font-medium mb-8 max-w-md mx-auto leading-relaxed">
            An unexpected error has occurred in our system. Don't worry, it's not your fault. Let's try to recover the page.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4">
            
            {/* 1. Home Button (New) */}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 text-[14px] font-bold rounded-xl transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              <FiHome className="text-lg mb-0.5" />
              <span>Home</span>
            </Link>

            {/* 2. Dashboard Button */}
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 text-[14px] font-bold rounded-xl transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              <FiGrid className="text-lg mb-0.5" />
              <span>Dashboard</span>
            </Link>

            {/* 3. Try Again Button */}
            <button
              onClick={() => reset()}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white text-[14px] font-bold rounded-xl overflow-hidden transition-all duration-300 active:scale-95 w-full sm:w-auto shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40"
            >
              <FiRefreshCcw className="text-lg transition-transform duration-500 group-hover:rotate-180" />
              <span>Try Again</span>
            </button>

          </div>
        </div>
      </div>

      {/* ── CUSTOM CSS ANIMATIONS ── */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
      
    </div>
  );
};

export default ErrorPage;