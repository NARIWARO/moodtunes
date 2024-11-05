import { Power, Search } from "lucide-react";
import { React, useContext, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SpotifyContext } from "../context/userDataContext";
import { SongsListContext } from "@/context/songListContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fetchSpotifyUserData, searchSongs } from "@/spotify/spotifyData";

const Nav = () => {
  const { userData, setUserData } = useContext(SpotifyContext);
  const { songList, setSongList } = useContext(SongsListContext);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchSongs = async () => {
    try {
      const data = await searchSongs(searchQuery);
      setSongList(data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchSpotifyUserData();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [setUserData]);

  const handleLogout = () => {
    // Remove the access token from local storage
    localStorage.removeItem("token");
    // // Optionally, you can redirect the user to the login page
    window.location.href = "/"; // Adjust the path as needed
  };

  return (
    <div>
      <nav className="h-16 w-full bg-black flex flex-row justify-between items-center p-4 border-b border-zinc-800">
        {/* logo */}
        <div className="text-white text-2xl font-bold">
          <h3>moodtunes</h3>
        </div>
        {/* search bar */}
        <div className="flex flex-row items-center gap-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for songs..."
            className="border-none px-3 py-1 rounded-full bg-zinc-700 text-white"
          />
          <button
            className="text-zinc-600 hover:text-zinc-400"
            onClick={() => navigate("/searched")}
          >
            <Search onClick={fetchSongs} />
          </button>
        </div>

        {/* profile */}
        <div className="flex flex-row gap-3 items-center ">
          <h3 className="text-white font-semibold">{userData.display_name}</h3>
          <div className="flex flex-row gap-6">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-green-500 font-bold">
                {userData.display_name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="text-zinc-700 flex items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Power onClick={handleLogout} />
                  </TooltipTrigger>
                  <TooltipContent className="bg-zinc-700 border-none">
                    <p className="text-zinc-400">logout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
