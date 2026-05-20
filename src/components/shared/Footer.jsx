"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { 
  RiTwitterXFill, 
  RiFacebookCircleFill, 
  RiInstagramLine, 
  RiLinkedinFill 
} from "react-icons/ri";
import { FiArrowRight, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Appointments", path: "/dashboard" },
    { name: "Contact Support", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Resources", path: "/resources" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ];

  const socialLinks = [
    { icon: <RiFacebookCircleFill />, url: "https://facebook.com", label: "Facebook" },
    { icon: <RiTwitterXFill strokeWidth={0.5} />, url: "https://x.com", label: "X (Twitter)" },
    { icon: <RiInstagramLine />, url: "https://instagram.com", label: "Instagram" },
    { icon: <RiLinkedinFill />, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="relative w-full bg-white dark:bg-[#090e17] transition-colors duration-500 overflow-hidden border-t border-slate-200 dark:border-slate-800/60 pt-16 pb-8">
      
      {/* ── BACKGROUND GLOWS ── */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#006A9C]/5 dark:bg-[#0EA5E9]/5 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* ── TOP SECTION (Grid Layout) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* 1. Brand & Description */}
          <div className="flex flex-col gap-6 lg:pr-6">
            <Link href="/" className="relative w-36 h-10 block">
              <Image
                src="/MedFlexLogo.png"
                alt="MedFlex Logo"
                fill
                className="object-contain dark:invert transition-all duration-300"
                priority
              />
            </Link>
            <p className="text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
              Empowering your healthcare journey with modern, reliable, and accessible medical services at your fingertips.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-[#006A9C] hover:text-white dark:hover:bg-[#0EA5E9] dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <span className="text-[18px]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[16px] font-bold text-slate-900 dark:text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="text-[14px] font-medium text-slate-500 dark:text-slate-400 hover:text-[#006A9C] dark:hover:text-[#0EA5E9] transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-[2px] bg-[#006A9C] dark:bg-[#0EA5E9] transition-all duration-300 group-hover:w-3 mr-0 group-hover:mr-1 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Legal & Support */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[16px] font-bold text-slate-900 dark:text-white tracking-wide">
              Legal & Support
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="text-[14px] font-medium text-slate-500 dark:text-slate-400 hover:text-[#006A9C] dark:hover:text-[#0EA5E9] transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-[2px] bg-[#006A9C] dark:bg-[#0EA5E9] transition-all duration-300 group-hover:w-3 mr-0 group-hover:mr-1 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter Subscription */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[16px] font-bold text-slate-900 dark:text-white tracking-wide">
              Subscribe Newsletter
            </h3>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium">
              Get the latest updates, medical news, and special offers directly in your inbox.
            </p>
            <form className="mt-2 relative group" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FiMail className="text-slate-400 dark:text-slate-500 text-lg group-focus-within:text-[#006A9C] dark:group-focus-within:text-[#0EA5E9] transition-colors" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[46px] pl-10 pr-12 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-[14px] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#006A9C] dark:focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#006A9C] dark:focus:ring-[#0EA5E9] transition-all shadow-sm"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute inset-y-1.5 right-1.5 w-8 h-8 flex items-center justify-center rounded-lg bg-[#006A9C] dark:bg-[#0EA5E9] text-white hover:bg-[#005B84] dark:hover:bg-[#38bdf8] transition-colors cursor-pointer"
              >
                <FiArrowRight className="text-[15px]" />
              </button>
            </form>
          </div>

        </div>

        {/* ── BOTTOM SECTION (Copyright & Divider) ── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-200/80 dark:border-slate-800/80">
          <span className="text-[13px] md:text-[14px] font-medium text-slate-500 dark:text-slate-400">
            &copy; {currentYear} MedFlex. All rights reserved.
          </span>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;