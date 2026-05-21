import React from "react";
import DoctorCard from "./shared/DoctorCard";
import { getAllDoctors } from "@/app/lib/data";
import { FiSearch, FiX } from "react-icons/fi";

const AllDoctors = async ({ searchQuery }) => {
  const AllDoctorsData = await getAllDoctors(searchQuery);

  if (AllDoctorsData.length === 0) {
    return (
      <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center justify-center py-24 px-6 text-center w-full min-h-[50vh] bg-slate-50/50 dark:bg-slate-900/20 rounded-3xl border border-slate-100 dark:border-slate-800/50 mt-4">
        {/* ── Animated Icon Wrapper ── */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center bg-white dark:bg-[#1e293b] rounded-full border border-slate-200/80 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-[pulse_3s_ease-in-out_infinite]">
          <FiSearch className="text-5xl text-slate-300 dark:text-slate-600" />

          {/* Cross Badge */}
          <div className="absolute top-1 right-1 w-9 h-9 bg-rose-100 dark:bg-rose-500/20 text-rose-500 dark:text-rose-400 rounded-full flex items-center justify-center border-4 border-white dark:border-[#1e293b] shadow-sm">
            <FiX className="text-base font-black" />
          </div>
        </div>

        {/* ── Text Content ── */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
          No matches found
        </h3>
        <p className="text-[15px] md:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          We couldn't find any doctors matching{" "}
          <span className="font-bold text-slate-800 dark:text-slate-200 break-all px-1">
            "{searchQuery}"
          </span>
          <br className="hidden sm:block" />
          Please check for typos or try searching with a different term.
        </p>
      </div>
    );
  }
  console.log(AllDoctorsData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
      {AllDoctorsData.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default AllDoctors;
