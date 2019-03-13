// MODUL - teraz funkcie v nom predstavuju PRIVATE metody ktore sa daju pouzit len vo vnutri
//       - cez return ich spristupnime 'svetu', inak nebuud spristupneme
//       - Modul je niečo ako CLASS v JAVE - spristpnmuujeme nejake metody private, public atd...



    var dudes = document.querySelectorAll('.choice img');
    dudes = Array.prototype.slice.call(dudes);  // Array.from( dudes );

    var getAllDudes = function () {
        return dudes;
    }
    // --------------- FUNKCIE pre riadenie skore

    /**
     * vasho -> scoreVasho
     *
     * @param  {HTMLImageElement} dude
     * @return {string}      	  localStorage key
     */

    var getKeyFrom = function ( dude ) {
        // spravi string scoreVasho
        return 'score' + _.capitalize( dude.alt ); // alt je vasho (s malym 'v')
        // funkcia _.capitalize da prve pismeno velke
    }

    /**
     * get scoreVasho from localStorage
     *
     * @param  {HTMLImageElement} dude
     * @return {number}
     */
    var  getScore = function ( dude ) {
        // skore z scoreVasho a prehodene aby bolo ešte cislo
        return +localStorage.getItem( getKeyFrom(dude) ) || 0;
        //...Ak plati prva cast kodu, tak as vykona ta čast a druha sa ignoruje, ale ak neplati vykona sa to čo je za || operatorom
        /*
        // toto
        var num = get_num() || 0;

        // je to iste ako toto
        var num = get_num();
        if ( ! num ) {
            num = 0;
        }
         */
    }

    /**
     * set scoreVasho to localStorage
     *
     * @param {HTMLImageElement}  dude   dom element
     * @param {number} 			  score  score number
     */
    var setScore = function ( dude, score ) {
        // ulozime hodnoty Score
        localStorage.setItem( getKeyFrom(dude), score);
    }

    /**
     * update dudes DOM element
     *
     * @param  {HTMLImageElement} dude
     */
    var updateDude = function ( dude ) {
        var score = getScore(dude); // vytiahne nove skore ktore sa ulozi
        dude.nextElementSibling.textContent = score;
    }

    /**
     * increase score for dude
     * both dom and localStorage
     *
     * @param  {HTMLImageElement}  dude
     */
    var increaseScore = function ( dude ) { // funkcie vo funkcii
        var score = getScore(dude);
        score++;
        setScore(dude, score);
        updateDude(dude);
    }

    export var Bros = {
        all: getAllDudes, // bez (), lebo ju nechceme spustit, ale len spristupnit
        updateDOM: updateDude,
        increaseScore: increaseScore,
        // nalavo ta co sa vola : napravo ta čo je deklarovana v MODULE
        // ak by som chcel aj sotatne aby boli spristupneme zo vonka treba ich dat do returnu
    };


