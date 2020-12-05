
let logoIcon;
let tIcon;
/////////////////////////////////////////////////////////////////////////

function preload() {
  logoIcon = loadImage("./assets/logopiccolo.png");
  tIcon = loadImage("./assets/immagini/trombetta.png"); //trombetta chiara
}
/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12); //rallenta
}
/////////////////////////////////////////////////////////////////////////
function draw() {
  background('#F9F9F9'); //chiaro
  imageMode(CENTER); //per pittogrammi
  image(logoIcon,  width/2 , height / 2.5, logoIcon.width/2.5, logoIcon.height/2.5); //stadio
  image(tIcon, width / 2, height / 6*4.5, tIcon.width / 8, tIcon.height / 8);

  //testo caratteristiche
  textFont('quicksand');
  textAlign(CENTER, TOP);
  textStyle(BOLD);

  //testo centrale
  textSize(15);
  fill('#877B85'); //4° colore PALETTE
  text('PRENDI LA TROMBETTA', width / 2, height / 6*4.9);
  textSize(13);
  fill('#B7AEB5'); //3 PALETTE
  text('Preparati a tifare', width / 2, height / 6*5.1 );
if(mouseIsPressed){
   window.open('index1.html','_self');
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
