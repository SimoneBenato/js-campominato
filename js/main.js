// Consegna
// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.

// variabili e array
var bombs = [];
var numeroElementi = 100;
var numBombs = 16;

// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50



// generatore delle bombe
while(bombs.length < numBombs){
    var numeroBomba = randomizer(numeroElementi);
    if(bombs.indexOf(numeroBomba) === -1) {
      bombs.push(numeroBomba);
    } 
}
console.log(bombs);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var userNumbers = [];
var rounds = numeroElementi - numBombs;


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// FUNZIONI

function isInArray(array, element) {
  var i = 0;
  var result = false;

  while(i < array.length && result == false) {
    if (element == array[i]) {
      result = true;
    }
    i++
  }
  return result
}

function randomizer(max) {
  return Math.floor(Math.random() * max) + 1;
}


// PARTE GRAFICA

function creaCampo(celle) {
  for (let i = 1; i <= celle; i++) {
    let cella = `
      <div data-cella="${i}" class="cella"></div>
    `;
    let templateCella = document.createElement('div');
    templateCella.classList.add("quadrato");
    templateCella.innerHTML = cella;
    document.getElementById('campo').appendChild(templateCella);
  }
}

document.getElementById('campo').addEventListener('click',
    (e) => { //e = event
    console.log(e.target.dataset.cella);
    let element = document.querySelectorAll("[data-cella='" + e.target.dataset.cella + "']");
    console.log(element[0]);
    if (isInArray(bombs, e.target.dataset.cella)) {
    element[0].classList.add("red");
    alert("KA-BOOM");
    alert("Che peccato! Hai totalizato: " + userNumbers.length + " " + "punti");
    console.log("Che peccato! Hai totalizato: " + userNumbers.length + " " + "punti");
    } else {
        element[0].classList.add("green");
        if (isInArray(userNumbers, e.target.dataset.cella)) {
            // L’utente non può inserire più volte lo stesso numero.
            alert("numero già inserito")
        } else {
            userNumbers.push(e.target.dataset.cella);
        } 
    }
  }
)

creaCampo(100);