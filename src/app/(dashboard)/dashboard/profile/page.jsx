"use client";

import { Avatar, Card } from "@heroui/react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import { authClient } from "@/app/lib/auth-client";
import UpdateProfileModal from "@/components/UpdateProfileModal";

const Profile = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  console.log(user);

  const profileDetails = {
    phone: user?.phone || "Not Available",
    location: "Not Available",
    role: "Premium Practitioner",
    joined: `Joined:  ${new Date(user?.createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`,
  };

  const handleEditProfile = () => {
    console.log("Edit Profile Modal or Route Triggered");
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 transition-all duration-300">
      <Card className="w-full bg-white dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.15)] overflow-hidden rounded-2xl transition-colors duration-300">
        <div className="w-full h-32 bg-gradient-to-r from-[#006A9C] via-[#0284c7] to-[#0EA5E9] relative" />

        <div className="px-6 pb-6 relative flex flex-col sm:flex-row items-center sm:items-end gap-5 -mt-14 sm:-mt-10">
          <Avatar className="w-28 h-28 border-4 border-white dark:border-[#0f172a] shadow-xl rounded-full shrink-0">
            <Avatar.Image alt={user?.name} src={user?.image} />
            <Avatar.Fallback className="bg-[#006A9C] text-white font-black text-2xl">
              {user?.name ? user.name[0].toUpperCase() : "U"}
            </Avatar.Fallback>
          </Avatar>

          <div className="flex-1 text-center sm:text-left space-y-1.5 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-2.5">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white transition-colors">
                {user?.name || "MedFlex User"}
              </h2>
              <span className="inline-flex items-center mx-auto sm:mx-0 gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-sky-500/10 text-[#006A9C] dark:text-[#0EA5E9] border border-sky-500/20 uppercase tracking-widest w-max transition-colors">
                <FiShield className="text-xs" /> {profileDetails.role}
              </span>
            </div>

            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide transition-colors">
              {profileDetails.joined}
            </p>
          </div>

          {/* EDIT PROFILE BUTTON */}
          <UpdateProfileModal />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 bg-white dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-800/80 p-5 rounded-2xl flex flex-col justify-between space-y-4 transition-colors duration-300">
          <div className="space-y-1.5">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors">
              Security Status
            </h3>
            <p className="text-xs font-bold text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
              Your security settings are up to date.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3 transition-colors">
            <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 text-xl shrink-0 stroke-[2.5]" />
            <div className="text-left">
              <p className="text-xs font-black text-emerald-700 dark:text-emerald-400 transition-colors">
                Verified Account
              </p>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 transition-colors">
                Via Safe Auth-Client
              </p>
            </div>
          </div>
        </Card>

        <Card className="md:col-span-2 bg-white dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-2xl space-y-5 transition-colors duration-300">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors mb-2">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            <div className="space-y-1.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 transition-colors">
                <FiUser className="stroke-[2.5]" /> Full Name
              </span>

              <p className="text-sm font-black text-slate-800 dark:text-slate-200 truncate transition-colors">
                {user?.name || "Not Provided"}
              </p>
            </div>

            <div className="space-y-1.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 transition-colors">
                <FiMail className="stroke-[2.5]" /> Email Address
              </span>
              <p className="text-sm font-black text-slate-800 dark:text-slate-200 truncate transition-colors">
                {user?.email || "Not Provided"}
              </p>
            </div>

            <div className="space-y-1.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 transition-colors">
                <FiPhone className="stroke-[2.5]" /> Contact Number
              </span>
              <p className="text-sm font-black text-slate-800 dark:text-slate-200 transition-colors">
                {profileDetails.phone}
              </p>
            </div>

            <div className="space-y-1.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 transition-colors">
                <FiMapPin className="stroke-[2.5]" /> Location
              </span>
              <p className="text-sm font-black text-slate-800 dark:text-slate-200 transition-colors">
                {profileDetails.location}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
