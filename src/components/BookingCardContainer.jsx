import { FiCalendar } from "react-icons/fi";
import BookedCard from "./BookedCard";


const BookingCardContainer =async({bookedAppointmentPromise}) => {
  const bookedAppointment = await bookedAppointmentPromise;

if (!bookedAppointment || bookedAppointment.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-12 bg-white/50 dark:bg-[#1e293b]/50 border border-slate-200 border-dashed dark:border-slate-700 rounded-2xl">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
          <FiCalendar className="text-2xl text-slate-400 dark:text-slate-500" />
        </div>
        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
          No Appointments Found
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm text-center">
          You don't have any booked appointments at the moment. When you book one, it will appear here.
        </p>
      </div>
    );
  }
  
    


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {bookedAppointment.map(data=> <BookedCard key={data._id}data={data} />)
      }
     
    </div>
  );
};

export default BookingCardContainer;
