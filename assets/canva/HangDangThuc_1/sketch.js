let canva;

// Inspired by ThanhBeU

function setup(){
	canva = createCanvas(800, 750, WEBGL);

	// noLoop();

	background(200);

	let div1 = createDiv('n');
	divElement(div1);
	div1.position(20, 152);
	div1.style('transform', 'rotate(-90deg)');

	let div2 = createDiv('n');
	divElement(div2);
	div2.position(172, 5);

	let div3 = createDiv('n');
	divElement(div3);
	div3.position(172, 300);

	let div4 = createDiv('n');
	divElement(div4);
	div4.position(320, 152);
	div4.style('transform', 'rotate(90deg)');

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
	div5.position(350 + 20, 152);
	div5.style('transform', 'rotate(-90deg)');

	let div6 = createDiv('n-2');
	divElement(div6);
	div6.position(300 + 200, 5);

	let div7 = createDiv('n');
	divElement(div7);
	div7.position(300 + 222, 300);

	let div8 = createDiv('n-2');
	divElement(div8);
	div8.position(250 + 400, 152);
	div8.style('transform', 'rotate(90deg)');

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
	div9.position(-5, 177 + 350);
	div9.style('transform', 'rotate(-90deg)');

	let div10 = createDiv('n-2');
	divElement(div10);
	div10.position(125, 5 + 350);

	let div11 = createDiv('n-2');
	divElement(div11);
	div11.position(125, 350 + 350);

	let div12 = createDiv('n+2');
	divElement(div12);
	div12.position(245, 177 + 350);
	div12.style('transform', 'rotate(90deg)');

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

	let result1 = createDiv('(1) => S1 = n');
	divElement(result1);
	result1.position(325, 400);
	let power1 = createDiv('2');
	power1.style('font-size', '25px');
	power1.style('color', '#00FF00');
	power1.style('font-weight', '400');
	power1.position(592, 400);


	let result2 = createDiv('(2) => S2 = n - 2');
	divElement(result2);
	result2.position(325, 470);
	let power2 = createDiv('2');
	power2.style('font-size', '25px');
	power2.style('color', '#00FF00');
	power2.style('font-weight', '400');
	power2.position(592, 470);
	let power3 = createDiv('2');
	power3.style('font-size', '25px');
	power3.style('color', '#00FF00');
	power3.style('font-weight', '400');
	power3.position(660, 470);

	let result3 = createDiv('(3) => S2 = (n-2)(n+2)');
	divElement(result3);
	result3.position(325, 540);
	

}

function draw(){
	frameRate(1);
}

function divElement(div){
	div.style('font-size', '50px');
	div.style('color', '#00FF00');
	div.style('font-weight', '400');
}