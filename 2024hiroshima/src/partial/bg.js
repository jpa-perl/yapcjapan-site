let canvas;
let shapes = [];
let centerX;
let objectNum;

const COLOR = "#C32121";

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-container");
  pixelDensity(1);
  init();
}

function init() {
  centerX = width / 2;
  objectNum = floor(map(width, 0, 1920, 10, 60));
}

function draw() {
  background(255);
  push();
  translate(centerX, 0);
  for (let i = 0; i < objectNum; i++) {
    if (shapes[i] == null) {
      shapes[i] = new Shape();
    }
    const shape = shapes[i];
    if (i > objectNum) {
      shape.setShow(false);
    } else {
      shape.setShow(true);
    }
    shape.draw();
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  init();
}

const ShapeType = {
  CIRCLE: "circle",
  RECT: "rect",
  TRIANGLE: "triangle",
};

class Shape {
  constructor() {
    this.shapeType = random(Object.values(ShapeType));
    this.x = random(-width / 2, width / 2);
    this.y = random(height);
    this.z = random(0, 100);
    this.acl = map(this.z, 0, 100, 0.5, 2);
    this.size = map(this.z, 0, 100, 10, 100);
    this.rotation = random(TAU);
    this.rotAcl = random(-0.01, 0.01);
    this.color = color(COLOR);
    this.strokeWeight = map(this.size, 10, 100, 2, 8);
    this.targetOpacity = 255;
    this.show = true;
    this.opacity = 0;
  }

  reset() {
    this.shapeType = random(Object.values(ShapeType));
    this.x = random(-width / 2, width / 2);
    this.rotation = random(TAU);
    this.rotAcl = random(-0.01, 0.01);
  }

  setShow(show) {
    this.show = show;
  }

  update() {
    this.y -= this.acl;
    this.x += sin(this.y * 0.001 + this.size * 2) / 2;
    const targetOpacity = this.show ? map(this.y, height, 0, 0, 30) : 0;
    this.opacity += (targetOpacity - this.opacity) * 0.9;
    this.color.setAlpha(this.opacity);
    if (this.y < 0 - this.size) {
      this.y = height + this.size;
      this.reset();
    }
    this.rotation += this.rotAcl;
  }

  draw() {
    this.update();
    push();
    rectMode(CENTER);
    fill(255, 100);
    strokeJoin(ROUND);
    strokeWeight(this.strokeWeight);
    stroke(this.color);
    translate(this.x, this.y);
    rotate(this.rotation);
    switch (this.shapeType) {
      case ShapeType.CIRCLE:
        this.drawCircle();
        break;
      case ShapeType.RECT:
        this.drawRect();
        break;
      case ShapeType.TRIANGLE:
        this.drawTriangle();
        break;
    }
    pop();
  }

  drawCircle() {
    circle(0, 0, this.size);
  }

  drawRect() {
    rect(0, 0, this.size, this.size);
  }

  drawTriangle() {
    beginShape();
    for (let i = 3; i > 0; i--) {
      const R = (TAU / 3) * i;
      const x = cos(R) * this.size;
      const y = sin(R) * this.size;

      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
