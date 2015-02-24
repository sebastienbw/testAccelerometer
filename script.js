var ax = 0;
var ay = 0;

var vx = 0;
var vy = 0;

var x = 0;
var y = 0;

window.ondevicemotion = function(event) {
	var rotationX = event.accelerationIncludingGravity.x;
	var rotationY = event.accelerationIncludingGravity.y;
	var rotationZ = event.accelerationIncludingGravity.z;

	console.log(rotationX, rotationY, rotationZ);

	ax = rotationX;
	ay = rotationY;
};

var canvas = document.createElement("canvas") ;
var context = canvas.getContext('2d');

var w = 640;
var h = 360;

document.body.appendChild(canvas);

requestAnimationFrame(function animate() {
	requestAnimationFrame(animate);

	vx += ax;
	vy += ay;

	x += vx;
	y += vy;

	if(x < 0) x = 0;
	if(x > w) x = w;
	if(y < 0) y = 0;
	if(y > h) y = h;

	context.fillStyle = "black";
	context.fillRect(0,0,w,h);
	context.fillStyle = "white";
	context.fillRect(x,y,10,10);
});
