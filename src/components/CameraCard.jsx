import React, { useContext, useState } from "react";
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
import { fetchSongsByGenre } from "@/spotify/spotifyData";
import { GenreSongsListContext } from "@/context/genreSongList";

const CameraCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { genre, setGenre } = useContext(CameraContext);
  const { genreList, setGenreList } = useContext(GenreSongsListContext);

  // Fetch songs based on the current genre
  const fetchSongs = async () => {
    if (isLoading) return; // Prevent multiple API calls if already loading
    setIsLoading(true); // Set loading flag

    try {
      const data = await fetchSongsByGenre(genre);
      setGenreList(data); // Update genre list with fetched songs
      console.log(data);
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

  return (
    <Card className="bg-transparent border-none">
      <CardHeader>
        <CardTitle className="text-zinc-700 font-bold">
          verifying expressions...
        </CardTitle>
        <CardDescription className="text-zinc-700 font-semibold">
          align your face with camera for better experience.
        </CardDescription>
        <CardContent className="w-full h-72">
          <Video />
        </CardContent>
        <CardFooter>
          <div className="w-4/5 flex flex-row justify-between items-center">
            <div className="flex flex-col p-1 gap-1">
              <h6 className="text-zinc-700 font-semibold">
                looks like your current mood is{" "}
              </h6>
              <h3 className="text-2xl text-zinc-500 font-bold">
                {genre || "happy"}
              </h3>
            </div>
            <div>
              <button className="text-zinc-600 hover:text-zinc-400">
                <Search
                  onClick={() => {
                    updateGenre(genre); // Update genre
                    fetchSongs(); // Fetch songs for the updated genre
                  }}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default CameraCard;
