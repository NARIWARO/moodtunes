import React from "react";
import Recomended from "../recommended/Recomended";
import MoodAi from "../moodai/MoodAi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const Section = () => {
  return (
    <>
      <div className="max-h-screen overflow-y-auto bg-black">
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
      </div>
    </>
  );
};

export default Section;
