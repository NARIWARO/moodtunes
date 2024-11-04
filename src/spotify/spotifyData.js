import axios from "axios";

export const fetchSpotifyUserData = async (token) => {
    try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    }
    catch (error) {
        console.error("Error fetching user data", error.response || error.message)
        throw error;
    }
}

export const fetchSongsByGenre = async (token, genre) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/recommendations`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                seed_genres: genre,
                limit: 20, // You can adjust the limit as needed
            },
        });
        return response.data.tracks; // Return the list of tracks
    } catch (error) {
        console.error("Error fetching songs by genre", error.response || error.message);
        throw error;
    }
};

export const searchSongs = async (token, query) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: query,
                type: 'track',
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

