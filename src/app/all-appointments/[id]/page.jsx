import { getDoctorById } from "@/app/lib/data";
import DoctorsSkeleton from "@/components/DoctorsSkeleton";
import DetailsCard from "@/components/shared/DetailsCard";
import React, { Suspense } from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctor =  getDoctorById(id);

  return (
    <section>
        <Suspense fallback={<DoctorsSkeleton/>}>

      <DetailsCard doctor={doctor} />
        </Suspense>
    </section>
  );
};

export default DetailsPage;
