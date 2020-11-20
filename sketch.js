var wall,thick;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thick = Math.round(random(22,83))
  wall=createSprite(1200,200,thick,height/2);
  bullet.velocityX = speed;
}


function draw() {
  background(0);  
  drawSprites();
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var de = 0.5 * weight * speed* speed/(thick*thick*thick);
    console.log(de);
    if (de > 10)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if (de<10)
    {
      bullet.shapeColor= color(0,255,0);
    }
  
  }

}

function hasCollided(lbullet,lwall){
     rightEdgeBullet= bullet.x+bullet.width;
     leftEdgeWall= wall.x;
     if (rightEdgeBullet>=leftEdgeWall){
       return true
     }
      return false
     
}

