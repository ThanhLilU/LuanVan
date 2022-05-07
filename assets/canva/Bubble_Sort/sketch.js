let canva;

let values = [];
let i = 0;
let j = 0;
let weight = 3;
let frame = 0;

// Inspired by Visualizing Algorithms

function setup(){
	var canvaWrapper = document.getElementById('canva-wrapper');
	if(canvaWrapper.offsetWidth <= 500){
		canva = createCanvas(canvaWrapper.offsetWidth, canvaWrapper.offsetWidth);
	}else{
		canva = createCanvas(canvaWrapper.offsetWidth, 540);
	}
	var canvaChild = document.getElementById('defaultCanvas0');
	canvaWrapper.appendChild(canvaChild);

	values = new Array(floor(width/weight));
	strokeWeight(weight);
	for(let i=0; i<values.length; i++){
		values[i] = random(height);
	}

	canva.style('left', 'calc(50% - ' + width/2 + 'px)');

	canvaWrapper.style.height = height + 2 + 'px';

	frameRate(60);
}

function draw(){

	background(0);

	for(let n=0; n<(80 - weight * 10); n++){
		let a = values[j];
		let b = values[j+1];
		if(a > b){
			swap(values, j, j+1);
		}

		j = j + 1;
		if(j >= values.length-i-1){
			j = 0;
			i = i + 1;
		}
	}

	// if(i < values.length){
	// 	for(j=0; j<values.length-i-1; j++){
	// 		let a = values[j];
	// 		let b = values[j+1];
	// 		if(a > b){
	// 			swap(values, j, j+1);
	// 		}
	// 	}
	// }else{
	// 	print("done!");
	// 	noLoop();
	// }

	for(let z=0; z<values.length; z++){
		if(z == j){
			stroke(255, 0, 0);
		}else{
			stroke(255, 255, 0);
		}
		strokeWeight(weight);
		line(z+(z*(weight-1)+1), height, z+(z*(weight-1)+1), height-values[z]);
	}	

	if(i >= values.length){
		noLoop();
		frameRate(1);
		frame++;
	}

	if(frame == 5){
		values = [];
		i = 0;
		j = 0;
		weight = 3;
		frame = 0;
		setup();
	}
}

function swap(arr, a, b){
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}