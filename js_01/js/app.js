// podla idcka najdeme zoznam, do ktoreho chceme pridat spravu
// vytvorime novy, cisty, panensky li element
// jeho text nastavime na 'message' a nalepime do zoznamu
function addMessage( elementId, message ) {
  var list = document.getElementById(elementId),
    newItem = document.createElement('li');

  newItem.textContent = message;
  list.appendChild(newItem);
}

// ----------------------

// kedze moj javascript je na spodku stranky, vsetky html elementy uz prehliadac nacital
// beriem to tak, ze stranka je loadnuta
addMessage('browser', 'page loaded, bitch');


// po kliknuti na body pridame spravu do zoznamu
document.body.addEventListener('click', function(event) {
  addMessage('user', 'totally clicked it');
});


// ked drzim a - hybe sa stranka dolava
// ked drzim b - hybe sa stranka doprava
document.body.addEventListener('keypress', function(event) {

  // vytiahnem si aktualnu hodnotu body { left: ?px }
  var oldLeft = getComputedStyle(document.body).left,
      newLeft,
      oldTop = getComputedStyle(document.body).top,
      newTop;

  // zrejme to bude nieco ako "10px"
  // z toho potrebujem vytiahnut iba cisla na zaciatku, cize 10
  oldLeft = parseInt(oldLeft, 10);
  oldTop = parseInt(oldTop, 10);

  // ak stlacim a, left znizim o 10
  // ak stlacim d, left zvysim o 10
  // pre starsie prehliadace si pozri https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
  if ( event.key == 'a') {
    newLeft = oldLeft - 10;
  }
  else if ( event.key == 'd') {
    newLeft = oldLeft + 10;
  }
  else if ( event.key == 'w') {
    newTop= oldTop- 10;
  }
  else if ( event.key == 's') {
    newTop= oldTop +10;
  }
  /* Diagonalne*/
  else if ( event.key == 'w' && event.key == 'd') {
    newTop= oldTop- 10;
    newLeft = oldLeft -10;
  }


  // do newLeft som vypocital aku novu left hodnotu by body element mal mat
  // teraz mu ju este musim dat
  document.body.style.left = newLeft + 'px';
  document.body.style.top = newTop + 'px';

});

// pred zatvorenim okna sa zobrazi "naozaj to chces?" dialog
/*
window.addEventListener('beforeunload', function (event) {
  addMessage('browser', "don't try to close me! dick!");
  event.returnValue = ':(';
  return ':(';
});
*/

/* Uloha 02*/

function pozdrav(meno){
  var text;
  console.log("Ahoj truľo "+ meno);
}
pozdrav("Michal");
/*
var prveCislo = prompt("Zadaj prve cislo");
var druheCislo = prompt("Zadaj druhe cislo");
prveCislo = parseInt(prveCislo);
druheCislo = parseInt(druheCislo);

console.log(prveCislo+druheCislo);
*/
// prerobenie na funkciu
function sucet(){
  var prveCislo = prompt("Zadaj prve cislo");
  var druheCislo = prompt("Zadaj druhe cislo");
  prveCislo = parseInt(prveCislo);
  druheCislo = parseInt(druheCislo);
  console.log(prveCislo+druheCislo);
}
sucet();


// funkcia cez return a+b;
function sucet2(firstNum, secondNum){
  sum = firstNum+secondNum;
  console.log(sum);
  return sum;
}
sucet2(6,11);

functio how_much(pocetProduktov,cenaJedneho){
  var pocetProduktov = 5;
  var cenaJedneho = 300;

  console.log("Kupil si "+pocetProduktov+" produktov za "+pocetProduktov*cenaJedneho +" dokopy");
}
how_much(pocetProduktov,cenaJedneho);
