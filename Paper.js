class Paper {
    constructor(x,y,radius){
        
        var options = {
            restitution:0.3,
            friction: 0.5,
            density:1.2

        }
        
        this.body = Bodies.circle(x,y,radius/2,options);
        this.image = loadImage("paper.png");
        console.log(this.body);
        World.add(world,this.body);

    }

    display(){
        
        push();
        //fill("yellow");
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y-30, this.body.circleRadius)
        //circle(this.body.position.x, this.body.position.y, this.body.circleRadius);
        pop();
    }
}