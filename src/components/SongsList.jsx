import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Song from "./moodai/Song";
const SongsList = (props) => {
  const songs = props.songs;
  return (
    <>
      <div className="">
        <h3 className="text-2xl font-bold text-zinc-400 mb-6 ">
          Listen to your favourite song.
        </h3>
        <ScrollArea className="h-96 overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-transparent">
          {songs.map((song) => (
            <Song key={song.id} song={song} /> // Pass the song object to Song component
          ))}
        </ScrollArea>
      </div>
    </>
  );
};

export default SongsList;
