import React, { useContext, useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import Song from "./Song";
import {
  fetchSongsByGenre,
  searchSongs,
  playSong,
  pauseSong,
} from "@/spotify/spotifyData";
import { CameraContext } from "@/context/cameraContext";
import { GenreSongsListContext } from "@/context/genreSongList";

const GenreSongs = (props) => {
  const [currentGenre, setCurrentGenre] = useState("");
  const { genreList } = useContext(GenreSongsListContext);
  const genre = useContext(CameraContext);

  useEffect(() => {
    setCurrentGenre(genre);
  }, [currentGenre]);

  const handleGenreFetch = async (genre) => {
    const fetchedSongs = await fetchSongsByGenre(currentGenre);
    console.log(currentGenre);
    setSongs(fetchedSongs);
  };

  return (
    <>
      <div className=" ">
        <div className="">
          <div className="">
            <h3 className="text-2xl font-bold text-zinc-400 mb-6 ">
              Songs based on your genre.
            </h3>
          </div>
          <div className="">
            <ScrollArea className="h-96  overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-transparent">
              {genreList.map((csong) => (
                <Song key={csong.id} songs={csong} /> // Pass the song object to Song component
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default GenreSongs;
