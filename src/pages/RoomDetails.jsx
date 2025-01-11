import { useEffect, useState } from "react";
import {  useQuery ,useMutation, useQueryClient} from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import API from "../hooks/useAPI";
import LoadingClip from "../components/LoadingClip";
import { toast } from "react-toastify";
import "react-image-gallery/styles/css/image-gallery.css";
import RoomDetailsCard from "../components/RoomDetailsCard";
import ReactModal from "react-modal";
// import DatePicker from "react-datepicker";
import DatePicker from "react-date-picker";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useAuth } from "../auth/AuthProvider";
export default function RoomDetails() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const getRoomDetails = async () => {
    try {
      const { data } = await API.get(`rooms/${id}`);
      return data;
    } catch {
      toast.error("Error fetching room details.");
    }
  };
  const location = useLocation();
  const { status, data: roomDetails } = useQuery({
    queryKey: ["roomDetails"],
    queryFn: getRoomDetails,
  });

  // Map Room Images for ImageGallery
  useEffect(() => {
    window.scrollTo(0, 0);
    if (roomDetails?.roomImages) {
      const newImages = roomDetails.roomImages.map((img) => ({
        original: img,
        thumbnail: img,
      }));
      setImages(newImages);
    }
  }, [roomDetails]);
  const navigate = useNavigate()
  const handleBooking = ()=>{
    if(!user?.email){
        toast.error("Login is required");
        navigate('/login', { state: { from: location.pathname } });
        return;
    }
    if(!roomDetails?.available){
        toast.error("Room is booked!");
        return;
    }
    setModalIsOpen(true);
  }
  const mutation = useMutation(
    async (bookingData) => {
      const { data } = await API.post("bookings", bookingData);
      return data;
    },
    {
      onSuccess: (data) => {
        if (data.acknowledged) {
          toast.success(`Room booked for ${new Date(selectedDate).toDateString()}!`);
          setModalIsOpen(false);
          queryClient.invalidateQueries({ queryKey: ["roomDetails"] });
        }
      },
      onError: () => {
        toast.error("Sorry! Try again.");
      },
    }
  );

  const handleConfirmBooking = () => {
    if (!selectedDate) {
      toast.error("Please select a booking date.");
      return;
    }
    const bookingdata = {
        roomId:roomDetails?._id,
        email:user?.email,
        bookingDate: new Date(selectedDate)
    }
    mutation.mutate(bookingdata);
  };
  if (status === "loading") {
    return <LoadingClip />;
  }

  return (
    <div className="container mx-auto">
      <RoomDetailsCard
        roomDetails={roomDetails}
        handleBooking={handleBooking}
        images={images}
      />
      {/* Booking Modal */}
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="p-6 bg-bgStart rounded-lg shadow-2xl max-w-lg z-50 mx-auto mt-10 text-textPrimary/70"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center "
      >
        <h2 className="text-xl font-bold mb-4">Confirm Your Booking</h2>
        <div className="space-y-2">
          {/* Room Summary */}
          <p>
            <strong>Room: </strong>
            {roomDetails?.roomTitle}
          </p>
          <p>
            <strong>Room Size:</strong> {roomDetails?.roomSize}
          </p>
          <p>
            <strong>Price:</strong> {roomDetails?.price}/ Night
          </p>
        </div>
        {/* Date Picker */}
        <div className="mt-4">
          <label className="font-semibold">Select Booking Date:</label>
          {/* <DatePicker
            onChange={setSelectedDate}
            value={selectedDate}
            className="mt-2 rounded-md"
            format="dd-MM-y"
            clearIcon={null}
            calendarIcon={null}
            required
          /> */}
          <input type="date" value={selectedDate.toString()} onChange={(e)=>setSelectedDate(e.target.value)} className="mt-2 rounded-md p-2 w-full"/>
        </div>
        {/* Buttons */}
        <div className="flex justify-end mt-6 space-x-2">
          <button
            onClick={() => setModalIsOpen(false)}
            className="btn bg-secondary hover:bg-secondary/80 text-black  btn-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmBooking}
            className="btn bg-primary hover:bg-primary/80 text-black  btn-sm"
          >
            Confirm
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
