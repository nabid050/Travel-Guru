import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Explore The World",
    subtitle: "Discover amazing destinations with Travel Guru",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    title: "Book Flights Instantly",
    subtitle: "Best fares with secure booking",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Luxury Travel Experience",
    subtitle: "Hotels, tours and visas in one place",
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          Keyboard,
        ]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="rounded-none"
      >
        {Banner.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]">
              
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1200px] mx-auto px-4 w-full">
                  <div className="max-w-3xl text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200">
                      {slide.subtitle}
                    </p>

                    <button className="btn btn-primary mt-8 bg-[#122B8F] border-none hover:bg-[#0f2377]">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}