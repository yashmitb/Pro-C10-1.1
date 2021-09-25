var sea,ship;
var seaImg,shipImg1;
var edges;

function preload(){
  //uncomment the code to add animation to ship 

  // shipImg1 = loadAnimation("ship-1.png");
  // shipImg1 = loadAnimation("ship-1.png");
  // shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  // shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,470);
  background("blue");
  edges = createEdgeSprites(); 
  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;


  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  ship.x = 200;
  
}

function draw() {
  background("white");
  text("Press the up & down arrow keys",10,470);
  sea.velocityX = -3;
  ship.collide(edges[1]);
  //uncomment code to reset the background
  if(sea.x < 0){
    // sea.x = 0;
    // sea.x = sea.width;
    sea.x = sea.width/8;
    // sea.y = height;
  }
   ship.velocityY = 0;
   if (keyDown("up") && ship.scale>0.15000000000000005){
     console.log("down");
     ship.scale = ship.scale - 0.02
     ship.velocityY = 0.1;
    ship.x = 200
    console.log(ship.scale);
  }
  
  if (keyDown("down") && ship.scale<0.3500000000000001){
    console.log("up");
    ship.scale = ship.scale + 0.02
    ship.velocityY = -0.1;
    ship.x = 200
    console.log(ship.scale);
  }
 
  drawSprites();
}