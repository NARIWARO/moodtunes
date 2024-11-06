import React, { useContext } from "react";
import { SongsListContext } from "@/context/songListContext";
import SearchedSongs from "./SearchedSongs";
import Recomended from "./Recomended";
import MoodAi from "./MoodAi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import GenreSongs from "./GenreSongs";
import { GenreSongsListContext } from "@/context/genreSongList";
const Section = () => {
  const { songList } = useContext(SongsListContext);
  const { genreSongs } = useContext(GenreSongsListContext);
  return (
    <>
      <div className="max-h-screen overflow-y-auto bg-black">
        {songList && songList.length > 0 ? (
          <>
            <GenreSongs songs={genreSongs} />
          </>
        ) : (
          <Tabs defaultValue="recommended" className="w-full h-full bg-black ">
            <TabsList className="text-white w-full justify-end flex gap-2 ">
              <TabsTrigger value="recommended" className="">
                recommended
              </TabsTrigger>
              <TabsTrigger value="moodai">moodAi</TabsTrigger>
            </TabsList>
            <TabsContent value="recommended">
              {" "}
              <Recomended />
            </TabsContent>
            <TabsContent value="moodai">
              <MoodAi />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </>
  );
};

export default Section;
