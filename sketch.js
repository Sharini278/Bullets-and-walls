var bullet,wall; 
var speed,weight,thickness;
var deformation

function setup() {
  createCanvas(1600,400);
  
 
 
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(28,83);
 
 bullet=createSprite(400, 200, 50, 20);
 wall=createSprite(1500,200,thickness,height/2);

 bullet.velocityX=speed;

 bullet.shapeColor=color(255,255,255);
 wall.shapeColor=color(80,80,80);
}

function draw() {
  background("lightBlue");  
  
  if(hasCollided(bullet,wall)){
 
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  
    if(damage>10){
      wall.shapeColor=color("red");
    }
  
    if(damage<10){
      wall.shapeColor=color("green");
    }
    }
drawSprites();
}

function hasCollided(lbullet,lwall) {

  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    
    return true
  }
    return false;


 }



