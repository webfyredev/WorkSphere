import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1600/900?random=1",
    title: "Welcome to Our Website",
    text: "We build modern solutions for your business.",
    button: "Get Started",
  },
  {
    id: 2,
    image: "https://picsum.photos/1600/900?random=2",
    title: "Grow with Confidence",
    text: "Empowering teams with the best tools.",
    button: "Learn More",
  },
  {
    id: 3,
    image: "https://picsum.photos/1600/900?random=3",
    title: "Your Success, Our Mission",
    text: "Join thousands of happy customers today.",
    button: "Contact Us",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.text}</p>
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-medium shadow-lg transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <button className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-red-600 rounded-full p-3 shadow-lg z-20">
        <ChevronLeft size={24} />
      </button>
      <button className="custom-next absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-green-600 rounded-full p-3 shadow-lg z-20">
        <ChevronRight size={24} />
      </button>

      {/* Custom Pagination Styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          @apply bg-red-300 w-3 h-3 rounded-full opacity-100;
        }
        .swiper-pagination-bullet-active {
          @apply bg-black-600 w-4 h-4;
        }
        .swiper-button-next,
        .swiper-button-prev {
          @apply bg-blue-400 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-green-600;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          @apply text-lg font-bold;
        }
      `}</style>
    </div>
  );
}
