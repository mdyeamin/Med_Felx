import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";

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

    if (data || data?.user) {
      toast.success("Account created successfully!");
      await authClient.signOut();
      router.push("/login");
    }
  } catch (error) {
    toast.error(error?.message || "Something went wrong!");
  }
};
// for login
export const LoginSubmit = async (e,router) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const loginUser = Object.fromEntries(fromData.entries());

  try {
    const { data, error } = await authClient.signIn.email({
      email: loginUser?.email,
      password: loginUser?.password,
    });
    if (error) {
      toast.error(error?.message || "Something went wrong!");
    }
    if (data || data?.user) {
      toast.success("Login successfully!");
      
      router.push("/");
    }
  } catch (error) {
    toast.error(error?.message || "Something went wrong!");
  }
  console.log("data", data);
  console.log("error", error);
};
