import React, { useContext, useEffect, useState } from "react";

import { SongsListContext } from "@/context/songListContext";
import Section from "./Section";
import Nav from "./Nav";

const Dashboard = () => {
  // const { songList } = useContext(SongsListContext)
  return (
    <>
      <div className="h-screen">
        <>
          <Nav />
          <Section />
        </>
      </div>
    </>
  );
};

export default Dashboard;
