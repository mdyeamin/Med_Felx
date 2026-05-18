// top rated doctors get
export const getTopDoctors = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/doctors`);
  const data = await res.json();
  return data;
};

// all doctors get
export const getAllDoctors = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/all-appointments`);
    const data = await res.json();
    return data;
};
