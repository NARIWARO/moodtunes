import React, { useEffect, useState } from "react";
import Video from "./Video";
import Songs from "./Songs";
import { fetchSpotifyUserData } from "@/spotify/spotifyData";
import { Search } from "lucide-react";
import Nav from "./Nav";
import Section from "./Section";

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
    <div className="flex flex-col w-full h-screen">
      <Nav />
      <Section />
    </div>
  );
};

export default Dashboard;
