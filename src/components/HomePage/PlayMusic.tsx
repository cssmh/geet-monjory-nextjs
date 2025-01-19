/* eslint-disable prettier/prettier */
"use client"
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */

import React, { useState, useRef } from "react";

export default function PlayMusic() {
  const [selectedMusic, setSelectedMusic] = useState("/ami_parina.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMusicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMusic = event.target.value;
    setSelectedMusic(newMusic);
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

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-500 text-white text-center py-4">
        <h2 className="text-xl font-semibold">Music Player</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <select
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedMusic}
            onChange={handleMusicChange}
          >
            <option value="/ami_parina.mp3">Ami Parina</option>
            <option value="/kotha_koiyo_na.mp3">Kotha Koiyo Na</option>
          </select>
          {error ? (
            <p className="text-red-500 text-center">
              Failed to load audio. Please try again.
            </p>
          ) : (
            <audio ref={audioRef} src={selectedMusic} />
          )}
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};
