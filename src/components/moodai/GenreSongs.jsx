import React, { useContext, useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Song from "./Song";
import { GenreSongsListContext } from "@/context/genreSongList";
import { CameraContext } from "@/context/cameraContext";

const GenreSongs = () => {
  const { genreList } = useContext(GenreSongsListContext);
  const { currentMood } = useContext(CameraContext);
  return (
    <>
      <div className=" ">
        <div className="">
          <div className="">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-zinc-400  ">
                your current mood is {currentMood}.
              </h3>
              <h6 className="text-zinc-700">
                songs will be updated when you click on the search button, below
                camera.
              </h6>
            </div>
          </div>
          <div className="">
            <ScrollArea className="h-96 overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-transparent">
              {genreList.length === 0 ? (
                <div className=" w-full h-full flex flex-col justify-center items-center gap-3">
                  <h1 className="text-zinc-700 text-7xl font-bold">sorry!</h1>
                  <div className="">
                    <h3 className="text-zinc-700 font-semibold">
                      No song found for this{" "}
                      <span className="font-bold"> mood.</span> Keep listening
                      for other <span className="font-bold"> mood.</span>
                    </h3>
                  </div>
                </div>
              ) : (
                genreList.map((song) => (
                  <Song key={song.id} songs={song} /> // Pass the song object to Song component
                ))
              )}
            </ScrollArea>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default GenreSongs;
