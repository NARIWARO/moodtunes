import React, { useContext, useEffect } from "react";
import { ScrollArea } from "../ui/scroll-area";

import SongDrawer from "./SongsDrawer";
import { SongsListContext } from "@/context/songListContext";

const SearchedSongs = () => {
  const { songList } = useContext(SongsListContext);

  useEffect(() => {}, []);

  return (
    <>
      <div className=" h-full w-full m-auto flex  ">
        <div className="m-auto w-4/5 flex flex-col gap-4">
          <div className=""></div>
          <div className="w-3/4 bg-black">
            <ScrollArea className="h-96 overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-transparent">
              {songList.map((song) => (
                <SongDrawer key={song.id} song={song} /> // Pass the song object to Song component
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedSongs;
