import { createContext, useState } from "react";

export const SongsListContext = createContext([]);

export const SongsListProvider = ({ children }) => {
  const [songList, setSongList] = useState([]);

  // Other Spotify-related state and functions go here

  return (
    <SongsListContext.Provider value={{ songList, setSongList }}>
      {children}
    </SongsListContext.Provider>
  );
};
