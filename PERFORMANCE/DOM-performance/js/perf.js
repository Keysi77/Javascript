'use strict';

/**
 * in modern browsers the differences might not be so severe
 * but old IEs would probably shit their pants
 * especially since we're adding thoooousands of elements
 *
 * some shitty mobile browsers might blow up as well
 * again, the differences would be more severe there
 *
 * also, i'm running these scripts on a fairly big html page
 * because every time i create a new element, the browser
 * has to re-calculate positions of all affected elements
 *
 * so just creating a blank page and testing there
 * might be unrealistic
 *
 */

 /*
113 DOM výkon 03 / 5 spôsobov rýchlej DOM manipulácie


1. spôsob 
v každom cykle vyrobím li a pripnem ho k ul



2. spôsob 
to isté, akurát že v prvom som v každom cykle z dokumentu selectoval ul element, v tomto ho vytiahnem raz a uložím do premennej



3. spôsob
použijem document fragment https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment



4. spôsob 
v cykle vyrobím masívny string, na konci ho nalepím do ul



5. spôsob
v cykle vyrobím masívne pole, na konci z neho spravím string a nalepím na ul



Uvidíš, že často spraviť jednu masívnu zmenu je lepšie, ako spraviť tisíce maličkých.

 */

// create this many elements
const cycles = 160000;
const results = document.querySelector('.measurements');



// apparently faster than ul.innerHTML = '';
function cleanItUp(ul) {
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
}

// print results
function gimmeResults(t0, num) {
	console.timeEnd(`DOM update 0${num}`);
	let t1 = performance.now();
	results.innerHTML += `<small>0${num}</small>: ${(t1 - t0).toFixed(3)}ms <br>`;
}




// TEST 1 -------------------------
//
// we grab the list in every cycle,
// then append each new li separately
//
// ! too much dom touching (can't touch that)

var t0 = performance.now();
console.time('DOM update 01');

for (let i = 0; i < cycles; i++) {
	var ul = document.querySelector('.super-test');
	var li = document.createElement('li');
	li.innerHTML = i;

	ul.appendChild(li);
}

gimmeResults(t0, 1);
cleanItUp(ul);




// TEST 2 -------------------------
//
// we still append each li separately
// but at least now we CACHE the list
//
// ! always cache your shit

var t0 = performance.now();
console.time('DOM update 02');

var ul = document.querySelector('.super-test');

for (let i = 0; i < cycles; i++) {
	var li = document.createElement('li');
	li.innerHTML = i;

	ul.appendChild(li);
}

gimmeResults(t0, 2);
cleanItUp(ul);




// TEST 3 -------------------------
//
// here we use a documentFragment and append that in the end
// display: none; might also be worth a try
//
// ! you can add to fragments at less cost

var t0 = performance.now();
console.time('DOM update 03');

var frag = document.createDocumentFragment();
var ul = document.querySelector('.super-test');

for (let i = 0; i < cycles; i++) {
	var li = document.createElement('li');
	li.innerHTML = i;

	frag.appendChild(li);
}

ul.appendChild(frag);

gimmeResults(t0, 3);
cleanItUp(ul);




// TEST 4 -------------------------
//
// we just create a string of the new li elements
// then insert the string into the list
//
// ! much better, just ONE dom insertion

var t0 = performance.now();
console.time('DOM update 04');

var ul = document.querySelector('.super-test');
var li = '';

for (let i = 0; i < cycles; i++) {
	li = li + `<li>${i}</li>`;
	// li += '<li>' + i + '</li>';  // += is faster
}

ul.innerHTML = li;

gimmeResults(t0, 4);
cleanItUp(ul);




// TEST 5 -------------------------
//
// instead of creating a string, we make an array
// and then join() it to get a string
//
// ! join() is sometimes actually faster than makin big strings

var t0 = performance.now();
console.time('DOM update 05');

var ul = document.querySelector('.super-test');
var li = [];

for (let i = 0; i < cycles; i++) {
	li.push('<li>', i, '</li>');
}

ul.innerHTML = li.join('');

gimmeResults(t0, 5);
// cleanItUp(ul);