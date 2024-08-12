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
const videoDeviceId = urlParams.get("deviceId");
const videoDeviceLabelSearch = urlParams.get("deviceLabel");
const audioDeviceId = urlParams.get("audioDeviceId");

async function startVideo() {
  // find video device by label search
  let foundDevice = null
  if (videoDeviceLabelSearch) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    foundDevice = devices.find(d => d.label.includes(videoDeviceLabelSearch));
  }

  const constraints = {
    video: { width: 1920, height: 1080 },
    audio: false,
  };

  const finalVideoDeviceId = videoDeviceId || foundDevice.deviceId;

  if (finalVideoDeviceId) {
    constraints.video.deviceId = { exact: finalVideoDeviceId };
  }

  if (audioDeviceId) {
    constraints.audio = {
      deviceId: { exact: audioDeviceId },
      autoGainControl: false,
      echoCancellation: false,
      googAutoGainControl: false,
      noiseSuppression: false,
    };
  }

  console.log({ constraints });
  
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  document.querySelector("video").srcObject = stream;
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
