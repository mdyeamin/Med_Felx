"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Resources", path: "/resources" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <footer className="w-full border-t border-gray-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#0b1329] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <div className="flex items-center relative w-32 h-10">
          <Image
            src="/MedFlexLogo.png"
            alt="MedFlex Logo"
            fill
            className="object-contain dark:invert transition-all duration-300"
            priority
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {footerLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="text-[14px] md:text-[15px] font-medium text-slate-600 dark:text-slate-400 hover:text-[#EA580C] dark:hover:text-[#F97316] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 md:gap-8 flex-col sm:flex-row">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white text-[20px] p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Follow us on X"
          >
            <RiTwitterXFill strokeWidth={0.5} />
          </a>

          <span className="text-[13px] md:text-[14px] font-medium text-slate-500 dark:text-slate-400 text-center md:text-right whitespace-nowrap">
            &copy; {currentYear} MedFlex. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
