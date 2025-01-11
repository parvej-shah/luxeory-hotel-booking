import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../hooks/useAPI";
import Swal from "sweetalert2";
import DatePicker from "react-date-picker";
import { useAuth } from "../auth/AuthProvider";
import LoadingClip from "../components/LoadingClip";
import { differenceInCalendarDays } from "date-fns";
import useSecureAPI from "../hooks/useSecureAPI";
import ReviewModal from "../components/ReviewModal";
const MyBookings = () => {
  const queryClient = useQueryClient();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newDate, setNewDate] = useState(new Date());
  const {user,setHamToggle} = useAuth();
  const secureAPI = useSecureAPI();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(()=>{
      window.scrollTo(0, 0);
      setHamToggle(false);
    },[setHamToggle]);
  // Fetch bookings for the logged-in user
  const fetchMyBookings = async () => {
    const { data } = await secureAPI.get(`bookings/${user?.email}`);
    return data;
  };

  const { data: bookings, status } = useQuery({
    queryKey: [ "userBookings"],
    queryFn: fetchMyBookings,
  });
  // Mutation to cancel booking
  const cancelBookingMutation = useMutation(
    async ({bookingId,roomId}) => {
      const { data } = await API.delete(`bookings/${bookingId}`,{
        params:{
          roomId:roomId,
        }
      });
      return data;
    },
    {
      onSuccess: () => {
        toast.success("Booking canceled successfully.");
        queryClient.invalidateQueries(["userBookings"]);
      },
    }
  );

  // Mutation to update booking date
  const updateBookingDateMutation = useMutation(
    async ({ bookingId, newDate,roomId }) => {
      const { data } = await API.patch(`bookings/${bookingId}`, { newDate, roomId });
      return data;
    },
    {
      onSuccess: () => {
        toast.success("Booking date updated successfully.");
        queryClient.invalidateQueries(["userBookings"]);
        setSelectedBooking(null);
      },
    }
  );

  // Handle cancel booking
  const handleCancelBooking = (bookingId,roomId,bookingDate) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        const calendarDayGap = differenceInCalendarDays(bookingDate, new Date());
        if(calendarDayGap<1){
          toast.error("Booking can't be cancelled!");
          return;
        }
        cancelBookingMutation.mutate({bookingId,roomId});
      }
    });
  };

  // Handle update booking date
  const handleUpdateBookingDate = (bookingId,roomId) => {
    if (!newDate) {
      toast.error("Please select a new date.");
      return;
    }
    updateBookingDateMutation.mutate({ bookingId, newDate,roomId });
  };
  // review handle
  const handleReviewSubmit = async(review) => {
    const {data} = await API.post('reviews',review);
    if(data.acknowledged){
      toast.success("Thank You for Reviewing")
    }
    else{
      toast.error("Sorry! Try Again.")
    }
  };
  if (status === "loading") {
    return <LoadingClip/>
  }


  return (
    <section>
      <div
                className="hero"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/gdhYXFb/rjjq9xin.png')`,
                }}
                >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl py-4 md:py-8">
                    <h2 className="my-5 text-4xl md:text-5xl font-bold text-primary">My Bookings</h2>
                    </div>
                </div>
            </div>
    <div className="container mx-auto p-5">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full bg-bgStart">
          <thead>
            <tr className="text-textPrimary">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    src={booking.thumbnail}
                    alt={booking.roomTitle}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>{booking.roomTitle}</td>
                <td>${booking.price}</td>
                <td>{new Date(booking.bookingDate).toDateString()}</td>
                <td className="space-y-2 md:space-y-0">
                  <button
                    onClick={() => handleCancelBooking(booking._id,booking.roomId,booking.bookingDate)}
                    className="btn btn-error btn-sm mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() =>
                      setIsModalOpen(booking)
                    }
                    className="btn bg-secondary hover:bg-secondary/80 border-none text-white/80 btn-sm mr-2"
                  >
                    Review
                  </button>
                  <button
                    onClick={() => setSelectedBooking(booking)}
                    className="btn bg-primary hover:bg-primary/80 border-none text-white/80 btn-sm"
                  >
                    Update Date
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Updating Booking Date */}
      {selectedBooking && (
        <div className="modal modal-open">
          <div className="modal-box bg-bgStart">
            <h3 className="font-bold text-lg text-textPrimary">
              Update Booking Date for {selectedBooking.roomName}
            </h3>
            <p className="py-4 text-textPrimary/80">Select a new date for your booking:</p>
            <DatePicker
              onChange={setNewDate}
              value={newDate}
              className="border rounded p-2 w-full "
            />
            <div className="modal-action">
              <button
                className="btn btn-sm btn-success"
                onClick={() =>
                  handleUpdateBookingDate(selectedBooking._id,selectedBooking.roomId)
                }
              >
                Confirm
              </button>
              <button
                className="btn btn-sm btn-error"
                onClick={() => setSelectedBooking(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <ReviewModal  isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        username={user?.displayName}
        onSubmitReview={handleReviewSubmit}/>
    </div>
    </section>
  );
};

export default MyBookings;
