var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg, leaf, leafImg;
var rand;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
  leaf()
  apple()
  drawSprites();


function apple(){
  if (frameCount%80===0) {
  apple = createSprite(200,0,10,10);
  apple.addImage("apple", appleImg)
  apple.scale = 0.08;
  apple.velocityY = 2;
  var rand =  Math.round(random(60,290))
  apple.x=rand;
  rabbit.depth = apple.depth;
  rabbit.depth = rabbit.depth +1;
  apple.lifetime=150;

}
}
function leaf(){
  if (frameCount%80===0) {
  leaf = createSprite(250,50,10,10);
  leaf.addImage("leaf", leafImg)
  leaf.scale = 0.08;
  leaf.velocityY = 2;
  var rand =  Math.round(random(100,270))
  leaf.x=rand;
  leaf.lifetime=200;

}
}





}

