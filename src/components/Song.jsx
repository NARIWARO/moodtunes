import React, { useContext, useEffect } from "react";
import { SongsListContext } from "@/context/songListContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Play } from "lucide-react";

const Song = (props) => {
  const song = props.songs;
  return (
    <>
      <Card
        key={song.id} // Add a unique key for each Card
        className="bg-transparent border-none flex flex-row justify-between hover:bg-zinc-900 transition duration-150 ease-in-out"
      >
        <div className="flex flex-row gap-8 items-center">
          <CardContent className="w-[80px] h-42 relative p-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={song.album.images[0]?.url} // Update to the correct image URL
                alt="Song Cover"
                className="w-full h-full object-cover rounded"
              />
            </a>
          </CardContent>
          <div>
            <CardTitle className="text-white">{song.name}</CardTitle>
            <CardDescription className="text-zinc-400 font-semibold">
              {song.artists[0]?.name} {/* Display the artist's name */}
            </CardDescription>
          </div>
        </div>
        <CardFooter className="flex justify-center items-end">
          <button className="p-2 bg-green-500 rounded-full text-black">
            <Play />
          </button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Song;
