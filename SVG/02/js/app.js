'use strict';
// pomocne premenne - ELEMENTY
var progress = document.querySelector('.progress'),  // progress kruhu
    textarea = document.querySelector('textarea'),   // textarea
    counter  = document.querySelector('.counter');   // pocitadlo

// Premenne pre nastavovanie DASH-ARRAY / OFFSET
var pathLength = progress.getAttribute('r')*2*Math.PI, // obvod kruhu pomocou nasho radiusu
    tweetLength = 30, // Kolko znakov bude maximalne prijimat textarea
    // pomocne premenne pre dynamicke menenie farieb kruhu
    warningZone = Math.floor(tweetLength * (2/3)), // zaokruhlene 2/3 z tweetLength
    dangerZone = Math.floor(tweetLength * (4/5)); // zaokruhlene 4/5 z tweetLength (kusok od konca)

// CSS hodnoty, drzia honoty strokeDasharray a  strokeDashoffset (cislo v pixeloch)
progress.style.strokeDasharray = pathLength + 'px';
progress.style.strokeDashoffset = pathLength + 'px';
// ked sa bude dashoffset znizovat bude sa prekrivat ciarov a vznikne efekt naplanania

// FUNKCIA, ktora bude počuvat input textareri a podla nej sa bude ovladat naplnanie modreho SVG kruhu
textarea.addEventListener('input', function(event){
  // console.log(event); // vypise len event, udaje o inpute
/*
  var newOffset = parseInt(progress.style.strokeDashoffset, 10) -10,
                  // parse aby odrezalo z cisla PX na koniec
                  // 10 - pre stare prehliadace ze sa jedna o desiatkovu sustavu
                  // -10 odpocita hodnotu 10 z povodneho vyparsovaneho cisla
                  */

   var       len = textarea.value.length,
                  // drzi hdonotu poctu znakov napisanych v textarea
             per = len / tweetLength;
                  // percentualna hdonota medzi dlzskou aku som napisal a aka je povolena

    // podmienka, aby sa kruh tocil len raz cize od 0 do 360 stupnov
    if (len <= tweetLength) {
      // ak pouzijem let miesto var, tak bude platit len v bloku kode {}, mimo if nepojde
      let newOffset = pathLength - pathLength*per;
                // ked bude 40 tak bude 40 1 ked 20 tak 20 0.5
                // aby bola univerzalna pri zmene tweetLength sa vzdy prepočitali percentualna
      // update novej hodnoty
      progress.style.strokeDashoffset  = newOffset;

      // FARBY - treba v podmienke, pocas pisania
      // ak sa budeme blizit ku koncu, bude sa menit farba kruhu
      // modra -> oranzova -> cervena
      // novy sposob
      progress.classList.toggle('warn', len > warningZone && len < dangerZone);
      //pomocou toggle() prida warn za podmienko ze len je vacsie ako warningZone
      // ale mensie ako dangerZone tak sa prida classa warn
      progress.classList.toggle('danger', len >= dangerZone);
      // ked sme prekrocili dangerZone, prida sa classa danger
      progress.classList.toggle('tragedy', len == tweetLength);
      // ked sa prekroci povoleny pocet znakov, prida sa classa tragedy


      // stary sposob
      /*
      if (len >= dangerZone) {
        progress.classList.add('danger');
        // ak prekrocim 25 znakov, pridam do HTML <progress> dalsiu classu class = "danger"
      }else if (len >= 15) {
        progress.classList.add('warn');
      }
      */
    }

    // pocitadlo, celkovy pocet - to čo sme uz zadali = kolko nam ostava
    counter.textContent = tweetLength - len;
    // aby pocitadlo zasvietilo na cerveno ked prekroci hranicu
    counter.classList.toggle('danger', len >= tweetLength);

});
