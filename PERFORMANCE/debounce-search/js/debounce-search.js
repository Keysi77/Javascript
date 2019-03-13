'use strict';

const input = document.querySelector('input');
let debounceTimer;


/**
 * SHITTY
 */
// input.addEventListener('keyup', () => fauxAjax());


/**
 * DEBOUNCED
 */
input.addEventListener('keyup', () => {
	clearTimeout(debounceTimer);

	debounceTimer = setTimeout(() => {
		fauxAjax();
	}, 300);
});




/**
 * DEBOUNCED
 */
/* input.addEventListener('keyup', () => {

	clearTimeout(debounceTimer);

	debounceTimer = setTimeout(() => {
		fauxAjax();
	}, 500);

});
 */


/**
 * SIMULATE A HEAVY PROCESS
 */
function fauxAjax() {
	var start = Date.now();
	var stoptime = Math.floor( Math.random() * 200 ) + 200;

	// this a blocking operation
	// a real ajax call, for example, would not be blocking
	// but this serves to illustrate a point
	// about how expensive constantly firing events is
	while ( Date.now() - start < stoptime ) {
		// sleep
	}

	console.log( Date.now(), "done, here's your json!" );
}