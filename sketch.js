var fr,mr;


function setup() {
  createCanvas(800,400);
 fr =  createSprite(200, 200, 30, 80);
 fr.shapeColor = "green";
 mr =  createSprite(300, 200, 80, 30);
 mr.shapeColor = "green";
}

function draw() {
  background(0);  

mr.x = mouseX;
mr.y = mouseY;

if (isTouching(mr,fr)){
  mr.shapeColor = "red";
  fr.shapeColor = "red";
}
else{
  mr.shapeColor = "green";
  fr.shapeColor = "green";
  
}
  drawSprites();
}
function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2+ object1.height/2 &&
    object2.y - object1.y < object2.height/2+ object1.height/2){
 return true;
}
else{
return false;
}
}