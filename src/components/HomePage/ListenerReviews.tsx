/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

import rev1 from "@/src/assets/reviews/1.png";
import rev2 from "@/src/assets/reviews/2.png";
import rev3 from "@/src/assets/reviews/3.png";
import rev4 from "@/src/assets/reviews/4.png";
import rev5 from "@/src/assets/reviews/5.png";
import rev6 from "@/src/assets/reviews/6.png";

const reviews = [
  { image: rev1, name: "Khubaed Siam & শিল্পকর্ম রাজন", rating: 5 },
  { image: rev2, name: "Hasan Mridul", rating: 5 },
  { image: rev3, name: "Momen Hossain", rating: 4 },
  { image: rev4, name: "Sabbir Ahmed", rating: 5 },
  { image: rev5, name: "মেঠোপথ", rating: 5 },
  { image: rev6, name: "Shilpi Sardar, Hiru Shekh, Sheuly Akter, Tanjim Raj", rating: 4 },
];

export default function ListenerReviews() {
  return (
    <section className="py-6 md:py-16">
      <div className="mx-auto max-w-7xl 2xl:max-w-[86%] px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Loved By Listeners
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear what fans are saying across all platforms about our latest
            releases
          </p>
        </div>
        <div className="relative group">
          {/* Enhanced Navigation Buttons */}
          <button
            className="swiper-button-prev absolute z-10 top-1/2 -translate-y-1/2 -left-8 
             flex items-center justify-center w-12 h-12 rounded-full 
             bg-white dark:bg-gray-800 text-gray-800 dark:text-white 
             shadow-lg hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700
             transition-all duration-300 border border-gray-200 dark:border-gray-700
             group-hover:opacity-100 opacity-0 md:opacity-100"
            aria-label="Previous"
          >
            <IoIosArrowBack size={20} className="ml-1" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="swiper-button-next absolute z-10 top-1/2 -translate-y-1/2 -right-8 
             flex items-center justify-center w-12 h-12 rounded-full 
             bg-white dark:bg-gray-800 text-gray-800 dark:text-white 
             shadow-lg hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700
             transition-all duration-300 border border-gray-200 dark:border-gray-700
             group-hover:opacity-100 opacity-0 md:opacity-100"
            aria-label="Next"
          >
            <IoIosArrowForward size={20} className="mr-1" />
            <span className="sr-only">Next</span>
          </button>
          {/* Swiper Carousel with Enhanced Cards */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={17}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="px-4"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  {/* Review Screenshot */}
                  <div className="relative w-full aspect-[5/3] bg-white dark:bg-gray-800 flex items-center justify-center">
                    <Image
                      src={review.image}
                      alt={`${review.name}'s review`}
                      className="w-full h-auto object-contain"
                      priority={index < 3}
                    />
                  </div>
                  {/* Review Meta */}
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                        {review.name}
                      </h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
