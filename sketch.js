
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, mango1, mango2, mango3, mango4, mango5, mango6, stone, rope;
var boyIMG;

function preload()
{
	boyIMG = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground();
tree = new Tree(700,450);
mango1 = new Mango(786,290);
mango2 = new Mango(720,310);
mango3 = new Mango(655,300);
mango4 = new Mango(600,380);
mango5 = new Mango(690,390);
mango6 = new Mango(640,410);
stone = new Stone(45,550);
rope = new Elastic(stone.body, {x:45, y:550});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  image(boyIMG, 120, 610, 250,250);
  stone.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  

  drawSprites();
 
}

function mouseDragged(){
 Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
 Matter.Body.applyForce(stone.body, stone.body.position, {x: 600, y: -105});
}

function mouseReleased(){
  rope.fly();
}

function detectCollision(stone, mango){
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);
  }
}


