/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "@/src/assets/laf.jpg";
import img2 from "@/src/assets/band.jpg";
import img3 from "@/src/assets/artist2.jpg";
import img4 from "@/src/assets/bang2.jpg";

const albums = [
  { image: img1, name: "লাফ!" },
  { image: img2, name: "আনন্দ মোহন ✌️" },
  { image: img3, name: "কালের সুতোয় জড়িয়ে-পেঁচিয়ে" },
  { image: img4, name: "নাছোড়বান্দা! ♥️" },
];

export default function MeetUs() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-5">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Meet Our Creative Team
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            The talented individuals behind Geet Monjory&#39;s music, and the
            inspiring places that shape our creative process.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {albums.map((album, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-md shadow-xl"
            >
              <div className="aspect-[10/5] w-full md:aspect-square">
                <Image
                  alt={`Album ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                  src={album.image}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-2">
                <h3 className="text-base font-semibold text-white">
                  {album.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
