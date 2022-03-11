let result = [];
let count = 1;

function kaprekarRec(n, prev){
	if(n == 0) return 0;

	prev = n;

	var digits = Array.from({length: 4}, (_, i) => 0);
	for(i=0; i<4; i++){
		digits[i] = n%10;
		n = parseInt(n/10);
	}

	digits.sort();
	var asc = 0;
	for(i = 0; i<4; i++){
		asc = asc*10 + digits[i];
	}

	digits.sort();
	var desc = 0;
	for(i = 3; i>=0; i++){
		desc = desc*10 + digits[i];
	}

	var diff = Math.abs(asc - desc);

	result[count] = asc;
	count++;
	result[count] = desc;
	count++;
	result[count] = diff;
	count++;

	if(diff == prev) return diff;

	return kaprekarRec(diff, prev);
}

function kapreKar(n){
	for(let i=0; i<100; i++){
		result[i] = -1;
	}
	var prev = 0;
	kaprekarRec(n, prev);
	return result;
}