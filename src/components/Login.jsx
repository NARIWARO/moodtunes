import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { loginEndpoint } from "@/spotify/spotifyLogin";

const Login = () => {
  return (
    <>
      <div className="h-screen w-full p-2 flex flex-col justify-center items-center bg-black">
        <div className="text-white">
          <h1 className=" text-9xl font-bold">moodtunes</h1>
          <h6 className="text-center m-2 font-semibold">
            looks like you have logged out.
          </h6>
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png"
            width="10%"
            alt="spotifyLogo"
          />
          <a
            href={loginEndpoint}
            className="m-4 px-6 py-1 text-black font-bold bg-white rounded-sm"
          >
            login
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
