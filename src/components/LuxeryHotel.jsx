import LuxeryBanner from '../assets/images/LuxeryBanner.png'
const LuxuryHotelSection = () => {
    return (
      <section className="bg-bgStart py-12 my-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={LuxeryBanner} 
              alt="Luxury Hotel"
              className="rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Discover a New Look of Luxury Hotel.
            </h2>
            <p className="text-textPrimary/70 mb-6">
            Experience unparalleled elegance and sophistication at our luxury hotel. Indulge in world-class amenities, exquisite design, and impeccable service crafted for your ultimate comfort and delight
            </p>
            <button className="px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-gray-800 transition">
              Read More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default LuxuryHotelSection;
  