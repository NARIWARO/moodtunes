import { Power, Search } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Nav = () => {
  return (
    <div>
      <nav className="h-16 w-full bg-black flex flex-row justify-between items-center p-4 border-b border-zinc-800">
        {/* logo */}
        <div className="text-white text-2xl font-bold">
          <h3>moodtunes</h3>
        </div>
        {/* search bar */}
        <div className="flex flex-row items-center gap-3">
          <input
            type="text"
            value=""
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for songs..."
            className="border-none px-3 py-1 rounded-full bg-zinc-700 text-white"
          />
          <button className="text-zinc-600 hover:text-zinc-400">
            <Search />
          </button>
        </div>

        {/* profile */}
        <div className="flex flex-row gap-3 items-center ">
          <h3 className="text-white font-semibold">shivam singh</h3>
          <div className="flex flex-row gap-6">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-green-500 font-bold">
                CN
              </AvatarFallback>
            </Avatar>
            <div className="text-zinc-700 flex items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Power />
                  </TooltipTrigger>
                  <TooltipContent className="bg-zinc-700 border-none">
                    <p className="text-zinc-400">logout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
