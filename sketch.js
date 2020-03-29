let bird;
let pipes;

function setup() {
  createCanvas(400, 600);
  reset();
}

function draw() {
  background(51);

  bird.move();
  bird.show();

  // draw the pipes
  for (pipe of pipes) {
    pipe.move();
    pipe.show();
    if (pipe.collided()) {
      noLoop();
    }
  }

  //   draw the eye of bird

  line(bird.x, bird.y, pipes[0].x, pipes[0].height);
  line(bird.x, bird.y, pipes[0].x, pipes[0].height + gap);

  //   make new pipe every 100th frame
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe(width - 12));
  }

  //   delete the pipe which is offscreen
  if (pipes.length > 2) {
    pipes.shift();
  }
}

function keyPressed() {
  // 32 is space
  if (keyCode === 32) {
    bird.jump();
  }
  if (keyCode === 82) {
    reset();
  }
}

function reset() {
  pipes = [];
  bird = new Bird(height / 2);
  pipes.push(new Pipe(width - 12));
  frameCount = 1;
  loop();
}
