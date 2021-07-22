var path,pathImage,bomb,bombimage,coin,coinimage,energy,energyimage,power,powerimage;
var runner,runnerimage;
function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  bombimage=loadImage('bomb.png');
  coinimage=loadImage('coin.png');
energyimage=loadImage('energyDrink.png');
powerimage=loadImage('power.png');
runnerimage=loadAnimation('Runner-1.png','Runner-2.png');
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path = createSprite(200,200);
 path.addImage(pathImage);
 path.velocityY=4;
runner=createSprite(180,340,30,30);
runner.addAnimation('runner',runnerimage);
runner.scale=0.1;
  

}

function draw() {
  background(0); 
  runner.x=mouseX;
  path.velocityY=4;
  if (path.y>400){
    path.y=path.height/2;
  }
  //moving background
 drawSprites();
}
/*
var img = document.createElement("img");
 
img.src = "path.png";
var src = document.getElementById("x");
 
src.appendChild(img);*/