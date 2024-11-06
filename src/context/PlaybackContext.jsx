import React, { createContext, useState } from "react";

export const PlaybackContext = createContext();

export const PlaybackProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState(null);

  const playSong = (track) => {
    // Stop any currently playing audio
    if (currentlyPlayingAudio) {
      currentlyPlayingAudio.pause();
    }

    const newAudio = new Audio(track.preview_url);
    newAudio.play();
    setCurrentlyPlayingAudio(newAudio);
    setIsPlaying(true);
    setCurrentTrack(track);
  };

  const pauseSong = () => {
    if (currentlyPlayingAudio) {
      currentlyPlayingAudio.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = (track) => {
    if (isPlaying && currentTrack?.id === track.id) {
      // If the current song is already playing, pause it
      pauseSong();
      setCurrentTrack(null);
    } else {
      // If another song is playing or nothing is playing, play this song
      playSong(track);
    }
  };

  return (
    <PlaybackContext.Provider
      value={{ isPlaying, currentTrack, togglePlayPause }}
    >
      {children}
    </PlaybackContext.Provider>
  );
};
