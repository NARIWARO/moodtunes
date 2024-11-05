import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ArtistCard = () => {
  return (
    <>
      <Card className="w-[120px] max-h-min bg-black  border-none flex flex-col items-start">
        <CardContent class="w-full h-42 relative p-2 ">
          <a href="">
            <img
              src="https://imgs.search.brave.com/F0U3ulHqblbB8ZhUUol_gvcCv1hRi2lWK_44t1P5GnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS81/MzgvTWFraW5nLU1l/bW9yaWVzLUVuZ2xp/c2gtMjAyMy0yMDIz/MDgxODA3NTAxNS01/MDB4NTAwLmpwZw"
              alt="Image"
              class="w-full h-full object-cover rounded-[50%]"
            />
          </a>
        </CardContent>
        <CardFooter className="text-zinc-400 flex flex-row items-start  justify-between p-2 w-full">
          <div className="">
            <h6 className="font-semibold">karan aujla</h6>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ArtistCard;
