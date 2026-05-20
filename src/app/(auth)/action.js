import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiAlertCircle, FiCheck } from "react-icons/fi";

// for register
export const RegisterSubmit = async (e, router) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const newUser = Object.fromEntries(fromData.entries());
  try {
    const { data, error } = await authClient.signUp.email({
      name: newUser?.name,
      email: newUser?.email,
      password: newUser?.password,
      image: newUser?.image,
    });
    if (error) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
          >
            <div className="w-9 h-9 rounded-lg bg-rose-500/10 dark:bg-rose-500/20 flex items-center justify-center text-rose-500 dark:text-rose-400 border border-rose-500/20 shrink-0">
              <FiAlertCircle strokeWidth={2.5} className="text-xl" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <span className="text-xs font-black text-rose-500 dark:text-rose-400 uppercase tracking-widest leading-none mb-1">
                Error
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide line-clamp-2">
                {error?.message || "Something went wrong!"}
              </span>
            </div>
          </div>
        ),
        { duration: 4000 },
      );
    }

    if (data || data?.user) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
          >
           
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
              <FiCheck strokeWidth={2.8} className="text-lg" />
            </div>

           
            <div className="flex-1 flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">
                Success
              </span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide">
                signed up successfully! please login to continue.
              </span>
            </div>
          </div>
        ),
        { duration: 3000 },
      );
      await authClient.signOut();
      router.push("/login");
    }
  } catch (error) {
    toast.error(error?.message || "Something went wrong!");
  }
};
// for login
export const LoginSubmit = async (e, router) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const loginUser = Object.fromEntries(fromData.entries());

  try {
    const { data, error } = await authClient.signIn.email({
      email: loginUser?.email,
      password: loginUser?.password,
    });
    if (error) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
          >
            <div className="w-9 h-9 rounded-lg bg-rose-500/10 dark:bg-rose-500/20 flex items-center justify-center text-rose-500 dark:text-rose-400 border border-rose-500/20 shrink-0">
              <FiAlertCircle strokeWidth={2.5} className="text-xl" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <span className="text-xs font-black text-rose-500 dark:text-rose-400 uppercase tracking-widest leading-none mb-1">
                Error
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide line-clamp-2">
                {error?.message || "Something went wrong!"}
              </span>
            </div>
          </div>
        ),
        { duration: 4000 },
      );
    }
    if (data || data?.user) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
              <FiCheck strokeWidth={2.8} className="text-lg" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">
                Success
              </span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide">
                hy {data?.user?.name || "user"}, you have logged in
                successfully!
              </span>
            </div>
          </div>
        ),
        { duration: 3000 },
      );

      router.push("/");
    }
  } catch (error) {
    toast.error(error?.message || "Something went wrong!");
  }
};

// logout
export const handleLogout = async () => {
  try {
    await authClient.signOut();
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
        >
          <div className="w-9 h-9 rounded-lg bg-[#006A9C]/10 dark:bg-[#0EA5E9]/20 flex items-center justify-center text-[#006A9C] dark:text-[#0EA5E9] border border-[#006A9C]/20 dark:border-[#0EA5E9]/20 shrink-0 text-base">
            👋
          </div>

          <div className="flex-1 flex flex-col text-left">
            <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">
              Logged Out
            </span>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide">
              See you later
            </span>
          </div>
        </div>
      ),
      { duration: 3000 },
    );
  } catch (error) {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
        >
          <div className="w-9 h-9 rounded-lg bg-rose-500/10 dark:bg-rose-500/20 flex items-center justify-center text-rose-500 dark:text-rose-400 border border-rose-500/20 shrink-0">
            <FiAlertCircle strokeWidth={2.5} className="text-xl" />
          </div>

          <div className="flex-1 flex flex-col text-left">
            <span className="text-xs font-black text-rose-500 dark:text-rose-400 uppercase tracking-widest leading-none mb-1">
              Error
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide line-clamp-2">
              {error?.message || "Something went wrong!"}
            </span>
          </div>
        </div>
      ),
      { duration: 4000 },
    );
  }
};

// google sign in
export const handleGoogleSignIn = async (router) => {
  try {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data || data?.user) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
          >
            <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-slate-100 dark:border-slate-800 shrink-0 shadow-sm">
              <FcGoogle size={20} className="shrink-0" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">
                Authenticated
              </span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide">
                Login successfully!
              </span>
            </div>
          </div>
        ),
        { duration: 3000 },
      );
    }
  } catch (error) {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
        >
          <div className="w-9 h-9 rounded-lg bg-rose-500/10 dark:bg-rose-500/20 flex items-center justify-center text-rose-500 dark:text-rose-400 border border-rose-500/20 shrink-0">
            <FiAlertCircle strokeWidth={2.5} className="text-xl" />
          </div>

          <div className="flex-1 flex flex-col text-left">
            <span className="text-xs font-black text-rose-500 dark:text-rose-400 uppercase tracking-widest leading-none mb-1">
              Error
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide line-clamp-2">
              {error?.message || "Something went wrong!"}
            </span>
          </div>
        </div>
      ),
      { duration: 4000 },
    );
  }
};

//update profile
export const handleUpdateProfile = async (e) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const updatedUser = Object.fromEntries(fromData.entries());

  try {
    const { data, error } = await authClient.updateUser({
      image: updatedUser?.image,
      name: updatedUser?.name,
    });

    if (error) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
          >
            <div className="w-9 h-9 rounded-lg bg-rose-500/10 dark:bg-rose-500/20 flex items-center justify-center text-rose-500 dark:text-rose-400 border border-rose-500/20 shrink-0">
              <FiAlertCircle strokeWidth={2.5} className="text-xl" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <span className="text-xs font-black text-rose-500 dark:text-rose-400 uppercase tracking-widest leading-none mb-1">
                Error
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide line-clamp-2">
                {error?.message || "Something went wrong!"}
              </span>
            </div>
          </div>
        ),
        { duration: 4000 },
      );
    }

    if (data || data?.user) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)] px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all`}
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
              <FiCheck strokeWidth={2.8} className="text-lg" />
            </div>

            <div className="flex-1 flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">
                Success
              </span>

              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
                Hey {data?.user?.name || "User"}, your profile has been updated
                successfully!
              </span>
            </div>
          </div>
        ),
        { duration: 3000 },
      );
      return true
    }
    return false
  } catch (error) {
    toast.error(error?.message || "Something went wrong!");
    return false
  }
};
