import React, { useEffect, useState } from "react";
import Video from "./Video";
import Songs from "./Songs";
import { fetchSpotifyUserData } from "@/spotify/spotifyData";



const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Access token not found");
        return;
      }

      try {
        const data = await fetchSpotifyUserData(token);
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };
    getUserData();
  }, []);

  return (
    <div className="flex flex-row h-screen ">
      <div className="flex-grow basis-1/4 p-2 bg-[#000000]">
        <Video />

      </div>
      <div className="flex-grow basis-3/4  bg-gradient-to-t from-custom-dark-cyan via-black  to-custom-red   ">
        <Songs userData={userData} />
      </div>
    </div>
  );
};

export default Dashboard;
