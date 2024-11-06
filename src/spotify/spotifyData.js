import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const fetchSpotifyUserData = async () => {
  try {
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user data", error.response || error.message);
    throw error;
  }
};
export const fetchSongsByGenre = async (genre) => {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/recommendations`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`, // Make sure getToken() returns a valid token
        },
        params: {
          seed_genres: genre,
          limit: 20, // Adjust the number of tracks as needed
        },
      }
    );

    // Ensure the response contains tracks
    if (response.data && response.data.tracks) {
      return response.data.tracks;
    } else {
      console.error("No tracks found in response.");
      return []; // Return an empty array if no tracks are found
    }
  } catch (error) {
    console.error(
      "Error fetching songs by genre:",
      error.response || error.message
    );
    throw error; // Re-throw the error to be handled further if necessary
  }
};

export const searchSongs = async (query) => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      params: {
        q: query,
        type: "track",
        limit: 20, // Adjust limit as needed
      },
    });
    return response.data.tracks.items; // Return the list of tracks found
  } catch (error) {
    console.error("Error searching for songs", error.response || error.message);
    throw error;
  }
};

let currentlyPlaying = null;

export const playSong = (track) => {
  if (currentlyPlaying) {
    currentlyPlaying.pause();
  }
  currentlyPlaying = new Audio(track.preview_url); // Use the preview URL or actual URL for playback
  currentlyPlaying.play();
};

export const pauseSong = () => {
  if (currentlyPlaying) {
    currentlyPlaying.pause();
  }
};
