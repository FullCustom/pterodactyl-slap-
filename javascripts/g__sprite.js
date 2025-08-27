// sprite.js
export class Sprite {
  constructor(image, sourceX = 0, sourceY = 0, width = image.width, height = image.height) {
    this.image = image;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
  }

  draw(context, x, y) {
    context.drawImage(
      this.image,
      this.sourceX,
      this.sourceY,
      this.width,
      this.height,
      x,
      y,
      this.width,
      this.height
    );
  }

  fill(context, x, y, width, height, repeat = 'repeat') {
    const pattern = context.createPattern(this.image, repeat);
    context.fillStyle = pattern;
    context.fillRect(x, y, width, height);
  }

  static async load(url) {
    const img = new Image();
    img.src = url;
    await new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });
    return new Sprite(img);
  }

  static empty() {
    return {
      draw: () => {},
      fill: () => {},
      frame: () => {},
      update: () => {},
      width: null,
      height: null
    };
  }
}

export const spriteImagePath = 'images/';