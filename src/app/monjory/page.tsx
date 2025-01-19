import Image from "next/image";

import book from "@/src/assets/book.jpg";
import book1 from "@/src/assets/book1.jpg";
export default function Monjory() {
  return (
    <div className="py-6 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold">Geet Monjory</h1>
        <p className="mt-4 text-lg">
          The visionary behind this platform, blending passion, music, and words
          into timeless creations.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Meet Geet Monjory</h2>
          <p className="leading-relaxed">
            Geet Monjory, a celebrated author and music enthusiast, has
            redefined storytelling through books and melodies. With years of
            experience in crafting heart-touching stories and soul-stirring
            tunes, Geet Monjory has created a space where words and music come
            together to inspire generations.
          </p>
          <p className="mt-4 leading-relaxed">
            This platform is a tribute to creativity, where you can explore Geet
            Monjory’s works and join a vibrant community of music lovers and
            readers.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative group">
            <Image
              alt="Book Cover 1"
              className="rounded-lg h-96 w-2/3 md:h-full md:w-1/2 mx-auto shadow-lg transform group-hover:scale-105 transition-transform duration-300"
              height={200}
              src={book}
              width={300}
            />
          </div>
          <div className="relative group">
            <Image
              alt="Book Cover 2"
              className="rounded-lg h-96 w-2/3 md:h-full md:w-1/2 mx-auto shadow-lg transform group-hover:scale-105 transition-transform duration-300"
              height={200}
              src={book1}
              width={300}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Explore the Works of Geet Monjory
        </h3>
        <p>
          Dive into a world of captivating stories and enchanting melodies.
          Discover what makes Geet Monjory a legend in the realm of music and
          literature.
        </p>
      </div>
    </div>
  );
}
