/* eslint-disable react/prop-types */
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
export default function RoomDetailsCard({ roomDetails,handleBooking, images }) {
  const {
    roomTitle,
    roomSize,
    isDouble,
    roomDescription,
    facilities,
    inBathroom,
    price,
    reviewCount,
    available
  } = roomDetails;
  return (
    <div className="bg-bgStart">
      {/* Room Details Container */}
      <div className="grid grid-cols-1 container mx-auto bg-bgStart md:grid-cols-2 gap-8 pb-10 pt-4 ">
        {/* Left: Image Gallery */}
        <div>
          <ImageGallery
            items={images}
            showThumbnails={true}
            renderItem={(item) => (
              <img
                src={item.original}
                className="md:h-[500px] h-[300px] w-full object-cover"
                alt="original"
              />
            )}
            renderThumbInner={(item) => (
              <img
                src={item.thumbnail}
                className="w-32 h-[80px]"
                alt="thumbnail"
              />
            )}
          />
        </div>
        {/* Right: Room Information */}
        <div className="space-y-4 p-4 md:py-0 md:pr-4 text-textPrimary/70">
          {/* Room Title */}
          <div className={`text-sm font-medium ${!available?"text-red-500 bg-red-200":"text-secondary bg-secondary/10"} w-fit px-2 rounded-full mt-4 md:mt-0`}>
              {available?"Available":"Booked"}
            </div>
          <h2 className="text-3xl font-bold text-primary">{roomTitle}</h2>

          {/* Room Size and Bed Type */}
          <p >
            <strong>Room size:</strong> {roomSize}
          </p>
          <p>
            <strong>Bed Type:</strong>{" "}
            {isDouble ? "1 Double Bed" : "Single Bed"}
          </p>

          {/* Room Reviews */}
          <p>
            <strong>Comfy beds:</strong> Based on {reviewCount} reviews
          </p>

          {/* Room Description */}
          <p>{roomDescription}</p>

          {/* Bathroom Facilities */}
          <div>
            <h3 className="font-semibold text-textPrimary">In your private bathroom:</h3>
            <ul className="list-disc list-inside">
              {inBathroom?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Room Facilities */}
          <div>
            <h3 className="font-semibold text-textPrimary">Facilities:</h3>
            <ul className="list-disc list-inside">
              {facilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Price and Book Button */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-2xl font-bold text-primary">
              ${price} <span className="text-lg font-normal">/ Night</span>
            </p>
            <button
              onClick={handleBooking}
              className="btn bg-secondary/90 border-none text-white font-bold px-6 py-3 rounded-lg hover:bg-secondary"
            >
              Let&apos;s Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
