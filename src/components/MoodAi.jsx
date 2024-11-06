import React, { useContext } from "react";
import CameraCard from "./CameraCard";

import GenreSongs from "../components/GenreSongs";
// import { GenreSongsListContext } from "@/context/genreSongList";

const MoodAi = () => {
  // const { genreList } = useContext(GenreSongsListContext);

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
        <div className="flex flex-row gap-4">
          <div className="w-2/5 h-96">
            <CameraCard />
          </div>
          <div className="w-3/5">
            <>
              <div className=" h-full">
                <div className="  flex flex-col justify-center h-96 ">
                  <GenreSongs />
                </div>
              </div>
            </>
          </div>
        </div>

        {/* <div className="flex flex-row gap-8">
          <div className="w-2/5">
            <CameraCard />
          </div>
         <div className="w-3/5">
            <>
              <div className="bg-purple-50 h-full">
                {songList && songList.length > 0 ? (
                  <>
                    <div className="  flex flex-col justify-center h-96 ">
                      <GenreSongs songs={songList} />
                    </div>
                  </>
                ) : (
                  <>
                    <h1>loading..</h1>
                  </>
                )}
              </div>
            </>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MoodAi;
