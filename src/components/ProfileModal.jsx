"use client";

import React from "react";
import { Avatar, Button, Popover, Description } from "@heroui/react";
import { FiGrid, FiCalendar, FiSettings, FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";

const ProfileModal = ({ session }) => {
  const user = session;
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="flex items-center gap-4">
      <Popover placement="bottom-end" showArrow={false} offset={12}>
        <Popover.Trigger aria-label="User profile">
          <button className="outline-none border-none bg-transparent transition-transform active:scale-95 cursor-pointer rounded-full">
            <Avatar
              size="sm"
              className="w-9 h-9 border-2 border-[#006A9C] dark:border-[#0EA5E9] rounded-full"
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
          </button>
        </Popover.Trigger>

        <Popover.Content className="w-[280px] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.3)] rounded-md">
          <Popover.Dialog className="w-full">
            <Popover.Heading className="w-full border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-2 block">
              <div className="flex flex-col items-center justify-center text-center">
                <Avatar
                  size="lg"
                  className="w-16 h-16 rounded-full mb-3 border border-slate-100 dark:border-slate-800"
                >
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    className="rounded-full"
                  />
                  <Avatar.Fallback className="bg-[#006A9C] text-white font-bold text-xl rounded-full">
                    {user?.name ? user.name[0] : "U"}
                  </Avatar.Fallback>
                </Avatar>

                <div className="flex flex-col items-center">
                  <p className="font-black text-base text-slate-900 dark:text-white tracking-tight leading-none mb-1.5">
                    {user?.name}
                  </p>
                  <Description className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide break-all">
                    {user?.email}
                  </Description>
                </div>
              </div>
            </Popover.Heading>

            <div className="space-y-1 w-full pt-1">
              <button
                onClick={() => router.push("/dashboard")}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-[#006A9C] dark:hover:text-[#0EA5E9] hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all text-left outline-none cursor-pointer"
              >
                <FiGrid className="text-base text-slate-400 shrink-0" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => router.push("/appointments")}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-[#006A9C] dark:hover:text-[#0EA5E9] hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all text-left outline-none cursor-pointer"
              >
                <FiCalendar className="text-base text-slate-400 shrink-0" />
                <span>Appointments</span>
              </button>

              <button
                onClick={() => router.push("/settings")}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-[#006A9C] dark:hover:text-[#0EA5E9] hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all text-left outline-none cursor-pointer"
              >
                <FiSettings className="text-base text-slate-400 shrink-0" />
                <span>Settings</span>
              </button>

              <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800/40">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all text-left outline-none cursor-pointer"
                >
                  <FiLogOut className="text-base text-rose-500 shrink-0" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export default ProfileModal;
