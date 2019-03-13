import './lodash.min.js';

// do suboru bros.module chcem vlozit len exportom oznaceny Bros a nic ine
import {Bros} from "./bros.module.js"; 
/*
var dudes = document.querySelectorAll('.choice img');
dudes = Array.prototype.slice.call(dudes);  // Array.from( dudes );
*/

// miesto zapisu hore mozeme ulozit do premennej vsetkoč o je v all

var dudes = Bros.all(); // musi byt all() so aztvorkami lebo spristupnujem funkciu
// MODUL

dudes.forEach(function( dude ) {

	// show score form localStorage
	Bros.updateDOM(dude);
	// pred nacitanim stranky sa spravi funkcia updateDude aby vytiahla skore ...
	// ... z LocalStorage a po nacitani tam vzdy bolo aktualne skoro


	// on click, increase score
	dude.addEventListener('click', function() {
		Bros.increaseScore(dude);
	});


	// mouse enters, enemy hurts
	dude.addEventListener('mouseover', function() {
		var otherDude = _.without( dudes, this )[0];
		otherDude.classList.add('desaturate');
	});


	// mouse leaves, enemy rises
	dude.addEventListener('mouseout', function() {
		var otherDude = _.without( dudes, this )[0];
		otherDude.classList.remove('desaturate');
	});

});


