const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;
var pig1,pig2;
var log1,log2,log3,log4,log5,log6;
var bird1;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,230,70,70);
    box4 = new Box(920,230,70,70);
    box5 = new Box(810,160,70,70);
    box6 = new Box(1020,315,30,30);
    box7 = new Box(600,335,30,30);
    box8 = new Box(600,05,30,30);
    box9 = new Box(1020,85,30,30);

    pig1 = new Pig(810,350);
    pig2 = new Pig(810,260);

    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,190,300,PI/2);
    log3 = new Log(759,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
    log5 = new Log(600,220,200,0);
    log6 = new Log(1020,200,200,0);

    bird1 = new Bird(100,360);

    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ground.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();

    pig1.display();
    pig2.display();

    bird1.display();

    text("HAVE FUN BREAKING!!",5,200);
}