import DashboardSidebar from "@/components/DashboardSidebar";

const layout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-[#f4f5f6] dark:bg-[#070d1e] overflow-hidden transition-colors duration-300">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto flex flex-col justify-between">
          <main className="p-4 sm:p-6 lg:p-8 flex-1 text-slate-900 dark:text-white transition-all duration-300">
            <div className="max-w-7xl mx-auto w-full">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default layout;
