import ourHotel1 from "../assets/images/our-hotel-01.jpg";
import ourHotel2 from "../assets/images/our-hotel-02.jpg";
import ourHotel3 from "../assets/images/our-hotel-03.jpg";
import ourHotel4 from "../assets/images/our-hotel-04.jpg";


  const hotel1 = {
    name: "Hotel FT. Manchester",
    address: "4577 Washington Ave, Manchester",
    image: ourHotel1,
  }
  const hotel2={
    name: "Hotel FT. London",
    address: "6381 Elgin St. Celina, Delaware 10289",
    image: ourHotel2,
  }
  const hotel3={
    name: "Hotel FT. New York",
    address: "6381 Elgin St. Celina, Delaware 10289",
    image: ourHotel3,
  }
  const hotel4=
  {
    name: "Hotel FT. Paris",
    address: "6381 Elgin St. Celina, Delaware 10289",
    image: ourHotel4,
  }

const HotelGrid = () => {
    
  return (
    <section className="py-12 px-6 container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left text-secondary ">Our Hotels</h2>
      <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-6">
      <div
            className="relative group md:row-span-2 bg-bgEnd rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={ourHotel1}
              alt={hotel1.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white h-full flex flex-col justify-end">
              <h3 className="text-lg font-bold">{hotel1.name}</h3>
              <p className="text-sm">{hotel1.address}</p>
            </div>
          </div>
      <div
            className="relative group bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={hotel2.image}
              alt={hotel2.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white h-full flex flex-col justify-end">
              <h3 className="text-lg font-bold">{hotel2.name}</h3>
              <p className="text-sm">{hotel2.address}</p>
            </div>
          </div>
      <div
            className="relative group bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={hotel3.image}
              alt={hotel3.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white h-full flex flex-col justify-end">
              <h3 className="text-lg font-bold">{hotel3.name}</h3>
              <p className="text-sm">{hotel3.address}</p>
            </div>
          </div>
      <div
            className="relative group md:col-span-2 bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={hotel4.image}
              alt={hotel4.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white h-full flex flex-col justify-end">
              <h3 className="text-lg font-bold">{hotel4.name}</h3>
              <p className="text-sm">{hotel4.address}</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default HotelGrid;