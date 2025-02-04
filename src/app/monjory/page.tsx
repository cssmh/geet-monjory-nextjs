/* eslint-disable prettier/prettier */
import Image from "next/image";

import book from "@/src/assets/book.jpg";
import book1 from "@/src/assets/book1.jpg";

export default function Monjory() {
  return (
    <div className="py-5 md:py-8 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#9333ea]">
          Geet Monjory
        </h1>
        <p className="mt-2 md:mt-4 text-lg text-gray-700 dark:text-gray-300">
          A visionary blending passion, music, and words into timeless
          creations.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2 md:mb-6">
            Meet Geet Monjory
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Geet Monjory, a celebrated author and music enthusiast, has
            redefined storytelling through books and melodies. With years of
            experience in crafting heart-touching stories and soul-stirring
            tunes, Geet Monjory has created a space where words and music come
            together to inspire generations.
          </p>
          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            This platform is a tribute to creativity, where you can explore Geet
            Monjory’s works and join a vibrant community of music lovers and
            readers.
          </p>
        </div>
        <div className="lg:w-1/2 flex gap-6 justify-center">
          <div className="relative group w-1/2">
            <Image
              alt="Book Cover 1"
              className="rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300"
              height={250}
              src={book}
              width={350}
            />
          </div>
          <div className="relative group w-1/2">
            <Image
              alt="Book Cover 2"
              className="rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300"
              height={250}
              src={book1}
              width={350}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Explore the Works of Geet Monjory
        </h3>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Dive into a world of captivating stories and enchanting melodies.
          Discover what makes Geet Monjory a legend in the realm of music and
          literature.
        </p>
      </div>
    </div>
  );
}
