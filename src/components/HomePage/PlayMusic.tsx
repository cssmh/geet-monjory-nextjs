/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prettier/prettier */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

import Ripple from "../ui/ripple";
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
    <div className="flex flex-col-reverse md:flex-row gap-5 mt-6 mb-11">
      <div className="w-full md:w-1/2 shadow-md rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3">
          <h2 className="text-lg md:text-2xl font-semibold flex items-center justify-center gap-2">
            <FaMusic className="text-xl" />
            Music Player
          </h2>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white font-medium mb-2"
              htmlFor="music-select"
            >
              Select Music
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              id="music-select"
              style={{ outline: "none" }}
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
            <audio ref={audioRef} src={selectedMusic} />
          )}
        </div>
        <div className="px-3">
          <button
            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
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
      <div className="w-full px-1 md:px-0 md:w-1/2">
        <div className="relative flex h-40 md:h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <p className="z-10 whitespace-pre-wrap text-center text-lg tracking-tighter text-gradient font-semibold">
            Geet <br /> Monjory
          </p>
          <Ripple />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
