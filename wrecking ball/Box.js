class Box {
    constructor ( x, y, width, height) 
    {
        var Options = {
            'restitution':0.8,
            'friction':0.1,
            'density':0.04,
        }
        this.Bodies = this.body( x, y, width, height, Options);
        this.width = width;
        this.height = height;
        
        World.add(world, body)

    }

    display(){
     var pos = this.body.position;
    var angle = this.body.angle;
        
    push();
    translate(pos.x, pos.y)
    rotate(angle)
    rectMode(CENTER);
    StrokeWeight(4)
    STROKE("green")
    fill(255)
    rect(0 , 0, this.width, this.height);
    Pop();
    }
}