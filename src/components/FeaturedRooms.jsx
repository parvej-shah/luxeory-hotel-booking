import { Link } from "react-router-dom";
import API from "../hooks/useAPI";
import { useQuery } from "@tanstack/react-query";
import LoadingClip from "./LoadingClip";

const FeaturedRooms = () => {
  const getRooms = async () => {
      const { data } = await API.get("rooms",{
        params:{
            sortBy:'reviewCount'
        }
      });
      return data;
  };
  const { status, data:rooms } = useQuery({
    queryKey: ["featured-rooms"],
    queryFn: getRooms,
  });

  if (status=='loading') {
    return <LoadingClip/>;
  }
  return (
    <div className="bg-bgStart py-10  px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-left mb-8 text-primary">Featured Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rooms?.slice(0, 6).map((room) => (
            <div
              key={room?._id}
              className="card bg-bgEnd shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={room?.thumbnail}
                alt={room.roomTitle}
                className="h-52 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{room.roomTitle}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {room.roomDescription}
                </p>
                <div className="flex items-center justify-between text-gray-700 text-sm">
                  <span className="font-medium">${room.price}/night</span>
                  <span>{room.roomSize}</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-sm flex items-center gap-1">
                    <i className="ri-user-2-line"></i> {room.isDouble ? "2 Adults" : "1 Adult"}
                  </span>
                  <span className="text-sm flex items-center gap-1">
                    <i className="ri-group-line"></i> {room.reviewCount} Reviews
                  </span>
                </div>
                <Link to={`/rooms/${room?._id}`}>
                <button
                    className="btn bg-secondary/90 border-none text-white font-bold px-6 py-3 rounded-lg hover:bg-secondary w-full my-2"
                >
                    Book Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;
