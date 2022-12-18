var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invcliGroup, invisibleBlock;
var gameState = "play"
var ran
function preload(){
  towerImg = loadImage("skylon3.jpg");
  doorImg = loadImage("doortoheaven_Depositphotos_14808267_b.jpg");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("R.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.5
  ghost.debug=true
  ghost.setCollider("rectangle",-20,120,80,50)
  
  climbersGroup = new Group()
  invcliGroup = new Group()
}

function draw() {
  background(200);
  
  if(keyDown("space")) {
    ghost.velocityY = -7
  }

  if(keyDown("right")) {
    ghost.x = ghost.x + 2.5
  }

  if(keyDown("left")) {
    ghost.x = ghost.x - 2.5
  }

  ghost.velocityY = ghost.velocityY + 0.25

  if(climbersGroup.isTouching(ghost) || keyDown("f")) {
    ghost.velocityY = 0
  }

  if(keyDown("g")) {
    ghost.velocityY = ghost.velocityY - 0.5
  }
  
  if(tower.y > 600){
      tower.y = 100
  }
  
  if(ghost.y>700) {
    ghost.y=-700
  }

  if(ghost.y<-700) {
    ghost.y=700
  }
  
  spawnDoors()
  drawSprites()
}

function spawnDoors() {
  ran = Math.round(random(100,500))
  if (frameCount % 200===0) {
    door = createSprite(ran,0)
    door.addImage("door",doorImg)
    door.velocityY = 1

    climber = createSprite(ran,door.y+50)
    climber.addImage("climber",climberImg)
    climber.velocityY = 1
    climbersGroup.add(climber)

    invcli = createSprite(ran,door.y+60,100,20)
    invcli.visible = false
    invcli.debug = true
    invcli.velocityY = 1
    invcliGroup.add(invcli)
    
    ghost.depth = climber.depth+1

    
    
  }
}
