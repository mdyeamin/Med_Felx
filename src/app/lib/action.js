// appointment book

export const submitAppointment = async (e,doctorData) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formValues = Object.fromEntries(formData.entries());

  const newAppointment ={
    ...formValues,
    specialty: doctorData.specialty
  }
  console.log(newAppointment,"New appointment data");
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAppointment),
  });
console.log(res,"Response from server:");

//   const data = await res.json();
//   console.log(data,"Data from server:");
};
