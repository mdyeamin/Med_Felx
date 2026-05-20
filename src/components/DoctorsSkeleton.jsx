import React from 'react';

const DoctorsSkeleton = () => {
  
  const skeletonArray = Array.from({ length: 3 });

  return (
    <div className="min-h-screen w-full transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto">
        
        {/* ── DOCTORS GRID SKELETON (Only Cards) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skeletonArray.map((_, index) => (
            <div 
              key={index} 
              className="bg-white/80 dark:bg-[#1e293b]/60 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-700/50 p-6 flex flex-col gap-6 shadow-sm relative overflow-hidden"
            >
              {/* Shimmer overlay effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-slate-600/10 to-transparent animate-[shimmer_1.5s_infinite] z-10"></div>

              {/* Profile Section */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-200 dark:bg-slate-800/80 shrink-0 animate-pulse"></div>
                
                {/* Name & Specialty */}
                <div className="flex-1 space-y-3">
                  <div className="h-5 bg-slate-200 dark:bg-slate-800/80 rounded-md w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-sky-100 dark:bg-sky-500/10 rounded-md w-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Quick Info/Stats Section */}
              <div className="flex gap-3 mt-2">
                <div className="h-10 bg-slate-100 dark:bg-slate-800/50 rounded-xl flex-1 animate-pulse"></div>
                <div className="h-10 bg-slate-100 dark:bg-slate-800/50 rounded-xl flex-1 animate-pulse"></div>
              </div>

              {/* Bio / Text Lines */}
              <div className="space-y-2.5">
                <div className="h-3 bg-slate-200 dark:bg-slate-800/80 rounded-full w-full animate-pulse"></div>
                <div className="h-3 bg-slate-200 dark:bg-slate-800/80 rounded-full w-5/6 animate-pulse"></div>
                <div className="h-3 bg-slate-200 dark:bg-slate-800/80 rounded-full w-4/6 animate-pulse"></div>
              </div>

              {/* Action Button Placeholder */}
              <div className="h-12 bg-slate-200 dark:bg-slate-800/80 rounded-xl w-full mt-2 animate-pulse"></div>
            </div>
          ))}
        </div>

      </div>

      {/* ── CUSTOM SHIMMER ANIMATION ── */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </div>
  );
};

export default DoctorsSkeleton;