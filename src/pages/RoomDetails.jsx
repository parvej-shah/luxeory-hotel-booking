import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import API from "../hooks/useAPI";
import LoadingClip from "../components/LoadingClip";
import { toast } from "react-toastify";
import "react-image-gallery/styles/css/image-gallery.css";
import RoomDetailsCard from "../components/RoomDetailsCard";

export default function RoomDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [images, setImages] = useState([]);

  // Fetch Room Details
  const getRoomDetails = async () => {
    try {
      const { data } = await API.get(`rooms/${id}`);
      return data;
    } catch{
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

  if (status === "loading") {
    return <LoadingClip />;
  }

  return (
    <div className="container mx-auto">
        <RoomDetailsCard roomDetails={roomDetails} images={images}/>
      
    </div>
  );
}

