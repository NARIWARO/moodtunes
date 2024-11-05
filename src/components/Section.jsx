import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Recomended from "./Recomended";
import MoodAi from "./MoodAi";

const Section = () => {
  return (
    <>
      <Tabs
        defaultValue="recomended"
        className="bg-black w-full flex-1 min-h-0 overflow-y-auto"
      >
        <TabsList className="bg-black w-full flex justify-end pr-6 text-white rounded-none p-1 ">
          <TabsTrigger value="recomended">recommended</TabsTrigger>
          <TabsTrigger value="moodai">moodAi</TabsTrigger>
        </TabsList>
        <TabsContent value="recomended">
          <Recomended />
        </TabsContent>
        <TabsContent value="moodai">
          <MoodAi />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Section;
