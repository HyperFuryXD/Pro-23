

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,tall1,tall2,collector;
var collectorBody,tall1Body,tall2Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	world = engine.world;
	engine = Engine.create();


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	tall1 = createSprite(250,620,20,100);
	tall1.shapeColor="red";
	tall1Body = Bodies.rectangle(250,620,20,100,{isStatic:true});
	World.add(world,tall1Body);

	tall2 = createSprite(550,620,20,100);
	tall2.shapeColor="red";
	tall2Body = Bodies.rectangle(550,620,20,100,{isStatic:true});
	World.add(world,tall2Body);
   

	collector = createSprite(400,650,300,20);
	collector.shapeColor="red";
	collectorBody = Bodies.rectangle(400,650,300,20,{isStatic:true});
	World.add(world,collectorBody);
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false)
  packageBody.setScale = 0.7; 
  }
}



