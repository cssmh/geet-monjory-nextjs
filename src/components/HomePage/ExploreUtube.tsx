/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
"use client";

import { motion } from "framer-motion";
export default function ExploreUtube() {
  return (
    <div className="my-8 md:my-16 px-3 text-center">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
          Discover the Sound of Music
        </h1>
        <p className="text-md mb-6 md:mb-12 md:w-[70%] mx-auto">
          Immerse yourself in soulful tunes and captivating melodies that
          inspire, heal, and bring joy.
        </p>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 md:gap-12">
          <div className="w-full lg:w-1/3 rounded-lg shadow-lg p-5">
            <h2 className="text-2xl font-semibold text-center mb-3">
              Join the Melody
            </h2>
            <p className="text-sm text-center mb-4">
              Whether you&apos;re an artist or a listener, Geet Monjory welcomes
              you to a vibrant community. Let&apos;s create magic together
              through the universal language of music.
            </p>
            <div className="flex justify-center">
              <a
                className="px-8 py-3 bg-violet-600 text-white hover:bg-violet-700 font-medium rounded-lg transition ease-in-out duration-300"
                href="https://www.youtube.com/@geetmonjory8955"
              >
                Explore More
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="relative pb-[56.25%] h-0 overflow-hidden border rounded-lg shadow-lg">
              <iframe
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                height="100%"
                src="https://www.youtube.com/embed/7GeUVrDM-oY"
                title="YouTube video player"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
