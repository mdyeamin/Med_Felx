"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaHeartbeat, FaBrain, FaTooth, FaEye, FaBone, FaBaby } from "react-icons/fa";

const Specialties = () => {
  const categories = [
    { name: "Cardiology", items: "120+ Doctors", icon: <FaHeartbeat />, color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-500/10" },
    { name: "Neurology", items: "85+ Doctors", icon: <FaBrain />, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
    { name: "Dentistry", items: "200+ Doctors", icon: <FaTooth />, color: "text-sky-500", bg: "bg-sky-50 dark:bg-sky-500/10" },
    { name: "Orthopedics", items: "150+ Doctors", icon: <FaBone />, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
    { name: "Ophthalmology", items: "90+ Doctors", icon: <FaEye />, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-500/10" },
    { name: "Pediatrics", items: "110+ Doctors", icon: <FaBaby />, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
  ];

  return (
    <section className="w-full py-20 bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-[13px] font-bold text-[#006A9C] dark:text-[#0EA5E9] uppercase tracking-wider mb-2">
              Departments
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Featured Specialties
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
              Find experienced doctors across all major medical specialties. Book your consultation with ease.
            </p>
          </div>
          
          <Link 
            href="/specialties" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#006A9C] dark:text-[#0EA5E9] hover:text-[#005B84] dark:hover:text-[#38bdf8] transition-colors group whitespace-nowrap"
          >
            View All Specialties 
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              href={`/specialties/${category.name.toLowerCase()}`} 
              key={index}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-[#1e293b]/50 border border-slate-100 dark:border-slate-800 hover:border-[#006A9C]/30 dark:hover:border-[#0EA5E9]/30 hover:bg-white dark:hover:bg-[#1e293b] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-center gap-5"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${category.bg} ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              {/* Details */}
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#006A9C] dark:group-hover:text-[#0EA5E9] transition-colors mb-1">
                  {category.name}
                </h4>
                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400">
                  {category.items}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Specialties;