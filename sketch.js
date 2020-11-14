
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(70,500,20,20);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.19
  ground=createSprite(300,570,1200,10);
  ground.x = ground.width /2;
  score=0;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  

       
}


function draw() {    
  background("white");
  text("score:"+score,300,200)
  
  if (keyDown("space")&&monkey.y>=450){ 
    monkey.velocityY=-16
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  console.log(monkey.y);
  spawnfruit();
  ground.velocityX=-12
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  spawnobstacles();
  monkey.debug=false;
  
  monkey.setCollider("circle",0,0,320);
  
  if (monkey.isTouching(FoodGroup)){
    score=score+1
    FoodGroup.destroyEach();
}
 
  
  
  

  drawSprites ()  ;     
}
function spawnfruit(){
  if (frameCount % 80 ===0 ){
    banana=createSprite(600,300,20,20);
  banana.addImage("fruit",bananaImage);
  banana.scale=0.1;
    banana.velocityX=-12
    banana.y=Math.round(random(250,350));
   FoodGroup.add(banana);
  }
  
   
  
}
function spawnobstacles(){
  if (frameCount % 200 ===0){
        obstacle=createSprite(600,550,20,20) ;
    obstacle.addImage("boulders",obstacleImage);
    obstacle.scale=0.25;
    obstacle.velocityX=-12
    obstacleGroup.add(obstacle)
    
  }
}






