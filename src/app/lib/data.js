import { headers } from "next/headers";
import { auth } from "./auth";

// top rated doctors get
export const getTopDoctors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
  const data = await res.json();
  return data;
};

// all doctors get
export const getAllDoctors = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-appointments`,
  );
  const data = await res.json();
  return data;
};

// get single data for details page
export const getDoctorById = async (id) => {
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token,"token");
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-appointments/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

// get all appointments for dashboard

export const getAppointments = async (userId) => {
    const {token} = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token, "token from all booked appointments");
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${userId}`,{
      headers :{
        authorization: `Bearer ${token}`
      }
    }
  );
  const data = await res.json();
  return data;
};
