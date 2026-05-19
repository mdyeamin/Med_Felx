"use client";

import React, { useEffect, useState } from "react";
import { Avatar } from "@heroui/react";
import { FiMenu, FiSun, FiMoon, FiLogOut } from "react-icons/fi";
// 🚀 গুগল জেমিনাই স্টাইলের প্রিমিয়াম সার্কেলড ও ফিল্ড আইকন লাইব্রেরি
import {
  IoCalendarClearOutline,
  IoPersonCircleOutline,
  IoGridOutline,
} from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { handleLogout } from "@/app/(auth)/action";
import { useTheme } from "next-themes";

export default function DashboardSidebar() {
  // 🔄 স্টেট: শুরুতে চিকন (Thin Mode = true) থাকবে, ক্লিক করলে এক্সপ্যান্ড হবে
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const pathname = usePathname();
  const { data } = authClient.useSession();
  const user = data?.user;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // 🛠️ প্রিমিয়াম আইকন ম্যাপ করা হয়েছে যা স্কয়ার বক্সের ভেতর চমৎকার গ্লো দেবে
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <IoGridOutline className="text-xl" />,
    },
    {
      name: "My Bookings",
      path: "/bookings",
      icon: <IoCalendarClearOutline className="text-xl" />,
    },
    {
      name: "My Profile",
      path: "/dashboard/profile",
      icon: <IoPersonCircleOutline className="text-xl" />,
    },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="relative h-screen flex select-none font-sans">
      <div className="w-full h-16 bg-white dark:bg-[#0f172a] px-4 flex items-center justify-between lg:hidden border-b border-slate-200/60 dark:border-slate-800/60 fixed top-0 left-0 z-40 transition-colors duration-300">
        <button
          onClick={() => setIsExpanded(true)} // হ্যামবার্গার ক্লিক করলে ড্রয়ার ওপেন হবে
          className="text-slate-500 hover:text-black dark:hover:text-white text-2xl outline-none cursor-pointer p-1"
        >
          <FiMenu strokeWidth={2.5} />
        </button>

        <div className="relative h-6 w-20">
          <Image
            src="/MedFlexLogo.png"
            alt="MedFlex Logo"
            fill
            className="object-contain dark:invert"
            priority
          />
        </div>

        <Avatar
          size="sm"
          className="w-8 h-8 border-2 border-[#006A9C] dark:border-[#0EA5E9] rounded-full"
        >
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback className="bg-[#006A9C] text-white font-bold text-xs">
            {user?.name ? user.name[0] : "U"}
          </Avatar.Fallback>
        </Avatar>
      </div>

      <div
        onClick={() => setIsExpanded(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-md z-45 lg:hidden transition-all duration-300 ease-in-out ${
          isExpanded
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`
      h-screen bg-white dark:bg-[#0f172a] p-4 flex flex-col justify-between 
      border-r border-slate-200/60 dark:border-slate-800/60 transition-all duration-300 ease-in-out
      fixed top-0 left-0 z-50 shadow-2xl lg:shadow-none lg:static
      ${isExpanded ? "w-[260px] translate-x-0" : "w-[76px] -translate-x-full lg:translate-x-0"}
    `}
      >
        <div className="w-full space-y-7 overflow-hidden">
          <div
            className={`flex items-center w-full transition-all duration-300 ${isExpanded ? "justify-between px-1" : "justify-center"}`}
          >
            <div
              className={`relative h-7 transition-all duration-300 ease-in-out overflow-hidden ${
                isExpanded ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <Link href={"/"} className="block w-full h-full relative">
                <Image
                  src="/MedFlexLogo.png"
                  alt="MedFlex Logo"
                  fill
                  className="object-contain dark:invert"
                  priority
                />
              </Link>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-slate-500 hover:text-black dark:hover:text-white text-xl p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all outline-none cursor-pointer shrink-0"
              aria-label="Toggle Sidebar"
            >
              <FiMenu strokeWidth={2.5} />
            </button>
          </div>

          <div className="space-y-3 w-full">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <button
                  key={index}
                  onClick={() => {
                    handleNavigation(item.path);
                    if (window.innerWidth < 1024) {
                      setIsExpanded(false);
                    }
                  }}
                  className={`
                w-full flex items-center transition-all outline-none cursor-pointer rounded-xl duration-300 ease-in-out
                /* 🛠️ কলাপ্সড মোডে স্কয়ার আইকন ফিট রাখতে p-0 এবং এক্সপ্যান্ডেড মোডে ফুল প্যাডিং */
                ${isExpanded ? "px-4 py-3 gap-3.5 justify-start" : "h-11 w-11 mx-auto p-0 justify-center"}
                /* 🛠️ পুরো বাটনের কন্ডিশনাল ব্যাকগ্রাউন্ড যা ট্রানজিশন বাড়ি খাওয়া বন্ধ করবে */
                ${
                  isActive
                    ? isExpanded
                      ? "bg-[#161c2a] text-[#38bdf8] dark:text-[#0EA5E9]"
                      : "bg-[#161c2a] text-[#0EA5E9] border border-slate-200 dark:border-slate-800 shadow-[0_0_15px_rgba(14,165,233,0.15)]"
                    : isExpanded
                      ? "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white"
                      : "bg-slate-50 dark:bg-slate-900/40 text-slate-400 border border-slate-100 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }
              `}
                >
                  <span
                    className={`
                  flex items-center justify-center transition-all shrink-0 duration-300 ease-in-out
                  ${isExpanded ? (isActive ? "text-[#0EA5E9]" : "text-slate-400") : ""}
                `}
                  >
                    {item.icon}
                  </span>

                  <span
                    className={`text-xs font-bold tracking-wide transition-all duration-300 ease-in-out text-left whitespace-nowrap overflow-hidden ${
                      isExpanded ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full space-y-3.5 pt-4 border-t border-slate-100 dark:border-slate-800/60 overflow-hidden">
          <button
            onClick={handleThemeToggle}
            className={`
          w-full flex items-center text-xs font-bold transition-all outline-none cursor-pointer rounded-xl duration-300 ease-in-out
          ${
            isExpanded
              ? "px-4 py-3 gap-3.5 justify-start text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white"
              : "h-11 w-11 mx-auto p-0 justify-center bg-slate-50 dark:bg-slate-900/40 text-slate-400 border border-slate-100 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/80"
          }
        `}
            aria-label="Toggle theme"
          >
            <span className="flex items-center justify-center text-xl shrink-0 duration-300 ease-in-out">
              {mounted && theme === "dark" ? (
                <FiSun strokeWidth={2.3} className="text-yellow-400" />
              ) : (
                <FiMoon strokeWidth={2.3} />
              )}
            </span>

            <span
              className={`tracking-wide transition-all duration-300 ease-in-out text-left whitespace-nowrap overflow-hidden ${
                isExpanded ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            >
              {mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>

          <div
            className={`flex items-center transition-all duration-300 ${isExpanded ? "gap-3 px-1 justify-start" : "justify-center"}`}
          >
            <Avatar
              size="sm"
              className="w-9 h-9 border-2 border-[#006A9C] dark:border-[#0EA5E9] rounded-full shrink-0"
            >
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                className="rounded-full"
              />
              <Avatar.Fallback className="bg-[#006A9C] text-white font-bold text-xs rounded-full">
                {user?.name ? user.name[0] : "U"}
              </Avatar.Fallback>
            </Avatar>

            <div
              className={`flex flex-col text-left transition-all duration-300 ease-in-out overflow-hidden ${
                isExpanded ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            >
              <p className="font-black text-xs text-slate-900 dark:text-white truncate max-w-[140px]">
                {user?.name || "User"}
              </p>
              <p className="text-[10px] font-semibold text-slate-400 truncate max-w-[140px]">
                {user?.email}
              </p>
            </div>
          </div>

          <Link href={"/login"} className="block w-full">
            <button
              onClick={handleLogout}
              className={`
            w-full flex items-center text-xs font-bold text-rose-500 transition-all outline-none cursor-pointer rounded-xl duration-300 ease-in-out
            ${
              isExpanded
                ? "px-4 py-3 gap-3.5 justify-start hover:bg-rose-50 dark:hover:bg-rose-950/20"
                : "h-11 w-11 mx-auto p-0 justify-center bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20"
            }
          `}
            >
              <span className="flex items-center justify-center text-xl shrink-0 duration-300 ease-in-out">
                <FiLogOut className="text-xl shrink-0 text-rose-500" />
              </span>

              <span
                className={`tracking-wider uppercase transition-all duration-300 ease-in-out text-left whitespace-nowrap overflow-hidden ${
                  isExpanded ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              >
                Log Out
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
