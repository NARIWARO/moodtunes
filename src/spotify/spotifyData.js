import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
const clearToken = () => {
  localStorage.removeItem("token");
};

export const fetchSpotifyUserData = async () => {
  try {
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (response.status === 401) {
      clearToken();
    }
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
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      params: {
        q: query,
        type: "track",
        limit: 20, // Adjust limit as needed
      },
    });

    // Check if the response contains tracks items
    if (response.data && response.data.tracks && response.data.tracks.items) {
      return response.data.tracks.items; // Return the list of tracks found
    } else {
      console.error("No tracks found in the response.");
      return []; // Return an empty array if no tracks are found
    }
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      // Server returned a response
      console.error(
        "Error searching for songs:",
        error.response.data.error.message
      );
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No response received from Spotify API.");
    } else {
      // Something else went wrong
      console.error("Error setting up the request:", error.message);
    }
    throw error; // Re-throw the error so that it can be caught by a caller if needed
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
