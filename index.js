var canvas = document.getElementById("background");
var ctx = canvas.getContext("2d");

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight|| e.clientHeight|| g.clientHeight;
x = x * 0.95;
y = y * 0.95;

var imgData = ctx.createImageData(5, 5);
var clear = ctx.createImageData(x, y);

var particles = new Array(35);

for(var i = 0; i < particles.length; i++){
	particles[i] = {
		x: Math.round(Math.random()*(x-10))+10,
		y: Math.round(Math.random()*(y-10))+10,
		a: Math.round(Math.random()*255),
		r: (Math.random() * 10) + 1,
		s: 8
	};
}

function setColor(Nr,Ng,Nb,Na){
	r=Nr;
	g=Ng;
	b=Nb;
	a=Na;
	var i;
	for (i = 0; i < imgData.data.length; i += 4) {
		imgData.data[i+0] = r;
		imgData.data[i+1] = g;
		imgData.data[i+2] = b;
		imgData.data[i+3] = a;
	}
}

function drawPixel(x, y){
	ctx.putImageData(imgData, x, y);
}

function clearScreen(){
	setColor(21,21,95,255);
	ctx.putImageData(clear, 0, 0);
}

function drawParticles(){
	for(var i = 0; i < particles.length; i++){
		setColor(255,255,255,particles[i].a);
		drawPixel(particles[i].x,particles[i].y);
		particles[i].a = particles[i].a - ((1*particles[i].r)*0.1);
		if(particles[i].a < 0){
			particles[i].x = Math.round(Math.random()*(x-10))+10;
			particles[i].y = Math.round(Math.random()*(y-10))+10;
			particles[i].a = 255;
		}
	}
}

setInterval(function(){
	clearScreen();
	drawParticles();
}, 16);

window.onresize = function(event) {
	x = w.innerWidth || e.clientWidth || g.clientWidth;
	y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	x = x * 0.95;
	y = y * 0.95;
	canvas.width = x;
	canvas.height = y;
	clear = ctx.createImageData(x, y);
};

window.onload = function(){
	x = x * 0.95;
	y = y * 0.95;
	canvas.width = x;
	canvas.height = y;
}