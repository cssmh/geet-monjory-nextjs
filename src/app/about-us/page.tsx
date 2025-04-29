/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */ 
"use client";
import Link from "next/link";
import { FaMusic, FaHeart, FaUsers, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-5 md:py-8 bg-gradient-to-b from-white to-violet-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3 md:mb-5 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-500">
            About Geet Monjory
          </h2>
          <p className="md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of soulful music and heartfelt melodies that touch the
            heart.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12 mb-6">
          {/* Who We Are Section */}
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-violet-500"
          >
            <div className="flex items-center mb-5">
              <div className="p-3 rounded-full bg-violet-100 dark:bg-gray-700 mr-4">
                <FaMusic className="text-xl md:text-2xl text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                Who We Are
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              Geet Monjory is a platform where music transcends boundaries. With
              a rich collection of original compositions and collaborations, we
              aim to connect with music enthusiasts worldwide. Our songs are
              crafted to evoke emotions, tell stories, and create unforgettable
              memories that resonate with every listener.
            </p>
          </motion.div>

          {/* Our Mission Section */}
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-violet-500"
          >
            <div className="flex items-center mb-5">
              <div className="p-3 rounded-full bg-violet-100 dark:bg-gray-700 mr-4">
                <FaHeart className="text-xl md:text-2xl text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              To empower artists and listeners by creating a space where
              creativity and passion converge. At Geet Monjory, we strive to
              make music accessible, enjoyable, and inspiring for all. We
              believe in the transformative power of music to connect souls
              across the globe.
            </p>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          variants={fadeIn}
          className="text-center bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-violet-100 dark:bg-gray-700">
              <FaUsers className="text-3xl md:text-4xl text-violet-600 dark:text-violet-400" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-3 md:mb-5">
            Join the Melody
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you`&apos;re a musician looking to share your work or a fan
            seeking musical inspiration, Geet Monjory welcomes you to a vibrant
            community. Let`&apos;s create magic together through the universal
            language of music.
          </p>
          <div className="my-6">
            <Link
              href="https://www.youtube.com/@geetmonjory8955"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-500 text-white hover:from-violet-700 hover:to-purple-600 font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaYoutube className="text-xl" />
              Explore on YouTube
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
