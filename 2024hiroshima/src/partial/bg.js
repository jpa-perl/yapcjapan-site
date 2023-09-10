import p5 from "p5";

let sketch = function (p) {
  let canvas;
  let shapes = [];
  let centerX;
  let objectNum;

  const COLOR = "#C32121";

  const ShapeType = {
    CIRCLE: "circle",
    RECT: "rect",
    TRIANGLE: "triangle",
  };

  p.setup = function () {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("p5-container");
    p.pixelDensity(1);
    init();
  };

  function init() {
    centerX = p.width / 2;
    objectNum = p.floor(p.map(p.width, 0, 1920, 10, 60));
  }

  p.draw = function () {
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
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    init();
  };

  class Shape {
    constructor(p) {
      this.p = p;
      this.shapeType = p.random(Object.values(ShapeType));
      this.x = p.random(-p.width / 2, p.width / 2);
      this.y = p.random(p.height);
      this.z = p.random(0, 100);
      this.acl = p.map(this.z, 0, 100, 0.5, 2);
      this.size = p.map(this.z, 0, 100, 10, 100);
      this.rotation = p.random(p.TAU);
      this.rotAcl = p.random(-0.01, 0.01);
      this.color = p.color(COLOR);
      this.strokeWeight = p.map(this.size, 10, 100, 2, 8);
      this.targetOpacity = 255;
      this.show = true;
      this.opacity = 0;
    }

    reset() {
      this.shapeType = p.random(Object.values(ShapeType));
      this.x = p.random(-p.width / 2, p.width / 2);
      this.rotation = p.random(p.TAU);
      this.rotAcl = p.random(-0.01, 0.01);
    }

    setShow(show) {
      this.show = show;
    }

    update() {
      this.y -= this.acl;
      this.x += p.sin(this.y * 0.001 + this.size * 2) / 2;
      const targetOpacity = this.show ? p.map(this.y, p.height, 0, 0, 30) : 0;
      this.opacity += (targetOpacity - this.opacity) * 0.9;
      this.color.setAlpha(this.opacity);
      if (this.y < 0 - this.size) {
        this.y = p.height + this.size;
        this.reset();
      }
      this.rotation += this.rotAcl;
    }

    draw() {
      this.update();
      p.push();
      p.rectMode(p.CENTER);
      p.fill(255, 100);
      p.strokeJoin(p.ROUND);
      p.strokeWeight(this.strokeWeight);
      p.stroke(this.color);
      p.translate(this.x, this.y);
      p.rotate(this.rotation);
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
      p.pop();
    }

    drawCircle() {
      p.circle(0, 0, this.size);
    }

    drawRect() {
      p.rect(0, 0, this.size, this.size);
    }

    drawTriangle() {
      p.beginShape();
      for (let i = 3; i > 0; i--) {
        const R = (p.TAU / 3) * i;
        const x = p.cos(R) * this.size;
        const y = p.sin(R) * this.size;

        p.vertex(x, y);
      }
      p.endShape(p.CLOSE);
    }
  }
};

new p5(sketch);
