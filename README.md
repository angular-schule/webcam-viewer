# webcam-viewer

This tool displays webcam video in a fullscreen browser.
This can be used to share a camera image in a video conference.
At Angular.Schule, we use this to share the fullscreen USB webcam output of a Blackmagic ATEM video mixer to a video conference.

Double-click the video to enter fullscreen.

## Selecting specific devices

The browser selects the first device in the list. In order to select as specific device you can use the `deviceId` and `audioDeviceId` query params.
The IDs of all connected devices are logged to the browser console.
Audio will only be enabled when `audioDeviceId` is set.

### Video only

```
https://angular-schule.github.io/webcam-viewer/?deviceId=a6834bfe7398390bc383e3a3783ca832f0
```

### Video and Audio

```
https://angular-schule.github.io/webcam-viewer/?deviceId=a6834bfe7398390&audioDeviceId=a3783ca837f20ab5
```
