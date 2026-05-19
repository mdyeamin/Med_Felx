
import { getAppointments } from "@/app/lib/data";
import BookingCardContainer from "@/components/BookingCardContainer";
import React, { Suspense } from "react";


const DashboardBookings = async() => {
    const bookedAppointmentPromise = getAppointments()
    
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
          <Suspense fallback={"loading "}>
          <BookingCardContainer bookedAppointmentPromise={bookedAppointmentPromise}/>

          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default DashboardBookings;