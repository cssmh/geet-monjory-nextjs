/* eslint-disable prettier/prettier */
import Link from "next/link";
import { FaMusic, FaHeart, FaUsers } from "react-icons/fa";
export default function AboutPage() {
  return (
    <div className="py-5 md:py-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header Section */}
        <div className="text-center mb-5 md:mb-12">
          <h2 className="text-2xl text-[#9333ea] md:text-3xl font-bold leading-tight mb-2 md:mb-4">
            About Geet Monjory
          </h2>
          <p className="md:text-lg text-black dark:text-gray-300">
            A journey of soulful music and heartfelt melodies.
          </p>
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12">
          {/* Who We Are Section */}
          <div className="dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaMusic className="text-2xl md:text-3xl text-black dark:text-violet-600 mr-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
                Who We Are
              </h3>
            </div>
            <p className="text-black dark:text-gray-300 leading-relaxed">
              Geet Monjory is a platform where music transcends boundaries. With
              a rich collection of original compositions and collaborations, we
              aim to connect with music enthusiasts worldwide. Our songs are
              crafted to evoke emotions, tell stories, and create unforgettable
              memories.
            </p>
          </div>
          {/* Our Mission Section */}
          <div className="dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaHeart className="text-2xl md:text-3xl text-black dark:text-violet-600 mr-4" />
              <h3 className="text-xl md:text-2xl text-black dark:text-white font-semibold">
                Our Mission
              </h3>
            </div>
            <p className="text-black dark:text-gray-300 leading-relaxed">
              To empower artists and listeners by creating a space where
              creativity and passion converge. At Geet Monjory, we strive to
              make music accessible, enjoyable, and inspiring for all.
            </p>
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="mt-7 md:mt-12 text-center">
          <div className="flex justify-center mb-6">
            <FaUsers className="text-3xl md:text-4xl text-violet-600" />
          </div>
          <h3 className="text-xl md:text-2xl text-black dark:text-white font-semibold mb-2 md:mb-4">
            Join the Melody
          </h3>
          <p className="text-black dark:text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
            Whether you&apos;re a musician looking to share your work or a fan
            seeking musical inspiration, Geet Monjory welcomes you to a vibrant
            community. Let&apos;s create magic together through the universal
            language of music.
          </p>
          <div className="my-6">
            <Link
              className="px-8 py-3 bg-violet-600 ext-white hover:bg-violet-700 font-medium rounded-lg transition ease-in-out duration-300"
              href="https://www.youtube.com/@geetmonjory8955"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
