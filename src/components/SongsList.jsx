import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Song from "./Song";

const SongsList = () => {
  return (
    <>
      <div className="">
        <h3 className="text-2xl font-bold text-zinc-400 mb-2">
          songs made for you
        </h3>
        <ScrollArea className="h-96 overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-transparent">
          <Song />
        </ScrollArea>
      </div>
    </>
  );
};

export default SongsList;
