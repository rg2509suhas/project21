var bullet,wall,thikness;
var weight,speed;



function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);
 thikness=random(23,83)
 bullet= createSprite(50, 200, 50, 5);
 bullet.velocityX=speed;
 bullet.shapeColor="white";
 wall=createSprite(1500,200,thikness,height/2);
 wall.shapeColor="black";
}

function draw() {
  background(grey);  
 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thikness*thikness*thikness);
    if(damager>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
 }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false
}