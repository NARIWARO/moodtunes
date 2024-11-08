import React, { useContext } from "react";
import { Play, Pause } from "lucide-react";
import { PlaybackContext } from "@/context/PlaybackContext";

const PlayPauseButton = ({ song }) => {
  const { isPlaying, currentTrack, togglePlayPause } =
    useContext(PlaybackContext);

  const isCurrentTrackPlaying = isPlaying && currentTrack?.id === song.id;

  return song.preview_url ? (
    <button
      onClick={() => togglePlayPause(song)}
      className="bg-green-500 text-black border-none w-8 h-8 flex justify-center items-center rounded-full hover:bg-green-600 hover:scale-110 transition ease-in-out duration-200"
    >
      {isCurrentTrackPlaying ? (
        <Pause className="w-6 h-6" />
      ) : (
        <Play className="w-6 h-6" />
      )}
    </button>
  ) : (
    <button className="bg-zinc-700 text-zinc-400 w-8 h-8 flex justify-center items-center rounded-[50%] cursor-not-allowed">
      <Play className="w-6 h-6" />
    </button>
  );
};

export default PlayPauseButton;
