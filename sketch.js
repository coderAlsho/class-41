var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var passedFinish = false;

var finishedPlayers = 0;

var form, player, game;
var track,car1Image,car2Image,car3Image,car4Image,ground
var cars, car1, car2, car3, car4;
var bronze, silver, gold;
function preload(){
track = loadImage("images/track.jpg");
car1Image = loadImage("images/car1.png");
car2Image = loadImage("images/car2.png");
car3Image = loadImage("images/car3.png");
car4Image = loadImage("images/car4.png");
ground = loadImage("images/ground.png");
bronze = loadImage("images/bronze.png");
silver = loadImage("images/silver.png");
gold = loadImage("images/gold.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background(200, 200, 255);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(finishedPlayers === 4){
    game.update(2)

  }

  if(gameState === 2 && finishedPlayers === 4){
    clear();
    
    game.displayRanks()

  }
}
