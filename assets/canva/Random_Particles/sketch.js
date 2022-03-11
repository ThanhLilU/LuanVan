let r = 500;
let canva;

let total = 0;
let circle = 0;

let recordPI = 0;

// Inspired by STEMcoding

function setup(){
	createCanvas(1060, 1060);
	background(200);

	stroke(255, 0, 0);
	translate(width/2, height/2);
	strokeWeight(2);
	noFill();
	
	ellipse(0, 0, r*2, r*2);

	rectMode(CENTER);
	rect(0, 0, r*2, r*2);
}

function draw(){
	translate(width/2, height/2);

	for(let i=0; i<100; i++){
		const x = random(-r, r);
		const y = random(-r, r);
		total++;

		const d = x * x + y * y;
		if(d <= r*r){
			circle++;
			stroke(0, 255, 0, 100);
		}else{
			stroke(0, 0, 255, 100);
		}

		strokeWeight(1);
		point(x, y);

		let pi = 4 * (circle/total);
		let recordDiff = Math.abs(Math.PI - recordPI);
		let diff = Math.abs(Math.PI - pi);
		if(diff < recordDiff){
			recordDiff = diff;
			recordPI = pi;
			print(recordPI);
		}
	}
	
}