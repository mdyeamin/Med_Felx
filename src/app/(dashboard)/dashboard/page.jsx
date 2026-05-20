"use client";

import React, { useState, useEffect } from "react";
import {
  FiUsers,
  FiActivity,
  FiCalendar,
  FiTrendingUp,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiMoreVertical,
} from "react-icons/fi";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState("Loading...");

  useEffect(() => {
    const updateTime = () => {
      const today = new Date();
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentDate(today.toLocaleDateString("en-US", options));
    };

    updateTime();

    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-[#0f172a] p-5 md:p-8 lg:p-10 transition-colors">
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-[32px] font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Dashboard Overview
            </h1>
            <p className="text-sm md:text-[15px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
              Welcome back! Here's what's happening with your clinic today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-5 py-2.5 bg-white/80 dark:bg-[#1e293b]/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 rounded-xl text-sm font-bold text-[#006A9C] dark:text-[#0EA5E9] shadow-sm flex items-center gap-2">
              <FiCalendar className="text-lg" />
              {currentDate}
            </div>
          </div>
        </div>

        {/* ── STATS CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                Total Patients
              </p>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <FiUsers className="text-xl" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                2,451
              </h3>
              <span className="text-[13px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-lg flex items-center gap-1">
                <FiTrendingUp /> +12%
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                Appointments
              </p>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-[#006A9C] text-white flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
                <FiCalendar className="text-xl" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                124
              </h3>
              <span className="text-[13px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-lg flex items-center gap-1">
                <FiTrendingUp /> +8%
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                Treatments
              </p>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <FiActivity className="text-xl" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                86
              </h3>
              <span className="text-[13px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 px-2.5 py-1 rounded-lg flex items-center gap-1">
                <FiTrendingUp className="rotate-180" /> -2%
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                Revenue
              </p>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                <FiTrendingUp className="text-xl" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                $12.5k
              </h3>
              <span className="text-[13px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-lg flex items-center gap-1">
                <FiTrendingUp /> +18%
              </span>
            </div>
          </div>
        </div>

        {/* ── CHARTS & ACTIVITY SECTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MOCK CHART */}
          <div className="lg:col-span-2 bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl p-7 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-[19px] font-extrabold text-slate-900 dark:text-white">
                  Patient Visit Trends
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                  Weekly patient inflow analysis
                </p>
              </div>
              <button className="h-10 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors outline-none">
                This Week
              </button>
            </div>

            {/* CSS Mock Bar Chart with Gradient */}
            <div className="h-[260px] flex items-end justify-between gap-3 pt-4">
              {[40, 70, 45, 90, 60, 85, 50].map((height, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-full bg-slate-100/50 dark:bg-slate-800/50 rounded-xl relative h-[210px] flex items-end overflow-hidden">
                    <div
                      className="w-full bg-gradient-to-t from-[#005B84] to-[#0EA5E9] dark:from-[#0EA5E9]/60 dark:to-[#38bdf8] rounded-xl transition-all duration-500 group-hover:opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <span className="text-[13px] font-bold text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RECENT ACTIVITY (Timeline Design) */}
          <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl p-7 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none flex flex-col">
            <div className="flex justify-between items-center mb-8 shrink-0">
              <h3 className="text-[19px] font-extrabold text-slate-900 dark:text-white">
                Recent Activity
              </h3>
              <button className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                <FiMoreVertical className="text-xl" />
              </button>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-3 border-l-2 border-slate-100 dark:border-slate-700/50 space-y-8 flex-1">
              {/* Activity 1 */}
              <div className="relative pl-5">
                <div className="absolute -left-[27px] top-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border-4 border-white dark:border-[#1e293b] flex items-center justify-center shadow-sm">
                  <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 text-lg" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900 dark:text-slate-100">
                    Checkup Completed
                  </h4>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Dr. Sarah finished routine checkup with Liam Walker.
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2.5 py-1 rounded-md">
                    10 mins ago
                  </span>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="relative pl-5">
                <div className="absolute -left-[27px] top-0 w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-500/10 border-4 border-white dark:border-[#1e293b] flex items-center justify-center shadow-sm">
                  <FiClock className="text-sky-600 dark:text-sky-400 text-lg" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900 dark:text-slate-100">
                    New Booking
                  </h4>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Elena Rodriguez booked for Cardiology appt.
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2.5 py-1 rounded-md">
                    2 hours ago
                  </span>
                </div>
              </div>

              {/* Activity 3 */}
              <div className="relative pl-5">
                <div className="absolute -left-[27px] top-0 w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-500/10 border-4 border-white dark:border-[#1e293b] flex items-center justify-center shadow-sm">
                  <FiAlertCircle className="text-rose-600 dark:text-rose-400 text-lg" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900 dark:text-slate-100">
                    Payment Pending
                  </h4>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Invoice #4023 is awaiting patient payment.
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2.5 py-1 rounded-md">
                    5 hours ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
