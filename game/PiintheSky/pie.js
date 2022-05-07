class Pie{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this. r = 16;
		this.yspeed = 0;
		this.digit = floor(random(10));
	}

	show(){
		fill(255);
		circle(this.x, this.y, this.r*2);
		fill(0);
		textSize(32);
		textAlign(CENTER, CENTER);
		text(this.digit, this.x, this.y+1.5);
	}

	update(){
		this.y = this.y + this.yspeed;
		this.yspeed = this.yspeed + 0.05;
	}
}