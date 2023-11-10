var cancion="";

function preload() {
cancion=loadSound("Barcaa.mp3")
}

function setup() {
canvas=createCanvas(499,449);
canvas.center(); 
canvas.position(299,299);
video=createCapture(VIDEO); 
video.hide();
}

function draw() {
 image(video,0,0,550,549);   
}
function reproducir_un_temaso() {
cancion.play();
cancion.setVolumen(1);
cancion.rate(1);
}