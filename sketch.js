var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var engine,world

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadAnimation("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	engine=Engine.create()
	world=engine.world
	fairyVoice.play();
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
  World.add(world,fairy)
   
  var option={
	restitution:1,
	// isStatic:true
}

	star=createSprite(650,30,option)
	star.addAnimation("star",starImg);
	star.scale=0.3
	

	//starBodies = Bodies.circle(650 ,30  , 5 , option);
	
	World.add(world, star);
//	star.x=starBodies.x;
//	star.y=starBodies.y;
	Engine.run(engine);

}


function draw() {

	background(bgImg);
	Engine.update(engine);
	//ellipseMode(RADIUS)
	//ellipse(star.position.x,star.position.y,50,50);
	
 console.log(fairy.x)
  if(star.y>470){
	 star.velocityY=0
  }
 
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode === RIGHT_ARROW){
		fairy.x=fairy.x+20
	}
	if(keyCode === LEFT_ARROW){
		fairy.x=fairy.x-20
	}
	if(keyCode === DOWN_ARROW){
		
	star.velocityY=4;
	// star = Bodies.circle(650 ,30  , 5 , option1);
	// World.add(world, star)
	}
}
