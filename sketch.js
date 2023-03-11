var bg,bgImg;
var player, shooterImg, shooter_shooting;
var ghostGroup, ghost, ghostImg
var bullet,bulletImg,bulletGroup;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bulletImg = loadImage("assets/projectile.png")
   bgImg = loadImage("assets/background1.png")
  ghostImg = loadImage("assets/Ghost.png")
}

function setup() {
ghostGroup = new Group();
  bulletGroup = new Group();
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1350, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 
  spawnGhosts();



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){

 var bullet = createSprite(displayWidth-1350, player.y-30,20,10);
 bulletGroup.add(bullet);
  bullet.scale = 0.2
  bullet.addImage("projectile", bulletImg);
  player.addImage(shooter_shooting);
  bullet.velocityX = 20;
 bullet.depth = player.depth;
 player.depth = player.depth+1;
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
function spawnGhosts(){
 if(frameCount%60===0){
  ghost = createSprite(random(500,1500),random(100,500), 40,40);
  ghost.addImage("ghost",ghostImg);
  ghost.velocityX = -3;
  ghost.lifetime = 500
  ghost.scale = 0.3
  ghostGroup.add(ghost);
 }
}
