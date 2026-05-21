import { auth } from "@/app/lib/auth";
import { getAppointments } from "@/app/lib/data";
import BookingCardContainer from "@/components/BookingCardContainer";
import DoctorsSkeleton from "@/components/DoctorsSkeleton";
import { headers } from "next/headers";
import React, { Suspense } from "react";

const DashboardBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userId = session?.user?.id;

  const bookedAppointmentPromise = getAppointments(userId);

  return (
    <div className="">
      {/* ================= MAIN CONTENT ================= */}
      <main className="  w-full overflow-y-auto">
        <div className="max-w-[1000px] mx-auto">
          {/* ── HEADER ── */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mt-20 lg:mt-0">
              My Bookings
            </h1>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mt-1.5">
              Manage your upcoming clinical visits and patient interactions.
            </p>
          </div>

          {/* ── CARDS GRID ── */}
          <Suspense fallback={<DoctorsSkeleton/>}>
            <BookingCardContainer
              bookedAppointmentPromise={bookedAppointmentPromise}
            />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default DashboardBookings;
