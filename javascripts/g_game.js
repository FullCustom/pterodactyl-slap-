// game.js
import { Sprite, spriteImagePath } from './sprite.js';
import { Sound } from './sound.js';
import { keydown } from './key_status.js';
import { clamp } from './util.js';

class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.context = this.canvas.getContext('2d');
    this.player = { x: 400, y: 300, speed: 5 };
    this.sprite = null;
    this.lastTime = 0;
  }

  async init() {
    // Load assets
    this.sprite = await Sprite.load(`${spriteImagePath}player.png`);
    await Sound.loadSound('hit');
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  update(deltaTime) {
    // Example: Move player with arrow keys
    if (keydown.get('arrowleft')) this.player.x -= this.player.speed;
    if (keydown.get('arrowright')) this.player.x += this.player.speed;
    if (keydown.get('arrowup')) this.player.y -= this.player.speed;
    if (keydown.get('arrowdown')) this.player.y += this.player.speed;

    // Clamp player position to canvas bounds
    this.player.x = clamp(this.player.x, 0, this.canvas.width - this.sprite.width);
    this.player.y = clamp(this.player.y, 0, this.canvas.height - this.sprite.height);

    // Example: Play sound on spacebar
    if (keydown.get(' ')) Sound.play('hit');
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.sprite.draw(this.context, this.player.x, this.player.y);
  }

  loop(timestamp) {
    const deltaTime = (timestamp - this.lastTime) / 1000; // Seconds
    this.lastTime = timestamp;

    this.update(deltaTime);
    this.render();

    requestAnimationFrame(this.loop);
  }
}

const game = new Game();
game.init();