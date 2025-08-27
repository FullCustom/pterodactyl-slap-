// key_status.js
export const keydown = new Map();

window.addEventListener('keydown', event => {
  keydown.set(event.key.toLowerCase(), true);
});

window.addEventListener('keyup', event => {
  keydown.set(event.key.toLowerCase(), false);
});