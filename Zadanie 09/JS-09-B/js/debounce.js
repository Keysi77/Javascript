'use strict';


let debounceTimer;

addEventListener('mousemove', function (event) {
	clearTimeout(debounceTimer);

	debounceTimer = setTimeout(() => {
		displayCoords(event);
	}, 500);
});


function displayCoords(event) {
	document.body.textContent = 'Mouse at ' + event.pageX + ', ' + event.pageY;
	console.log('fired');
}