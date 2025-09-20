/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaMusic, FaHeart, FaDownload } from "react-icons/fa";

import geet from "@/src/assets/geet.jpg";
const MusicPlayer = () => {
  const [selectedMusic, setSelectedMusic] = useState("/kotha_koiyo_na.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateDuration);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, [selectedMusic]);

  const handleMusicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMusic = event.target.value;
    setSelectedMusic(newMusic);
    setError(false);
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => setError(true));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = (parseFloat(e.target.value) / 100) * duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!isMounted) return null;

  return (
    <div className="relative py-12 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-orange-50/30 to-yellow-50/50 dark:from-rose-900/20 dark:via-orange-900/10 dark:to-yellow-900/20" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-300/20 to-orange-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-gray-700/30 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 text-white text-center py-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <motion.h2
              className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 relative z-10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaMusic className="text-3xl animate-bounce" />
              Music Player
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-6 bg-white/70 rounded-full animate-wave"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </motion.h2>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Main Player Section */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Album Art */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={geet}
                    alt="Music cover"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FaPlay className="text-white text-xl ml-1" />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>

              {/* Track Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {selectedMusic === "/ami_parina.mp3"
                    ? "Ami Parina"
                    : "Kotha Koiyo Na"}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Geet Monjory
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <motion.button
                    onClick={handlePlayPause}
                    className="w-14 h-14 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? (
                      <FaPause className="text-xl" />
                    ) : (
                      <FaPlay className="text-xl ml-1" />
                    )}
                  </motion.button>

                  <motion.button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isLiked
                        ? "bg-red-500 text-white shadow-lg"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaHeart className={isLiked ? "animate-pulse" : ""} />
                  </motion.button>

                  <motion.button
                    className="w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaDownload />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="relative">
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-orange-500 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Music Selection */}
            <div className="space-y-4">
              <label
                htmlFor="music-select"
                className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                Choose Your Track
              </label>
              <select
                id="music-select"
                value={selectedMusic}
                onChange={handleMusicChange}
                className="w-full p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
              >
                <option value="/kotha_koiyo_na.mp3">🎵 Kotha Koiyo Na</option>
                <option value="/ami_parina.mp3">🎵 Ami Parina</option>
              </select>
            </div>

            {error && (
              <motion.p
                className="text-red-500 text-center bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl border border-red-200 dark:border-red-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to load audio. Please try again.
              </motion.p>
            )}

            <audio ref={audioRef} src={selectedMusic} className="hidden" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MusicPlayer;
