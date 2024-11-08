import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Search } from "lucide-react";
import { CameraContext } from "../../context/cameraContext";
import Video from "./Video";
import { fetchSongsByGenre } from "@/spotify/spotifyData";
import { GenreSongsListContext } from "@/context/genreSongList";

const CameraCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { genre, setGenre, setCurrentMood } = useContext(CameraContext);
  const { setGenreList } = useContext(GenreSongsListContext);

  // Fetch songs based on the current genre
  const fetchSongs = async () => {
    if (isLoading) return; // Prevent multiple API calls if already loading
    setIsLoading(true); // Set loading flag

    try {
      const data = await fetchSongsByGenre(genre);
      await setGenreList(data); // Update genre list with fetched songs
    } catch (error) {
      console.error("Error fetching songs:", error);
    } finally {
      setIsLoading(false); // Reset loading flag
    }
  };

  // Update genre and fetch songs
  const updateGenre = (newGenre) => {
    setGenre(newGenre); // Update the genre in context
    fetchSongs(); // Fetch songs based on the updated genre
  };

  const updateMood = (mood) => {
    setCurrentMood(genre);
  };

  return (
    <Card className="bg-transparent border-none flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="text-zinc-700 font-bold">
          verifying expressions...
        </CardTitle>
        <CardDescription className="text-zinc-700 font-semibold">
          align your face with camera for better experience.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-72">
        <Video />
        <CardDescription className="text-zinc-700 font-semibold text-sm ml-4">
          click on the camera icon in video to turn on/off camera.
        </CardDescription>
      </CardContent>
      <CardFooter className="">
        <div className="w-3/5 flex flex-row justify-around items-end">
          <div className="flex flex-col p-1 gap-1">
            <h6 className="text-zinc-700 font-semibold text-lg">
              looks like your current mood is{" "}
            </h6>
            <h3 className="text-2xl text-zinc-500 font-bold">
              {genre || "happy"}
            </h3>
          </div>
          <div className="">
            <button className="text-zinc-600 hover:text-zinc-400">
              <Search
                onClick={() => {
                  updateGenre(genre); // Update genre
                  updateMood();
                }}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CameraCard;
