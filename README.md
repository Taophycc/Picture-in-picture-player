# Picture-in-Picture Player

A simple web app that demonstrates the **Screen Capture API** and **Picture-in-Picture API**.  
Select a screen, window, or tab and pop it into an always-on-top PiP window.  

## 🚀 Live Demo
[Demo Link](https://pip-player.vercel.app/)

## ✨ Features
- Screen selection via `getDisplayMedia()`
- Floating PiP window with `requestPictureInPicture()`
- Fallback to fullscreen if PiP isn’t supported
- Auto reset when screen sharing stops
- Works on Chrome, Edge, Firefox (limited Safari support)

## 🖥️ Compatibility
| Browser | PiP | Screen Capture |
|---------|-----|----------------|
| Chrome  | ✅  | ✅ |
| Edge    | ✅  | ✅ |
| Firefox | ✅  | ✅ |
| Safari  | ❌  | Partial |

## ⚙️ Usage
```bash
git clone https://github.com/Taophycc/Picture-in-picture-player.git
cd Picture-in-picture-player
open index.html
```

## 🛠️ Tech stack
*   HTML5, CSS3 (Flexbox)
*   Modern JavaScript (ES6+)
*   Web APIs:
    *   [Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API)
    *   [Picture-in-Picture API](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API)
    *   [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
