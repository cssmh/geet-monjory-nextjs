/* eslint-disable prettier/prettier */
"use client";
import { motion } from "framer-motion";

import NumberTicker from "../ui/number-ticker";

export default function SocialStats() {
  const stats = [
    {
      title: "Facebook",
      value: 55000,
      label: "Followers",
      icon: "📘",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      title: "YouTube",
      value: 1200,
      label: "Subscribers",
      icon: "📺",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      hasPlus: true,
    },
    {
      title: "YouTube Videos",
      value: 225,
      label: "Total Videos",
      icon: "🎬",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      title: "Total Members",
      value: 15,
      label: "Community Members",
      icon: "👥",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      hasPlus: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-8 md:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 to-blue-50/50 dark:from-violet-900/10 dark:to-blue-900/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/30 dark:bg-violet-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 border-t rounded-lg backdrop-blur-sm bg-white/40 dark:bg-gray-900/40">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent"
            variants={cardVariants}
          >
            Social Media Stats
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto mt-4 rounded-full" />
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {stats.map((stat, _index) => (
              <motion.div
                key={stat.title}
                className={`group relative p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl ${stat.bgColor} ${stat.borderColor} border-2 backdrop-blur-sm`}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon with Animation */}
                <div className="text-4xl mb-4 animate-bounce">{stat.icon}</div>

                {/* Title */}
                <h2
                  className={`text-xl font-bold text-center mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.title}
                </h2>

                {/* Number with Enhanced Animation */}
                <div className="text-4xl md:text-5xl font-bold mb-4 text-center relative">
                  <div className="flex items-center justify-center">
                    <NumberTicker
                      className="text-gray-800 dark:text-white"
                      value={stat.value}
                    />
                    {stat.hasPlus && (
                      <span
                        className={`ml-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-pulse`}
                      >
                        +
                      </span>
                    )}
                  </div>

                  {/* Animated underline */}
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${stat.color} rounded-full group-hover:w-full transition-all duration-500`}
                  />
                </div>

                {/* Label */}
                <p className="text-lg text-center font-medium text-gray-700 dark:text-gray-300">
                  {stat.label}
                </p>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-current opacity-30 rounded-full animate-ping" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-current opacity-40 rounded-full animate-pulse" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
