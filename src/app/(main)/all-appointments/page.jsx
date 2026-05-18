import AllDoctors from "@/components/AllDoctors";
import DoctorsSkeleton from "@/components/DoctorsSkeleton";


import React, { Suspense } from "react";

const allAppointments = () => {
  return (
    <section className="py-12 px-4 md:px-14 max-w-7xl mx-auto w-full  bg-white dark:bg-[#0b1329] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="flex flex-row justify-between items-center mb-8 px-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900  dark:text-slate-100">
          All Doctors
        </h2>
      </div>

      <Suspense fallback={<DoctorsSkeleton />}>
        <AllDoctors />
      </Suspense>
    </section>
  );
};

export default allAppointments;
