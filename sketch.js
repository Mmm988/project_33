//creating variables
var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var particles = [];
var particle;
var plinkos = [];

var divisions=[];
var divisionHeight=300;

var score =0;
var count=0;

var gameState="play";

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

//making sprites
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(0);

  if(gameState==="play"){
    //displaying the scores
  textSize(20)
  text("Score : "+score,20,30);
  text("100",20,550)
  text("100",100,550)
  text("100",180,550)
  text("50",265,550)
  text("50",345,550)
  text("50",425,550)
  text("50",505,550)
  text("100",580,550)
  text("100",660,550)
  text("100",740,550)

  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

//   if(frameCount%60===0){
//     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
//     score++;
//   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

//increasing the scores
   if(particles.x<240 && particles.y>500){
       score=score+100;
    }

  if(particles.x>560 && particles.y>500){
    score=score+100;
  }

  if(particles.x>240 && particles.x<560 && particles.y>500){
    score=score+50;
  }

//counting the number of times played
   if(count===6){
     score=0;
     fill(255)
     textSize(50)
     text("GAME OVER",250,400)
     gameState="end";
   }
  } else{
    text("RELOAD TO PLAY AGAIN",100,400)
    gameState="end";
  }
}


function keyPressed(){
  if(keyCode===32){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     count++;
     score=score+Math.round(random(5,10))

     if(particles.x<240 && particles.y>500){
       score=score+100;
    }

  if(particles.x>560 && particles.y>500){
    score=score+100;
  }

  if(particles.x>240 && particles.x<560 && particles.y>500){
    score=score+50;
  }
  }
}   