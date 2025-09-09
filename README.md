# Picture-in-Picture Project

A simple web application demonstrating the Picture-in-Picture API with screen capture functionality. This project allows a user to select a screen, window, or tab and display it in a floating, always-on-top window.

## Features

*   **Screen Capture:** Utilizes the `getDisplayMedia` API to capture screen content.
*   **Picture-in-Picture Mode:** Displays the captured stream in a floating PiP window using the `requestPictureInPicture` API.
*   **Robust Error Handling:** Gracefully handles cases where the user cancels the screen share prompt.
*   **State Management:** Automatically detects when a user stops sharing their screen and resets the application state.

## How to Use

1.  Open the `index.html` file in a compatible web browser (latest versions of Chrome, Firefox, or Edge recommended).
2.  Click the "START" button.
3.  Your browser will prompt you to select a screen, window, or tab to share.
4.  Once selected, the content will appear in a Picture-in-Picture window.

## Technology Used

*   HTML5
*   CSS3
*   JavaScript (ES6+)
*   [Screen Capture API (`getDisplayMedia`)](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API)
*   [Picture-in-Picture API](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API)
