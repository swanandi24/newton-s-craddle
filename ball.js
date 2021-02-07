class bob{
    constructor(x,y,r) {
        var options = {
            'restitution':1,
            isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r = r;
       
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r,this.r);
        pop();
      }
}