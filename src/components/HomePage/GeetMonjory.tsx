/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

import singer from "@/src/assets/ath.jpg";
import monjory from "@/src/assets/monjory.jpg";
import newImage from "@/src/assets/2025.jpg";
import gm from "@/src/assets/gm-91.jpg";
import geetmonjory from "@/src/assets/geetmonjory.jpg";
import { title, subtitle } from "@/src/components/primitives";

export default function GeetMonjory() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative flex flex-col md:min-h-[87vh] md:flex-row items-center justify-between gap-1 md:gap-8 py-7 md:py-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 animate-pulse" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <motion.div
        className="text-center md:text-left max-w-xl flex flex-col justify-center md:h-[400px] z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariants}>
          <span
            className={`${title()} bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent`}
          >
            Welcome to&nbsp;
          </span>
        </motion.div>
        <motion.div variants={textVariants}>
          <span
            className={`${title({ color: "violet" })} bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent animate-shimmer`}
          >
            Geet Monjory&apos;s&nbsp;
          </span>
        </motion.div>
        <br />
        <motion.div variants={textVariants}>
          <span
            className={`${title()} bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent`}
          >
            Official Website – Explore new music, albums, and more!
          </span>
        </motion.div>
        <motion.div
          className={subtitle({ class: "mt-3" })}
          variants={textVariants}
        >
          <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
            Discover the latest tracks and stay up-to-date with Geet
            Monjory&apos;s musical journey.
          </span>
        </motion.div>

        {/* Floating Music Notes */}
        <div className="absolute -top-4 -right-4 text-violet-400/30 animate-bounce">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 3a1 1 0 0 0-1.196-.98l-10 2A1 1 0 0 0 6 5v6.114A4.369 4.369 0 0 0 5 11a4 4 0 1 0 4 4V5.114l8-1.6V9.114A4.369 4.369 0 0 0 16 9a4 4 0 1 0 4 4V3z" />
          </svg>
        </div>
        <div
          className="absolute -bottom-2 -left-2 text-blue-400/30 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 3a1 1 0 0 0-1.196-.98l-10 2A1 1 0 0 0 6 5v6.114A4.369 4.369 0 0 0 5 11a4 4 0 1 0 4 4V5.114l8-1.6V9.114A4.369 4.369 0 0 0 16 9a4 4 0 1 0 4 4V3z" />
          </svg>
        </div>
      </motion.div>
      <motion.div
        className="mt-4 md:mt-0 w-full md:w-1/2 flex justify-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-full h-[300px] md:h-[400px] relative">
          {/* Glassmorphism Container */}
          <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-2xl" />

          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            className="h-full rounded-3xl shadow-2xl overflow-hidden"
          >
            {[geetmonjory, singer, gm, monjory, newImage].map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden group">
                  <Image
                    src={img}
                    alt="Geet Monjory"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Animation */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-violet-400 rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-violet-400 rounded-tl-lg opacity-60" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-blue-400 rounded-br-lg opacity-60" />
        </div>
      </motion.div>
    </section>
  );
}
