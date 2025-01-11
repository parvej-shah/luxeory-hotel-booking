import { FaBed, FaConciergeBell, FaSpa } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-bgStart to-bgEnd">
        <div
                className="hero"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/02xVBm4/oizma2jm.png')`,
                }}
                >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl py-4 md:py-8">
                    <h2 className="my-5 text-4xl md:text-5xl font-bold text-primary">About Luxeory</h2>
                    </div>
                </div>
        </div>
      <div className="container mx-auto py-10 px-4 lg:px-16">        

        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section: Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/7WQbLn3/i3wiwm8i.png"
              alt="Luxurious Hotel"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Details */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-semibold text-textPrimary">
              Experience the Best
            </h3>
            <p className="text-textPrimary/80 leading-relaxed">
              At Luxeory, we curate a selection of the most exquisite hotels, ensuring each stay is marked by unparalleled comfort and sophistication. From world-class amenities to exceptional services, Luxeory is designed for those who seek nothing but the best.
            </p>
            <button className="btn btn-primary w-fit bg-gradient-to-r from-primary to-secondary text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Icon Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-white mb-4">
              <FaBed size={24} />
            </div>
            <h4 className="text-lg font-bold text-textPrimary">
              Luxurious Rooms
            </h4>
            <p className="text-textPrimary/70">
              Spacious, elegant, and designed for comfort.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-white mb-4">
              <FaConciergeBell size={24} />
            </div>
            <h4 className="text-lg font-bold text-textPrimary">
              24/7 Concierge
            </h4>
            <p className="text-textPrimary/70">
              Personalized services to meet your every need.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-white mb-4">
              <FaSpa size={24} />
            </div>
            <h4 className="text-lg font-bold text-textPrimary">
              Spa & Wellness
            </h4>
            <p className="text-textPrimary/70">
              Rejuvenate with premium spa services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
