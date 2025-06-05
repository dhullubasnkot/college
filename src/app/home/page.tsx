"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "Education is the best key success in life",
    description:
      "Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.",
    image: "/banner.jpg",
  },
  {
    title: "Achieve Excellence with Quality Learning",
    description:
      "Grow with us in a vibrant learning environment tailored for your academic success.",
    image: "/banner2.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-start  "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="ml-16 md:ml-32 max-w-2xl  bg-opacity-60 p-6 md:p-10 rounded-md text-white ">
                <p className="text-sm uppercase tracking-widest mb-2">
                  Welcome to Lumbini Enginnering
                </p>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="mb-6 text-sm md:text-base">{slide.description}</p>
                <div className="flex gap-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm">
                    Discover More →
                  </button>
                  <button className="border border-white px-6 py-2 rounded-md text-sm">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
