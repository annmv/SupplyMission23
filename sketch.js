const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,helicopter,box,supply;
var image1;

function preload()
{
image1 = loadImage("helicopter.png");	
} 

function setup()
{
    var canvas = createCanvas(400,400);
    engine = Engine.create();
	world = engine.world;
	var options =
	{
		isStatic: true
	}
	ground = Bodies.rectangle(200,390,400,20,options);
	supply = Bodies.rectangle(200,100,30,30,options);
	boxl = Bodies.rectangle(90,330,20,100,options);
	boxb = Bodies.rectangle(200,370,200,20,options); 
	boxr = Bodies.rectangle(300,330,20,100,options)
	helicopter = Bodies.rectangle(200,100,200,50,options);
	World.add(world,ground);
	World.add(world,supply);
	World.add(world,boxl);
	World.add(world,boxb);
	World.add(world,boxr);
	World.add(world,helicopter);
}

function draw() {
	background("black");
	Engine.update(engine);
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,400,20);
	rectMode(CENTER);
	rect(supply.position.x,supply.position.y,30,30);
	rectMode(CENTER);
	fill("red");
	rect(boxl.position.x,boxl.position.y,20,100);
	rectMode(CENTER);
	rect(boxb.position.x,boxb.position.y,200,20);
	rectMode(CENTER);
	rect(boxr.position.x,boxr.position.y,20,100);
	imageMode(CENTER);
	image(image1,helicopter.position.x,helicopter.position.y,200,50);
	Engine.update(engine);
}

function keyPressed() {
	if(keyCode===(DOWN_ARROW)) 
	{
		Matter.Body.setStatic(supply,false);
	}
}