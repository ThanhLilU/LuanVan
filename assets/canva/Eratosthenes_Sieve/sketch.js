let canvaEratos;

let EreArr = [];
let result = [];
let i = 0;
let j = 0;
let n = 1;
let num = 0;

// Inspired by ThanhBeU

function setup(){
	var canvaWrapper = document.getElementById('canva-wrapper');
	canvaEratos = createCanvas(555, 555);

	var canvaChild = document.getElementById('defaultCanvas0');
	canvaWrapper.appendChild(canvaChild);

	canvaEratos.style('left', 'calc(50% - ' + width/2 + 'px)');

	canvaWrapper.style.height = height + 2 + 'px';
	canvaWrapper.style.width = width + 2 + 'px';
	canvaWrapper.style.position = 'relative';
	canvaWrapper.style.left = 'calc(50% - ' + width/2 + 'px)';

	reset();

	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			fill(50);
			square(j*55+5, i*55+5, 50);

			if(EreArr[j + 10*i] != 1){
				let div = createDiv(EreArr[j + 10*i]);
				div.id('num-' + num);
				var numChild = document.getElementById('num-' + num);
				num++;
				canvaWrapper.appendChild(numChild);

				div.style('font-size', '16px');
				div.style('color', '#0F0');
				div.style('font-weight', '400');

				if(j + 10*i<10){
					div.position(j*55+25, i*55+20);
				}else if(j + 1 + 10*i >= 100){
					div.position(j*55+18, i*55+19);
				}else{
					div.position(j*55+21, i*55+19);
				}
			}
		}
	}
}

function draw(){
	frameRate(30);
	if(i<10){
		if(j<10){
			if(EreArr[j + 10*i] % EreArr[n] == 0 && EreArr[j + 10*i] !== EreArr[n] && EreArr[j + 10*i] !== result[j + 10*i + 1]){
				fill(255, 50, 50);
				result[j + 10*i + 1] = 1;
				square(j*55+5, i*55+5, 50);
			}
		}
		j++;
		if(j==10){
			i++;
			j=0;
		}
	}
	if(i==10){
		frameRate(1);
		n++;
		if(n==10){
			reset();
			n=1;
		}
		i = 0;
		j = 0;
	}
}

function reset(){
	background(200);

	for(let i=0; i<100; i++){
		EreArr[i] = i+1;
		result[i] = 0;
	}

	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			fill(50);
			square(j*55+5, i*55+5, 50);
		}
	}
}