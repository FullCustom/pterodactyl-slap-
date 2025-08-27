// sound.js
export class Sound {
  static #sounds = new Map();
  static #audioContext = new (window.AudioContext || window.webkitAudioContext)();

  static async loadSound(name, maxChannels = 4) {
    const soundPath = `sounds/${name}.mp3`;
    if (!this.#sounds.has(name)) {
      try {
        const response = await fetch(soundPath);
        if (!response.ok) throw new Error(`Failed to load sound: ${soundPath}`);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.#audioContext.decodeAudioData(arrayBuffer);
        this.#sounds.set(name, { buffer: audioBuffer, channels: [], maxChannels });
      } catch (error) {
        console.error(error);
      }
    }
  }

  static play(name) {
    const sound = this.#sounds.get(name);
    if (!sound) return;

    // Find or create a free channel
    const freeChannel = sound.channels.find(channel => !channel.playing);
    if (freeChannel) {
      freeChannel.source.start(0);
      freeChannel.playing = true;
      freeChannel.source.onended = () => (freeChannel.playing = false);
    } else if (sound.channels.length < sound.maxChannels) {
      const source = this.#audioContext.createBufferSource();
      source.buffer = sound.buffer;
      source.connect(this.#audioContext.destination);
      source.start(0);
      sound.channels.push({ source, playing: true });
      source.onended = () => {
        sound.channels = sound.channels.filter(ch => ch.source !== source);
      };
    }
  }

  static stop(name) {
    const sound = this.#sounds.get(name);
    if (sound) {
      sound.channels.forEach(channel => {
        if (channel.playing) {
          channel.source.stop();
          channel.playing = false;
        }
      });
      sound.channels = [];
    }
  }
}