import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { AiOutlineArrowRight } from "react-icons/ai";
import Banner1 from "../assets/images/Banner1.png";
import Banner2 from "../assets/images/Banner2.png";
import Banner3 from "../assets/images/Banner3.png";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 300, once: false }); // Initialize AOS with options
  }, []);
  const navigate = useNavigate();
  const slides = [
    {
      image: Banner1,
      title: "Experience Unmatched Elegance",
      description: "Where every detail is crafted for your ultimate indulgence.",
    },
    {
      image: Banner2,
      title: "Redefining Modern Sophistication",
      description: "Effortless luxury tailored to your unique desires.",
    },
    {
      image: Banner3,
      title: "Luxury Without Compromise",
      description: "Discover a world where excellence meets exclusivity.",
    },
  ];
  

  return (
    <div className="relative w-full h-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        spaceBetween={300}
        slidesPerView={1}
        onSlideChange={() => AOS.refresh()}
        speed={800}
        className="h-[300px] md:h-[480px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative swiper-slide">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.3 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-full h-full"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div
              className="absolute inset-0 md:px-14 bg-black bg-opacity-60 flex flex-col justify-center md:items-start text-center md:text-left px-4"
            >
              <Slide
                damping={0.2}
                cascade
                direction="up"
                className="container mx-auto"
                >
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-1 md:mb-4 max-w-xl">
                  {slide.title}
                </h2>
                <p className="text-lg lg:text-xl text-white mb-4 md:mb-6">
                  {slide.description}
                </p>
                <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => navigate("/rooms")}
                  className="btn bg-primary/90 border-none text-white font-bold px-6 py-3 rounded-lg hover:bg-primary flex items-center gap-2"
                >
                  Book Now <AiOutlineArrowRight className="text-lg" />
                </button>
                </div>
              </Slide>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
