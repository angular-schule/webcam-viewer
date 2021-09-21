# webcam-viewer

This tool displays webcam video in a fullscreen browser.
This can be used to share a camera image in a video conference.
At Angular.Schule, we use this to share the fullscreen USB webcam output of a Blackmagic ATEM video mixer to a video conference.

Double-click the video to enter fullscreen.

## Selecting a specific device

A specific device can be selected by ID through the `deviceId` query param:

```
https://angular-schule.github.io/webcam-viewer/?deviceId=a6834bfe7398390bc383e3a3783ca832f0
```

The IDs of all connected devices are logged to the browser console.