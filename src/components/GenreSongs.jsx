import React, { useContext, useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import Song from "./Song";
import { GenreSongsListContext } from "@/context/genreSongList";

const GenreSongs = () => {
  const { genreList } = useContext(GenreSongsListContext);
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
              {genreList.map((song) => (
                <Song key={song.id} songs={song} /> // Pass the song object to Song component
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default GenreSongs;
