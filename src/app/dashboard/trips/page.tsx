"use client";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import TripCard from "./components/TripSheet/TripsCard";
import TripSheet from "./components/TripSheet";

function Page() {
  const { fixedBookings, isFixedBookingsLoading } = useFixedBooking();
  return (
    <div className="flex flex-col gap-3">
      My Trips
      <div className="hidden lg:grid grid-cols-6 gap-3 text-primary font-semibold px-5">
        <div>Vehicle Number</div>

        <div>Bus Type</div>
        <div>Departure Time</div>

        <div>Date Created</div>
        <div>Status</div>
      </div>
      <div className="flex flex-col gap-5">
        {fixedBookings?.map((r) => (
          <TripSheet key={r?.id} fixedbooking={r} />
        ))}
      </div>
      {isFixedBookingsLoading && <p>Loading fixed bookingss</p>}
    </div>
  );
}

export default Page;
