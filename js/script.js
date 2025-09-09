"use strict";

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Promisified function to wait for video metadata to load
function loadVideoMetadata(videoEl) {
  return new Promise((resolve) => {
    videoEl.onloadedmetadata = () => {
      resolve();
    };
  });
}

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;

    // When the stream ends (user stops sharing), reset the video source
    mediaStream.getVideoTracks()[0].addEventListener('ended', () => {
      videoElement.srcObject = null;
    });

    return mediaStream;
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.log("Error getting media stream:", error);
    }
    return null;
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;
  try {
    let mediaStream = videoElement.srcObject;
    let isNewStream = false;
    if (!mediaStream) {
      mediaStream = await selectMediaStream();
      isNewStream = true;
    }

    if (mediaStream) {
      // If it's a new stream, wait for metadata to load before proceeding
      if (isNewStream) {
        await loadVideoMetadata(videoElement);
        videoElement.play();
      }

      // Attempt to enter Picture-in-Picture, with a fallback to Fullscreen
      if (document.pictureInPictureEnabled) {
        await videoElement.requestPictureInPicture();
      } else {
        await videoElement.requestFullscreen();
      }
    }
  } catch (err) {
    console.log("Error during PiP/Fullscreen request:", err);
    alert("Your browser does not support entering Picture-in-Picture or Fullscreen for this content.");
  } finally {
    button.disabled = false;
  }
});
