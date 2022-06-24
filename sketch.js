var bg_img, explorer;
var guerrero;
var piramide;
var invisibleground;

function preload(){
piramide = loadImage("assets/piramide.jpg");
guerreroImg = loadImage("assets/guerrero.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  guerrero = createSprite(700,600,100,100);
  guerrero.addImage(guerreroImg);
  guerrero.scale = 0.5;

  invisibleground = createSprite(200,775,1200,10);

}

function draw() {
  background(piramide);
  
  if(keyDown(RIGHT_ARROW)){
  guerrero.x = guerrero.x + 4;
  }

  if(keyDown(LEFT_ARROW)){
    guerrero.x = guerrero.x - 4;
    }
  
  if(keyDown("space")){
  guerrero.velocityY = + 0.4;
  }

  guerrero.collide(invisibleground);

  guerrero.velocityY = guerrero.velocityY +0.8;

  drawSprites();
  }  