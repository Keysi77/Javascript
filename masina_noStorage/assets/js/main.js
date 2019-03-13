//var dudes = document.getElementById('vasho');
    document.getElementsByTagName('h1')[0].addEventListener('click', function() {
        // LocalStorage su cookies len lepšie a nedaju sa zakazat

        var score = +localStorage.getItem('score');

        var data = [
            {
                name: 'vasho',
                sexiness: 'vashove',
                score: score
            },
            {
                name: 'mitch',
                sexiness: 'mitchove',
                score: score
            }
        ];


        if (!score){ // ak neexistuje tak  sa nastavi na povodnu NULA
            score =0;
        }
        console.log(JSON.stringify(data));


        localStorage.setItem('score',++score);
        localStorage.setItem('sexyTime',data);
        // pretransformovanie do JSON

        // if (score >7){
        //     localStorage.removeItem('sexyTime');
        // }
    });
var dudes = document.querySelectorAll('.choice img');
// vsetky images ktore zaapdaju pod trieud choice (NodeArray)
// Pretypovanie na Nodelistu na ArrayList aby fungovala metoda forEach()
dudes = Array.prototype.slice.call(dudes); // Array.from(dudes)

dudes.forEach(function (dude) {

        dude.addEventListener('click', function () {
            var scoreElement = this.nextElementSibling, // skore element
                score = Number(scoreElement.textContent); // konkretne cislo
            // podobne ako ParseInt prehodi len text na Number
            // zvysi sa zdy skore o 1, ked na element klikneme
            score = score+1;
            scoreElement.textContent = score;
            //console.log(typeof score);
        });

        // ked prideme mysou na jedneho, pridame mu CSS classu
        dude.addEventListener('mouseover', function () {
            // otherDude je ten druhy an ktoreho neukazujem mysou
            var otherDude = _.without(dudes, this)[0];
            // console.log(otherDude);
            otherDude.classList.toggle('desaturate');
        });

        // ked odidem mysou tak mu classu zoberie
        dude.addEventListener('mouseout', function () {
            var otherDude = _.without(dudes, this)[0];
            otherDude.classList.toggle('desaturate');

        });

    });
// DOMACA ULOHA 4

// A

var dudes = document.querySelectorAll('.choice img');
dudes = Array.prototype.slice.call(dudes); // Array.from(dudes);

function mouseEventListenerFunction(event) {
    var otherDude = _.without(dudes, this)[0];
    otherDude.classList.toggle('desaturate', event.type === "mouseover");
}

function addMultipleEventListeners(element, events, handler) {
    for (var i = 0; i < events.length; i++) {
        element.addEventListener(events[i], handler);
    }
}



dudes.forEach(function(dude) {

    addMultipleEventListeners( dude, [ "click" ], function () {
        let scoreElement = this.nextElementSibling,
            score = Number( scoreElement.textContent );

        score = score + 1;
        scoreElement.textContent = score;
    });

    addMultipleEventListeners( dude, [ "mouseover", "mouseout" ], mouseEventListenerFunction );

});

// B
// formatovanie cisla

var mojeCislo = 234252.325;
function money(cislo) {
    var result = (cislo.toLocaleString('sk-SK', { style: 'currency', currency: 'EUR' }));

    return result;
};

console.log(money(mojeCislo));
// C
// odpocitanie zlavy od tohto cisla, ktoru si zadame

var mojaZlava = 15;

function zlava(cislo, zlava) {
    var result = cislo - (cislo * (zlava / 100));
    return money(result);
};

console.log(zlava(mojeCislo, mojaZlava));
















