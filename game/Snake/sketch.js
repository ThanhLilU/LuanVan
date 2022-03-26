var canvas;
var s;
var scl = 20;
var food;
var noti;
var frame = 5;

function setup(){
	canvas = createCanvas(600, 600);

	noti = document.getElementById("noti-snake");
	noti.innerHTML = "Press 'WASD' to move";
	canvas.position(0, 0);
	canvas.style('position', 'relative');
	canvas.style('display', 'flex');
	canvas.style('left', 'calc(50% - 300px)');
	canvas.style('top', '-50px');

	s = new Snake();
	frameRate(frame);
	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);

	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw(){
	background(50);
	s.update();
	s.show();

	if(s.eat(food)){
		pickLocation();
		if(s.total % 5 == 0){
			increaseFrame();
		}
	}

	if(s.foodCollosion(food)){
		pickLocation();
	}

	s.death();
	updateScore();

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

function keyPressed(){
	if(keyCode === 87){
		//w
		s.dir(0, -1);
		noti.innerHTML = '';
	}else if(keyCode === 83){
		//s
		s.dir(0, 1);
		noti.innerHTML = '';
	}else if(keyCode === 68){
		//d
		s.dir(1, 0);
		noti.innerHTML = '';
	}else if(keyCode === 65){
		//a
		s.dir(-1, 0);
		noti.innerHTML = '';
	}
}

function updateScore(){
	var playerScore = document.getElementById("score-snake");
	playerScore.innerHTML = s.total;
}

function increaseFrame(){
	frame+=2;
	frameRate(frame);
}