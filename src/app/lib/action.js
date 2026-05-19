// appointment book

export const submitAppointment = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const newAppointment = Object.fromEntries(formData.entries());
  console.log(newAppointment,"New appointment data");
  const res = await fetch(`http://localhost:5000/appointments`, {
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
