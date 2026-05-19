"use client";

import React from "react";
import { 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiClipboard,
  FiEdit2,
  FiTrash2
} from "react-icons/fi";

const DashboardBookings = () => {
  return (
    <div className="">
      
      {/* ================= MAIN CONTENT ================= */}
      <main className="  w-full overflow-y-auto">
        <div className="max-w-[1000px] mx-auto">
          
          {/* ── HEADER ── */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              My Bookings
            </h1>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mt-1.5">
              Manage your upcoming clinical visits and patient interactions.
            </p>
          </div>

          {/* ── CARDS GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* ================= CARD 1 ================= */}
            <div className="bg-white dark:bg-[#151e32] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4 hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-none transition-all duration-300">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[17px] font-extrabold text-slate-900 dark:text-white leading-tight">
                    Dr. Sarah Jenkins
                  </h2>
                  <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    Senior Cardiologist
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-sky-100 dark:bg-sky-500/10 text-[#006A9C] dark:text-[#0EA5E9] text-[9px] font-black uppercase rounded-full tracking-wider shrink-0">
                  Upcoming
                </span>
              </div>

              {/* Schedule Box */}
              <div className="flex items-center gap-6 bg-sky-50 dark:bg-[#0EA5E9]/5 border border-sky-100/50 dark:border-[#0EA5E9]/10 px-3.5 py-3 rounded-xl">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[13px] font-bold">
                  <FiCalendar className="text-[#006A9C] dark:text-[#0EA5E9] text-[15px]" />
                  <span>Oct 24, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[13px] font-bold">
                  <FiClock className="text-[#006A9C] dark:text-[#0EA5E9] text-[15px]" />
                  <span>09:30 AM</span>
                </div>
              </div>

              {/* Patient & Reason Details */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FiUser className="text-slate-400 dark:text-slate-500 text-[15px]" />
                    <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-200">
                      Michael Thompson
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black uppercase rounded-md tracking-wider">
                    MALE
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <FiClipboard className="text-slate-400 dark:text-slate-500 text-[15px] mt-0.5 shrink-0" />
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 italic leading-relaxed">
                    Routine cardiovascular follow-up and blood pressure management review.
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                <button className="h-[36px] rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2 transition-colors">
                  <FiEdit2 className="text-sm" />
                  Edit
                </button>
                <button className="h-[36px] rounded-lg bg-rose-50 dark:bg-rose-500/10 text-[13px] font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-500/20 flex items-center justify-center gap-2 transition-colors">
                  <FiTrash2 className="text-sm" />
                  Cancel
                </button>
              </div>
            </div>

            {/* ================= CARD 2 ================= */}
            <div className="bg-white dark:bg-[#151e32] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4 hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-none transition-all duration-300">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[17px] font-extrabold text-slate-900 dark:text-white leading-tight">
                    Dr. Marcus Vance
                  </h2>
                  <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    Orthopedic Specialist
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-sky-100 dark:bg-sky-500/10 text-[#006A9C] dark:text-[#0EA5E9] text-[9px] font-black uppercase rounded-full tracking-wider shrink-0">
                  Upcoming
                </span>
              </div>

              {/* Schedule Box */}
              <div className="flex items-center gap-6 bg-sky-50 dark:bg-[#0EA5E9]/5 border border-sky-100/50 dark:border-[#0EA5E9]/10 px-3.5 py-3 rounded-xl">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[13px] font-bold">
                  <FiCalendar className="text-[#006A9C] dark:text-[#0EA5E9] text-[15px]" />
                  <span>Oct 25, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[13px] font-bold">
                  <FiClock className="text-[#006A9C] dark:text-[#0EA5E9] text-[15px]" />
                  <span>02:15 PM</span>
                </div>
              </div>

              {/* Patient & Reason Details */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FiUser className="text-slate-400 dark:text-slate-500 text-[15px]" />
                    <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-200">
                      Elena Rodriguez
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black uppercase rounded-md tracking-wider">
                    FEMALE
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <FiClipboard className="text-slate-400 dark:text-slate-500 text-[15px] mt-0.5 shrink-0" />
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 italic leading-relaxed">
                    Post-operative knee recovery assessment and therapy adjustment.
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                <button className="h-[36px] rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2 transition-colors">
                  <FiEdit2 className="text-sm" />
                  Edit
                </button>
                <button className="h-[36px] rounded-lg bg-rose-50 dark:bg-rose-500/10 text-[13px] font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-500/20 flex items-center justify-center gap-2 transition-colors">
                  <FiTrash2 className="text-sm" />
                  Cancel
                </button>
              </div>
            </div>

            {/* ================= CARD 3 ================= */}
            <div className="bg-white dark:bg-[#151e32] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4 hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-none transition-all duration-300">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[17px] font-extrabold text-slate-900 dark:text-white leading-tight">
                    Dr. Amara Okoro
                  </h2>
                  <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    Neurologist
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-sky-100 dark:bg-sky-500/10 text-[#006A9C] dark:text-[#0EA5E9] text-[9px] font-black uppercase rounded-full tracking-wider shrink-0">
                  Upcoming
                </span>
              </div>

              {/* Schedule Box */}
              <div className="flex items-center gap-6 bg-sky-50 dark:bg-[#0EA5E9]/5 border border-sky-100/50 dark:border-[#0EA5E9]/10 px-3.5 py-3 rounded-xl">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[13px] font-bold">
                  <FiCalendar className="text-[#006A9C] dark:text-[#0EA5E9] text-[15px]" />
                  <span>Oct 28, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[13px] font-bold">
                  <FiClock className="text-[#006A9C] dark:text-[#0EA5E9] text-[15px]" />
                  <span>11:00 AM</span>
                </div>
              </div>

              {/* Patient & Reason Details */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FiUser className="text-slate-400 dark:text-slate-500 text-[15px]" />
                    <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-200">
                      David Chen
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black uppercase rounded-md tracking-wider">
                    MALE
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <FiClipboard className="text-slate-400 dark:text-slate-500 text-[15px] mt-0.5 shrink-0" />
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 italic leading-relaxed">
                    Migraine consultation and prescription renewal.
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                <button className="h-[36px] rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2 transition-colors">
                  <FiEdit2 className="text-sm" />
                  Edit
                </button>
                <button className="h-[36px] rounded-lg bg-rose-50 dark:bg-rose-500/10 text-[13px] font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-500/20 flex items-center justify-center gap-2 transition-colors">
                  <FiTrash2 className="text-sm" />
                  Cancel
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardBookings;