import BookedCard from "./BookedCard";


const BookingCardContainer =async({bookedAppointmentPromise}) => {
  const bookedAppointment = await bookedAppointmentPromise;

  
    


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookedAppointment.map(data=> <BookedCard key={data._id}data={data} />)
      }
     
    </div>
  );
};

export default BookingCardContainer;
