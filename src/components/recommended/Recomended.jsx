import React, { useContext, useEffect, useState } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import MusicCard from "./MusicCard";
import { searchSongs } from "@/spotify/spotifyData";
import { PlaybackContext } from "@/context/PlaybackContext";

const Recomended = () => {
  const { stopSong } = useContext(PlaybackContext);

  const [songs, setSongs] = useState([]);
  const [category, setCategory] = useState("english songs");
  useEffect(() => {
    const defaultSongs = async () => {
      try {
        const defaultSongList = await searchSongs(category);
        setSongs(defaultSongList);
      } catch (error) {
        console.error("Error fetching default songs:", error);
      }
    };
    stopSong();
    defaultSongs();
  }, [category]);
  return (
    <>
      <div className=" text-white w-full p-4 flex flex-col gap-10 justify-center">
        <div className="flex flex-row justify-between ">
          <h1 className="text-3xl font-semibold">Favourite Songs</h1>
          <h6 className="text-zinc-700">
            Listen songs based on your mood, by clicking{" "}
            <span className="font-semibold underline">moodAi</span>
          </h6>
        </div>
        <div className="">
          <Select onValueChange={setCategory} defaultValue={category}>
            <SelectTrigger className="w-[180px] bg-black border-zinc-700 text-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-none text-white">
              <SelectItem value="new haryanvi">Haryanvi</SelectItem>
              <SelectItem value="punjabi">Punjabi</SelectItem>
              <SelectItem value="old hindi songs">Old</SelectItem>
              <SelectItem value="english songs">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border-none px-8">
          <div className="flex w-max space-x-4 p-4 pb-6 gap-3">
            {songs.map((song) => (
              <MusicCard key={song.id} song={song} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="bg-none px-9" />
        </ScrollArea>
      </div>
    </>
  );
};

export default Recomended;
