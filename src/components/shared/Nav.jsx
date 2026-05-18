"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Hydration state sync mismatch pipeline error handle korar jonno hook setup
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Appointments", path: "/all-appointments" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  // Global helper functionality switch override execution state block handler
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className="w-full h-20 border-b border-gray-200 dark:border-slate-800 bg-[#F8FAFC]/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 px-6 md:px-14 flex items-center justify-between transition-colors duration-300">
        {/* Brand Logo Identity */}
        <Link
          href="/"
          className="flex items-center gap-2 relative w-36 h-10 select-none"
        >
          <Image
            src="/MedFlexLogo.png"
            alt="MedFlex Logo"
            fill
            className="object-contain dark:invert transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Central Navigation Menu */}
        <div className="hidden md:flex items-center gap-10 h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-[16px] font-semibold transition-colors duration-200 h-full flex items-center ${
                  isActive
                    ? "text-[#005B84] dark:text-[#0EA5E9]"
                    : "text-[#334155] dark:text-slate-300 hover:text-[#0ea5e9] dark:hover:text-[#0EA5E9]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#005B84] dark:bg-[#0EA5E9]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Utility Controls */}
        <div className="hidden md:flex items-center gap-8">
          {/* Dynamic Theme Switching Action Button */}
          <button
            onClick={handleThemeToggle}
            className="text-[#334155] dark:text-slate-300 hover:text-black dark:hover:text-white p-2 rounded-full transition-colors duration-150 text-[24px] flex items-center justify-center outline-none"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <FiSun strokeWidth={2.3} className="text-yellow-400" />
            ) : (
              <FiMoon strokeWidth={2.3} />
            )}
          </button>

          {/* Login: Plain Text */}
          <Link
            href="/login"
            className="text-[#0F172A] dark:text-white font-bold text-[16px] hover:text-[#006A9C] dark:hover:text-[#0EA5E9] transition-colors"
          >
            Login
          </Link>

          {/* Register: Solid Box */}
          <Button
            as={Link}
            href="/register"
            className="bg-[#006A9C] text-white dark:text-slate-900 font-bold px-6 h-11 rounded-[10px] shadow-[0_4px_12px_rgba(0,106,156,0.15)] dark:bg-[#0EA5E9] hover:bg-[#005B84] dark:hover:bg-[#38bdf8] text-[16px] min-w-[110px] transition-all"
          >
            Register
          </Button>
        </div>

        {/* Small Devices Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className="text-[#334155] dark:text-slate-300 p-2 text-xl flex items-center justify-center outline-none"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <FiSun strokeWidth={2.3} className="text-yellow-400" />
            ) : (
              <FiMoon strokeWidth={2.3} />
            )}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-800 dark:text-white p-2 text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Sheet Layout */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[290px] bg-white dark:bg-slate-900 shadow-2xl z-50 p-6 flex flex-col justify-between md:hidden transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-4 mb-6">
                  <div className="relative w-28 h-8">
                    <Image
                      src="/MedFlexLogo.png"
                      alt="MedFlex Logo"
                      fill
                      className="object-contain dark:invert transition-all duration-300"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 dark:text-slate-300 p-1 text-2xl outline-none"
                  >
                    <FiX />
                  </button>
                </div>

                {/* Mobile Route List Links Component */}
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-[16px] font-semibold py-2 px-3 rounded-md transition-all ${
                          isActive
                            ? "bg-[#F0F9FF] dark:bg-slate-800 text-[#005B84] dark:text-[#0EA5E9]"
                            : "text-[#334155] dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800/50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Drawer Action Dynamic Footer Grid */}
              <div className="w-full  border-t border-gray-100 dark:border-slate-800/60 pt-5 pb-2 select-none transition-colors duration-300">
                {/* flex-nowrap এবং grid-cols-2 নিশ্চিত করবে ২টি বাটন পাশাপাশি সমান জায়গা নিবে */}
                <div className="grid grid-cols-2 gap-3 w-full items-center justify-between">
                  {/* Login Button */}
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full h-12 text-[#0F172A] dark:text-slate-200 font-bold text-[15px] flex items-center justify-center bg-transparent transition-colors hover:text-[#006A9C] dark:hover:text-[#0EA5E9] active:opacity-80 outline-none text-center border border-transparent"
                  >
                    Login
                  </Link>

                  {/* Register Button */}
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="w-full h-11 bg-[#006A9C] dark:bg-[#0EA5E9] text-white dark:text-slate-900 font-bold text-[15px] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,106,156,0.15)] dark:shadow-[0_4px_12px_rgba(14,165,233,0.2)] transition-colors hover:bg-[#005B84] dark:hover:bg-[#38bdf8] active:bg-[#004C70] outline-none text-center whitespace-nowrap"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
