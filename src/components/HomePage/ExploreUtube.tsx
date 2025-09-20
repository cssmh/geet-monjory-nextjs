/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
"use client";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaPlay,
  FaUsers,
  FaMusic,
  FaArrowRight,
} from "react-icons/fa";

export default function ExploreUtube() {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-pink-50/30 to-purple-50/50 dark:from-red-900/20 dark:via-pink-900/10 dark:to-purple-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-300/20 to-pink-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full mb-6">
              <FaYoutube className="text-red-600 dark:text-red-400 text-4xl animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Discover the Sound of Music
            </h1>
            <p className="text-xl mb-8 md:mb-16 md:w-[80%] mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
              Immerse yourself in soulful tunes and captivating melodies that
              inspire, heal, and bring joy to your heart.
            </p>
          </motion.div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 md:gap-16 container mx-auto px-4">
            {/* Content Card */}
            <motion.div
              className="w-full lg:w-1/3"
              initial={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <div className="relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 dark:border-gray-700/30 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-pink-500/5 to-purple-500/5" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FaUsers className="text-3xl text-red-500" />
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                      Join the Melody
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Whether you&apos;re an artist or a listener, Geet Monjory
                    welcomes you to a vibrant community. Let&apos;s create magic
                    together through the universal language of music.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-white/30 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                      <FaMusic className="text-2xl text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800 dark:text-white">
                        225+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Videos
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white/30 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                      <FaUsers className="text-2xl text-red-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800 dark:text-white">
                        1200+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribers
                      </div>
                    </div>
                  </div>

                  <motion.a
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 w-full justify-center"
                    href="https://www.youtube.com/@geetmonjory8955"
                    rel="noopener noreferrer"
                    target="_blank"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaYoutube className="text-xl" />
                    <span>Explore More</span>
                    <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-red-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>

            {/* Video Player */}
            <motion.div
              className="w-full lg:w-2/3"
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <div className="relative group">
                {/* Glassmorphism Frame */}
                <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />

                <div className="relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-gray-700/30 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden">
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className="absolute top-0 left-0 w-full h-full rounded-3xl"
                      frameBorder="0"
                      height="315"
                      src="https://www.youtube.com/embed/0ibCCxq6Zlc?si=nnkWzS7raXGl8qwF"
                      title="YouTube video player"
                      width="100%"
                    />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-20 h-20 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
