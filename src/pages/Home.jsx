import Banner from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import LuxuryHotelSection from '../components/LuxeryHotel'
import HotelMap from '../components/Map'
import HotelGrid from '../components/OurHotels'
import PlacesNearby from '../components/PlacesNearby'
import TestimonialSection from '../components/TestimonialSection'
import  { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import offer from '../assets/images/offer.webp'
export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Banner/>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-primary/80 rounded-lg shadow-lg w-11/12 max-w-lg">
            {/* Cancel Icon */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white btn btn-circle bg-primary/30 border-none hover:text-gray-800"
            >
              <AiOutlineClose size={24} />
            </button>

            {/* Modal Content */}
            <div className="">
              <img
                src={offer} // Replace with your promotional banner image URL
                alt="Special Offer"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
      <PlacesNearby/>
      <FeaturedRooms/>
      <HotelGrid/>
      <LuxuryHotelSection/>
      <HotelMap/>
      <TestimonialSection/>
    </div>
  )
}
