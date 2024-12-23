import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const testimonials = [
  {
    name: "Jacob Jones",
    country: "France",
    text: "The location of FT hotel is perfect and very central. I was very happy to walk around the hotel, discover surrounding scenes such as beach, night market, museum.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    name: "Peek Thakul",
    country: "France",
    text: "Every year, we come back to FT hotel for our holiday. It was extremely interesting and enjoyable! We are happy with our stay in this hotel and we love meals here.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    name: "Ralph Edwards",
    country: "American",
    text: "I will be pet i will be pet and then i will hiss sit in box get scared by doggo also cucumerro yet the best thing in the call universe is a cardboard box.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    name: "Ralph Edwards",
    country: "American",
    text: "I will be pet i will be pet and then i will hiss sit in box get scared by doggo also cucumerro yet the best thing in the call universe is a cardboard box.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    name: "Ralph Edwards",
    country: "American",
    text: "I will be pet i will be pet and then i will hiss sit in box get scared by doggo also cucumerro yet the best thing in the call universe is a cardboard box.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 mt-10 px-6 container mx-auto text-center">
      <h1 className="text-4xl text-primary text-left font-bold mb-8">Our Guests Love Us</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop
        spaceBetween={10}
        slidesPerView={3}
      >
{testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
          <div
            key={index}
            className="bg-bgStart text-textPrimary shadow-lg rounded-lg p-6 text-center space-y-4"
          >
            <p className="font-medium text-sm text-textPrimary/70">{testimonial.text}</p>
            <div className="flex items-center gap-4 text-left justify-end">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg text-secondary font-semibold">{testimonial.name} <br /><span className="text-sm text-textPrimary/80">{testimonial.country}</span></h3>
            <FaQuoteRight className="text-primary text-xl mt-3 ml-4" />
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
    </section>
  );
};

export default TestimonialSection;
