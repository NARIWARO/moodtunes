import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import MusicCard from "./MusicCard";
import ArtistCard from "./ArtistCard";

const Recomended = () => {
  return (
    <>
      <div className=" text-white w-full p-4 flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">Recomended Songs</h1>
          <h6 className="text-zinc-700">
            Listen songs based on your mood, using{" "}
            <span className="font-semibold underline">moodAi</span>
          </h6>
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border-none px-8">
          <div className="flex w-max space-x-4 p-4 pb-6 gap-3">
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </div>
          <ScrollBar orientation="horizontal" className="bg-none px-9" />
        </ScrollArea>

        <div className="mt-1">
          <h1 className="text-3xl font-semibold">Artists you may like</h1>
          <div className="w-full  flex flex-row gap-16 px-4 justify-start">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recomended;
