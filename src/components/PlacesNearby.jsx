import NileRiver from "../assets/images/NileRiver.png";
import LukeSide from "../assets/images/LukeSide.png";
import BeachResort from "../assets/images/BeachResort.png";
import VintageResort from "../assets/images/VintageResort.png";
const PlacesNearby = () => {
    const places = [
        {
          name: 'Nile River',
          distance: '500m',
          image: NileRiver,
        },
        {
          name: 'Beach Resort',
          distance: '500m',
          image: BeachResort,
        },
        {
          name: 'Vintage Resort',
          distance: '500m',
          image: VintageResort,
        },
        {
          name: 'Lakeside Asia',
          distance: '500m',
          image: LukeSide,
        },
      ]
  return (
    <section className="py-16 px-6 container mx-auto">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Places Nearby</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="relative group card w-full bg-bgStart/50 shadow-sm rounded-lg overflow-hidden"
          >
            <div className="overflow-hidden w-full h-full rounded-xl">

            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full rounded-xl object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
            />
            </div>
            <div className="p-6 flex items-center text-textPrimary">
              <h3 className="text-xl font-bold">{place.name}</h3>
              <div className="divider divider-horizontal"></div>
              <p className="text-secondary font-medium">{place.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacesNearby;
