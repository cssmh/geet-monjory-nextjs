/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
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
  {
    image: rev6,
    name: "Shilpi Sardar, Hiru Shekh, Sheuly Akter, Tanjim Raj",
    rating: 4,
  },
];

export default function ListenerReviews() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-blue-900/20" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="mx-auto container px-2 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-6">
            <FaQuoteLeft className="text-purple-600 dark:text-purple-400 text-2xl animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Loved By Listeners
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hear what fans are saying across all platforms about our latest
            releases and musical journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="relative group">
          {/* Enhanced Navigation Buttons with Glow Effect */}
          <motion.button
            className="swiper-button-prev absolute z-20 top-1/2 -translate-y-1/2 -left-6 md:-left-12
             flex items-center justify-center w-14 h-14 rounded-full 
             bg-white/90 dark:bg-gray-800/90 text-purple-600 dark:text-purple-400 
             shadow-2xl hover:shadow-purple-500/25 hover:bg-white dark:hover:bg-gray-700
             transition-all duration-300 border-2 border-purple-200/50 dark:border-purple-700/50
             group-hover:opacity-100 opacity-70 md:opacity-100 backdrop-blur-sm
             hover:scale-110 hover:rotate-12 animate-glow"
            whileHover={{ scale: 1.1, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous"
          >
            <IoIosArrowBack size={24} className="ml-1" />
          </motion.button>

          <motion.button
            className="swiper-button-next absolute z-20 top-1/2 -translate-y-1/2 -right-6 md:-right-12
             flex items-center justify-center w-14 h-14 rounded-full 
             bg-white/90 dark:bg-gray-800/90 text-purple-600 dark:text-purple-400 
             shadow-2xl hover:shadow-purple-500/25 hover:bg-white dark:hover:bg-gray-700
             transition-all duration-300 border-2 border-purple-200/50 dark:border-purple-700/50
             group-hover:opacity-100 opacity-70 md:opacity-100 backdrop-blur-sm
             hover:scale-110 hover:-rotate-12 animate-glow"
            whileHover={{ scale: 1.1, rotate: -12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next"
          >
            <IoIosArrowForward size={24} className="mr-1" />
          </motion.button>

          {/* Enhanced Swiper Carousel */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2.5, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="px-4 py-8"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col border border-purple-100/50 dark:border-purple-800/30"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  {/* Quote Icon */}
                  <div className="absolute top-4 left-6 text-purple-400/30 group-hover:text-purple-500/50 transition-colors duration-300 z-10">
                    <FaQuoteLeft size={24} />
                  </div>

                  {/* Review Screenshot */}
                  <div className="relative w-full aspect-[5/3] bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={review.image}
                      alt={`${review.name}'s review`}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                      priority={index < 3}
                    />

                    {/* Overlay with Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Review Meta with Enhanced Design */}
                  <div className="p-6 flex-grow flex flex-col relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                        {review.name}
                      </h3>
                    </div>

                    {/* Enhanced Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <svg
                            className={`w-5 h-5 transition-all duration-300 ${
                              i < review.rating
                                ? "text-yellow-400 drop-shadow-lg"
                                : "text-gray-300 dark:text-gray-600"
                            } group-hover:scale-110`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </motion.div>
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
                        {review.rating}/5
                      </span>
                    </div>

                    {/* Platform Badge */}
                    <div className="mt-auto">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-700/30">
                        ⭐ Verified Review
                      </span>
                    </div>
                  </div>

                  {/* Floating Animation Elements */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-purple-400/40 rounded-full animate-ping" />
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
