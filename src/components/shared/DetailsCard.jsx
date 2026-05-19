'use client'
import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import { FiStar, FiClock, FiMapPin, FiCalendar, FiArrowLeft } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";
import { motion } from "framer-motion";
import BookingModal from "../BookingModal";
const DetailsCard = ({doctor}) => {
    const doctorData = use(doctor)

    const {name,specialty,image,experience,description,hospital,location,fee,rating,availability} = doctorData
    
    const [selectedSlot, setSelectedSlot] = useState(0);
    
    return (
       <div className="min-h-screen bg-white dark:bg-[#0b1329] text-slate-900 dark:text-white transition-colors duration-300 py-8 px-4 md:px-14">
      <div className="max-w-7xl mx-auto w-full space-y-6">
        
        {/* BACK TO SEARCH RESULTS BUTTON */}
        <div className="px-2">
          <Link 
            href="/all-appointments" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wider"
          >
            <FiArrowLeft className="text-sm" />
            <span>Back to Search Results</span>
          </Link>
        </div>

        {/* MAIN RESPONSIVE TWO-COLUMN CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 items-start">
          
          {/* ===================== LEFT COLUMN: IMAGE CANVAS & CTA ===================== */}
          <div className="space-y-4 w-full">
            <Card className="bg-slate-50 dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm relative h-[360px] md:h-[400px] w-full">
              <Image
                fill
                priority
                src={image}
                alt={name}
                className="object-cover object-top"
              />
              
              {/* Floating Rating Badge */}
              <div className="absolute top-4 right-4 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[13px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shadow-sm border border-slate-100/40 dark:border-slate-800">
                <FiStar className="text-amber-500 fill-amber-500 text-sm" />
                <span>{rating.toFixed(1)}</span>
              </div>
            </Card>

            {/* BRANDED BOOK APPOINTMENT CTA BUTTON */}
           <BookingModal/>
          </div>

          {/* ===================== RIGHT COLUMN: DATA METADATA ===================== */}
          <Card className="bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/80 rounded-2xl shadow-sm p-6 md:p-8 flex flex-col justify-between h-full space-y-6">
            
            {/* Identity Header */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                  {name}
                </h1>
                <Chip
                  size="sm"
                  variant="flat"
                  startContent={<FaStethoscope className="text-xs mr-0.5" />}
                  className="bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold px-3 h-7 rounded-md max-w-fit"
                >
                  {specialty}
                </Chip>
              </div>

              <p className="text-[14px] md:text-[15px] leading-relaxed italic text-slate-500 dark:text-slate-400 font-medium">
                {description}
              </p>
            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-slate-800 w-full" />

            {/* Medical Metrics Structured Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              
              {/* Experience Metric */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-2 text-[#006A9C] dark:text-[#0EA5E9] shrink-0">
                  <FiClock className="text-xl" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Experience</p>
                  <p className="text-[15px] font-bold text-slate-800 dark:text-slate-200">{experience}</p>
                </div>
              </div>

              {/* Hospital Placement Metric */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-2 text-[#006A9C] dark:text-[#0EA5E9] shrink-0">
                  <div className="w-4 h-4 border-2 border-current rounded-sm flex items-center justify-center p-[1px] shrink-0">
                    <div className="w-full h-full bg-current rounded-[1px]" />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Hospital</p>
                  <p className="text-[15px] font-bold text-slate-800 dark:text-slate-200 truncate max-w-[220px]">{hospital}</p>
                </div>
              </div>

              {/* Location Metric */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-2 text-[#006A9C] dark:text-[#0EA5E9] shrink-0">
                  <FiMapPin className="text-xl" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Location</p>
                  <p className="text-[15px] font-bold text-slate-800 dark:text-slate-200">{location}</p>
                </div>
              </div>

              {/* Consultation Fee Metric */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-2 text-[#006A9C] dark:text-[#0EA5E9] shrink-0">
                  <span className="text-lg font-black">৳</span>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Consultation Fee</p>
                  <p className="text-[15px] font-bold text-slate-800 dark:text-slate-200">৳{fee}</p>
                </div>
              </div>

            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-slate-800 w-full" />

            {/* Availability Slots Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                <FiCalendar className="text-[#006A9C] dark:text-[#0EA5E9] text-base" />
                <span>Availability</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {availability.map((slot, index) => (
                  <motion.button
                    key={index}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedSlot(index)}
                    className={`px-5 py-2.5 rounded-lg font-bold text-xs border transition-all duration-200 cursor-pointer ${
                      selectedSlot === index
                        ? "bg-teal-500/10 border-teal-500 text-teal-600 dark:text-teal-400 shadow-sm"
                        : "bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {slot}
                  </motion.button>
                ))}
              </div>
            </div>

          </Card>

        </div>
      </div>
    </div>
    );
};

export default DetailsCard;