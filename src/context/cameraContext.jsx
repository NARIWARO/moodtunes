import { createContext, useState } from "react";

export const CameraContext = createContext(null);

export const CameraContextProvider = ({ children }) => {
  const [genre, setGenre] = useState("happy");

  // Add any other Spotify-related state and functions here

  return (
    <CameraContext.Provider value={{ genre, setGenre }}>
      {children}
    </CameraContext.Provider>
  );
};
