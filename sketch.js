var sea;
var edges;
var sea_img;
var ship;
var ship_sailing;

function preload(){
  ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  sea_img = loadImage("sea.png");
}

function setup(){
  createCanvas(700,400);
  sea = createSprite(100,20,200,200);
  sea.addImage(sea_img);

  ship = createSprite(200,200,50,50)
  ship.addAnimation("Sailing", ship_sailing);
  ship.scale = 0.3;
}

function draw(){
  sea.velocityX = -20;

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  console.log(sea.x);
  drawSprites(); 
}