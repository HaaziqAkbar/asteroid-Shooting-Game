var player,playerImg;
var asteroid,asteroidImg;
var backdrop,backdropImg;
var asteroidG;

var playerLife = 100;

var leftKeyActive = false;


// gameStates.
var PLAY = 1;
var END = 0;
var gameState = 1;

function setup() {
 createCanvas(1000,900);

  backdrop = createSprite(400,400);
  backdrop.addImage(backdropImg);
  backdrop.scale = 5;

  backdrop.velocityY = 2;
 
  player = createSprite(450,600,10,10);
  player.scale = 0.5;
  player.addImage(playerImg);

  asteroidG = new Group();

}

function preload(){

    backdropImg = loadImage("./assets/backdrop.jpeg");
    playerImg = loadImage("./assets/rocket.png");
    asteroidImg = loadImage("./assets/rock.png");
}

function draw() {

  if(gameState===PLAY){
    
    background(0);
    edges = createEdgeSprites();
    player.collide(edges);

  if(backdrop.y > 400){
    backdrop.y = height/3;    
  }
  
  spawnAsteroids();

  if(keyDown("w")){
    player.y -= 3;
  }

  if(keyDown("s")){
    player.y += 3;
  }

  if(keyDown("a")){
     leftKeyActive = true;
    player.x -= 3;
  }

  if(keyDown("d")){
    leftKeyActive = false;
    player.x += 3;
  }
  

  if(player.isTouching(asteroidG) && playerLife > 0){
    playerLife = playerLife -20;
  }

 3
  

 drawSprites();

  push();
  fill("white");
  rect(30,40,100,20);
  fill("#f50057");
  console.log('playerLife : ', playerLife);
  rect(30,40,playerLife,20);
  noStroke();
  pop();
}
}

function spawnAsteroids(){
  if(World.frameCount % 30 == 0){
  var asteroid = createSprite(random(900,60),40,10,10);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.2;
  asteroid.velocityY  = 4;
  asteroid.lifetime = 200;
  asteroidG.add(asteroid); 
  }
}
