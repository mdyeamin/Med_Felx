"use client";

import React from "react";
import { FiCalendar, FiClock, FiUser, FiMail, FiPhone } from "react-icons/fi";

const Bookings = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* ── HEADER ── */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            My Bookings
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Manage your upcoming clinical visits
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* ================= CARD 1 ================= */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 flex flex-col gap-6">
            {/* Header (Doctor Info & Badge) */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[19px] font-bold text-slate-900 leading-tight">
                  Dr. Ayesha Rahman
                </h2>
                <p className="text-[10px] font-bold text-[#006A9C] uppercase tracking-wider mt-0.5">
                  CARDIOLOGY SPECIALIST
                </p>
              </div>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 text-[10px] font-bold uppercase rounded-full tracking-wider shrink-0">
                Upcoming
              </span>
            </div>

            {/* Schedule Box */}
            <div className="flex items-center gap-6 bg-sky-50/50 px-4 py-3.5 rounded-xl border border-sky-100/60">
              <div className="flex items-center gap-2 text-slate-700 text-[13px] font-bold">
                <FiCalendar className="text-[#006A9C] text-sm" />
                <span>2026-05-28</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-[13px] font-bold">
                <FiClock className="text-[#006A9C] text-sm" />
                <span>10:03 AM</span>
              </div>
            </div>

            {/* Patient Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiUser className="text-slate-500 text-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-slate-800">Md Yeamin</span>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[9px] font-bold uppercase rounded-md tracking-wider">
                    FEMALE
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiMail className="text-slate-500 text-sm" />
                </div>
                <span className="text-[14px] text-slate-600 font-medium truncate">
                  ahmedyeamin05@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiPhone className="text-slate-500 text-sm" />
                </div>
                <span className="text-[14px] text-slate-600 font-medium">
                  01745312787
                </span>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-100 mt-auto">
              <button className="h-[42px] rounded-xl border border-slate-200 text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                Edit
              </button>
              <button className="h-[42px] rounded-xl bg-rose-50 text-[13px] font-bold text-rose-600 hover:bg-rose-100 transition-colors">
                Cancel
              </button>
            </div>
          </div>


          {/* ================= CARD 2 ================= */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 flex flex-col gap-6">
            {/* Header (Doctor Info & Badge) */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[19px] font-bold text-slate-900 leading-tight">
                  Dr. Marcus Thorne
                </h2>
                <p className="text-[10px] font-bold text-[#006A9C] uppercase tracking-wider mt-0.5">
                  ORTHOPEDIC SURGEON
                </p>
              </div>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 text-[10px] font-bold uppercase rounded-full tracking-wider shrink-0">
                Upcoming
              </span>
            </div>

            {/* Schedule Box */}
            <div className="flex items-center gap-6 bg-sky-50/50 px-4 py-3.5 rounded-xl border border-sky-100/60">
              <div className="flex items-center gap-2 text-slate-700 text-[13px] font-bold">
                <FiCalendar className="text-[#006A9C] text-sm" />
                <span>2026-05-30</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-[13px] font-bold">
                <FiClock className="text-[#006A9C] text-sm" />
                <span>02:15 PM</span>
              </div>
            </div>

            {/* Patient Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiUser className="text-slate-500 text-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-slate-800">Elena Rodriguez</span>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[9px] font-bold uppercase rounded-md tracking-wider">
                    FEMALE
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiMail className="text-slate-500 text-sm" />
                </div>
                <span className="text-[14px] text-slate-600 font-medium truncate">
                  elena.r@clinical.io
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiPhone className="text-slate-500 text-sm" />
                </div>
                <span className="text-[14px] text-slate-600 font-medium">
                  01552349812
                </span>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-100 mt-auto">
              <button className="h-[42px] rounded-xl border border-slate-200 text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                Edit
              </button>
              <button className="h-[42px] rounded-xl bg-rose-50 text-[13px] font-bold text-rose-600 hover:bg-rose-100 transition-colors">
                Cancel
              </button>
            </div>
          </div>


          {/* ================= CARD 3 ================= */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 flex flex-col gap-6">
            {/* Header (Doctor Info & Badge) */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[19px] font-bold text-slate-900 leading-tight">
                  Dr. Sarah Chen
                </h2>
                <p className="text-[10px] font-bold text-[#006A9C] uppercase tracking-wider mt-0.5">
                  PEDIATRICS
                </p>
              </div>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 text-[10px] font-bold uppercase rounded-full tracking-wider shrink-0">
                Upcoming
              </span>
            </div>

            {/* Schedule Box */}
            <div className="flex items-center gap-6 bg-sky-50/50 px-4 py-3.5 rounded-xl border border-sky-100/60">
              <div className="flex items-center gap-2 text-slate-700 text-[13px] font-bold">
                <FiCalendar className="text-[#006A9C] text-sm" />
                <span>2026-06-02</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-[13px] font-bold">
                <FiClock className="text-[#006A9C] text-sm" />
                <span>09:00 AM</span>
              </div>
            </div>

            {/* Patient Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiUser className="text-slate-500 text-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-slate-800">Liam Walker</span>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[9px] font-bold uppercase rounded-md tracking-wider">
                    MALE
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiMail className="text-slate-500 text-sm" />
                </div>
                <span className="text-[14px] text-slate-600 font-medium truncate">
                  walker.family@web.com
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <FiPhone className="text-slate-500 text-sm" />
                </div>
                <span className="text-[14px] text-slate-600 font-medium">
                  01887654321
                </span>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-100 mt-auto">
              <button className="h-[42px] rounded-xl border border-slate-200 text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                Edit
              </button>
              <button className="h-[42px] rounded-xl bg-rose-50 text-[13px] font-bold text-rose-600 hover:bg-rose-100 transition-colors">
                Cancel
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bookings;