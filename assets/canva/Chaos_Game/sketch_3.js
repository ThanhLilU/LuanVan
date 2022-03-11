let ax, ay;
let bx, by;
let cx, cy;
let x, y;
let count = 0;

let canva;

// Inspired by Numberphile

function setup(){
	canva = createCanvas(540, 540);
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
}

function draw(){
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
	if(count == 500) reset();
}

function reset(){
	count = 0;
	setup();
}