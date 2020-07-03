class Ball{
    constructor() {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y, 50,50);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
        pop();
      }
}