import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import Song from "./Song";

const SearchedSongs = (props) => {
  const songs = props.songs;

  return (
    <>
      <div className=" h-full w-full m-auto flex  justify-center items-center ">
        <div className="m-auto w-4/5 flex flex-col gap-4">
          <div className="">
            <h3 className="text-2xl font-bold text-zinc-400 mb-6 ">
              Listen to your favourite song.
            </h3>
          </div>
          <div className="w-3/4 bg-orange-50">
            <ScrollArea className="h-96 overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-transparent">
              {songs.map((song) => (
                <Song key={song.id} song={song} /> // Pass the song object to Song component
              ))}
            </ScrollArea>
          </div>
          {/* <div className="mt-6  flex justify-end ">
            <button
              onClick={() => navigate("/home")}
              className="text-black p-1  bg-white rounded "
            >
              {" "}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SearchedSongs;
