let points;

// Inspired by Maxin

function setup(){
	createCanvas(540, 540);
	colorMode(HSL, 1);
}

function draw(){
	scale(width, height);
	background(0);

	stroke(1);
	strokeWeight(0.002);

	drawFractal(0.5, 0.5);

}

function drawFractal(x, y){
	const count = 3;
	const radius = 0.1;
	for(let i=0; i<count; i++){
		const f = i / count;
		const angle = f;
		const cx = x + cos(angle * PI * 2) * radius;
		const cy = y + cos(angle * PI * 2) * radius;
		circle(cx, cy, 0.1);
	}
}