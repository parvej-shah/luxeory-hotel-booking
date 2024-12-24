/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
export default function RoomDetailsCard({ roomDetails, images }) {
  const {
    roomTitle,
    roomSize,
    isDouble,
    roomDescription,
    facilities,
    inBathroom,
    price,
    reviewCount,
  } = roomDetails;
  return (
    <div>
      {/* Room Details Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <div>
          <ImageGallery items={images} showThumbnails={true} />
        </div>

        {/* Right: Room Information */}
        <div className="space-y-4">
          {/* Room Title */}
          <h2 className="text-3xl font-bold">{roomTitle}</h2>

          {/* Room Size and Bed Type */}
          <p className="text-gray-600">
            <strong>Room size:</strong> {roomSize}
          </p>
          <p className="text-gray-600">
            <strong>Bed Type:</strong>{" "}
            {isDouble ? "1 Double Bed" : "Single Bed"}
          </p>

          {/* Room Reviews */}
          <p className="text-gray-600">
            <strong>Comfy beds:</strong> Based on {reviewCount} reviews
          </p>

          {/* Room Description */}
          <p className="text-gray-600">{roomDescription}</p>

          {/* Bathroom Facilities */}
          <div>
            <h3 className="font-semibold">In your private bathroom:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {inBathroom?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Room Facilities */}
          <div>
            <h3 className="font-semibold">Facilities:</h3>
            <ul className="list-disc list-inside text-gray-600">
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
              onClick={() =>
                toast.success("Booking functionality coming soon!")
              }
              className="btn btn-primary"
            >
              Let&apos;s Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
