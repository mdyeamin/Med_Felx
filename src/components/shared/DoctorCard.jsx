"use client";
import React from "react";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { FiStar, FiClock, FiMapPin } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const DoctorCard = ({ doctor }) => {
  const {
    rating,
    _id,
    name,
    specialty,
    image,
    experience,
    description,
    location,
    hospital,
  } = doctor;

  // Location handling
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-full"
    >
      <Card className="bg-white dark:bg-[#111a2e] border p-0 border-gray-100 dark:border-slate-800/40 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-teal-500/10 dark:hover:border-teal-500/10 transition-all duration-300 flex flex-col h-full">
        <div className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden shrink-0">
          <Image
            fill
            priority
            src={image}
            alt={name}
            className="object-cover object-top"
          />

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          {/* Compact Rating Badge (Top Right) */}
          <div className="absolute top-2.5 right-2.5 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1 shadow-sm border border-white/40 dark:border-slate-700/50">
            <FiStar className="text-amber-500 fill-amber-500 text-xs" />
            <span>{cleanRating.toFixed(1)}</span>
          </div>

          {/* Specialty Badge (Bottom Left) */}
          <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 text-[10px] font-bold bg-teal-500/90 text-white px-2.5 py-1 rounded-full shadow-lg tracking-wide uppercase">
            <FaStethoscope className="text-xs" />
            <span>{specialty}</span>
          </div>
        </div>

        {/* ===================== MIDDLE: CONTENT AREA (MORE COMPACT) ===================== */}

        <div className="p-4 flex-grow flex flex-col justify-between gap-3">
          <div className="space-y-2.5">
            {/* Name */}
            <h3 className="text-lg font-extrabold tracking-tight text-slate-950 dark:text-slate-100 line-clamp-1">
              {name}
            </h3>

            {/* METADATA LIST - Tighter Font & Spacing */}
            <div className="space-y-1.5 text-[13px] font-medium text-slate-600 dark:text-slate-300 leading-tight">
              {/* Experience */}
              <div className="flex items-center gap-2">
                <FiClock className="text-teal-500 dark:text-teal-400 text-sm shrink-0" />
                <span className="truncate">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    Exp:
                  </span>{" "}
                  {experience}
                </span>
              </div>

              {/* Hospital */}
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 border-2 border-teal-500/70 dark:border-teal-400/70 rounded-sm flex items-center justify-center p-[1px] shrink-0">
                  <div className="w-full h-full bg-teal-500/70 dark:bg-teal-400/70 rounded-[1px]" />
                </div>
                <span className="truncate text-slate-700 dark:text-slate-200">
                  {hospital || "Central Medical Hub"}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <FiMapPin className="text-teal-500 dark:text-teal-400 text-sm shrink-0" />
                <span className="truncate text-slate-700 dark:text-slate-200">
                  {displayLocation || "Dhaka"}
                </span>
              </div>
            </div>
          </div>

          {/* Description - Extra compact text */}
          <div className="pt-2.5 border-t border-gray-100 dark:border-slate-800/60 mt-0.5">
            <p className="text-xs leading-relaxed italic text-slate-500 dark:text-slate-400 line-clamp-2">
              "{description}"
            </p>
          </div>
        </div>

        {/* ===================== BOTTOM: ACTION BUTTON (SHORTER) ===================== */}
        {/* 🛠️ FIX: button height h-9 sm:h-10 করা হয়েছে উচ্চতা কমানোর জন্য */}
        <div className="px-4 pb-4 pt-0 mt-auto shrink-0">
          <Link href={`all-appointments/${_id}`} className="block w-full">
            <Button className="w-full h-9 sm:h-10 bg-[#006A9C] dark:bg-[#0EA5E9] text-white dark:text-slate-950 font-bold text-xs rounded-lg shadow-sm hover:scale-[1.01] active:scale-[0.99] uppercase tracking-wider transition-all duration-200">
              Book Appointment
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default DoctorCard;
