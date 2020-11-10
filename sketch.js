var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(windowWidth,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 
  bullet=createSprite(50,200,50,10);
  bullet.shapeColor="white";
  wall=createSprite(width-300,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);
  bullet.velocityX=speed;
  

}

function draw() {
  background("blue");  
  isTouching(bullet,wall);
  drawSprites();
}

