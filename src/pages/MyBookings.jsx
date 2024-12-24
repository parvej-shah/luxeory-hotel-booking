import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../hooks/useAPI";
import Swal from "sweetalert2";
import DatePicker from "react-date-picker";

const MyBookings = () => {
  const queryClient = useQueryClient();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newDate, setNewDate] = useState(null);

  // Fetch bookings for the logged-in user
  const fetchMyBookings = async () => {
    const { data } = await API.get("bookings/user"); // Assume user-specific endpoint
    return data;
  };

  const { data: bookings, status } = useQuery({
    queryKey: ["userBookings"],
    queryFn: fetchMyBookings,
  });

  // Mutation to cancel booking
  const cancelBookingMutation = useMutation(
    async (bookingId) => {
      const { data } = await API.delete(`bookings/${bookingId}`);
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
    async ({ bookingId, newDate }) => {
      const { data } = await API.patch(`bookings/${bookingId}`, { newDate });
      return data;
    },
    {
      onSuccess: () => {
        toast.success("Booking date updated successfully.");
        queryClient.invalidateQueries(["userBookings"]);
        setSelectedBooking(null); // Close modal
      },
    }
  );

  // Handle cancel booking
  const handleCancelBooking = (bookingId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelBookingMutation.mutate(bookingId);
      }
    });
  };

  // Handle update booking date
  const handleUpdateBookingDate = (bookingId) => {
    if (!newDate) {
      toast.error("Please select a new date.");
      return;
    }
    updateBookingDateMutation.mutate({ bookingId, newDate });
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
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
                    src={booking.roomImage}
                    alt={booking.roomName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>{booking.roomName}</td>
                <td>${booking.price}</td>
                <td>{new Date(booking.bookingDate).toDateString()}</td>
                <td>
                  <button
                    onClick={() => handleCancelBooking(booking._id)}
                    className="btn btn-error btn-sm mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() =>
                      Swal.fire({
                        title: "Write Your Review",
                        input: "textarea",
                        inputPlaceholder: "Type your review here...",
                        showCancelButton: true,
                        confirmButtonText: "Submit",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          toast.success("Thank you for your review!");
                        }
                      })
                    }
                    className="btn btn-info btn-sm mr-2"
                  >
                    Review
                  </button>
                  <button
                    onClick={() => setSelectedBooking(booking)}
                    className="btn btn-warning btn-sm"
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
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Update Booking Date for {selectedBooking.roomName}
            </h3>
            <p className="py-4">Select a new date for your booking:</p>
            <DatePicker
              onChange={setNewDate}
              value={newDate}
              className="border rounded p-2 w-full"
            />
            <div className="modal-action">
              <button
                className="btn btn-success"
                onClick={() =>
                  handleUpdateBookingDate(selectedBooking._id)
                }
              >
                Confirm
              </button>
              <button
                className="btn"
                onClick={() => setSelectedBooking(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
