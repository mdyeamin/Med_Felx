"use client";
import React from "react";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { FiStar, FiClock, FiMapPin, FiEye } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa"; // Specialty আইকনের জন্য
import { motion } from "framer-motion";

const DoctorCard = ({ doctor }) => {
  const {
    rating,
    name,
    specialty,
    image,
    experience,
    description,
    location,
    hospital,
  } = doctor;

  // ডেটা টাইপ সেফটি ভ্যালিডেশন
  const displayLocation =
    typeof location === "object" && location !== null
      ? `${location.area || ""} ${location.city || ""}`.trim()
      : String(location || "");

  const cleanRating =
    typeof rating === "number" && !isNaN(rating)
      ? rating
      : parseFloat(rating) || 4.5;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="bg-white dark:bg-[#0f172a] border  p-0 border-gray-100 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
        
        {/* ===================== TOP: IMAGE CANVAS ===================== */}
        <div className="relative w-full h-[260px] bg-slate-100 dark:bg-slate-900 overflow-hidden">
          <Image
            fill
            priority
            src={image}
            alt={name}
            className="object-cover object-top"
          />
          
          <div className="absolute top-3 right-3 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[12px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1 shadow-sm border border-gray-100/50 dark:border-slate-800">
            <FiStar className="text-teal-500 fill-teal-500 text-xs" />
            <span>{cleanRating.toFixed(1)}</span>
          
          </div>
        </div>

        {/* ===================== MIDDLE: CONTENT AREA ===================== */}
        <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
          
          <div className="space-y-3">
            <div className="space-y-1">
           
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 block">
                {name}
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                <FaStethoscope className="text-sm" />
                <span>{specialty}</span>
              </div>
            </div>

            {/* METADATA LIST */}
            <div className="space-y-2.5 text-[14px] font-medium text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <FiClock className="text-slate-500 dark:text-slate-400 text-base" />
                <span>{experience}</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <div className="w-4 h-4 border-2 border-slate-500 dark:border-slate-400 rounded-sm flex items-center justify-center p-[1px] shrink-0">
                  <div className="w-full h-full bg-slate-500 dark:bg-slate-400 rounded-[1px]" />
                </div>
                <span className="truncate">{hospital || "Central Medical Hub"}</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <FiMapPin className="text-slate-500 dark:text-slate-400 text-base shrink-0" />
                <span className="truncate">{displayLocation || "New York, NY"}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-slate-800/60">
            <p className="text-[13px] leading-relaxed italic text-slate-600 dark:text-slate-400 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* ===================== BOTTOM: ACTION BUTTONS ===================== */}
        <div className="px-5 pb-5 pt-1 grid grid-cols-[1fr_auto] gap-3 items-center border-t border-gray-100/50 dark:border-slate-800/40 mt-auto">
          <Button
            className="w-full h-11 bg-black dark:bg-white text-white dark:text-black font-bold text-xs rounded-md hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm transition-all duration-200"
          >
            Book Appointment
          </Button>

          <Button
            isIconOnly
            variant="bordered"
            className="w-11 h-11 border-gray-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md p-0 min-w-0"
          >
            <FiEye className="text-lg" />
          </Button>
        </div>

      </Card>
    </motion.div>
  );
};

export default DoctorCard;
