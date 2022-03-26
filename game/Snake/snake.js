function Snake(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.eat = function(pos){
		var d = dist(this.x, this.y, pos.x, pos.y);
		if(d < 1){
			this.total++;
			return true;
		}else{
			return false;
		}
	}

	this.death = function(){
		for(var i=0; i<this.tail.length; i++){
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if(d < 10){
				var user = prompt("Game Over!\nBạn đã làm rất tốt!\nĐiểm lần này của bạn: " + this.total + " điểm", "Anonymous");
				if(user){
					var user_score = this.total;
					var game_name = "Snake";

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
				}
				this.total = 0;
				this.tail = [];
			}
		}
	}

	this.foodCollosion = function(pos){
		for(var i=0; i<this.tail.length; i++){
			var tailPos = this.tail[i];
			var d = dist(pos.x, pos.y, tailPos.x, tailPos.y);
			if(d < 10){
				return false;
			}
		}
	}

	this.update = function(){
		if(this.total === this.tail.length){
			for(var i=0; i<this.tail.length-1; i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);
	}

	this.show = function(){
		fill(255);
		for(var i=0; i<this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}

		rect(this.x, this.y, scl, scl);
	}
}