import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Play } from "lucide-react";

const MusicCard = () => {
  return (
    <div className="">
      <Card className="w-[160px] max-h-min bg-black hover:bg-zinc-800 border-none flex flex-col items-start">
        <CardContent class="w-full h-42 relative p-2">
          <img
            src="https://imgs.search.brave.com/F0U3ulHqblbB8ZhUUol_gvcCv1hRi2lWK_44t1P5GnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS81/MzgvTWFraW5nLU1l/bW9yaWVzLUVuZ2xp/c2gtMjAyMy0yMDIz/MDgxODA3NTAxNS01/MDB4NTAwLmpwZw"
            alt="Image"
            class="w-full h-full object-cover rounded"
          />
        </CardContent>
        <CardFooter className="text-zinc-400 flex flex-row items-start  justify-between p-2 w-full">
          <div className="">
            <h5 className="font-bold">Softly</h5>
            <h6 className="font-semibold">karan aujla</h6>
          </div>
          <div className="text-zinc-400 flex flex-col items-start max-w-full h-full gap-3 ">
            <button className="p-2 bg-green-500 rounded-full text-black  transition ease-in-out delay-100  hover:-translate-y-0 hover:scale-110  duration-400">
              <Play />
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MusicCard;
