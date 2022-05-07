let canvaEquality1;

// Inspired by ThanhBeU

function setup(){
	var canvaWrapper = document.getElementById('canva-wrapper');
	canvaEquality1 = createCanvas(800, 750, WEBGL);

	canvaEquality1.id("canvaEquality1");

	var canvaChild = document.getElementById('canvaEquality1');
	canvaWrapper.appendChild(canvaChild);

	canvaEquality1.style('left', 'calc(50% - ' + width/2 + 'px)');

	canvaWrapper.style.height = height + 2 + 'px';
	canvaWrapper.style.width = width + 2 + 'px';
	canvaWrapper.style.position = 'relative';
	canvaWrapper.style.left = 'calc(50% - ' + width/2 + 'px)';

	noLoop();

	background(200);

	let div1 = createDiv('n');
	divElement(div1);
	div1.position(20, 148);
	div1.style('transform', 'rotate(-90deg)');
	div1.style('width', 'fit-content');
	div1.parent(canvaWrapper);

	let div2 = createDiv('n');
	divElement(div2);
	div2.position(165, 5);
	div2.style('width', 'fit-content');
	div2.parent(canvaWrapper);

	let div3 = createDiv('n');
	divElement(div3);
	div3.position(165, 290);
	div3.style('width', 'fit-content');
	div3.parent(canvaWrapper);

	let div4 = createDiv('n');
	divElement(div4);
	div4.position(305, 148);
	div4.style('transform', 'rotate(90deg)');
	div4.style('width', 'fit-content');
	div4.parent(canvaWrapper);

	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			if(i !== 0 && i !== 1 || j !== 8 && j!==9){
				fill(255);
				square(-350 + j*25, -325 + i*25, 25);
			}else{
				fill(255, 0, 0);
				square(-350 + j*25, -325 + i*25, 25);
			}
		}
	}

	let div5 = createDiv('n');
	divElement(div5);
	div5.position(350 + 20, 148);
	div5.style('transform', 'rotate(-90deg)');
	div5.style('width', 'fit-content');
	div5.parent(canvaWrapper);

	let div6 = createDiv('n-2');
	divElement(div6);
	div6.position(328 + 165, 5);
	div6.style('width', 'fit-content');
	div6.parent(canvaWrapper);

	let div7 = createDiv('n');
	divElement(div7);
	div7.position(350 + 165, 290);
	div7.style('width', 'fit-content');
	div7.parent(canvaWrapper);

	let div8 = createDiv('n-2');
	divElement(div8);
	div8.position(332 + 305, 148);
	div8.style('transform', 'rotate(90deg)');
	div8.style('width', 'fit-content');
	div8.parent(canvaWrapper);

	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			if(i == 0 || i == 1 || j == 8 || j == 9){
				fill(0, 255, 0);
			}else{
				fill(255);
			}

			if(i !== 0 && i !== 1 || j !== 8 && j!==9){
				square(0 + j*25, -325 + i*25, 25);
			}else{
			}
		}
	}

	let div9 = createDiv('n+2');
	divElement(div9);
	div9.position(0, 172 + 350);
	div9.style('transform', 'rotate(-90deg)');
	div9.style('width', 'fit-content');
	div9.parent(canvaWrapper);

	let div10 = createDiv('n-2');
	divElement(div10);
	div10.position(118, 5 + 350);
	div10.style('width', 'fit-content');
	div10.parent(canvaWrapper);

	let div11 = createDiv('n-2');
	divElement(div11);
	div11.position(118, 345 + 350);
	div11.style('width', 'fit-content');
	div11.parent(canvaWrapper);

	let div12 = createDiv('n+2');
	divElement(div12);
	div12.position(235, 172 + 350);
	div12.style('transform', 'rotate(90deg)');
	div12.style('width', 'fit-content');
	div12.parent(canvaWrapper);

	for(let i=0; i<12; i++){
		for(let j=0; j<8; j++){
			if(i == 0 || i == 1 || i == 10 || i == 11){
				fill(0, 255, 0);
			}else{
				fill(255);
			}
			square(-350 + j*25, 25 + i*25, 25);
		}
	}

	let shape1 = createDiv('(1)');
	shapeElement(shape1);
	shape1.position(155, 148);
	shape1.style('width', 'fit-content');
	shape1.parent(canvaWrapper);

	let shape2 = createDiv('(2)');
	shapeElement(shape2);
	shape2.position(155 + 345, 148);
	shape2.style('width', 'fit-content');
	shape2.parent(canvaWrapper);

	let shape3 = createDiv('(3)');
	shapeElement(shape3);
	shape3.position(125, 148 + 375);
	shape3.style('width', 'fit-content');
	shape3.parent(canvaWrapper);

	let shape4 = createDiv('(1)');
	shapeElement(shape4);
	shape4.position(325, 400);
	shape4.style('width', 'fit-content');
	shape4.parent(canvaWrapper);

	let result1 = createDiv(' => S1 = n');
	divElement(result1);
	result1.position(385, 400);
	result1.style('width', 'fit-content');
	result1.parent(canvaWrapper);

	let power1 = createDiv('2');
	power1.style('font-size', '20px');
	power1.style('color', '#00FF00');
	power1.style('font-weight', '400');
	power1.position(530, 395);
	power1.style('width', 'fit-content');
	power1.parent(canvaWrapper);

	let shape5 = createDiv('(2)');
	shapeElement(shape5);
	shape5.position(325, 470);
	shape5.style('width', 'fit-content');
	shape5.parent(canvaWrapper);

	let result2 = createDiv(' => S2 = (n ) - (2 )');
	divElement(result2);
	result2.position(385, 470);
	result2.style('width', 'fit-content');
	result2.parent(canvaWrapper);
	result2.style('width', 'fit-content');
	result2.parent(canvaWrapper);

	let power2 = createDiv('2');
	power2.style('font-size', '20px');
	power2.style('color', '#00FF00');
	power2.style('font-weight', '400');
	power2.position(560, 470);
	power2.style('width', 'fit-content');
	power2.parent(canvaWrapper);

	let power3 = createDiv('2');
	power3.style('font-size', '20px');
	power3.style('color', '#00FF00');
	power3.style('font-weight', '400');
	power3.position(660, 470);
	power3.style('width', 'fit-content');
	power3.parent(canvaWrapper);

	let shape6 = createDiv('(3)');
	shapeElement(shape6);
	shape6.position(325, 540);
	shape6.style('width', 'fit-content');
	shape6.parent(canvaWrapper);

	let result3 = createDiv(' => S2 = (n-2)(n+2)');
	divElement(result3);
	result3.position(385, 540);
	result3.style('width', 'fit-content');
	result3.parent(canvaWrapper);
	

}

function draw(){
	frameRate(1);
}

function divElement(div){
	div.style('font-size', '35px');
	div.style('color', '#00FF00');
	div.style('font-weight', '400');
}

function shapeElement(div){
	div.style('font-size', '35px');
	div.style('color', '#CB4370');
	div.style('font-weight', '400');
	div.style('z-index', '10');
}