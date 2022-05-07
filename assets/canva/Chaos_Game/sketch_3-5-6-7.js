let points;

let current;
let percent = 0.65;
let previous;
let canva;
let n = 0;

let ax, ay;
let bx, by;
let cx, cy;
let x, y;
let count = 0;

// Inspired by Numberphile

function setup(){
	var canvaWrapper = document.getElementById('canva-wrapper');
	if(canvaWrapper.offsetWidth <= 500){
		canva = createCanvas(canvaWrapper.offsetWidth, canvaWrapper.offsetWidth);
	}else{
		canva = createCanvas(540, 540);
	}
	var canvaChild = document.getElementById('defaultCanvas0');
	canvaWrapper.appendChild(canvaChild);

	canva.style('left', 'calc(50% - ' + width/2 + 'px)');

	canvaWrapper.style.height = height + 2 + 'px';

	n = Math.floor(Math.random() * 4) + 3;

	if(n==5 || n==6 || n==7){
		points = [];

		percent = (Math.floor(Math.random() * 15) + 50)/100;
		for(let i=0; i<n; i++){
			let angle = i * TWO_PI / n;
			let v = p5.Vector.fromAngle(angle);
			v.mult(width/2);
			v.add(width/2, height/2);
			points.push(v);
		}

		current = createVector(random(width), random(height));

		background(0);
		stroke(255);
		strokeWeight(8);
		for(let p of points){
			point(p.x, p.y);
		}
	}else if(n==3){
		count = 0;
		ax = width / 2;
		ay = 0;
		bx = 0;
		by = height;
		cx = width;
		cy = height;

		x = ax;
		y = ay;

		background(0);
		stroke(255);
		strokeWeight(8);
		point(ax, ay);
		point(bx, by);
		point(cx, cy);
	}else{
		setup();
	}
}

function draw(){
	frameRate(20);
	if(frameCount % 200 == 0){
		reset();
	}

	if(n==5 || n==6 || n==7){
		for(let i=0; i<500; i++){
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
	}else if(n==3){
		for(let i=0; i<100; i++){
			point(x, y);
			strokeWeight(2);

			let r = floor(random(3));

			if(r == 0){
				stroke(255, 255, 0);
				x = lerp(x, ax, 0.5);
				y = lerp(y, ay, 0.5);
			}else if(r == 1){
				stroke(255, 0, 255);
				x = lerp(x, bx, 0.5);
				y = lerp(y, by, 0.5);
			}else if(r == 2){
				stroke(0, 255, 255);
				x = lerp(x, cx, 0.5);
				y = lerp(y, cy, 0.5);
			}
		}
		count++;
	}
}

function reset(){
	setup();
}