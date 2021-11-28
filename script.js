console.log("Use deviceId query param to request a specific device.");

navigator.mediaDevices
  .enumerateDevices()
  .then((devices) =>
    devices.filter((d) => d.kind === "videoinput" || d.kind === "audioinput")
  )
  .then((devices) =>
    devices
      .map((d) => {
        return "[" + d.kind + "] " + d.label + ": " + d.deviceId;
      })
      .join("\n\n")
  )
  .then(console.log);

const urlParams = new URLSearchParams(window.location.search);
const deviceId = urlParams.get("deviceId");
const audioDeviceId = urlParams.get("audioDeviceId");

function startVideo() {
  navigator.mediaDevices
    .getUserMedia({
      video: { width: 1920, height: 1080, deviceId: { exact: deviceId } },
      audio: audioDeviceId
        ? {
            deviceId: { exact: audioDeviceId },
            autoGainControl: false,
            echoCancellation: false,
            googAutoGainControl: false,
            noiseSuppression: false,
          }
        : false,
    })
    .then((stream) => {
      document.querySelector("video").srcObject = stream;
    });
}

function enterFullscreen() {
  const element = document.documentElement;

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

startVideo();
