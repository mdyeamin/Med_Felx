import React from 'react';
import DoctorCard from './shared/DoctorCard';
import { getAllDoctors } from '@/app/lib/data';
const AllDoctorsData = await getAllDoctors();
  console.log(AllDoctorsData);
const AllDoctors = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
      {
        AllDoctorsData.map(doctor=><DoctorCard key={doctor._id} doctor={doctor}/>)
      }
    </div>
    );
};

export default AllDoctors;