import { authClient } from "./auth-client";

// for register
export const RegisterSubmit = async (e) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const newUser = Object.fromEntries(fromData.entries());

  const { data, error } = await authClient.signUp.email({
    name: newUser?.name,
    email: newUser?.email,
    password: newUser?.password,
    image: newUser?.image,
  });
  console.log("data", data);
  console.log("error", error);
};
