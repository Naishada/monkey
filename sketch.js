
var monkey , monkey_running
var banana ,bananaImage,bananas, stones, obstacleImage
var FoodGroup, stonesGroup;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,600);
   background("lightblue");
   monkey = createSprite(100,500,20,20);
   monkey.addAnimation("monkey r",monkey_running);
   monkey.scale = 0.2;
  
  ground = createSprite(300,580,600,20);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
 
  bananasGroup = new Group ();
  stonesGroup =  new Group () ;
}


function draw() {
   background("lightblue");
   banana(); 
   stone();
  text(mouseX+","+mouseY,mouseX,mouseY);
  
   drawSprites();
 stroke("lightblue");
 textSize(20);
 fill("pink");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime" + survivalTime,240,50)
  ground = createSprite(300,580,600,20);
  ground.velocityX = -4;
  ground.x = ground.width / 2;  
 
 monkey.debug = true; 
  if (keyDown("space")&& monkey.y >= 200) {
                
  monkey.velocityY=-12;
  
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
}
function banana(){
  if(frameCount%160===0){
    bananas = createSprite(600,200,20,20);
    bananas.addImage("banana0",bananaImage);
    bananas.scale = 0.15; 
    bananas.y=Math.round(random(450,50));
    bananas.velocityX=-3;
    bananas.lifetime=200;
    bananasGroup.add(bananas);
  }
}
function stone(){        
  if(frameCount%200===0){
    stones = createSprite(400,515,20,20);
    stones.addImage("stone",obstaceImage);
    stones.scale=0.3;
    stones.lifetime=300;
    stones.velocityX=-3;
    stones.debug = true;
    stonesGroup.add(stones);
  }
}
