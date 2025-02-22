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
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

import geet from "@/src/assets/geet.jpg";

import Music from "./Music.module.css";
const MusicPlayer = () => {
  const [selectedMusic, setSelectedMusic] = useState("/kotha_koiyo_na.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMusicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMusic = event.target.value;
    setSelectedMusic(newMusic);
    setError(false);
    setIsPlaying(false);
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

  if (!isMounted) return null;

  return (
    <div className="max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 my-10">
      <div
        className={`${Music.mBtn} bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3`}
      >
        <h2 className="text-md md:text-xl font-semibold flex items-center justify-center gap-2">
          <FaMusic className="text-xl" />
          Music Player
        </h2>
      </div>
      <div className="p-3 md:p-6 flex flex-col space-y-6">
        <div className="flex items-center justify-between space-x-4">
          <Image
            src={geet}
            alt="Music cover"
            width={90}
            height={50}
            className="w-16 h-12 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {selectedMusic === "/ami_parina.mp3"
                ? "Ami Parina"
                : "Kotha Koiyo Na"}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Artist Name
            </span>
          </div>
          <button
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <FaPause className="text-lg" />
            ) : (
              <FaPlay className="text-lg" />
            )}
          </button>
        </div>
        {/* Music Select Dropdown */}
        <div>
          <label
            htmlFor="music-select"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Select Music
          </label>
          <select
            id="music-select"
            className={`${Music.mBtn} w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 focus:outline-none`}
            value={selectedMusic}
            onChange={handleMusicChange}
          >
            <option value="/kotha_koiyo_na.mp3">Kotha Koiyo Na</option>
            <option value="/ami_parina.mp3">Ami Parina</option>
          </select>
        </div>
        {error ? (
          <p className="text-red-500 text-center">
            Failed to load audio. Please try again.
          </p>
        ) : (
          <audio ref={audioRef} src={selectedMusic} className="w-full mt-2" />
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
