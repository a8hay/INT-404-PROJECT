class Bird {
  constructor(y) {
    this.x = 30;
    this.y = y;

    this.gravity = 0.6;
    this.lift = -10;
    this.velocity = 0;

    this.brain;
  }

  show() {
    noFill();
    stroke(255);
    ellipse(this.x, this.y, 28, 28);
  }

  move() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.y = constrain(this.y, 28 / 2, height - 28 / 2);
  }

  jump() {
    this.velocity = this.lift;
  }
}
