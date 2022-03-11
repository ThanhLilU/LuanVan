let points;

let current;
let percent = 0.5;
let previous1;
let previous2;

const n = 4;

function setup(){
	createCanvas(540, 540);
	points = [];

	for(let i=0; i<n; i++){
		let angle = i * TWO_PI / n;
		let v = p5.Vector.fromAngle(angle);
		v.mult(width/2);
		v.add(width/2, height/2);
		points.push(v);
	}

	print(points);
	reset();
}

function draw(){

	frameRate(1);
	if(frameCount % 250 == 0){
		reset();
	}

	for(let i=0; i<1; i++){
		strokeWeight(1);
		stroke(255, 0, 255, 200);

		let next = random(points);

		if(previous2 == previous1 && !neighbor2(previous1, next)){
			current.x = lerp(current.x, next.x, percent);
			current.y = lerp(current.y, next.y, percent);
			point(current.x, current.y);
		}else{
			current.x = lerp(current.x, next.x, percent);
			current.y = lerp(current.y, next.y, percent);
			point(current.x, current.y);
		}

		previous2 = previous1;
		previous1 = next;
	}
}

function reset(){
	current = createVector(random(width), random(height));

	background(0);
	stroke(255);
	strokeWeight(8);
	for(let p of points){
		point(p.x, p.y);
	}
}

function neighbor2(p1, p2){

	let p1Pos;
	let p2Pos;
	for(let i=0; i<n; i++){
		if(p1 == points[i]){
			p1Pos = i;
		}
		if(p2 == points[i]){
			p2Pos = i;
		}
	}

	if(p1Pos>0 && p1Pos<n){
		if(p1Pos+1 == p2Pos || p1Pos-1 == p2Pos){
			print("true");
			return true;
		}else return false;
	}else if(p1Pos == 0){
		if(p1Pos+1 == p2Pos || n == p2Pos){
			print("true");
			return true;
		}else return false;
	}else if(p1Pos == 5){
		if(0 == p2Pos || p1Pos-1 == p2Pos){
			print("true");
			return true;
		}else return false;
	}else return false;
}