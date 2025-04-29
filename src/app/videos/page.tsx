/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import geet from "@/src/assets/banner.jpeg";

export default function Videos() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const pulse = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <Image
            src={geet}
            className="rounded-xl shadow-2xl w-full h-auto"
            width={1200}
            height={675}
            alt="Banner image for the videos section"
            placeholder="blur"
            priority
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <motion.div
            variants={pulse}
            initial="initial"
            animate="animate"
            className="inline-block bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg border-2 border-dashed border-violet-300 dark:border-gray-600"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              Exciting Content Coming Soon!
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;re working hard to bring you amazing music videos and
              performances. Stay tuned for updates!
            </p>
            <div className="mt-8 h-2 w-24 bg-gradient-to-r from-violet-500 to-purple-400 rounded-full mx-auto"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
