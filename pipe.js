let gap = 150;

class Pipe {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.velocity = 2;
    this.width = 25;
    this.height = random(height / 6, (3 / 4) * height);
    this.bottom = height - (this.height + gap);
  }

  show() {
    rect(this.x, this.y, this.width, this.height);
    rect(this.x, this.height + gap, this.width, this.bottom);
  }

  move() {
    this.x -= this.velocity;
  }

  collided() {
    let halfBirdHeight = 28 / 2;
    let halfBirdwidth = 28 / 2;
    if (
      bird.y - halfBirdHeight < this.height ||
      bird.y + halfBirdHeight > this.height + gap
    ) {
      //if this.w is huge, then we need different collision model
      if (
        bird.x + halfBirdwidth > this.x &&
        bird.x - halfBirdwidth < this.x + 25
      ) {
        return true;
      }
    }

    return false;
  }
}
