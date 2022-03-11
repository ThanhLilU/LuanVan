let canva;

let EreArr = [];
let result = [];
let i = 0;
let j = 0;
let n = 1;

// Inspired by ThanhBeU

function setup(){
	canva = createCanvas(1050, 1050);

	reset();

	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			fill(100);
			square(j*55+5, i*55+5, 50);

			let div = createDiv(EreArr[j + 10*i]);
			div.style('font-size', '16px');
			div.style('color', '#00FF00');
			div.style('font-weight', '400');
			if(j + 1 + 10*i<10){
				div.position(j*55+34, i*55+30);
			}else if(j + 1 + 10*i >= 100){
				div.position(j*55+24, i*55+30);
			}else{
				div.position(j*55+30, i*55+30);
			}
		}
	}
}

function draw(){
	frameRate(5);
	if(i<10){
		if(j<10){
			if(EreArr[j + 10*i] % EreArr[n] == 0 && EreArr[j + 10*i] !== EreArr[n] && EreArr[j + 10*i] !== result[j + 10*i + 1]){
				fill(255, 0, 0);
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
		n++;
		if(n==7){
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
			fill(100);
			square(j*55+5, i*55+5, 50);
		}
	}
}