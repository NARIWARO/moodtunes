import React,{useState} from "react";
import Video from "./Video";
import Songs from "./Songs";

const Dashboard = () => {
 
  return (
    <div className="flex flex-row h-screen ">
      <div className="flex-grow basis-1/4 p-2 bg-[#000000]">
        <Video />
       
      </div>
      <div className="flex-grow basis-3/4 p-2 bg-gradient-to-t from-custom-dark-cyan via-black  to-custom-red   ">
        <Songs />
      </div>
    </div>
  );
};

export default Dashboard;
