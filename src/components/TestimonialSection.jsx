/* eslint-disable react/prop-types */
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ReactStars from "react-stars";

const TestimonialSection = ({testimonials}) => {
  return (
    <section className="py-10 px-6 container mx-auto text-center ">
      <h2 className="text-3xl text-primary font-bold mb-8">Our Guests Love Us</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        
{testimonials?.map((testimonial, index) => (
    <SwiperSlide key={index}>
          <div
            key={index}
            className="bg-bgStart text-textPrimary shadow-lg rounded-lg p-6 text-center space-y-2"
          >
            <FaQuoteLeft className="text-primary text-xl" />
            <div className="flex justify-center cursor-not-allowed z-10">
            <ReactStars
            edit={false}
                count={5}
                size={30}
                value={testimonial?.rating}
                color2={"#facc15"} // Star color when filled
                color1={"#d1d5db"} 
                className="cursor-not-allowed"// Star color when empty
              />
            </div>
            <p className="font-medium text-sm text-textPrimary/70">{testimonial?.comment}</p>
            <div className="flex items-center text-left justify-end">
            <h3 className="text-lg text-secondary font-semibold">{testimonial?.username}</h3>
            <FaQuoteRight className="text-primary text-xl mt-3 ml-2" />
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
    </section>
  );
};

export default TestimonialSection;
