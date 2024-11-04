import { useEffect, useState } from "react";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { setClientToken } from "./spotify/spotifyLogin";

function App() {
  const [spotifyToken, setSpotifyToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.Location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setSpotifyToken(_token);
      setClientToken(token);
    } else {
      setSpotifyToken(token);
      setClientToken(token);
    }
  }, []);

  return !spotifyToken ? <Login /> : <Dashboard />;
}

export default App;
