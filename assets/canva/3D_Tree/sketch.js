let canva;

// Inspired by Visualizing Algorithms

function setup(){
	canva = createCanvas(520, 360, WEBGL);
	angleMode(DEGREES);

	// noLoop();
}

function draw(){
	background(200);

	randomSeed(1);

	translate(0, 170, 0);

	rotateY(frameCount);

	branch(100);
}

function branch(len){
	strokeWeight(map(len, 10, 100, 0.5, 5));
	stroke(70, 40, 20);

	line(0, 0, 0, 0, -len -2, 0);

	translate(0, -len, 0);

	if(len > 10){
		for(let i = 0; i<3; i++){
			rotateY(random(100, 140));
			push();
2
			rotateZ(random(20, 50));
			branch(len * 0.63);

			pop();
		}
	}else{
		var r = 220 + random(-20, 20);
		var g = 120 + random(-20, 20);
		var b = 170 + random(-20, 20);

		// 220, 120, 170: sakura || 220, 120, 80: red maple || 80, 120, 40: green

		fill(r, g, b);
		noStroke();

		translate(5, 0, 0);
		rotateZ(90);
		beginShape();

		for(let i=45; i<135; i++){
			let rad = 7;
			let x = rad * cos(i);
			let y = rad * sin(i);
			vertex(x, y);
		}
		for(let i=135; i>45; i--){
			let rad = 7;
			let x = rad * cos(i);
			let y = rad * sin(-i) + 10;
			vertex(x, y);
		}

		endShape(CLOSE);
	}
}