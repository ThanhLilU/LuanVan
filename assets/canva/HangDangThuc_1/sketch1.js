let canvaEquality2;

// Inspired by ThanhBeU

function setup(){
	var canvaWrapper = document.getElementById('canva-wrapper');
	canvaEquality2 = createCanvas(800, 750, WEBGL);

	var canvaChild = document.getElementById('defaultCanvas0');
	canvaWrapper.appendChild(canvaChild);

	canvaEquality2.style('left', 'calc(50% - ' + width/2 + 'px)');

	canvaWrapper.style.height = height + 2 + 'px';
	canvaWrapper.style.width = width + 2 + 'px';
	canvaWrapper.style.position = 'relative';
	canvaWrapper.style.left = 'calc(50% - ' + width/2 + 'px)';

	noLoop();

	background(200);

	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			if(i > 6 && j < 7){
				fill(255, 0, 0);
				square(-350 + j*25, -325 + i*25, 25);
			}else if(i > 6 && j > 6){
				fill(255, 0, 255);
				square(-350 + j*25, -325 + i*25, 25);
			}else if(i > 6 || j < 7){
				fill(255);
				square(-350 + j*25, -325 + i*25, 25);
			}else{
				fill(255, 0, 0);
				square(-350 + j*25, -325 + i*25, 25);
			}
		}
	}

	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			if(i > 6 && j < 7){
				fill(255, 0, 0);
				square(j*25, -325 + i*25 + 30, 25);
			}else if(i > 6 && j > 6){
				fill(255, 0, 255);
				square(j*25 + 30, -325 + i*25 + 30, 25);
			}else if(i > 6 || j < 7){
				fill(255);
				square(j*25, -325 + i*25, 25);
			}else{
				fill(255, 0, 0);
				square(j*25 + 30, -325 + i*25, 25);
			}
		}
	}

	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			if(i > 6 && j < 7){
				fill(255, 0, 0);
				square(-350 + j*25, i*25 + 30, 25);
			}else if(i > 6 && j > 6){
				fill(255, 0, 255);
				square(-350 + j*25 + 30, i*25 + 30, 25);
			}else if(i > 6 || j < 7){
				fill(255);
				square(-350 + j*25, i*25, 25);
			}else{
				fill(255, 0, 0);
				square(-350 + j*25 + 30, i*25, 25);
			}
		}
	}

	let div1 = createDiv('a');
	divElement(div1);
	div1.position(20, 110);
	div1.style('width', 'fit-content');
	div1.parent(canvaWrapper);

	let div2 = createDiv('a');
	divElement(div2);
	div2.position(126, 5);
	div2.style('width', 'fit-content');
	div2.parent(canvaWrapper);

	let div3 = createDiv('b');
	divElement(div3);
	div3.position(251, 5);
	div3.style('width', 'fit-content');
	div3.parent(canvaWrapper);

	let div4 = createDiv('b');
	divElement(div4);
	div4.position(20, 236);
	div4.style('width', 'fit-content');
	div4.parent(canvaWrapper);



	let div5 = createDiv('a');
	divElement(div5);
	div5.position(20 + 350, 110);
	div5.style('width', 'fit-content');
	div5.parent(canvaWrapper);

	let div6 = createDiv('a');
	divElement(div6);
	div6.position(126 + 350, 5);
	div6.style('width', 'fit-content');
	div6.parent(canvaWrapper);

	let div7 = createDiv('b');
	divElement(div7);
	div7.position(251 + 350 + 30, 5);
	div7.style('width', 'fit-content');
	div7.parent(canvaWrapper);

	let div8 = createDiv('a');
	divElement(div8);
	div8.position(251 + 350 + 85, 110);
	div8.style('width', 'fit-content');
	div8.parent(canvaWrapper);

	let div9 = createDiv('b');
	divElement(div9);
	div9.position(20 + 350, 236 + 30);
	div9.style('width', 'fit-content');
	div9.parent(canvaWrapper);

	let div10 = createDiv('a');
	divElement(div10);
	div10.position(126 + 350, 236 + 85);
	div10.style('width', 'fit-content');
	div10.parent(canvaWrapper);

	let div11 = createDiv('a');
	divElement(div11);
	div11.position(251 + 350 + 85, 236 + 30);
	div11.style('width', 'fit-content');
	div11.parent(canvaWrapper);

	let div12 = createDiv('a');
	divElement(div12);
	div12.position(251 + 350 + 30, 236 + 85);
	div12.style('width', 'fit-content');
	div12.parent(canvaWrapper);



	let shape1 = createDiv('(1)');
	shapeElement(shape1);
	shape1.position(126 - 10, 110);
	shape1.style('width', 'fit-content');
	shape1.parent(canvaWrapper);

	let shape2 = createDiv('(2)');
	shapeElement(shape2);
	shape2.position(126 + 350 - 15, 110);
	shape2.style('width', 'fit-content');
	shape2.parent(canvaWrapper);

	let shape3 = createDiv('(1)');
	divElement(shape3);
	shape3.position(126 - 10, 110 + 325);
	shape3.style('width', 'fit-content');
	shape3.parent(canvaWrapper);

	let shape4 = createDiv('(2)');
	divElement(shape4);
	shape4.position(251 + 30 - 15, 110 + 325);
	shape4.style('width', 'fit-content');
	shape4.parent(canvaWrapper);

	let shape5 = createDiv('(3)');
	divElement(shape5);
	shape5.position(126 - 15, 236 + 325 + 30);
	shape5.style('width', 'fit-content');
	shape5.parent(canvaWrapper);

	let shape6 = createDiv('(4)');
	divElement(shape6);
	shape6.position(251 + 30 - 15, 236 + 325 + 30);
	shape6.style('width', 'fit-content');
	shape6.parent(canvaWrapper);



	let shape7 = createDiv('S = (a + b)');
	div2Element(shape7);
	shape7.position(251 + 30 - 15 + 100, 236 + 225 + 30 - 120);
	shape7.style('width', 'fit-content');
	shape7.parent(canvaWrapper);

	let power1 = createDiv('2');
	power1.style('font-size', '20px');
	power1.style('color', '#00FF00');
	power1.style('font-weight', '400');
	power1.position(251 + 30 - 15 + 100 + 215, 236 + 225 + 30 - 120);
	power1.style('width', 'fit-content');
	power1.parent(canvaWrapper);

	let area1 = createDiv('(1)');
	area1.style('font-size', '17px');
	area1.style('color', '#CB4370');
	area1.style('font-weight', '400');
	area1.position(251 + 30 - 15 + 100 + 17, 236 + 225 + 30 + 28 - 120);
	area1.style('width', 'fit-content');
	area1.parent(canvaWrapper);

	let shape8 = createDiv('Từ S => S :');
	div2Element(shape8);
	shape8.position(251 + 30 - 15 + 100, 236 + 225 + 30 - 70);
	shape8.style('width', 'fit-content');
	shape8.parent(canvaWrapper);

	let area2 = createDiv('(1)');
	area2.style('font-size', '17px');
	area2.style('color', '#CB4370');
	area2.style('font-weight', '400');
	area2.position(251 + 30 - 15 + 100 + 75, 236 + 225 + 30 + 28 - 70);
	area2.style('width', 'fit-content');
	area2.parent(canvaWrapper);

	let area3 = createDiv('(2)');
	area3.style('font-size', '17px');
	area3.style('color', '#CB4370');
	area3.style('font-weight', '400');
	area3.position(251 + 30 - 15 + 100 + 173, 236 + 225 + 30 + 28 - 70);
	area3.style('width', 'fit-content');
	area3.parent(canvaWrapper);




	let shape9 = createDiv('S = a');
	div2Element(shape9);
	shape9.position(251 + 30 - 15 + 100, 236 + 225 + 30);
	shape9.style('width', 'fit-content');
	shape9.parent(canvaWrapper);

	let area4 = createDiv('(1)');
	area4.style('font-size', '17px');
	area4.style('color', '#00FF00');
	area4.style('font-weight', '400');
	area4.position(251 + 30 - 15 + 100 + 16, 236 + 225 + 30 + 28);
	area4.style('width', 'fit-content');
	area4.parent(canvaWrapper);

	let power2 = createDiv('2');
	power2.style('font-size', '20px');
	power2.style('color', '#00FF00');
	power2.style('font-weight', '400');
	power2.position(251 + 30 - 15 + 105 + 100, 236 + 225 + 30);
	power2.style('width', 'fit-content');
	power2.parent(canvaWrapper);

	let shape10 = createDiv('S = a*b');
	div2Element(shape10);
	shape10.position(251 + 30 - 15 + 100 + 170, 236 + 225 + 30);
	shape10.style('width', 'fit-content');
	shape10.parent(canvaWrapper);

	let area5 = createDiv('(2)');
	area5.style('font-size', '17px');
	area5.style('color', '#00FF00');
	area5.style('font-weight', '400');
	area5.position(251 + 30 - 15 + 100 + 16 + 170, 236 + 225 + 30 + 28);
	area5.style('width', 'fit-content');
	area5.parent(canvaWrapper);

	let shape11 = createDiv('S = a*b');
	div2Element(shape11);
	shape11.position(251 + 30 - 15 + 100, 236 + 225 + 30 + 50);
	shape11.style('width', 'fit-content');
	shape11.parent(canvaWrapper);

	let area6 = createDiv('(3)');
	area6.style('font-size', '17px');
	area6.style('color', '#00FF00');
	area6.style('font-weight', '400');
	area6.position(251 + 30 - 15 + 100 + 17, 236 + 225 + 30 + 28 + 50);
	area6.style('width', 'fit-content');
	area6.parent(canvaWrapper);

	let shape12 = createDiv('S = b');
	div2Element(shape12);
	shape12.position(251 + 30 - 15 + 100 + 170, 236 + 225 + 30 + 50);
	shape12.style('width', 'fit-content');
	shape12.parent(canvaWrapper);

	let area7 = createDiv('(4)');
	area7.style('font-size', '17px');
	area7.style('color', '#00FF00');
	area7.style('font-weight', '400');
	area7.position(251 + 30 - 15 + 100 + 16 + 170, 236 + 225 + 30 + 28 + 50);
	area7.style('width', 'fit-content');
	area7.parent(canvaWrapper);

	let power5 = createDiv('2');
	power5.style('font-size', '20px');
	power5.style('color', '#00FF00');
	power5.style('font-weight', '400');
	power5.position(251 + 30 - 15 + 100 + 105 + 170, 236 + 225 + 30 + 50);
	power5.style('width', 'fit-content');
	power5.parent(canvaWrapper);

	let shape13 = createDiv('S = a + ab + ab + b');
	divElement(shape13);
	shape13.position(251 + 30 - 15 + 100, 236 + 225 + 30 + 120);
	shape13.style('width', 'fit-content');
	shape13.parent(canvaWrapper);

	let power6 = createDiv('2');
	power6.style('font-size', '20px');
	power6.style('color', '#00FF00');
	power6.style('font-weight', '400');
	power6.position(251 + 30 - 15 + 100 + 105 - 18, 236 + 225 + 30 + 120);
	power6.style('width', 'fit-content');
	power6.parent(canvaWrapper);

	let power7 = createDiv('2');
	power7.style('font-size', '20px');
	power7.style('color', '#00FF00');
	power7.style('font-weight', '400');
	power7.position(251 + 30 - 15 + 100 + 105 + 230, 236 + 225 + 30 + 120);
	power7.style('width', 'fit-content');
	power7.parent(canvaWrapper);

	let shape14 = createDiv('=> S = a + 2ab + b');
	divElement(shape14);
	shape14.position(251 + 30 - 15 + 100, 236 + 225 + 30 + 170);
	shape14.style('width', 'fit-content');
	shape14.parent(canvaWrapper);

	let power8 = createDiv('2');
	power8.style('font-size', '20px');
	power8.style('color', '#00FF00');
	power8.style('font-weight', '400');
	power8.position(251 + 30 - 15 + 100 + 105 + 36, 236 + 225 + 30 + 170);
	power8.style('width', 'fit-content');
	power8.parent(canvaWrapper);

	let power9 = createDiv('2');
	power9.style('font-size', '20px');
	power9.style('color', '#00FF00');
	power9.style('font-weight', '400');
	power9.position(251 + 30 - 15 + 100 + 105 + 215, 236 + 225 + 30 + 170);
	power9.style('width', 'fit-content');
	power9.parent(canvaWrapper);
}

function draw(){
	frameRate(1);
}

function divElement(div){
	div.style('font-size', '35px');
	div.style('color', '#00FF00');
	div.style('font-weight', '400');
}

function div2Element(div){
	div.style('font-size', '35px');
	div.style('color', '#00FF00');
	div.style('font-weight', '400');
	div.style('word-spacing', 'var(--mb-0-75)');
}

function shapeElement(div){
	div.style('font-size', '35px');
	div.style('color', '#CB4370');
	div.style('font-weight', '400');
	div.style('z-index', '10');
}