let canva;

// Inspired by Visualizing Algorithms

function setup(){
	canva = createCanvas(920, 920, WEBGL);
	angleMode(DEGREES);

	noLoop();
}

function draw(){
	background(100);

	translate(0, 250, 0);

	branch(100);
}

function branch(len){
	push();

	if(len>10){
		strokeWeight(map(len, 10, 100, 1, 15));
		stroke(70, 40, 20);

		line(0, 0, 0, 0, -len-2, 0);
		
		translate(0, -len, 0);

		rotate(random(-20, -30));
		branch(len * random(0.7, 0.9));

		rotate(random(50, 60));
		branch(len * random(0.7, 0.9));
	}else{
		var r = 220 + random(-20, 20);
		var g = 120 + random(-20, 20);
		var b = 170 + random(-20, 20);
		fill(r, g, b, 70);
		noStroke();

		beginShape();
		for(let i=45; i<135; i++){
			let rad = 15;
			let x = rad * cos(i);
			let y = rad * sin(i);
			vertex(x, y, 5);
		}
		for(let i=135; i>40; i--){
			let rad = 15;
			let x = rad * cos(i);
			let y = rad * sin(-i) + 20;
			vertex(x, y, 5);
		}
		endShape(CLOSE);
	}
	pop();
}