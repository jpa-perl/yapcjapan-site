import p5 from "p5";

let canvas;
let shapes = [];
let centerX;
let objectNum;

const COLOR = "#C32121";

/**
 *
 * @param {p5} p
 */
function setup(p) {
  canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  canvas.parent("p5-container");
  p.pixelDensity(1);
  init(p);
}

/**
 *
 * @param {p5} p
 */
function init(p) {
  centerX = p.width / 2;
  objectNum = p.floor(p.map(p.width, 0, 1920, 10, 60));
}

/**
 *
 * @param {p5} p
 */
function draw(p) {
  p.background(255);
  p.push();
  p.translate(centerX, 0);
  for (let i = 0; i < objectNum; i++) {
    if (shapes[i] == null) {
      shapes[i] = new Shape(p);
    }
    const shape = shapes[i];
    if (i > objectNum) {
      shape.setShow(false);
    } else {
      shape.setShow(true);
    }
    shape.draw();
  }
  p.pop();
}

/**
 *
 * @param {p5} p
 */
function windowResized(p) {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
  init(p);
}

const ShapeType = {
  CIRCLE: "circle",
  RECT: "rect",
  TRIANGLE: "triangle",
};

class Shape {
  constructor(p) {
    /**
     * @type {p5}
     */
    this.p = p;

    this.shapeType = this.p.random(Object.values(ShapeType));
    this.x = this.p.random(-this.p.width / 2, this.p.width / 2);
    this.y = this.p.random(this.p.height);
    this.z = this.p.random(0, 100);
    this.acl = this.p.map(this.z, 0, 100, 0.5, 2);
    this.size = this.p.map(this.z, 0, 100, 10, 100);
    this.rotation = this.p.random(this.p.TAU);
    this.rotAcl = this.p.random(-0.01, 0.01);
    this.color = this.p.color(COLOR);
    this.strokeWeight = this.p.map(this.size, 10, 100, 2, 8);
    this.targetOpacity = 255;
    this.show = true;
    this.opacity = 0;
  }

  reset() {
    this.shapeType = this.p.random(Object.values(ShapeType));
    this.x = this.p.random(-this.p.width / 2, this.p.width / 2);
    this.rotation = this.p.random(this.p.TAU);
    this.rotAcl = this.p.random(-0.01, 0.01);
  }

  setShow(show) {
    this.show = show;
  }

  update() {
    this.y -= this.acl;
    this.x += this.p.sin(this.y * 0.001 + this.size * 2) / 2;
    const targetOpacity = this.show
      ? this.p.map(this.y, this.p.height, 0, 0, 30)
      : 0;
    this.opacity += (targetOpacity - this.opacity) * 0.9;
    this.color.setAlpha(this.opacity);
    if (this.y < 0 - this.size) {
      this.y = this.p.height + this.size;
      this.reset();
    }
    this.rotation += this.rotAcl;
  }

  draw() {
    this.update();
    this.p.push();
    this.p.rectMode(this.p.CENTER);
    this.p.fill(255, 100);
    this.p.strokeJoin(this.p.ROUND);
    this.p.strokeWeight(this.strokeWeight);
    this.p.stroke(this.color);
    this.p.translate(this.x, this.y);
    this.p.rotate(this.rotation);
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
    this.p.pop();
  }

  drawCircle() {
    this.p.circle(0, 0, this.size);
  }

  drawRect() {
    this.p.rect(0, 0, this.size, this.size);
  }

  drawTriangle() {
    this.p.beginShape();
    for (let i = 3; i > 0; i--) {
      const R = (this.p.TAU / 3) * i;
      const x = this.p.cos(this.p.R) * this.size;
      const y = this.p.sin(this.p.R) * this.size;

      this.p.vertex(x, y);
    }
    this.p.endShape(this.p.CLOSE);
  }
}

/**
 *
 * @param {p5} p
 */
const sketch = (p) => {
  p.setup = () => setup(p);
  p.draw = () => draw(p);
  p.windowResized = () => windowResized(p);
};

new p5(sketch);
