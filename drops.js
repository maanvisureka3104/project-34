class drops{
    constructor(x,y){
        var option={
            'isStatic' : false,
            'restitution' : 0.3,
             'friction': 0.1,
             'density': 0.1,
              }
            this.body=Bodies.circle(x,y,10,option);
            this.x=x;
            this.y=y;             
            this.radius=10;
            World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill('blue');
        rotate(angle);
        rectMode(CENTER);
        ellipse(this.x,this.y,this.radius,this.radius);
        pop();     
    }
}