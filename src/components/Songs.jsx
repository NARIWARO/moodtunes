import { React, useState, useEffect } from "react";
import { Play, Pause, Search } from "lucide-react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  fetchSongsByGenre,
  searchSongs,
  playSong,
  pauseSong,
} from "@/spotify/spotifyData";

const Songs = (props) => {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const defaultSongs = async () => {
      const token = localStorage.getItem("token");
      const defaultSongList = await searchSongs(token, "faujan");
      setSongs(defaultSongList);
    };
    defaultSongs();
  }, []);

  const handleSearch = async () => {
    const token = localStorage.getItem("token");
    const fetchedSongs = await searchSongs(token, searchQuery);
    setSongs(fetchedSongs);
  };

  const handlePlay = (track) => {
    playSong(track);
  };

  const handlePause = () => {
    pauseSong();
  };

  // Check if userData is available
  if (!props.userData) {
    return <div>No user data available</div>; // Fallback message
  }
  // Assuming userData has a property 'display_name' for the example
  const { display_name, images } = props.userData; // Adjust based on your actual userData structure

  return (
    <>
      <section className="h-full overflow-hidden">
        <div className="w-full  p-2 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for songs..."
              className="bg-gray-200 rounded-lg mr-3 p-1"
            />
            <button
              onClick={handleSearch}
              className="max-w-max bg-white text-black px-2 py-1 rounded"
            >
              <Search />
            </button>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <p className="text-white">{display_name}</p>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>{display_name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <ScrollArea className="h-screen w-full rounded-md  bg-transparent">
          <div className="p-4">
            {/* <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4> */}
            {songs.map((song) => (
              <div
                key={song.id}
                className="p-2 border-b hover:bg-slate-600 shadow-md bg-transparent flex flex-row mb-1  justify-between"
              >
                <div className="">
                  <h3 className="text-md text-white font-bold">{song.name}</h3>
                  <div className="w-full flex flex-row gap-6 ">
                    <p className="text-gray-200 text-sm w-90">
                      Artist:{" "}
                      {song.artists.map((artist) => artist.name).join(", ")}
                    </p>
                    <p className="text-gray-300 text-sm">
                      Duration: {Math.floor(song.duration_ms / 60000)}:
                      {((song.duration_ms % 60000) / 1000)
                        .toFixed(0)
                        .padStart(2, "0")}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <button
                    onClick={() => handlePlay(song)}
                    className="px-2 py-1 rounded mr-2 border text-white"
                  >
                    <Play />
                  </button>
                  <button
                    onClick={handlePause}
                    className="px-2 py-1 rounded mr-2 border text-white"
                  >
                    <Pause />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>
    </>
  );
};

export default Songs;
