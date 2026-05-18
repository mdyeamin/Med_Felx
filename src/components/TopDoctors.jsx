import { getTopDoctors } from "@/app/lib/data";
import DoctorCard from "./shared/DoctorCard";

const TopDoctors = async () => {
  const TopDoctors = await getTopDoctors();
  console.log(TopDoctors);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
      {
        TopDoctors.map(doctor=><DoctorCard key={doctor._id} doctor={doctor}/>)
      }
    </div>
  
  );
};

export default TopDoctors;
