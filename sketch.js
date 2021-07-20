const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2;
var blocks;
var Bg;

function preload(){
  setTime();

}

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;

  ground1 = new Ground(300,380,150,10);
  ground2 = new Ground(600,270,150,10);

  block1 = new BlueBlocks(300,360,20,30);
  block2 = new BlueBlocks(280,360,20,30);
  block3 = new BlueBlocks(260,360,20,30);
  block4 = new BlueBlocks(240,360,20,30);
  block5 = new BlueBlocks(320,360,20,30);
  block6 = new BlueBlocks(340,360,20,30);
  block7 = new BlueBlocks(360,360,20,30);
  block8 = new BlueBlocks(600,250,20,30);
  block9 = new BlueBlocks(580,250,20,30);
  block10 = new BlueBlocks(560,250,20,30);
  block11 = new BlueBlocks(620,250,20,30);
  block12 = new BlueBlocks(640,250,20,30);

  block13 = new RedBlocks(300,330,20,30);
  block14 = new RedBlocks(280,330,20,30);
  block15 = new RedBlocks(260,330,20,30);
  block16 = new RedBlocks(320,330,20,30);
  block17 = new RedBlocks(340,330,20,30);
  block24 = new RedBlocks(600,190,20,30);

  block18 = new GreenBlocks(300,300,20,30);
  block19 = new GreenBlocks(280,300,20,30);
  block20 = new GreenBlocks(320,300,20,30);
  block21 = new GreenBlocks(620,220,20,30);
  block22 = new GreenBlocks(600,220,20,30);
  block23 = new GreenBlocks(580,220,20,30);

  block25 = new Block(300,270,20,30);

  hexagon = new Hexagon(100,300,30);
  Sling = new Slingshot(hexagon.body,{x:100,y:280});

}

function draw() {
  if (Bg){
  background(Bg); 
  }
  Engine.update(engine);
  
 ground1.display(); 
 ground2.display(); 
 
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();

 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();

 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block24.display();

 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();

 block25.display();

 hexagon.display();
 Sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
 // console.log("Mohit");
  Sling.fly();
}

function keyPressed(){
 if (keyCode == 32){
  Sling.attach(hexagon.body);
 }
}

async function setTime(){
var data = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var dataJSON = await data.json();
var datetime = dataJSON.datetime;
var hr = datetime.slice(11,13);

if (hr >=6 && hr<=18){
  bg = "light.jpg.png";
}
else{
  bg = "dark.jpg.png";
}
Bg = loadImage(bg);
}