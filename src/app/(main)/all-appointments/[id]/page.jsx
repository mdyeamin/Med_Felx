import { getDoctorById } from "@/app/lib/data";
import DoctorsDetailsSkeleton from "@/components/DoctorsDetailsSkeleton";

import DetailsCard from "@/components/shared/DetailsCard";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  // console.log(id);
  const doctor = await getDoctorById(id);
  // console.log(doctor, "doctor Data");

  return {
    title: `${doctor.name} || ${doctor.description}`,
    description: doctor.description,
  };
}

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctor = getDoctorById(id);

  return (
    <section>
      <Suspense fallback={<DoctorsDetailsSkeleton />}>
        <DetailsCard doctor={doctor} />
      </Suspense>
    </section>
  );
};

export default DetailsPage;
