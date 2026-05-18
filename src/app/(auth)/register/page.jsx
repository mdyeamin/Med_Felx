"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Form,
  Fieldset,
  TextField,
  InputGroup,
  Label,
  FieldError,
  Button,
  Description,
} from "@heroui/react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiImage,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RegisterSubmit } from "./action";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_\-.])[A-Z0-9a-z@$!%*?&#_\-.]{8,}$/;

  return (
    <main
      className={`min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-[#f4f5f6] dark:bg-[#070d1e] text-slate-900 dark:text-white transition-colors duration-300 select-text relative`}
    >
      <div className="absolute top-6 left-6 lg:left-12 z-50">
        <Button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white shadow-sm backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
        >
          <FiArrowLeft className="text-lg" />
        </Button>
      </div>

      <div className="absolute top-6 right-6 lg:right-12 z-50">
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
      </div>

      {/* LEFT PANEL: LUXURY DEEP  */}
      <div className="relative hidden lg:flex flex-col justify-between p-16 bg-gradient-to-br from-[#062143] via-[#030e1d] to-[#01050b] overflow-hidden">
        {/* Ambient Subtle Mesh Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Brand Identity Branding */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="relative w-28 h-8">
            <Image
              src="/MedFlexLogo.png"
              alt="MedFlex Logo"
              fill
              className="object-contain dark:invert transition-all duration-300"
            />
          </div>
        </div>

        {/* Sharp Image Typography Frame */}
        <div className="relative z-10 max-w-lg space-y-6 my-auto">
          <h1 className="text-4xl xl:text-[46px] font-black text-white tracking-tight leading-[1.1] uppercase select-none">
            Your Global <br />
            Healthcare <br />
            Platform is <br />
            Ready.{" "}
            <span className="text-sky-400 dark:text-sky-400">
              Connect <br />
              with the best.
            </span>
          </h1>
          <p className="text-slate-400 font-medium text-[14px] leading-relaxed max-w-sm">
            Experience the next generation of clinical management with
            precision-engineered tools for modern professionals.
          </p>
        </div>

        {/* Tiny Art Panel Footer Links */}
        <div className="relative z-10 flex items-center gap-4 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
          <Link
            href="/privacy"
            className="hover:text-slate-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <Link
            href="/terms"
            className="hover:text-slate-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>

      {/*  RIGHT PANEL: THE FLOATING CARD FRAME  */}
      <div className="w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full max-w-[440px] bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-100 dark:border-slate-800/50 shadow-[0_15px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-6 sm:p-8 transition-all duration-300"
        >
          <Form
            onSubmit={(e) => RegisterSubmit(e,router)}
            className="w-full space-y-5"
            validationBehavior="native"
          >
            <Fieldset className="w-full space-y-4">
              <div className="space-y-1 mb-0">
                <Fieldset.Legend className="text-[26px] font-extrabold tracking-tight text-slate-900 dark:text-slate-100 uppercase leading-none">
                  Create Account
                </Fieldset.Legend>
                <Description className="text-xs font-semibold text-slate-400 dark:text-slate-600 tracking-wide block">
                  Join thousands of healthcare providers worldwide.
                </Description>
              </div>

              {/* Input Layout Container */}
              <div className="space-y-3.5 w-full pt-1 mb-0">
                {/* 1. FULL NAME FIELD */}
                <TextField
                  className="w-full"
                  isRequired
                  name="name"
                  type="text"
                  validate={(value) => {
                    if (!value || value.trim().length < 3) {
                      return "Name must be at least 3 characters long";
                    }
                    return null;
                  }}
                >
                  <Label className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 tracking-widest uppercase mb-1 block">
                    Name
                  </Label>
                  <InputGroup className="group transition-all border border-slate-200/80 dark:border-slate-800/80 focus-within:border-[#006A9C] dark:focus-within:border-[#0EA5E9] focus-within:ring-1 focus-within:ring-[#006A9C] dark:focus-within:ring-[#0EA5E9] rounded-lg overflow-hidden bg-[#eef2f6] dark:bg-slate-900/50">
                    <InputGroup.Prefix className="pl-3.5 text-slate-400 group-focus-within:text-[#006A9C] dark:group-focus-within:text-[#0EA5E9] transition-colors">
                      <FiUser className="size-4" />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                      className="bg-transparent text-[13px] font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400  w-full outline-none"
                      placeholder="Julian Casablancas"
                    />
                  </InputGroup>
                  <FieldError className="text-xs font-semibold text-rose-500 mt-1 pl-1" />
                </TextField>

                {/* 2. EMAIL  */}
                <TextField
                  className="w-full"
                  name="email"
                  type="email"
                  isRequired
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 tracking-widest uppercase mb-1 block">
                    Email
                  </Label>
                  <InputGroup className="group transition-all border border-slate-200/80 dark:border-slate-800/80 focus-within:border-[#006A9C] dark:focus-within:border-[#0EA5E9] focus-within:ring-1 focus-within:ring-[#006A9C] dark:focus-within:ring-[#0EA5E9] rounded-lg overflow-hidden bg-[#eef2f6] dark:bg-slate-900/50">
                    <InputGroup.Prefix className="pl-3.5 text-slate-400 group-focus-within:text-[#006A9C] dark:group-focus-within:text-[#0EA5E9] transition-colors">
                      <FiMail className="size-4" />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                      className="bg-transparent text-[13px] font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400  w-full outline-none"
                      placeholder="julian@medflex.pro"
                    />
                  </InputGroup>
                  <FieldError className="text-xs font-semibold text-rose-500 mt-1 pl-1" />
                </TextField>

                {/* 3. PROFILE PHOTO URL FIELD */}
                <TextField
                  className="w-full"
                  name="image"
                  type="text"
                  validate={(value) => {
                    if (value && value.trim() !== "") {
                      try {
                        new URL(value);
                      } catch (_) {
                        return "Please enter a valid image path URL";
                      }
                    }
                    return null;
                  }}
                >
                  <Label className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 tracking-widest uppercase mb-1 block">
                    Profile URL
                  </Label>
                  <InputGroup className="group transition-all border border-slate-200/80 dark:border-slate-800/80 focus-within:border-[#006A9C] dark:focus-within:border-[#0EA5E9] focus-within:ring-1 focus-within:ring-[#006A9C] dark:focus-within:ring-[#0EA5E9] rounded-lg overflow-hidden bg-[#eef2f6] dark:bg-slate-900/50">
                    <InputGroup.Prefix className="pl-3.5 text-slate-400 group-focus-within:text-[#006A9C] dark:group-focus-within:text-[#0EA5E9] transition-colors">
                      <FiImage className="size-4" />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                      className="bg-transparent text-[13px] font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400  w-full outline-none"
                      placeholder="https://image-placeholder.com/avatar.jpg"
                    />
                  </InputGroup>
                  <FieldError className="text-xs font-semibold text-rose-500 mt-1 pl-1" />
                </TextField>

                {/* 4. PASSWORD FIELD */}
                <TextField
                  className="w-full"
                  name="password"
                  isRequired
                  validate={(value) => {
                    if (!passwordRegex.test(value)) {
                      return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
                    }
                    return null;
                  }}
                >
                  <Label className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 tracking-widest uppercase mb-1 block">
                    Password
                  </Label>
                  <InputGroup className="group transition-all border border-slate-200/80 dark:border-slate-800/80 focus-within:border-[#006A9C] dark:focus-within:border-[#0EA5E9] focus-within:ring-1 focus-within:ring-[#006A9C] dark:focus-within:ring-[#0EA5E9] rounded-lg overflow-hidden bg-[#eef2f6] dark:bg-slate-900/50">
                    <InputGroup.Prefix className="pl-3.5 text-slate-400 group-focus-within:text-[#006A9C] dark:group-focus-within:text-[#0EA5E9] transition-colors">
                      <FiLock className="size-4" />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                      className="bg-transparent text-[13px] font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400  w-full outline-none"
                      type={isVisible ? "text" : "password"}
                      placeholder="Password"
                    />
                    <InputGroup.Suffix className="pr-2.5">
                      <Button
                        isIconOnly
                        aria-label={
                          isVisible ? "Hide password" : "Show password"
                        }
                        size="sm"
                        variant="ghost"
                        className="hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md min-w-0 p-0"
                        onPress={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <FiEyeOff className="size-4" />
                        ) : (
                          <FiEye className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>
                  <FieldError className="text-xs font-semibold text-rose-500 mt-1 pl-1" />
                </TextField>
              </div>
              <Button
                type="submit"
                className="w-full h-10 bg-[#006A9C] dark:bg-[#0EA5E9] text-white font-bold text-sm rounded-[10px] shadow-[0_4px_14px_rgba(0,106,156,0.15)] dark:shadow-[0_4px_14px_rgba(14,165,233,0.2)] transition-all duration-200 hover:bg-[#005B84] dark:hover:bg-[#38bdf8] flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Register Now</span>
                <FaArrowRight className="text-xs" />
              </Button>
            </Fieldset>
          </Form>
          {/* MAIN PRIMARY SUBMIT ACTION BUTTON */}
          <div className="pt-2 w-full space-y-4">
            {/* Form Path Switching */}
            <div className="text-center text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wide">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#006A9C] dark:text-[#0EA5E9] hover:underline ml-0.5"
              >
                Login
              </Link>
            </div>

            {/* Divider Line */}
            <div className="flex items-center py-0 mb-0">
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800/80" />
              <span className="px-3 text-[13px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest">
                OR
              </span>
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800/80" />
            </div>

            <Button
              variant="bordered"
              className=" mx-auto  border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/60 font-bold text-base rounded-[10px]  transition-all flex items-center justify-center bg-transparent"
            >
              <FcGoogle className="shrink-0 " />
              <span className=" tracking-wider ">Google</span>
            </Button>

            {/* Minimal Secure Badge Footer info */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest pt-1">
              <div className="w-4 h-px bg-slate-200 dark:bg-slate-800" />
              <span>Secure Verification</span>
              <div className="w-4 h-px bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Register;
