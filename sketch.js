var bullet , wall,speed,weight,thickness 













function setup() {
  createCanvas(1600,400);
  speed= random(223,321)
  weight= random(30,52)
  thickness=random(22,83)
  bullet= createSprite(50, 200, 50, 5);
   bullet.velocityX = speed
   bullet.shapeColor = "white"
   wall = createSprite(1200,200,thickness,200)
   wall.shapeColor = "grey"
   
}

function draw() {

  background(0);  
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var deform = 0.5*weight*speed*speed/thickness*thickness*thickness
    if (deform>10){
      wall.shapeColor="red"

    } 
    
    if (deform<10){
      wall.shapeColor = "blue"
    }
  }
  drawSprites();
}
function hasCollided (bullet,wall){
  bulletedge=bullet.x + bullet.width 
  walledge=wall.x 
  if (bulletedge>= walledge){
    return true
  }
  return false
}
