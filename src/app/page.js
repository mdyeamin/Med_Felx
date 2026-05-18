import DoctorsSkeleton from "@/components/DoctorsSkeleton";
import TopDoctors from "@/components/TopDoctors";
import Link from "next/link";
import { Suspense } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <section className="py-12 px-4 md:px-14 max-w-7xl mx-auto w-full select-none bg-white dark:bg-[#0b1329] text-[#0F172A] dark:text-white transition-colors duration-300">
      {/* SECTION HEADER */}
      <div className="flex flex-row justify-between items-center mb-8 px-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white">
          Top Rated Doctors
        </h2>
        <Link
          href="/all-appointments"
          className="text-[#334155] dark:text-slate-400 font-semibold text-sm flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
        >
          See All
          <FiArrowRight className="text-xs" />
        </Link>
      </div>

      {/* RESPONSIVE CARD GRID */}
      <Suspense fallback={<DoctorsSkeleton />}>
        <TopDoctors />
      </Suspense>
    </section>
  );
}
