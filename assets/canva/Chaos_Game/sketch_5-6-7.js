let points;

let current;
let percent = 0.5;
let previous

function setup(){
	createCanvas(540, 540);
	points = [];
	const n = 5;

	for(let i=0; i<n; i++){
		let angle = i * TWO_PI / n;
		let v = p5.Vector.fromAngle(angle);
		v.mult(width/2);
		v.add(width/2, height/2);
		points.push(v);
	}

	reset();
}

function draw(){

	frameRate(25);
	if(frameCount % 250 == 0){
		reset();
	}

	for(let i=0; i<100; i++){
		strokeWeight(1);
		stroke(255, 0, 255, 200);

		let next = random(points);
		if(next !== previous){
			current.x = lerp(current.x, next.x, percent);
			current.y = lerp(current.y, next.y, percent);
			point(current.x, current.y);
		}
		previous = next;
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