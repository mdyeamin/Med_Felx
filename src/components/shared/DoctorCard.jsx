import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FiStar } from "react-icons/fi";

const DoctorCard = ({doctor}) => {
  const {rating} = doctor
  return (
    <Card className="bg-white dark:bg-[#111c3a] border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-none flex flex-col justify-between h-full hover:border-gray-300 dark:hover:border-slate-700 transition-all duration-200">
      {/* IMAGE CANVAS & RATING */}
      <div className="relative w-full h-[280px] sm:h-[300px] bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <Image
        width={200}
        height={200}
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500"
          alt="Dr. Sarah Jenkins"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-3 right-3 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-bold text-[#334155] dark:text-slate-200 flex items-center gap-1 shadow-sm border border-gray-100 dark:border-slate-800">
          <FiStar className="text-[#F59E0B] fill-[#F59E0B]" /> {rating}
        </div>
      </div>

      {/* TEXT & DETAILS AREA */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-[18px] font-bold tracking-tight leading-tight text-[#0F172A] dark:text-white">
            Dr. Sarah Jenkins
          </h3>
          <div className="flex items-center justify-between">
            <Chip
              size="sm"
              variant="flat"
              className="bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium px-2 rounded text-xs"
            >
              Cardiology
            </Chip>
            <span className="text-[13px] font-medium text-slate-400 dark:text-slate-500">
              10 years exp
            </span>
          </div>
        </div>
        <div className="pt-1">
          <Button
       
            variant="bordered"
            className="w-full h-10 border-gray-200 dark:border-slate-700 text-[#0F172A] dark:text-slate-200 font-bold text-xs rounded-md bg-transparent hover:bg-gray-50 dark:hover:bg-slate-800 transition-all text-center"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;
