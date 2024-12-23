import { Map, Marker } from "pigeon-maps"
const HotelMap = () => {
  const hotelLocation = [23.816777, 90.406162];

  return (
    <div className="h-52 lg:h-[400px] w-full">
      <h1 className="text-4xl text-textPrimary font-bold text-center pb-6">Our Location</h1>
      <Map
        defaultCenter={hotelLocation}
        defaultZoom={15}
        className='h-full w-full'
      >
        <Marker width={50} anchor={hotelLocation} />
      </Map>
    </div>
  );
};

export default HotelMap;
