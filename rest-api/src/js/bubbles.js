const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const reset = document.querySelector(".buttons-wrapper__input");

let allBubbles = [];

const options = {
  backgroundColor: "#111",
  defaultBubbleColor: "#fff",

  bubbelRadius: 5,
  addRadius: randomiser(4),

  defaultSpeed: 1,
  addSpeed: 2
};
function randomiser(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function Bubble(w, h) {
  this.x = w;
  this.y = h;

  this._speed = options.defaultSpeed + Math.random() * options.addSpeed;

  this._dirAngle = Math.floor(Math.random() * 360);

  this.bubbleColor = options.defaultBubbleColor;

  this._bubbleRadius = options.bubbelRadius + Math.random() * options.addRadius;

  this.direction = {
    x: Math.cos(this._dirAngle) * this._speed,
    y: Math.sin(this._dirAngle) * this._speed
  };
}

canvas.width = 800;
canvas.height = 600;

Bubble.prototype.borderColapse = function() {
  if (this.x >= canvas.width || this.x <= 0) {
    this.direction.x *= -1;
  }
  if (this.y >= canvas.height || this.y <= 0) {
    this.direction.y *= -1;
  }
};
Bubble.prototype.update = function() {
  this.borderColapse();
  this.x += this.direction.x;
  this.y += this.direction.y;
};
Bubble.prototype.drow = function() {
  context.beginPath();
  context.fillStyle = this.bubbleColor;
  context.arc(this.x, this.y, this._bubbleRadius, 0, Math.PI * 2);
  context.fill();
};
Bubble.prototype.collisionDetect = function() {
  for (let j = 0; j < allBubbles.length; j++) {
    if (!(this === allBubbles[j])) {
      let dx = this.x - allBubbles[j].x;
      let dy = this.y - allBubbles[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this._bubbleRadius + allBubbles[j]._bubbleRadius) {
        if (this._bubbleRadius > allBubbles[j]) {
          allBubbles[j].y *= -1;
          allBubbles[j].x *= -1;
        } else {
          this.direction.y *= -1;
          this.direction.x *= -1;
        }

        allBubbles[j].bubbleColor =
          "rgb(" +
          randomiser(255) +
          "," +
          randomiser(255) +
          "," +
          randomiser(255) +
          ")";
        this.bubbleColor =
          "rgb(" +
          randomiser(255) +
          "," +
          randomiser(255) +
          "," +
          randomiser(255) +
          ")";
      }
    }
  }
};


canvas.addEventListener("click", () => {
  allBubbles.push(new Bubble(event.offsetX, event.offsetY));
});
let lastID;
function loop() {
  context.fillStyle = options.backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < allBubbles.length; i++) {
    allBubbles[i].collisionDetect();
    allBubbles[i].update();
    allBubbles[i].drow();
  }
  lastID = window.requestAnimationFrame(loop);
}
lastID = window.requestAnimationFrame(loop);

// reset.addEventListener(mouse)
reset.addEventListener("click", () => {
  context.fillStyle = options.backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
  allBubbles = [];
  window.cancelAnimationFrame(lastID);
  lastID = window.requestAnimationFrame(loop);
});

