let canva;

let pi = 4;
let iterations = 0;
let div;

let history = [];

// Inspired by The Coding Train

function setup(){
	canva = createCanvas(800, 400);
	
	div = createDiv(pi).style('font-size', '40px');
}

function draw(){
	background(0);
	let den = iterations * 2 + 3;

	if(iterations%2 == 0){
		pi -= (4/den);
	}else{
		pi += (4/den);
	}

	history.push(pi);
	let piY = map(PI, 2, 4, 0, height);
	line(0, piY, width, piY);

	let spacing = width/history.length;
	stroke(255);
	noFill();

	beginShape();
	for(let i=0; i<history.length; i++){
		let x = i * spacing;
		let y = map(history[i], 2, 4, 0, height);
		vertex(x, y);
	}
	endShape();

	div.html(pi);
	iterations++;
}