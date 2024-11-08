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
import { Play } from "lucide-react";
import { playSong } from "@/spotify/spotifyData";
import PlayPauseButton from "../stuff/PlayPauseButton";

const SongDrawer = (props) => {
  const song = props.song;
  const { name, artists, album } = props.song;

  const handlePlay = (track) => {
    playSong(track);
  };

  return (
    <>
      <Card className=" bg-transparent border-none flex flex-row justify-between hover:bg-zinc-900 transition duration-150 ease-in-out">
        <div className="flex flex-row gap-8 items-center">
          <CardContent className="w-[80px] h-42 relative p-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={album.images[0].url} // Update to the correct image URL
                alt="Song Cover"
                className="w-full h-full object-cover rounded"
              />
            </a>
          </CardContent>
          <div>
            <CardTitle className="text-zinc-400 text-lg">{name}</CardTitle>
            <CardDescription className="text-zinc-400 font-semibold">
              {artists[0].name} {/* Display the artist's name */}
            </CardDescription>
          </div>
        </div>
        <CardFooter className="flex justify-center items-end">
          <PlayPauseButton song={song} />
        </CardFooter>
      </Card>
    </>
  );
};

export default SongDrawer;
