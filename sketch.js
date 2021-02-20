var fixedRect, movingRect,fixedRect1;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(450,200,80,30);
  fixedRect1 = createSprite(700,200,50,80);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else if(isTouching(fixedRect1,movingRect)){
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue";
  }
  else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect1.shapeColor = "green";
  }

  drawSprites();
}
function isTouching(fixedRect,movingRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  return true;
}
else {
  return false;
 
}
}