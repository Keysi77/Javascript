'use strict';


/**
 * PROGRESS BAR
 */
const progressBar = document.querySelector('.better');
const shittyBar = document.querySelector('.shittier');

let documentHeight = document.body.scrollHeight - window.innerHeight;
let ratio;
let scheduled = false;


addEventListener('scroll', () => {

	// throttle (spusti sa max kazdych 100 milisekund)
	if (!scheduled) {
		scheduled = true;
		setTimeout(() => {

			scheduled = false;

			// vyratame ako hlboko do stranky sme, posunieme oba scrollbary
			ratio = (pageYOffset / documentHeight);
			progressBar.style.transform = `scaleX(${ratio})`;
			shittyBar.style.width = (ratio * 100) + '%';

		}, 100);
	}

});



function heavyCoding() {
	var start = Date.now();
	var stoptime = Math.floor(Math.random() * 30) + 30;

	// this a blocking operation
	// a real ajax call, for example, would not be blocking
	// but this serves to illustrate a point
	// about how expensive constantly firing events is
	while (Date.now() - start < stoptime) {
		// sleep
	}

	console.log('fired', Date.now());
}
