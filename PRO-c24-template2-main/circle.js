
class Circle {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y,30, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      ellipseMode(RADIUS)
      ellipse(0, 0, 40,40);
      pop();
    };
  };
  