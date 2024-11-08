import React, { useState } from "react";
import Section from "./Section";
import Nav from "../nav/Nav";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen bg-black">
        <>
          <Nav />
          <Section />
        </>
      </div>
    </>
  );
};

export default Dashboard;
