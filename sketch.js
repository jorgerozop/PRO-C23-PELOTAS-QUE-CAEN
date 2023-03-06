const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var btn1;

var particle1, particle2,particle3,particle4,particle5;
var particle6, particle7,particle8,particle9,particle10,particle11;
var particle12, particle13, particle14, particle15;
var rotator1, rotator2, rotator3, rotator4, rotator5, rotator6, rotator7, rotator8, rotator9;
var block1, block2, block3, block4, block5; 
var fondoImg, lunaImg;


var angle1=60;
var angle2=60;
var angle3=60;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    //plano creado y cuerpos de bloques
    var plane_options={
      isStatic: true
    }

    
    plane = Bodies.rectangle(600,height,windowWidth,20,plane_options);
    World.add(world,plane);
    block1=Bodies.rectangle(windowWidth-900,400,150,20,plane_options);
    World.add(world,block1);
    block2=Bodies.rectangle(windowWidth-300,400,150,20,plane_options);
    World.add(world,block2);
    block3=Bodies.rectangle(windowWidth-1100,400,150,20,plane_options);
    World.add(world,block3);
    block4=Bodies.rectangle(windowWidth-500,400,150,20,plane_options);
    World.add(world,block4);
    block5=Bodies.rectangle(windowWidth-700,400,150,20,plane_options);
    World.add(world,block5);

    btn1 = createImg("up.png");
    btn1.position(windowWidth-150, 100);
    btn1.size(120,120);
    btn1.mouseClicked(vForce);  

    //partículas múltiples de cuerpos creadas 
    var particle_options = {
      restitution:0.4,
      friction:0.02
    }

    particle1 = Bodies.circle(windowWidth/2,10,2,particle_options);
    World.add(world,particle1);
    particle2 = Bodies.circle(windowWidth/2,10,7,particle_options);
    World.add(world,particle2);
    particle3 = Bodies.circle(windowWidth/2,10,10,particle_options);
    World.add(world,particle3);
    particle4 = Bodies.circle(windowWidth/2,10,13,particle_options);
    World.add(world,particle4);
    particle5 = Bodies.circle(windowWidth/2,10,15,particle_options);
    World.add(world,particle5);
    particle6 = Bodies.circle(windowWidth-300,10,9,particle_options);
    World.add(world,particle6);
    particle7 = Bodies.circle(windowWidth-300,10,10,particle_options);
    World.add(world,particle7);
    particle8 = Bodies.circle(windowWidth-300,10,10,particle_options);
    World.add(world,particle8);
    particle9 = Bodies.circle(windowWidth-300,10,10,particle_options);
    World.add(world,particle9);
    particle10 = Bodies.circle(windowWidth-300,10,10,particle_options);
    World.add(world,particle10);
    particle11 =Bodies.circle(windowWidth/4,10,10,particle_options);
    World.add(world,particle11);
    particle12 =Bodies.circle(windowWidth/4,10,10,particle_options);
    World.add(world,particle12);
    particle13 =Bodies.circle(windowWidth/4,10,10,particle_options);
    World.add(world,particle13);
    particle14 =Bodies.circle(windowWidth/4,10,10,particle_options);
    World.add(world,particle14);
    particle15 =Bodies.circle(windowWidth/4,10,10,particle_options);
    World.add(world,particle15);

    var rotator_options={
      // isStatic=true
      // isStatic true
      // isStatic:false
       isStatic:true
    };

    // rotator1 = rectangle(250,200,150,20,rotator_options);
    // World.add(world,rotator1);

    // rotator1 = Bodies.rectangle();
    // World.add(world,rotator1);

    // rotator1 = Bodies.circle(250,200,150,20,rotator_options);
    // World.add(world,rotator1);

     rotator1 = Bodies.rectangle(windowWidth-300,200,150,20,rotator_options);
     World.add(world,rotator1);

    rotator2 = Bodies.rectangle(windowWidth-300,200,150,20,rotator_options);
    World.add(world,rotator2);

    rotator3 = Bodies.rectangle(windowWidth-300,200,150,20,rotator_options);
    World.add(world,rotator3);

    rotator4 = Bodies.rectangle(windowWidth/2,200,150,20,rotator_options);
    World.add(world,rotator4);

    rotator5 = Bodies.rectangle(windowWidth/2,200,150,20,rotator_options);
    World.add(world,rotator5);

    rotator6 = Bodies.rectangle(windowWidth/2,200,150,20,rotator_options);
    World.add(world,rotator6);

    rotator7 = Bodies.rectangle(windowWidth/4,200,150,20,rotator_options);
    World.add(world,rotator7);

    rotator8 = Bodies.rectangle(windowWidth/4,200,150,20,rotator_options);
    World.add(world,rotator8);

    rotator9 = Bodies.rectangle(windowWidth/4,200,150,20,rotator_options);
    World.add(world,rotator9);
    
    fondoImg = loadImage("fondo.jpg");
    lunaImg  = loadImage("luna.png");
    //dar estilo a los cuerpos aquí
    fill("brown");
    stroke("black")
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){  
    background(fondoImg);
    Engine.update(engine);

  //forma creada para el plano y postura
  rect(plane.position.x,plane.position.y,windowWidth,20);  
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  rect(block3.position.x,block3.position.y,150,20);
  rect(block4.position.x,block4.position.y,150,20);
  rect(block5.position.x,block5.position.y,150,20);


  //forma creada para todas las partículas
  ellipse(particle1.position.x,particle1.position.y,20,20);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);
  ellipse(particle6.position.x,particle6.position.y,10);
  ellipse(particle7.position.x,particle7.position.y,10);
  ellipse(particle8.position.x,particle8.position.y,10);
  ellipse(particle9.position.x,particle9.position.y,10);
  ellipse(particle10.position.x,particle10.position.y,10);
  ellipse(particle11.position.x,particle11.position.y,10);
  ellipse(particle12.position.x,particle12.position.y,10);
  ellipse(particle13.position.x,particle13.position.y,10);
  ellipse(particle14.position.x,particle14.position.y,10);
  ellipse(particle15.position.x,particle15.position.y,10);

  //forma creada para todos los rotadores
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.3;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
  Matter.Body.rotate(rotator4,angle3)
  push();
  translate(rotator4.position.x,rotator4.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4  ;
  
  Matter.Body.rotate(rotator5,angle3)
  push();
  translate(rotator5.position.x,rotator5.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
  Matter.Body.rotate(rotator6,angle3)
  push();
  translate(rotator6.position.x,rotator6.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
  Matter.Body.rotate(rotator7,angle3)
  push();
  translate(rotator7.position.x,rotator7.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
  Matter.Body.rotate(rotator8,angle3)
  push();
  translate(rotator8.position.x,rotator8.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
  Matter.Body.rotate(rotator9,angle3)
  push();
  translate(rotator9.position.x,rotator9.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
}

function vForce(){
    Matter.Body.applyForce(particle1,   {x: 0, y: 0}, {x: -0.01, y: -0.01})
    Matter.Body.applyForce(particle2,   {x: 0, y: 0}, {x: -0.01, y: -0.01})
    Matter.Body.applyForce(particle3,   {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle4,   {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle5,   {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle6,   {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle7,   {x: 0, y: 0}, {x: 0.01, y: -0.01})
    Matter.Body.applyForce(particle8,   {x: 0, y: 0}, {x: 0.01, y: -0.01})
    Matter.Body.applyForce(particle9,   {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle10,  {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle11,  {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle12,  {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle13,  {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle14,  {x: 0, y: 0}, {x: 0, y: -0.01})
    Matter.Body.applyForce(particle15,  {x: 0, y: 0}, {x: 0, y: -0.01})
  

}