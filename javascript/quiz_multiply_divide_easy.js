const option1 = document.getElementById("quiz_option-1"),
	  option2 = document.getElementById("quiz_option-2"),
	  option3 = document.getElementById("quiz_option-3"),
	  option4 = document.getElementById("quiz_option-4");
const mark = document.getElementById("quiz_mark");
const right = document.getElementById("quiz_count-right"),
	  total = document.getElementById("quiz_count-total");
let pracVar = true;
let resetTimer = true;

let rightCount = 0;
let totalCount = 0;
let rightAnswer = 0;
let timeOut;
let wrongStreak = 0;

let timeCounter = 0;
const timerMs = setInterval(() => {
	timeCounter += 1;
}, 100);

function reset_timerBar(){
	var timerInner = document.getElementById("timer-bar--inner");
	timerInner.style.animation = 'none';
	timerInner.offsetHeight;
	timerInner.style.animation = null;

	clearTimeout(timeOut);
}

function endUp(){
	clearInterval(timerMs);
	let user = prompt("Kết quả lần này của bạn là:\nTổng: " + totalCount + " câu\nĐúng: " + rightCount + " câu\nBạn đã hoàn thành xuất sắc, hãy chia sẻ thành tích của bạn lên bảng xếp hạng nhé", "Anonymous");
		
	if(user){
		var ajax = new XMLHttpRequest();
		var method = "GET";
		var url = "ajax/addQuizResult.php?prac="+pracVar+"&user_name="+user+"&right_answer="+rightCount+"&total_count="+totalCount+"&time="+timeCounter;
		var asynchronous = true;

		ajax.open(method, url, asynchronous);

		ajax.send();

		ajax.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var response = this.responseText;
				// alert(response);
				if(response !== "true"){
					alert('Đã xảy ra lỗi!');
				}
			}
		}
	}
	window.location = "?quanly=quiz";
}

function resetEquation(right){
	if(right){
		generate_equation(pracVar);
	}else{
		if(pracVar){
			alert("Bạn đã sai, kết quả là: " + rightAnswer);
			generate_equation(pracVar);
		}else{
			generate_equation(pracVar);
		}
	}
}

function generate_equation(prac){
	pracVar = prac;

	if(resetTimer){
		document.getElementById("timer-bar").style.setProperty("--duration", 10);
		reset_timerBar();
		timeOut = setTimeout(generate_equation, 10000, pracVar);
		if(!pracVar){
			resetTimer = false;
			document.getElementById("timer-bar").style.setProperty("--duration", 300);
			reset_timerBar();
			timeOut = setTimeout(endUp, 300000);
		}
	}

	var num1 = Math.floor(Math.random() * (40)) + 10;
	var num2 = (Math.floor(Math.random() * (21)) + 1)*5;

	if(mark.innerHTML == "*"){
		rightAnswer = num1 * num2;

		let decide;
		decide= Math.floor(Math.random() * 2) -1;
		if(decide >= 0){
			var dummyAnswer1 = Math.abs(rightAnswer + (Math.floor(Math.random() * 4) - 2)*100 + (Math.floor(Math.random() * 11) - 10)*10 + (Math.floor(Math.random() * 11) - 10)*10);
		}else{
			var dummyAnswer1 = Math.abs(rightAnswer - (Math.floor(Math.random() * 4) - 2)*100 - (Math.floor(Math.random() * 11) - 10)*10 - (Math.floor(Math.random() * 11) - 10)*10);
		}

		decide= Math.floor(Math.random() * 2) -1;
		if(decide >= 0){
			var dummyAnswer2 = Math.abs(rightAnswer + (Math.floor(Math.random() * 2) - 1)*100 + (Math.floor(Math.random() * 11) - 10)*10 + (Math.floor(Math.random() * 11) - 10)*10);
		}else{
			var dummyAnswer2 = Math.abs(rightAnswer - (Math.floor(Math.random() * 2) - 1)*100 - (Math.floor(Math.random() * 11) - 10)*10 - (Math.floor(Math.random() * 11) - 10)*10);
		}

		decide= Math.floor(Math.random() * 2) -1;
		if(decide >= 0){
			var dummyAnswer3 = Math.abs(rightAnswer + (Math.floor(Math.random() * 2) - 1)*100 + (Math.floor(Math.random() * 11) - 10)*10 + (Math.floor(Math.random() * 11) - 10)*10);
		}else{
			var dummyAnswer3 = Math.abs(rightAnswer - (Math.floor(Math.random() * 2) - 1)*100 - (Math.floor(Math.random() * 11) - 10)*10 - (Math.floor(Math.random() * 11) - 10)*10);
		}
	}else{
		rightAnswer = num1 * num2;
		let temp = num1;
		num1 = rightAnswer
		rightAnswer = temp;

		let decide;
		decide= Math.floor(Math.random() * 2) -1;
		if(decide >= 0){
			var dummyAnswer1 = Math.abs(rightAnswer + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1)*10);
		}else{
			var dummyAnswer1 = Math.abs(rightAnswer - (Math.floor(Math.random() * 3) + 1) - (Math.floor(Math.random() * 3) + 1) - (Math.floor(Math.random() * 3) + 1)*10);
		}

		decide= Math.floor(Math.random() * 2) -1;
		if(decide >= 0){
			var dummyAnswer2 = Math.abs(rightAnswer + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1)*10);
		}else{
			var dummyAnswer2 = Math.abs(rightAnswer - (Math.floor(Math.random() * 3) + 1) - (Math.floor(Math.random() * 3) + 1) - (Math.floor(Math.random() * 3) + 1)*10);
		}

		decide= Math.floor(Math.random() * 2) -1;
		if(decide >= 0){
			var dummyAnswer3 = Math.abs(rightAnswer + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1)*10);
		}else{
			var dummyAnswer3 = Math.abs(rightAnswer - (Math.floor(Math.random() * 3) + 1) - (Math.floor(Math.random() * 3) + 1) - (Math.floor(Math.random() * 3) + 1)*10);
		}
	}

	var allAnswers = [];
	var switchAnswers = [];

	document.getElementById("quiz-num1").innerHTML = num1;
	document.getElementById("quiz-num2").innerHTML = num2;

	allAnswers = [rightAnswer, dummyAnswer1, dummyAnswer2, dummyAnswer3];
	for(i=allAnswers.length; i--;){
		switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
	}

	option1.innerHTML = switchAnswers[0];
	option2.innerHTML = switchAnswers[1];
	option3.innerHTML = switchAnswers[2];
	option4.innerHTML = switchAnswers[3];

	if(pracVar){
		right.innerHTML = rightCount;
		total.innerHTML = totalCount;
	}else{
		right.innerHTML = "...";
		total.innerHTML = totalCount;
	}

	if(wrongStreak == 5){
		alert("Bạn đã bị loại vì sai 5 lần liên tiếp!");
		window.location = "?quanly=quiz";
	}

	if(pracVar && totalCount == 30){
		endUp();
	}
	wrongStreak++;
	totalCount++;
}

option1.addEventListener('click', ()=>{
	if(option1.innerHTML == rightAnswer){
		rightCount++;
		wrongStreak = 0;
		resetEquation(true);
	}else{
		resetEquation(false);
	}
});

option2.addEventListener('click', ()=>{
	if(option2.innerHTML == rightAnswer){
		rightCount++;
		wrongStreak = 0;
		resetEquation(true);
	}else{
		resetEquation(false);
	}
});

option3.addEventListener('click', ()=>{
	if(option3.innerHTML == rightAnswer){
		rightCount++;
		wrongStreak = 0;
		resetEquation(true);
	}else{
		resetEquation(false);
	}
});

option4.addEventListener('click', ()=>{
	if(option4.innerHTML == rightAnswer){
		rightCount++;
		wrongStreak = 0;
		resetEquation(true);
	}else{
		resetEquation(false);
	}
});