var sb,sbImage
var bg,bgImage
var patty,pattyImage
function preload(){
  sbImage=loadAnimation("images/sb1.png","images/sb3.png","images/sb5.png")
  bgImage=loadImage("images/bg.jpg")
  pattyImage=loadImage("images/pattty.png")
}
function setup()
 {
    createCanvas(1650,1300);

bg=createSprite(1000,700,2600,1000)
bg.addImage(bgImage)
bg.scale=3.5
bg.velocityX=6
bg.x=bg.width/2

sb=createSprite(1550,950,10,10)
sb.addAnimation("running",sbImage)
sb.scale=1.5;
   
}

function draw() 
{
  background("peachpuff"); 
  if(bg.x>1300){
bg.x=bg.width/2
  }
  if(keyDown==="SPACE"){
sb.y=sb.y-3
  }
  if(keyDown===DOWN_ARROW){
sb.y=sb.y+3
  }
  pattyObstacle()
  drawSprites();
}

function pattyObstacle(){
  if(frameCount%60===0){
    patty=createSprite(0,random(300,1000),30,30)
    patty.addImage(pattyImage)
    patty.velocityX=4
    patty.scale=0.3
  }
  
  
}
