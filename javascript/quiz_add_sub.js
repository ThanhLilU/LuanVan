const option1 = document.getElementById("quiz_option-1"),
	  option2 = document.getElementById("quiz_option-2"),
	  option3 = document.getElementById("quiz_option-3"),
	  option4 = document.getElementById("quiz_option-4");
const mark = document.getElementById("quiz_mark");
const right = document.getElementById("quiz_count-right"),
	  total = document.getElementById("quiz_count-total");

let rightCount = 0;
let totalCount = 0;
let rightAnswer = 0;
let timeOut;

function reset_timerBar(){
	var timerInner = document.getElementById("timer-bar--inner");
	timerInner.style.animation = 'none';
	timerInner.offsetHeight;
	timerInner.style.animation = null;

	clearTimeout(timeOut);
}

function generate_equation(){
	if(mark.innerHTML == "+"){
		var num1 = Math.floor(Math.random() * (5000)) + 5000;
		var num2 = Math.floor(Math.random() * (5000)) + 5000;

		rightAnswer = num1 + num2;
	}else{
		var num1 = Math.floor(Math.random() * (5000)) + 5000;
		var num2 = Math.floor(Math.random() * (4000)) + 1000;

		rightAnswer = num1 - num2;
	}
	let decide;
	decide= Math.floor(Math.random() * 2) -1;
	if(decide >= 0){
		var dummyAnswer1 = Math.abs(rightAnswer + (Math.floor(Math.random() * 2) - 1)*1000 + (Math.floor(Math.random() * 4) - 2)*100 + (Math.floor(Math.random() * 4) - 2)*10);
	}else{
		var dummyAnswer1 = Math.abs(rightAnswer - (Math.floor(Math.random() * 2) - 1)*1000 - (Math.floor(Math.random() * 4) - 2)*100 - (Math.floor(Math.random() * 4) - 2)*10);
	}

	decide= Math.floor(Math.random() * 2) -1;
	if(decide >= 0){
		var dummyAnswer2 = Math.abs(rightAnswer + (Math.floor(Math.random() * 2) - 1)*100 + (Math.floor(Math.random() * 4) - 2)*1000 + (Math.floor(Math.random() * 4) - 2)*10);
	}else{
		var dummyAnswer2 = Math.abs(rightAnswer - (Math.floor(Math.random() * 2) - 1)*100 - (Math.floor(Math.random() * 4) - 2)*1000 - (Math.floor(Math.random() * 4) - 2)*10);
	}

	decide= Math.floor(Math.random() * 2) -1;
	if(decide >= 0){
		var dummyAnswer3 = Math.abs(rightAnswer + (Math.floor(Math.random() * 2) - 1)*10 + (Math.floor(Math.random() * 4) - 2)*1000 + (Math.floor(Math.random() * 4) - 2)*100);
	}else{
		var dummyAnswer3 = Math.abs(rightAnswer - (Math.floor(Math.random() * 2) - 1)*10 - (Math.floor(Math.random() * 4) - 2)*1000 - (Math.floor(Math.random() * 4) - 2)*100);
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

	right.innerHTML = rightCount;
	total.innerHTML = totalCount;
	totalCount++;

	document.getElementById("timer-bar").style.setProperty("--duration", "10");
	reset_timerBar();
	timeOut = setTimeout(generate_equation, 10000);
}

option1.addEventListener('click', ()=>{

	if(option1.innerHTML == rightAnswer){
		rightCount++;
		generate_equation();
	}else{
		alert("Bạn đã sai, kết quả là: " + rightAnswer);
		generate_equation();
	}
});

option2.addEventListener('click', ()=>{
	reset_timerBar();

	if(option2.innerHTML == rightAnswer){
		rightCount++;
		generate_equation();
	}else{
		alert("Bạn đã sai, kết quả là: " + rightAnswer);
		generate_equation();
	}
});

option3.addEventListener('click', ()=>{
	reset_timerBar();

	if(option3.innerHTML == rightAnswer){
		rightCount++;
		generate_equation();
	}else{
		alert("Bạn đã sai, kết quả là: " + rightAnswer);
		generate_equation();
	}
});

option4.addEventListener('click', ()=>{
	reset_timerBar();

	if(option4.innerHTML == rightAnswer){
		rightCount++;
		generate_equation();
	}else{
		alert("Bạn đã sai, kết quả là: " + rightAnswer);
		generate_equation();
	}
});