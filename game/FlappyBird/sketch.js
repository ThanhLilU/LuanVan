var panSpeed = 0;
var gravity = 0;
var player;

var pipes;
var pipes2;
var ground;
var pauseBecauseDead;
var birdSprite;
var topPipeSprite;
var bottomPipeSprite;
var backgroundSprite;
var groundSprite;


function preload(){
	birdSprite = loadImage("./game/FlappyBird/images/PigBird-rmbg.png");
	topPipeSprite = loadImage("./game/FlappyBird/images/full pipe top.png");
	bottomPipeSprite = loadImage("./game/FlappyBird/images/full pipe bottom.png");
	backgroundSprite = loadImage("./game/FlappyBird/images/background.png");
	groundSprite = loadImage("./game/FlappyBird/images/groundPiece.png");
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

function setup(){
	window.canvas = createCanvas(600, 1000);
	var noti = document.getElementById("noti");
	var reward = document.getElementById("reward");
	var body = document.getElementsByClassName("main");
	noti.innerHTML = "Press 'ArrowUp' to start";

	player = new Player(canvas.width / 3, canvas.height / 2);
	pipes = new PipePair(false);
	pipes2 = new PipePair(true);
	pipes2.setX(1.7 * canvas.width + pipes2.topPipe.width / 2);
	ground = new Ground();
	pauseBecauseDead = false;
	this.panSpeed = 0;
	this.gravity = 0;
	canvas.position(0, 0);
	canvas.style('position', 'relative');
	canvas.style('display', 'flex');
	canvas.style('left', 'calc(50% - 300px)');
	canvas.style('top', '-100px');
    body[0].style.zoom = "80%";
}

function draw(){
	image(backgroundSprite, 0, 0, canvas.width, canvas.height);
	showAll();
	updateAll();
	if(pipes.offScreen()){
		pipes = new PipePair(false);
	}
	if(pipes2.offScreen()){
		pipes2 = new PipePair(true);
	}
}

function keyPressed(){
	switch(key){
		case 'ArrowUp':
			this.gravity = 0.1;
			this.panSpeed = 3;
			noti.innerHTML = '';
			player.flap();
			break;
	}
}

function showAll(){
	player.show();
	pipes.show();
	pipes2.show();
	ground.show();
}

function updateAll(){
	if(!pauseBecauseDead){
		player.update();
		pipes.update();
		pipes2.update();
	}
	player.update();
	updateScore();
}

function updateScore(){
	var playerScore = document.getElementById("score");
	playerScore.innerHTML = player.score;
}