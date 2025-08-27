# Pterodactyl Slap

Welcome to **Pterodactyl Slap**, a modernized 2D canvas-based game built with HTML5, JavaScript, and CSS. This repository contains the updated source code for the game, designed to be performant, maintainable, and compatible with modern browsers. The game has been refactored to remove outdated dependencies (e.g., jQuery) and leverage contemporary web technologies like ES modules, the Web Audio API, and the Canvas API.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Overview
*Pterodactyl Slap* is a fun, interactive game where players [insert brief gameplay description, e.g., "control a character to slap pterodactyls while avoiding obstacles"]. The codebase has been overhauled to improve performance, remove deprecated libraries, and adopt modern JavaScript practices. It uses a modular architecture with ES modules, making it easy to extend and maintain.

## Features
- **Canvas-Based Rendering**: Smooth 2D graphics using the HTML5 Canvas API.
- **Responsive Input**: Keyboard controls with modern `KeyboardEvent` handling.
- **Audio Support**: Dynamic sound effects using the Web Audio API.
- **Modular Code**: Organized with ES modules for better maintainability.
- **Modernized Dependencies**: No reliance on jQuery or outdated plugins.
- **Customizable Styling**: CSS with custom properties for easy theme adjustments.

## Installation
To run *Pterodactyl Slap* locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/pterodactyl-slap.git
   cd pterodactyl-slap
   ```

2. **Install Dependencies** (if using a bundler like Vite):
   ```bash
   npm install
   ```

3. **Serve the Game**:
   - Option 1: Use a local development server (recommended):
     ```bash
     npx vite
     ```
     Open `http://localhost:5173` in your browser.
   - Option 2: Serve directly with a simple HTTP server:
     ```bash
     npx http-server
     ```
     Open `http://localhost:8080` in your browser.

4. **Ensure Assets**:
   - Place game assets (e.g., `player.png`, `hit.mp3`) in the `images/` and `sounds/` directories, respectively.

## Usage
- **Controls**:
  - Arrow keys: Move the player.
  - Spacebar: Trigger sound effects (e.g., slap action).
  - [Add more controls based on game mechanics].
- **Gameplay**:
  - [Describe core gameplay, e.g., "Navigate the canvas to slap pterodactyls while collecting points. Avoid obstacles to survive!"]
- **Browser Support**: Tested on modern browsers (Chrome, Firefox, Safari).

## File Structure
```
pterodactyl-slap/
├── images/              # Sprite assets (e.g., player.png)
├── sounds/              # Audio assets (e.g., hit.mp3)
├── game.js              # Main game loop and logic
├── key_status.js        # Keyboard input handling
├── screen.css           # Styling for canvas and UI
├── sprite.js            # Sprite rendering and loading
├── util.js              # Utility functions (e.g., clamp)
├── index.html           # Entry point for the game
├── README.md            # This file
└── package.json         # (Optional) For Vite or other bundlers
```

### Key Files
- **index.html**: HTML entry point with canvas and navigation.
- **game.js**: Core game loop, integrating sprites, input, and audio.
- **sprite.js**: Handles sprite loading and rendering on the canvas.
- **sound.js**: Manages audio playback using the Web Audio API.
- **key_status.js**: Tracks keyboard input using modern event listeners.
- **util.js**: Utility functions like `clamp` for value constraints.
- **screen.css**: Styles the canvas and UI with modern CSS.

## Development
To contribute or extend the game:

1. **Set Up a Dev Environment**:
   - Use Vite for a modern development workflow:
     ```bash
     npm init vite@latest
     ```
   - Follow prompts to configure a vanilla JavaScript project.

2. **Add Game Logic**:
   - Extend `game.js` to implement core mechanics (e.g., enemies, collisions, scoring).
   - Example: Add a `Pterodactyl` class in `game.js` for enemy behavior.

3. **Optimize Assets**:
   - Compress images and audio files for faster loading.
   - Ensure `images/` and `sounds/` directories are populated.

4. **Test Across Browsers**:
   - Use browser dev tools to debug canvas rendering and audio playback.
   - Verify compatibility with Chrome, Firefox, and Safari.

5. **Build for Production**:
   ```bash
   npx vite build
   ```
   - Output is in the `dist/` folder, ready for deployment.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to your fork (`git push origin feature-name`).
5. Open a pull request with a clear description of changes.

Please follow these guidelines:
- Write clear, modular code using ES modules.
- Avoid external dependencies unless necessary.
- Test changes thoroughly in multiple browsers.
- Update this README if new features or files are added.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Last updated: August 26, 2025*