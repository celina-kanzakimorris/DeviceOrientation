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


		posX = map(x, 180, -180, 0, window.innerWidth, true);
		posY = map(y, 90, -90, 0, window.innerHeight, true);
	}
}


let value = 0;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	normalMaterial();
	textSize(width/3);
	textAlign(CENTER, CENTER);
}

function draw(){
	text('Groovy', 0, 0);

	background(value, value, value);
	colorMode(HSB);
	rotateX(frameCount * 0.03);
	rotateY(frameCount * 0.01);
	box(posX/2, posY/2, 100);
}

function deviceShaken(){
	value = value + 5;
	if(value > 255){
		value = 0;
	}
}  