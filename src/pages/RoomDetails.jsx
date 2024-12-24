import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
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
  const getRoomDetails = async () => {
    try {
      const { data } = await API.get(`rooms/${id}`);
      return data;
    } catch {
      toast.error("Error fetching room details.");
    }
  };

  const { status, data: roomDetails } = useQuery({
    queryKey: ["roomDetails"],
    queryFn: getRoomDetails,
  });

  // Map Room Images for ImageGallery
  useEffect(() => {
    if (roomDetails?.roomImages) {
      const newImages = roomDetails.roomImages.map((img) => ({
        original: img,
        thumbnail: img,
      }));
      setImages(newImages);
    }
  }, [roomDetails]);
  const navigate = useNavigate()
  /* const handleBooking = ()=>{
    if(!user?.email){
        toast.error("Login is required");
        navigate('/login');
        return;
    }
    if(!roomDetails?.available){
        toast.error("Room is Not Available");
        return;
    }
    setModalIsOpen(true);
  } */
  const handleConfirmBooking = async() => {
    if (!selectedDate) {
      toast.error("Please select a booking date.");
      return;
    }
    console.log(selectedDate);
    // Mock booking confirmation
    const bookingdata = {
        roomId:roomDetails?._id,
        email:user?.email,
        bookingDate:selectedDate
    }
    try{
        const {data} = await API.post('bookings',bookingdata)
        console.log(data);
        if(data.acknowledged){
            toast.success(`Room booked for ${selectedDate.toDateString()}!`);
            setModalIsOpen(false);
        }
    }
    catch{
        toast.success(`Sorry! Try Again.`);
    }
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
          <DatePicker
            onChange={setSelectedDate}
            value={selectedDate}
            className="mt-2 rounded-md"
            format="dd-MM-y"
            clearIcon={null}
            calendarIcon={null}
            required
          />
          {/* <DatePicker onChange={onChange} value={value} /> */}
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
