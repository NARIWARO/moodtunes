import React, { useContext } from "react";
import { Play, Pause } from "lucide-react";
import { PlaybackContext } from "../context/PlaybackContext";

const PlayPauseButton = ({ song }) => {
  const { isPlaying, currentTrack, togglePlayPause } =
    useContext(PlaybackContext);

  const isCurrentTrackPlaying = isPlaying && currentTrack?.id === song.id;

  return (
    <button
      onClick={() => togglePlayPause(song)}
      className="bg-green-500 text-black border-none w-10 h-10 flex justify-center items-center rounded-full 
      transition-transform duration-300 ease-in-out transform hover:scale-110"
    >
      {isCurrentTrackPlaying ? (
        <Pause className="w-6 h-6" /> // Pause icon if the song is currently playing
      ) : (
        <Play className="w-6 h-6" /> // Play icon if the song is paused or another song is playing
      )}
    </button>
  );
};

export default PlayPauseButton;
