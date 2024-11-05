import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SpotifyProvider } from "./context/userDataContext.jsx";
import { SongsListProvider } from "./context/songListContext.jsx";
import { GenreSongsListContextProvider } from "./context/genreSongList.jsx";
import { BrowserRouter } from "react-router-dom";
import { CameraContextProvider } from "./context/cameraContext.jsx"; // Adjust path as needed

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CameraContextProvider>
      <SpotifyProvider>
        <SongsListProvider>
          <GenreSongsListContextProvider>
            <App />
          </GenreSongsListContextProvider>
        </SongsListProvider>
      </SpotifyProvider>
    </CameraContextProvider>
  </BrowserRouter>
);
