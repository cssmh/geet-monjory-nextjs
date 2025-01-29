/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prettier/prettier */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

import Music from "./Music.module.css";

const MusicPlayer = () => {
  const [selectedMusic, setSelectedMusic] = useState("/ami_parina.mp3");
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
    <div
      className="mb-10 max-w-3xl mx-auto shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div
        className={`${Music.mBtn} bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3`}
      >
        <h2 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
          <FaMusic className="text-xl" />
          Music Player
        </h2>
      </div>
      <div className="p-6 space-y-10">
        <div>
          <label
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            htmlFor="music-select"
          >
            Select Music
          </label>
          <select
            className={`${Music.mBtn} w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 focus:outline-none`}
            id="music-select"
            value={selectedMusic}
            onChange={handleMusicChange}
          >
            <option value="/ami_parina.mp3">Ami Parina</option>
            <option value="/kotha_koiyo_na.mp3">Kotha Koiyo Na</option>
          </select>
        </div>
        {error ? (
          <p className="text-red-500 text-center">
            Failed to load audio. Please try again.
          </p>
        ) : (
          <audio ref={audioRef} src={selectedMusic} className="w-full mt-2" />
        )}
        <button
          className={`w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300`}
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <FaPause className="text-lg" />
          ) : (
            <FaPlay className="text-lg" />
          )}
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
