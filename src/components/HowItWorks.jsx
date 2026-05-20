"use client";

import React from "react";
import { FiSearch, FiCalendar, FiCheckCircle } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Find Your Doctor",
      description: "Search for doctors by specialty, location, or availability with our advanced filter.",
      icon: <FiSearch className="text-3xl text-[#006A9C] dark:text-[#0EA5E9]" />,
      bgColor: "bg-sky-50 dark:bg-[#0EA5E9]/10",
    },
    {
      id: 2,
      title: "Book Appointment",
      description: "Choose a suitable time slot and confirm your booking instantly without hassle.",
      icon: <FiCalendar className="text-3xl text-indigo-600 dark:text-indigo-400" />,
      bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
    },
    {
      id: 3,
      title: "Get Consulted",
      description: "Visit the clinic or consult online with our top-rated medical professionals securely.",
      icon: <FiCheckCircle className="text-3xl text-emerald-600 dark:text-emerald-400" />,
      bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-50 dark:bg-[#090e17] transition-colors duration-500 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[13px] font-bold text-[#006A9C] dark:text-[#0EA5E9] uppercase tracking-wider mb-2">
            Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            How MedFlex Works
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Get your health checked in just three simple steps. We have simplified the process for your convenience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent -z-10"></div>

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              
              {/* Icon Box */}
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center ${step.bgColor} border border-white dark:border-slate-800 shadow-sm mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative`}>
                {step.icon}
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-sm font-bold shadow-md">
                  {step.id}
                </div>
              </div>

              {/* Text */}
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h4>
              <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;