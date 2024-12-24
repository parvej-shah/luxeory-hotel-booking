import { useEffect, useState } from "react";
import roomHeader from "../assets/images/roomHeader.jpg";
import API from "../hooks/useAPI";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Rooms() {
  const navigate = useNavigate();
  const getRooms = async () => {
    try {
      const { data } = await API.get("rooms");
      return data;
    } catch (error) {
      return error;
    }
  };
  const { isLoading,status, data:rooms } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  if (status=='loading') {
    return <p>Loading...</p>;
  }
  console.log(rooms);
  return (
    <div>
        <div
        className="hero"
        style={{
            backgroundImage: `url(${roomHeader})`,
        }}
        >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md py-8">
            <h2 className="my-5 text-5xl font-bold text-primary">Room List</h2>
            </div>
        </div>
        </div>
        {/* cards */}
        <div>
        {/* card */}
        {
        rooms && rooms?.map(room=>(
            <div key={room._id} className="flex flex-col container mx-auto md:flex-row items-center my-10 p-4 md:p-6 bg-bgStart rounded-lg shadow-lg">
        {/* Left Image */}
        <div className="md:w-1/3">
        {
            room?.roomImages?.map((img,idx)=>(
                <img key={idx}
            src={img}
            alt="Studio Sea View"
            className="rounded-lg lg:h-[200px] w-full"
        />
            ))
        }
        
        </div>
  
        {/* Right Content */}
        <div className="md:w-2/3 pl-6">
        {/* Stars */}
        <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-xl">★ ★ ★ ★ ★</span>
        </div>
        {/* Title */}
        <h2 className="text-2xl text-primary font-bold mb-2">Studio Sea View</h2>
        {/* Description */}
        <p className="text-textPriamry/60 mb-4">
            The Superior Rooms pay tribute to fashion and craftsmanship. The rooms
            are approximately 19m2 with views of Rue d’Alger and Jardin des
            Tuileries. The selection and pairing of materials has ...
        </p>
        {/* Price and Button */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <p className="text-lg font-semibold  text-textPrimary">
            PRICE: <span className="text-secondary">$218.9</span><span className="text-sm">/night</span>
            </p>
            <button
                onClick={() => navigate("/rooms")}
                className="btn bg-primary/90 border-none text-white font-bold px-6 py-3 rounded-lg hover:bg-primary flex items-center gap-2"
                >
                Book Now <AiOutlineArrowRight className="text-lg" />
                </button>
        </div>
        </div>
    </div>
        ))
        }
        </div>
    </div>
    );
}
