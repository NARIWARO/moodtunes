import { createContext, useState } from "react";

export const GenreSongsListContext = createContext([]);

export const GenreSongsListContextProvider = ({ children }) => {
  const [genreList, setGenreList] = useState([]);

  // Other Spotify-related state and functions go here

  return (
    <GenreSongsListContext.Provider value={{ genreList, setGenreList }}>
      {children}
    </GenreSongsListContext.Provider>
  );
};
