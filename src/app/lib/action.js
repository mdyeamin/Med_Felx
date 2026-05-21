// appointment book

import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FiCheckCircle, FiX } from "react-icons/fi";
import { authClient } from "./auth-client";

export const submitAppointment = async (e, doctorData, user) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formValues = Object.fromEntries(formData.entries());

  const newAppointment = {
    ...formValues,
    specialty: doctorData.specialty,
    userId: user?.id,
  };
  //  token for client
  const { data: token } = await authClient.token();
  console.log(token, "token for appointment");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(newAppointment),
    },
  );
  console.log(res, "Response from server:");

  if (res.ok) {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-sm w-full bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl pointer-events-auto flex border border-slate-200/60 dark:border-slate-700/60 overflow-hidden`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center">
                <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 text-lg" />
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-[15px] font-extrabold text-slate-900 dark:text-white">
                Success
              </p>
              <p className="mt-0.5 text-[13px] font-medium text-slate-500 dark:text-slate-400">
                Your appointment has been successfully booked.
              </p>
            </div>
          </div>
        </div>

        <div className="flex border-l border-slate-200/60 dark:border-slate-700/60">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-2xl p-4 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors outline-none cursor-pointer"
          >
            <FiX className="text-lg" />
          </button>
        </div>
      </div>
    ));
    return true;
    // redirect("/all-appointments");
  }

  //   const data = await res.json();
  //   console.log(data,"Data from server:");
};

// appointment delete by id

export const deleteAppointment = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`,
    {
      method: "DELETE",
    },
  );
  const data = await res.json();

  if (data?.deletedCount > 0) {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-sm w-full bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl pointer-events-auto flex border border-slate-200/60 dark:border-slate-700/60 overflow-hidden`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center">
                <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 text-lg" />
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-[15px] font-extrabold text-slate-900 dark:text-white">
                Success
              </p>

              <p className="mt-0.5 text-[13px] font-medium text-slate-500 dark:text-slate-400">
                Your appointment has been successfully cancelled.
              </p>
            </div>
          </div>
        </div>

        <div className="flex border-l border-slate-200/60 dark:border-slate-700/60">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-2xl p-4 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors outline-none cursor-pointer"
          >
            <FiX className="text-lg" />
          </button>
        </div>
      </div>
    ));
    redirect("/dashboard/bookings");
  }

  console.log(data, "Delete response from server:");
};

// appointment update

export const updateAppointment = async (e, id) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const UpdateAppointment = Object.fromEntries(formData.entries());
  console.log(UpdateAppointment, "Updated appointment data");
  const { data: token } = await authClient.token();
  console.log(token, "token for appointment");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(UpdateAppointment),
    },
  );

  if (res.ok) {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-sm w-full bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl pointer-events-auto flex border border-slate-200/60 dark:border-slate-700/60 overflow-hidden`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center">
                <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 text-lg" />
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-[15px] font-extrabold text-slate-900 dark:text-white">
                Success
              </p>
              <p className="mt-0.5 text-[13px] font-medium text-slate-500 dark:text-slate-400">
                Your appointment has been successfully updated.
              </p>
            </div>
          </div>
        </div>

        <div className="flex border-l border-slate-200/60 dark:border-slate-700/60">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-2xl p-4 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors outline-none cursor-pointer"
          >
            <FiX className="text-lg" />
          </button>
        </div>
      </div>
    ));

    return true;
  }

  const data = await res.json();
  console.log("after edit user", data);
  return data;
};
