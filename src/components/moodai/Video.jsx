import { React, useRef, useEffect, useState, useContext } from "react";
import * as faceapi from "face-api.js";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Camera, CameraOff, Search } from "lucide-react";

import { CameraContext } from "../../context/cameraContext";

const Video = () => {
  const { setGenre } = useContext(CameraContext);

  const vidRef = useRef(null);
  const canRef = useRef(null);
  const [result, setResult] = useState("");
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [audio] = useState(new Audio()); // Create a new audio object

  useEffect(() => {
    if (result) {
      setGenre(result); // Update genre in context only when `result` changes
    }
  }, [result, setGenre]);

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
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const detectFaces = async () => {
    if (vidRef.current) {
      const detections = await faceapi
        .detectAllFaces(vidRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();
      const canvas = canRef.current;
      const displaySize = {
        width: vidRef.current.width,
        height: vidRef.current.height,
      };
      faceapi.matchDimensions(canvas, displaySize);
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      const faceexp = detections[0]?.expressions; // Ensure there's at least one detection
      const mood = highestIntegerKeyValuePair(faceexp);
      setResult(mood);
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
      tracks.forEach((track) => {
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
          faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
          faceapi.nets.faceExpressionNet.loadFromUri("/models"),
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
      <Card className="flex flex-col gap-2 box-content relative p-2 border-none bg-transparent h-full">
        <CardContent
          style={{ position: "relative", width: "360px", height: "280px" }}
          className="flex items-center justify-center rounded-xl p-2 "
        >
          <video
            ref={vidRef}
            autoPlay
            muted
            width="340"
            height="255"
            style={{ position: "absolute", top: 10 }}
            className="rounded-xl "
          />
          <canvas
            ref={canRef}
            width="340"
            height="255"
            style={{ position: "absolute", top: 10, zIndex: 1 }}
            className=""
          />
        </CardContent>
        <CardFooter className="flex item-center justify-center  max-w-min  p-4">
          <button
            onClick={toggleCamera}
            style={{ zIndex: 2 }}
            className="w-full text-black font-semibold p-2 rounded-xl"
          >
            {isCameraOn ? (
              <CameraOff className="text-red-500" />
            ) : (
              <Camera className="text-white" />
            )}
          </button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Video;
