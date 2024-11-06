import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { playSong } from "@/spotify/spotifyData";
import PlayPauseButton from "./PlayPauseButton";

const MusicCard = (props) => {
  const song = props.song;
  const { name, artists, album } = props.song;
  return (
    <div className="">
      <Card className="w-[160px] max-h-min bg-black hover:bg-zinc-800 border-none flex flex-col items-start">
        <CardContent class="w-full h-42 relative p-2">
          <img
            src={album.images[0].url}
            class="w-full h-full object-cover rounded"
          />
        </CardContent>
        <CardFooter className="text-zinc-400 flex flex-row items-start  justify-between p-2 w-full">
          <div className="">
            <h5 className="font-bold">{name.split(" ")[0]}</h5>
            <h6 className="font-semibold">{artists[0].name}</h6>
          </div>
          <div className="text-zinc-400 flex flex-col items-start max-w-full h-full gap-3 ">
            <PlayPauseButton song={song} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MusicCard;
