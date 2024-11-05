import React from "react";
import CameraCard from "./CameraCard";
import SongsList from "./SongsList";

const MoodAi = () => {
  return (
    <>
      <div className=" text-white w-full p-4 flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">moodAi</h1>
          <h6 className="text-zinc-700">
            Listen to your favourite songs, by clicking{" "}
            <span className="font-semibold underline">recommended</span>
          </h6>
        </div>

        <div className="flex flex-row gap-8">
          <div className="w-2/5">
            <CameraCard />
          </div>
          <div className="w-3/5">
            <SongsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodAi;
