// src/components/PlayPauseButton.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePlayPause } from "../redux/songSlice";
import { Pause, Play } from "lucide-react";

const PlayPauseButton = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.songs.isPlaying);

  const handlePlayPause = () => {
    dispatch(togglePlayPause());
  };

  return (
    <button onClick={handlePlayPause} className="p-2 bg-zinc-600 rounded-full">
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
};

export default PlayPauseButton;
