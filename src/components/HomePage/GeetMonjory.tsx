/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import singer from "@/src/assets/ath.jpg";
import monjory from "@/src/assets/monjory.jpg";
import newImage from "@/src/assets/2025.jpg";
import gm from "@/src/assets/gm-91.jpg";
import geetmonjory from "@/src/assets/geetmonjory.jpg";
import { title, subtitle } from "@/src/components/primitives";

export default function GeetMonjory() {
  return (
    <section className="flex flex-col md:min-h-[87vh] md:flex-row items-center justify-between gap-1 md:gap-8 py-7 md:py-10">
      <div className="text-center md:text-left max-w-xl flex flex-col justify-center md:h-[400px]">
        <span className={title()}>Welcome to&nbsp;</span>
        <span className={title({ color: "violet" })}>
          Geet Monjory&apos;s&nbsp;
        </span>
        <br />
        <span className={title()}>
          Official Website – Explore new music, albums, and more!
        </span>
        <div className={subtitle({ class: "mt-3" })}>
          Discover the latest tracks and stay up-to-date with Geet
          Monjory&apos;s musical journey.
        </div>
      </div>
      <div className="mt-4 md:mt-0 w-full md:w-1/2 flex justify-center">
        <div className="w-full h-[300px] md:h-[400px]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            className="h-full rounded-md shadow-lg"
          >
            {[geetmonjory, singer, gm, monjory, newImage].map(
              (img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-[300px] md:h-[400px] relative rounded-md overflow-hidden">
                    <Image
                      src={img}
                      alt="Singer"
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
