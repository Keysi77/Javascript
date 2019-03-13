'use strict';


/**
 * PROGRESS BAR
 */
const progressBar = document.querySelector('progress');
let max = document.body.scrollHeight - window.innerHeight;

progressBar.max = max;

window.addEventListener('scroll', () => {
	progressBar.value = window.pageYOffset;
	// heavyCoding();
});

window.addEventListener('resize', () => {
	progressBar.max = document.body.scrollHeight - window.innerHeight;
});



function heavyCoding() {
	var start = Date.now();
	var stoptime = Math.floor(Math.random() * 200) + 200;

	// this a blocking operation
	// a real ajax call, for example, would not be blocking
	// but this serves to illustrate a point
	// about how expensive constantly firing events is
	while (Date.now() - start < stoptime) {
		// sleep
	}

	console.log('fired', Date.now());
}
