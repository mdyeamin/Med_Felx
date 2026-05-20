import React from "react";

const DoctorsDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1329] py-8 px-4 md:px-14 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full space-y-6">
        <div className="px-2">
          <div className="h-4 w-40 bg-slate-200 dark:bg-slate-800/80 rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 items-start">
          <div className="space-y-4 w-full relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-slate-600/10 to-transparent animate-[shimmer_1.5s_infinite] z-10 pointer-events-none"></div>

            <div className="bg-slate-100 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 rounded-2xl h-[360px] md:h-[400px] w-full animate-pulse relative">
              <div className="absolute top-4 right-4 z-10 bg-slate-200 dark:bg-slate-700 w-14 h-7 rounded-md"></div>
            </div>

            <div className="h-12 w-full bg-slate-200 dark:bg-slate-800/80 rounded-xl animate-pulse"></div>
          </div>

          <div className="bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/80 rounded-2xl shadow-sm p-6 md:p-8 flex flex-col justify-between h-full space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-slate-600/10 to-transparent animate-[shimmer_1.5s_infinite] z-10 pointer-events-none"></div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="h-10 w-3/4 sm:w-1/2 bg-slate-200 dark:bg-slate-800/80 rounded-lg animate-pulse"></div>

                <div className="h-7 w-24 bg-slate-200 dark:bg-slate-800/80 rounded-md animate-pulse"></div>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="h-3.5 w-full bg-slate-200 dark:bg-slate-800/80 rounded-md animate-pulse"></div>
                <div className="h-3.5 w-full bg-slate-200 dark:bg-slate-800/80 rounded-md animate-pulse"></div>
                <div className="h-3.5 w-4/5 bg-slate-200 dark:bg-slate-800/80 rounded-md animate-pulse"></div>
              </div>
            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-slate-800 w-full" />

            {/* Medical Metrics Structured Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  {/* Icon Box Skeleton */}
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800/80 shrink-0 animate-pulse"></div>
                  {/* Text Skeleton */}
                  <div className="space-y-2 w-full">
                    <div className="h-2.5 w-20 bg-slate-200 dark:bg-slate-800/80 rounded-sm animate-pulse"></div>
                    <div className="h-3.5 w-32 bg-slate-200 dark:bg-slate-800/80 rounded-md animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-b border-dashed border-slate-200 dark:border-slate-800 w-full" />

            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800/80 animate-pulse"></div>
                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800/80 rounded-md animate-pulse"></div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-10 w-28 rounded-lg bg-slate-200 dark:bg-slate-800/80 animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default DoctorsDetailsSkeleton;
