/* eslint-disable padding-line-between-statements */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prettier/prettier */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

const MusicPlayer = () => {
  const [selectedMusic, setSelectedMusic] = useState("/ami_parina.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Prevent server-side rendering mismatches
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
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-4">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <FaMusic className="text-xl" />
          Music Player
        </h2>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="music-select"
          >
            Select Music
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <audio ref={audioRef} src={selectedMusic} />
        )}
      </div>
      <div className="px-6 pb-6">
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
  );
};

export default MusicPlayer;
