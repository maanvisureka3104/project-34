const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops=100;
function preload(){
    
}

function setup(){
createCanvas(500,500);   
    
engine=Engine.create();
world=engine.world
Engine.run(engine);

drops(100,100);
for(var i=0;i<100;i++){
    drops.push(new createDrop(random(0,400), random(0,400)))
}
}

function draw(){
 background("black");
 Engine.update(engine);  
 drops.display();
 if(this.rain.position.y>height){
  Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
 }
}   

