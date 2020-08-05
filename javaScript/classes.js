// 1. Copy and paste the CuboidMaker constructor and prototype (from prototypes.js) in here and refactor into ES6 class syntax.
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const classCuboid = new Cuboid(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(classCuboid.volume()); // 100
console.log(classCuboid.surfaceArea()); // 130
