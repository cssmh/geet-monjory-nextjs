/* eslint-disable prettier/prettier */
"use client"
/* eslint-disable react/jsx-sort-props */
import { motion } from "framer-motion";

import MeetUs from "@/src/components/HomePage/MeetUs";
import GeetMonjory from "@/src/components/HomePage/GeetMonjory";
import ExploreUtube from "@/src/components/HomePage/ExploreUtube";
import PlayMusic from "@/src/components/HomePage/PlayMusic";
import SocialStats from "@/src/components/HomePage/SocialStats";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden"
      animate="visible"
      variants={containerVariants}
    >
      <GeetMonjory />
      <SocialStats />
      <MeetUs />
      <PlayMusic />
      <ExploreUtube />
    </motion.div>
  );
}
