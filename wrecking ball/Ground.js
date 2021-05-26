class Ground{
    constructor(x, y, width, height){
        var Options = {
            isStatic = true
        }

        this.Bodies = this.body( x, y, width, height, Options);
        this.width = width;
        this.height = height;
        
        World.add(world, body)

    }

    display(){
        var pos = this.body.position
        push();
        rectMode(CENTER)
        fill(255)
        rect(0 , 0, this.width, this.height);
        pop()
    }
}