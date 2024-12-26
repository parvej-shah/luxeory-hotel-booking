import roomHeader from "../assets/images/roomHeader.jpg";
import API from "../hooks/useAPI";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import LoadingClip from "../components/LoadingClip";
import { useEffect, useState } from "react";
export default function Rooms() {

  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useState({});
  const getRooms = async () => {
      const { data } = await API.get("rooms",{params:queryParams});
      return data;
  };
  const { status, data:rooms } = useQuery({
    queryKey: ["rooms",queryParams],
    queryFn: getRooms,
  });
  const handleSortByPrice = () => {
    setQueryParams({ sortBy: "price" });
  };
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  if (status=='loading') {
    return <LoadingClip/>;
  }
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
            <div className="max-w-xl py-8">
            <h2 className="my-5 text-5xl font-bold text-primary">Room List</h2>
            <button
                onClick={handleSortByPrice}
                className="btn bg-secondary/90 border-none text-white font-bold px-6 py-3 rounded-lg hover:bg-secondary w-fit"
                >
                Sort By Price
                </button>
            </div>
        </div>
        </div>
        {/* cards */}
        <div className="container mx-auto"> 
        {
        rooms?.map(room=>(
            <Link key={room._id} to={`/rooms/${room._id}`}>
            <div  className="flex flex-col mx-2 rounded-lg md:flex-row items-center my-10 p-4 md:p-6 bg-bgStart shadow-lg">
        <div className="md:w-1/3">
   
            <img
            src={room?.thumbnail}
            alt="Studio Sea View"
            className="rounded-lg lg:h-60 w-full object-cover"
        />
        
        </div>
  
        {/* Right Content */}
        <div className="md:w-2/3 md:pl-6">
        <div className="flex items-center mb-2">
            <div className={`text-sm font-medium ${!room?.available?"text-red-500 bg-red-200":"text-secondary bg-secondary/10"} w-fit px-2 rounded-full mt-4 md:mt-0`}>
              {room?.available?"Available":"Booked"}
            </div>
        </div>
        <h2 className="text-2xl text-primary font-bold mb-2">{room?.roomTitle}</h2>
        <p className="text-textPriamry/60 mb-4">
            {room?.roomDescription}
        </p>
        {/* Price and Button */}
        <div className="flex flex-col gap-4 justify-center">
            <p className="text-lg font-semibold  text-textPrimary">
            <span className="text-secondary">{room?.price}</span><span className="text-sm">/night</span>
            </p>
            <button
                onClick={() => navigate("/rooms")}
                className="btn md:w-1/2 bg-primary/90 border-none text-white font-bold px-6 py-3 rounded-lg hover:bg-primary flex items-center gap-2"
                >
                Book Now <AiOutlineArrowRight className="text-lg" />
                </button>
        </div>
        </div>
            </div>
            </Link>
        ))
        }
        </div>
    </div>
    );
}
