import { createContext, useState } from "react";

export const SpotifyContext = createContext(null);

export const SpotifyProvider = ({ children }) => {
  const [userData, setUserData] = useState({ display_name: "" });

  // Other Spotify-related state and functions go here

  return (
    <SpotifyContext.Provider value={{ userData, setUserData }}>
      {children}
    </SpotifyContext.Provider>
  );
};
