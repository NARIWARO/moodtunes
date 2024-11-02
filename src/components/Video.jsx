import { React, useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Video = () => {
  const vidRef = useRef(null);
  const canRef = useRef(null);
  const [result, setResult] = useState("happy");
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [audio] = useState(new Audio()); // Create a new audio object

  // Define song playlists based on moods
  const playlists = {
    happy: [
      { title: "Happy Song 1", artist: "Artist 1", url: "url_to_happy_song_1" },
      { title: "Happy Song 2", artist: "Artist 2", url: "url_to_happy_song_2" },
    ],
    sad: [
      { title: "Sad Song 1", artist: "Artist 1", url: "url_to_sad_song_1" },
      { title: "Sad Song 2", artist: "Artist 2", url: "url_to_sad_song_2" },
    ],
    // Add more moods and songs as needed
  };

  // Filter function to fetch songs based on the detected mood
  const filterSongsByMood = (mood) => {
    return playlists[mood] || [];
  };

  // Function to play a song
  const playSong = (song) => {
    if (currentSong) {
      audio.pause(); // Stop the current song
    }
    audio.src = song.url; // Set the new song URL
    audio.play(); // Play the new song
    setCurrentSong(song);
  };

  const highestIntegerKeyValuePair = (obj) => {
    if (!obj || Object.keys(obj).length === 0) return null;
    const integerEntries = Object.entries(obj).map(([key, value]) => {
      const integerPart = String(value).charAt(0);
      const integerValue = parseInt(integerPart, 10);
      return [key, integerValue];
    });

    const [highestKey] = integerEntries.reduce((highest, current) => {
      return current[1] > highest[1] ? current : highest;
    });

    return highestKey;
  };

  const clearCanvas = () => {
    const canvas = canRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const detectFaces = async () => {
    if (vidRef.current) {
      const detections = await faceapi.detectAllFaces(vidRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();
      const canvas = canRef.current;
      const displaySize = { width: vidRef.current.width, height: vidRef.current.height };
      faceapi.matchDimensions(canvas, displaySize);
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      const faceexp = detections[0]?.expressions; // Ensure there's at least one detection
      const mood = highestIntegerKeyValuePair(faceexp);
      setResult(mood); // Overwrite the default expression - happy

      const songs = filterSongsByMood(mood);
      if (songs.length > 0) {
        playSong(songs[0]); // Play the first song from the filtered mood playlist
      }
    }
  };

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      vidRef.current.srcObject = stream;
      setIsCameraOn(true);
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  const stopVideo = () => {
    if (vidRef.current && vidRef.current.srcObject) {
      const stream = vidRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
      vidRef.current.srcObject = null;
      setIsCameraOn(false);
      clearCanvas();
      audio.pause(); // Stop the audio when video stops
    }
  };

  const toggleCamera = () => {
    if (isCameraOn) {
      stopVideo();
    } else {
      startVideo();
    }
  };

  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        ]);
        startVideo();
      } catch (e) {
        console.log("Error loading models: ", e);
      }
    };
    if (vidRef.current) {
      loadModels();
    }
  }, []);

  useEffect(() => {
    if (isCameraOn) {
      const intervalId = setInterval(detectFaces, 100);
      return () => clearInterval(intervalId);
    }
  }, [isCameraOn]);

  return (
    <>
      <Card className="flex flex-col gap-2 box-content relative p-2 border-none bg-transparent">
        <div className="text-custom-white p-3 rounded-md bg-custom-gray text-lg font-bold">
          <a href="#">
            <b>Moodtunes</b>
          </a>
        </div>
        <div className="bg-[#282a31] rounded-md">
          <CardHeader>
            <CardTitle className="text-xl text-custom-white">Verifying Expressions...</CardTitle>
            <CardDescription>Make sure good amount of light reflects on your face for better evaluation of face expressions</CardDescription>
          </CardHeader>
          <CardContent style={{ position: 'relative', width: '360px', height: '280px' }} className="flex items-center justify-center rounded-xl p-2 ">
            <video ref={vidRef} autoPlay muted width="340" height="255" style={{ position: 'absolute', top: 10 }} className="rounded-xl " />
            <canvas ref={canRef} width="340" height="255" style={{ position: 'absolute', top: 10, zIndex: 1 }} className="" />
          </CardContent>
          <CardFooter className="flex item-center justify-center p-4">
            <button onClick={toggleCamera} style={{ zIndex: 2 }} className="w-full bg-custom-red text-custom-white font-bold p-2 rounded-xl">
              {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
            </button>
          </CardFooter>
          <div className="bg-white m-2 p-3 rounded-sm">
            <h5 className="text-sm"><i>Your current mood is...</i></h5>
            <h3 className="text-xl font-bold">{result}</h3>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Video;
