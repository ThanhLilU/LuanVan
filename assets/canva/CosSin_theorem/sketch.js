let canva;

// Inspired by Visualizing Algorithms

function setup(){
	canva = createCanvas(500, 500, WEBGL);

	background(250);
	translate(-250, -250);
	strokeWeight(2);
	triangle(200, 100, 25, 400, 470, 400);
	line(200, 100, 200, 400);
	rect(200, 390, 10, 10);


	div = createDiv('A');
	div.position(10, 395);
	div.style('font-size', '30px');

	div = createDiv('B');
	div.position(200, 75);
	div.style('font-size', '30px');

	div = createDiv('C');
	div.position(485, 395);
	div.style('font-size', '30px');

	div = createDiv('a');
	div.position(360, 240);
	div.style('font-size', '25px');

	div = createDiv('b');
	div.position(250, 410);
	div.style('font-size', '25px');

	div = createDiv('c');
	div.position(90, 240);
	div.style('font-size', '25px');

	div = createDiv('x');
	div.position(190, 240);
	div.style('font-size', '25px');

	div = createDiv('m');
	div.position(115, 380);
	div.style('font-size', '25px');

	div = createDiv('n');
	div.position(330, 380);
	div.style('font-size', '25px');

	noLoop();
}

function draw(){

}