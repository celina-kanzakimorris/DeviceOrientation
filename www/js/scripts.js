document.addEventListener("deviceready", init, false);

var x, y, z, posX, posY;


function init(){
	if(window.DeviceOrientationEvent){
		window.addEventListener("deviceorientation", handleOrientation)
	}
	else{
		alert("no luck")
	}

	function handleOrientation(event){

		z = event.alpha;
		y = event.beta;
		x = event.gamma;


		posX += x;
		posY += y;


		posX = map(x, -180, 180, 0, window.innerWidth, true);
		posY = map(y, -90, 90, 0, window.innerHeight, true);

		$("#alpha").html(z);
		$("#beta").html(x);
		$("#gamma").html(y);

	}
}


function setup(){
	var cnv = createCanvas(window.innerWidth, window.innerHeight);
	cnv.parent("myCanvas");

	posX = width/2;
	posY = height/2;
}

function draw(){
	background(255);
	fill(220, 55, 135);
	stroke(0);
	ellipse(posX, posY, 100);

	fill(0);
	stroke(220, 55, 135);
	ellipse(z, x, 100);
}