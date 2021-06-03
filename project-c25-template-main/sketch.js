
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperObject=new paper(200,450,70);
    
	var render = Render.create()({
		element: document.body,
		engine: engine,
		options:{
		width: 1600,
		height: 700,
		wireframes: false
		}
		})
		
		Render.run(render);

	Engine.run(engine);
  
}
function keyPressed() {
 if (keycode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body, paperObject.body-position, (x=130,y=145));
 } 
}
function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
}
