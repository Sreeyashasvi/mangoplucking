
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.body;

function preload()
{
	boy=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,600,width,20);
	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1170.130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	Tree = new Tree(1050,580);
	stone = new Stone(235,420,30);
    launcher = new Launcher(stone.body,{x:235,y:420});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,200,340,200,300);
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  stone.display();
  launcher.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    Launcher.fly();
}
function keyPressed() {
     if (keyCode === 32) 
{ 
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
    launcherObject.attach(stoneObj.body);
} 
}

 


function detectollision(lstone,lmango){ 
/*var collision = Matter.SAT.collides(lstone,lmango);
 if(collision.collided){ console.log("collided"); 
 Matter.Body.setStatic(lmango,false); }*/
 mangoBodyPosition=lmango.body.position 
 stoneBodyPosition=lstone.body.position
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
//console.log(distance) // console.log(lmango.r+lstone.r) 
if(distance<=lmango.r+lstone.r) { 
    //console.log(distance);
     Matter.Body.setStatic(lmango.body,false); }
}


