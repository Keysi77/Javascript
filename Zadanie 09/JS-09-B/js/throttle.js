'use strict';


let scheduled = false,
	lastEvent;

addEventListener('mousemove', function (event) {
	lastEvent = event;

	if ( ! scheduled ) {
		scheduled = true;
		setTimeout(() => {
			displayCoords(lastEvent);
			scheduled = false;
		}, 2000);
	}
});


function displayCoords(event) {
	document.body.textContent = 'Mouse at ' + event.pageX + ', ' + event.pageY;
	console.log('fired');
}