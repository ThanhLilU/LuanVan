let canvas;
let pi;
let pies = [];
let plate;
let digitsDiv;
let digits = '3.';
let piCounter = 0;

function preload(){
	pi = loadStrings('./game/PiintheSky/one-million-pi.txt');
}

function setup(){
	pi = pi.join('');

	canvas = createCanvas(500, 500);
	plate = new Plate(width/2, 50);

	canvas.position(0, 0);
	canvas.style('position', 'relative');
	canvas.style('display', 'flex');
	canvas.style('left', 'calc(50% - 250px)');
	canvas.style('top', '-100px');

	digitsDiv = document.getElementById("score-piinthesky");
	digitsDiv.innerHTML = digits;
}

function draw(){
	background(0);

	if(random(1) < 0.05){
		pies.push(new Pie(random(width), random(-100, -20)));
	}

	for(let pie of pies){
		pie.show();
		pie.update();
	}

	for(let i=pies.length-1; i>=0; i--){
		if(plate.catches(pies[i])){
			// console.log("done!");
			let digit = pies[i].digit;
			digits += pies[i].digit;

			let correctDigit = pi.charAt(piCounter);

			if(correctDigit == digit){
				piCounter++;
			}else{
				noLoop();
				endGame();
			}

			digitsDiv.innerHTML = digits;
			pies.splice(i, 1);

		}else if(pies[i].y > height + pies[i].r){
			pies.splice(i, 1);
		}
	}

	plate.x = mouseX;
	plate.show();
}

function endGame(){
	var user = prompt("Game Over!\nBạn đã làm rất tốt!\nĐiểm lần này của bạn: " + piCounter + " điểm", "Anonymous");
	if(user){
		var user_score = piCounter;
		var game_name = "Pi in the Sky";

		var ajax = new XMLHttpRequest();
		var method = "GET";
		var url = "ajax/addUserScore.php?userName="+user+"&gameName="+game_name+"&userScore="+user_score;
		var asynchronous = true;

		ajax.open(method, url, asynchronous);

		ajax.send();

		ajax.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var response = this.responseText;
				// alert(response);
				if(response !== "true"){
					alert('Xảy ra lỗi trong quá trình cập nhật điểm. Vui lòng liên hệ với nhân viên để được trợ giúp!');
				}
				document.body.style.zoom = "100%";
				window.location = "./index.php?quanly=game";
			}
		}
	}else{
		window.location = "./index.php?quanly=game";
	}
}