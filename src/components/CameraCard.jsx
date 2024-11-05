import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Search } from "lucide-react";
import { CameraContext } from "../context/cameraContext";
import Video from "./Video";
import { fetchSongsByGenre, searchSongs } from "@/spotify/spotifyData";
import { SongsListContext } from "@/context/songListContext";
import { GenreSongsListContext } from "@/context/genreSongList";

const CameraCard = () => {
  const { genre } = useContext(CameraContext);
  const [result, setResult] = useState("happy");
  const { genreList, setGenreList } = useContext(GenreSongsListContext);
  console.log(genreList);

  // useEffect(() => {
  //   setResult(genre);
  // }, [genre]);

  const fetchSongs = async () => {
    try {
      const data = await fetchSongsByGenre(result);
      setGenreList(data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  return (
    <>
      <Card className="bg-transparent border-none ">
        <CardHeader>
          <CardTitle className="text-zinc-700 font-bold">
            verifying expressions...
          </CardTitle>
          <CardDescription className="text-zinc-700 font-semibold">
            align your face with camera for better expirience.
          </CardDescription>
          <CardContent className="w-full h-72">
            <Video />
          </CardContent>
          <CardFooter className="">
            <div className="w-4/5 flex flex-row justify-between items-center">
              <div className="flex flex-col p-1 gap-1">
                <h6 className="text-zinc-700 font-semibold">
                  looks like your current mood is{" "}
                </h6>
                <h3 className="text-2xl text-zinc-500 font-bold">
                  {result || "happy"}
                </h3>
              </div>
              <div className="">
                <button className="text-zinc-600 hover:text-zinc-400 ">
                  <Search onClick={fetchSongs()} className="w-6 h-6" />
                </button>
              </div>
            </div>
          </CardFooter>
        </CardHeader>
      </Card>
    </>
  );
};

export default CameraCard;
