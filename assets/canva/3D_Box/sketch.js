let canva;

// Inspired by Visualizing Algorithms

function setup(){
	canva = createCanvas(920, 920, WEBGL);

	// noLoop();
}

function draw(){
	background(200);
	frameRate(30);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);

	translate(0, 0);
	box(50);

	translate(0, 50);
	box(50);
}