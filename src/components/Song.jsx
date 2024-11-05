import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Play } from "lucide-react";

const Song = () => {
  return (
    <>
      <Card className="bg-transparent border-none flex flex-row justify-between hover:bg-zinc-900 transition duration-150 ease-in-out">
        <div className="flex flex-row gap-8 items-center ">
          <CardContent class="w-[80px] h-42 relative p-2 ">
            <a href="">
              <img
                src="https://imgs.search.brave.com/DXOpA-n5cS2C4hR1kMtu89Y28v2cTWQLsPpRMg9jkUU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3Zl/ci5kanB1bmphYi5p/cy81NjM1NC8zMDB4/MjUwL2FscGhhX2pv/cmRhbl9zYW5kaHUu/d2VicA"
                alt="Image"
                class="w-full h-full object-cover rounded"
              />
            </a>
          </CardContent>
          <div className="">
            <CardTitle className="text-white">Jattiye ni</CardTitle>
            <CardDescription className="text-zinc-400 font-semibold">
              Jordan Sandhu
            </CardDescription>
          </div>
        </div>
        <CardFooter className=" flex justify-center items-end">
          <button className="p-2 bg-green-500 rounded-full text-black">
            <Play />
          </button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Song;
