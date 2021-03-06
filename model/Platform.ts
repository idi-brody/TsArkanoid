const ONE_STEP = 5;

export default class Platform {
  x: number;

  y: number;

  length: number;

  height: number;

  constructor(
    x: number,
    y: number,
    length: number,
    height: number,
  ) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.height = height;
  }

  moveLeft() {
    this.x -= ONE_STEP;
  }

  moveRight() {
    this.x += ONE_STEP;
  }
}
