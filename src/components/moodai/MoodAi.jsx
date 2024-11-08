import React from "react";
import CameraCard from "./CameraCard";
import GenreSongs from "./GenreSongs";

const MoodAi = () => {
  return (
    <div className="text-white w-full p-4 flex flex-col overflow-hidden">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">moodAi</h1>
        <h6 className="text-zinc-700">
          Listen to your favourite songs, by clicking{" "}
          <span className="font-semibold underline">recommended</span>
        </h6>
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-2/5">
          <CameraCard />
        </div>

        <div className="w-3/5 flex-grow flex flex-col">
          <GenreSongs />
        </div>
      </div>
    </div>
  );
};

export default MoodAi;
