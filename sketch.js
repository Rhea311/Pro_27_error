
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bob1,bob2, bob3, bob4,bob5;
var rope1,rope2, rope3, rope4,rope5;
var roof1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  bobDiameter = 40

  
   
	//Create the Bodies Here.
    bob1 = new bob(600,400,100)	
    bob2 = new bob(600,400,100)	
    bob3 = new bob(600,400,100)
    bob4 = new bob(600,400,100)
    bob5 = new bob(600,400,100)
    roof1 = new roof(400,100,600,20)
    rope1 = new rope(bob1.body,roof1.body, -bobDiameter*2,0)
    rope2 = new rope(bob2.body,roof1.body, -bobDiameter*2,0,)
    rope3 = new rope(bob3.body,roof1.body, -bobDiameter*2,0)
    rope4 = new rope(bob4.body,roof1.body, -bobDiameter*2,0)
    rope5 = new rope(bob5.body,roof1.body, -bobDiameter*2,0)
		Engine.run(engine);

    render = Render.create({ 
      element: document.body, engine: engine, 
      options: {
         width: 1200, height: 700, wireframes: false } });

}


function draw() {
  rectMode(CENTER);
  background(0);

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
   if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300}); 
    }
   }


   function drawLine(constraint) {
  bobBodyPosition=constraint.bodyA.position 
  roofBodyPosition=constraint.bodyB.position 
  roofBodyOffset=constraint.pointB; 
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); }
