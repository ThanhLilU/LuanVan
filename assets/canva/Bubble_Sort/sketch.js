let canva;

let values = [];
let i = 0;
let j = 0;
let weight = 3;

// Inspired by Visualizing Algorithms

function setup(){
	canva = createCanvas(1020, 540);
	values = new Array(width/weight);
	strokeWeight(weight);
	for(let i=0; i<values.length; i++){
		values[i] = random(height);
	}

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
}

function swap(arr, a, b){
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}