
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  ground_image = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,50,50)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5

  //ground sprite
  ground = createSprite(300,190,600,20);
  ground.addImage(ground_image)
  
  
 
}

function draw(){
  background(160);

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  //false gravity
  trex.velocityY +=0.5;

  //collide
  trex.collide(ground);

  //scrolling
  ground.velocityX = -5.5

  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  drawSprites()
}
