let canva;

let values;
let weight = 3;
let frame = 0;
let oldPivot = 0;
let checkPivot = 0;

let pivotIndex;

// Inspired by Visualizing Algorithms

function setup(){
	var canvaWrapper = document.getElementById('canva-wrapper');
	canva = createCanvas(canvaWrapper.offsetWidth, 540);
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

	quickSort(values, 0, values.length-1);
}

async function quickSort(arr, start, end){
	if(start >= end){
		return;
	}

	let index = await partition(arr, start, end);

	await quickSort(arr, start, index-1);
	await quickSort(arr, index+1, end);
}

async function partition(arr, start, end){
	pivotIndex = start;
	let pivotValue = arr[end];
	for(let i=start; i<end; i++){
		if(arr[i] < pivotValue){
			await swap(arr, i, pivotIndex);
			pivotIndex++;
		}
	}

	await swap(arr, pivotIndex, end);
	return pivotIndex;
}

function draw(){
	background(0);

	for(let z=0; z<values.length; z++){
		if(z == pivotIndex){
			stroke(255, 0, 0);
		}else{
			stroke(255, 255, 0);
		}
		strokeWeight(weight);
		line(z*weight, height, z*weight, height-values[z]);
	}

	if(oldPivot == pivotIndex){
		checkPivot++;
		if(checkPivot == 10){
			noLoop();
		}
	}

	oldPivot = pivotIndex;
}

async function swap(arr, a, b){
	let temp = arr[a];
	await sleep(10);
	arr[a] = arr[b];
	arr[b] = temp;
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}