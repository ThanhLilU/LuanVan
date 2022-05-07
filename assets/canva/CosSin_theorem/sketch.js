let canvaCosin;

// Inspired by Visualizing Algorithms

function setup(){
	var canvaWrapper = document.getElementById('canva-wrapper');
	canvaCosin = createCanvas(500, 500, WEBGL);

	var canvaChild = document.getElementById('defaultCanvas0');
	canvaWrapper.appendChild(canvaChild);

	canvaCosin.style('left', 'calc(50% - ' + width/2 + 'px)');

	canvaWrapper.style.height = height + 2 + 'px';
	canvaWrapper.style.width = width + 2 + 'px';
	canvaWrapper.style.position = 'relative';
	canvaWrapper.style.left = 'calc(50% - ' + width/2 + 'px)';

	background(250);
	translate(-250, -250);
	strokeWeight(2);
	triangle(200, 100, 25, 400, 470, 400);
	line(200, 100, 200, 400);
	rect(200, 390, 10, 10);


	div = createDiv('A');
	div.position(5, 380);
	div.style('font-size', '30px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	div = createDiv('B');
	div.position(191, 63);
	div.style('font-size', '30px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	div = createDiv('C');
	div.position(475, 380);
	div.style('font-size', '30px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	div = createDiv('a');
	div.position(345, 230);
	div.style('font-size', '25px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	div = createDiv('b');
	div.position(235, 400);
	div.style('font-size', '25px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	div = createDiv('c');
	div.position(90, 230);
	div.style('font-size', '25px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	div = createDiv('x');
	div.position(185, 230);
	div.style('font-size', '25px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	div = createDiv('m');
	div.position(115, 365);
	div.style('font-size', '25px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	div = createDiv('n');
	div.position(330, 365);
	div.style('font-size', '25px');
	div.style('width', 'fit-content');
	div.parent(canvaWrapper);

	noLoop();
}

function draw(){

}