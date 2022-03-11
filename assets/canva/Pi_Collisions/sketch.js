let blockImg;
let block1;
let block2;
let clack;
let canva;

let count = 0;
let digits = 4;
let countDiv;
const timeSteps = 1000000;

// Inspired by 3Blue1Brown

function preload(){
	blockImg = loadImage('assets/canva/Pi_Collisions/block1.png');
}

function setup(){
	canva = createCanvas(520, 300);
	canva.style('position', 'absolute');
	canva.style('display', 'flex');
	canva.style('left', 'calc(50% - 260px)');
	canva.style('top', 'calc(30% + 294px)');

	block1 = new Block(100, 20, 1, 0, 0);
	const m2 = pow(100, digits - 1);
	block2 = new Block(300, 100, m2, -3/timeSteps, 21);
	countDiv = createDiv(count);
	countDiv.style('font-size', '72pt');
	countDiv.style('position', 'absolute');
	countDiv.style('display', 'flex');
	countDiv.style('left', 'calc(50% - 260px)');
	countDiv.style('top', 'calc(30% + 274px)');
}

function draw(){
	background(200);

	for(let i = 0; i<timeSteps; i++){
		if(block1.collide(block2)){
			const v1 = block1.bounce(block2);
			const v2 = block2.bounce(block1);
			block1.v = v1;
			block2.v = v2;
			count++;
		}

		if(block1.hitWall()){
			block1.reverse();
			count++;
		}

		block1.update();
		block2.update();
	}
	block1.show();
	block2.show();

	countDiv.html(nf(count, digits));
}