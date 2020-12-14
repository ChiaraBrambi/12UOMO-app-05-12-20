// VAR SERVER
let socket = io(); //setting server

let logoIcon, benvenuto, imm_condizioni;
let b1, b2, b3, b4, button_text, testo_privacy, stadio;
let imm1, imm2, imm3, imm4, strumenti, tut1, tut2, tut3;
let w, h, s, xBarra, logor;
let i = 0;
let pag = 0;
let spunta = 0;
let h1, h2;

let divieto = 'ELOGIA IL CONTENIMENTO';
let sotto_divieto1 = 'Mantenere gesti e volume controllati: non sarà necessario'
let sotto_divieto2 = 'sbracciarsi o fare schiamazzi di alcun tipo.'
let step = 'step 1/4';

let bonus_preso = 1;
let contBonus = 12; //conta quando p_coord arriva a 100
// RICEZIONE BONUS
socket.on("bonusIn", bonusServer);
socket.on("bonusTotIn", bonusTotale_Ok);

// UPDATE DA SERVER BONUS
function bonusServer(dataReceived) {
  contBonus = dataReceived; //assegna a contBonus dati da server
}

function bonusTotale_Ok(dataReceived) {
  bonus_preso = dataReceived; //assegna a contBonus dati da server
}
/////////////////////////////////////////////////////////////////////////

function preload() {
  logoIcon = loadImage("./assets/logo.png");
  logor = loadImage("./assets/logopiccolo.png"); //logo ridotto
  stadio = loadImage("./assets/stadio.png");
  imm1 = loadImage("./assets/esuberanza.png");
  imm2 = loadImage("./assets/spontaneità.png");
  imm3 = loadImage("./assets/avversione.png");
  imm4 = loadImage("./assets/scaramanzia.png");
  testo_privacy = loadImage("./assets/testo.png");
  strumenti = loadImage("./assets/strumenti.png");


}

/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15); //rallenta
  background('#887b86'); //scuro
  imageMode(CENTER); //per pittogrammi
  image(logoIcon, width / 2, height / 2, logoIcon.width / 7, logoIcon.height / 7);
}

/////////////////////////////////////////////////////////////////////////
function draw() {
  //CONTATORE i DEL TEMPO
  if (frameCount % 2 == 0) { //multiplo di 50 incrementa i
    i++;
  }

  w = width / 20;
  h = height / 50;

  //EMIT BONUS
    socket.emit("bonusOut", contBonus);
    socket.emit("bonusTotOut", bonus_preso);

    background('#F9F9F9'); //chiaro
    //testo caratteristiche
    textFont('quicksand');
    textAlign(CENTER, TOP);
    textStyle(BOLD);


  ///////// BOTTONE //////////////////////////////////////////////////////////////////////////////////////////
    b1 = createButton(button_text);
    b1.position(w * 9, h * 42);
    b1.mousePressed(p);
    b1.id('startBtn');


  ///////// PAG 0 //////////////////////////////////////////////////////////////////////////////////////////
  if (pag<=1) {
    background('#F9F9F9'); //chiaro
    b2 = createButton("");
    b2.position(w, h * 4.5);
    b2.mousePressed(back);
    b2.id('pauseBtn')

    //logo a destra
    image(logor, w * 18.5, h * 6, logor.width / 4.5, logor.height / 4.5);
    //testo titolo
    push();
    fill('#877B85'); //4° colore PALETTE
    textSize(25);
    text(h1, w * 10, h * 13);
    fill('#B7AEB5'); //3° PALETTE
    text(h2, w * 10, h * 15);
    pop();

    //BARRA COORDINAZIONE
    fill('#D5D0D3'); //barra grigia
    rectMode(CENTER);
    noStroke();
    rect(w * 10, h * 6, width / 3.5, 15, 20);
    //xBarra = ((width / 3.5) / 100) * p_coord; //altezza barra %, xTot= 439 = width / 3.5
    xBarra = ((width / 3.5) / 100) * 25; //25%
    push();
    rectMode(CORNER);
    fill('#877B85'); //barra viola
    //width/7 è la metà della barra, che è lunga width/3.5
    rect(w * 10 - width / 7, h * 6 - 7.5, xBarra, 15, 20);
    pop();
  }


  if (pag == 0) { /////////////////////////////////////////////////// CODICE PARTITA
      document.getElementById("forum").style.display = 'block';
      document.getElementById("schermo").style.display = 'block';
    button_text = 'Avanti';
    h1 = 'Inserisci il codice';
    h2 = 'per accedere allo stadio';
    step = ' step 1/2';

    xBarra = ((width / 3.5) / 100) * 50;//metà
    push();
    rectMode(CORNER);
    fill('#877B85'); //4° colore PALETTE
    rect(w * 10 - width / 7, h * 6 - 7.5, xBarra, 15, 20);
    textSize(12);
    text(step, w * 10, h * 10);
    pop();

  } else if (pag == 1) { //////////////////////////////////////////////
    document.getElementById("forum").style.display = 'none';
    document.getElementById("schermo").style.display = 'none';
    b3 = createButton("TEAM1");
    b3.position(w * 7, h * 27);
    b3.mousePressed();
    b3.id('partitaBtn');

    b4 = createButton("TEAM2");
    b4.position(w * 11, h * 27);
    b4.mousePressed();
    b4.id('partitaBtn');

    button_text = 'Inizia';
    h1 = 'Seleziona';
    h2 = 'la tua squadra';
    step = '2/2';

    xBarra = ((width / 3.5) / 100) * 100;//metà
    push();
    rectMode(CORNER);
    fill('#877B85'); //4° colore PALETTE
    rect(w * 10 - width / 7, h * 6 - 7.5, xBarra, 15, 20);
    textSize(12);
    text(step, w * 10, h * 10);
    pop();



  } else if (pag == 2) {
    window.open('../benvenuto/index.html', '_self');
  }
}
///////////// FINE DRAW ////////////////////////////////////////////////////////

function p() {
  pag++;
}

function back() {
  if (pag<=0 ) {
    window.open('../index.html', '_self');
  } else if(pag>0){
      pag--;
  }

}

/////////////////////////////////////////////////////////////////////////////
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#887b86'); //scuro
  imageMode(CENTER); //per pittogrammi
  image(logoIcon, width / 2, height / 2, logoIcon.width / 7, logoIcon.height / 7);
}
