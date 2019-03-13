'use strict';

let debounceTimer;

addEventListener('mousemove', (event) => {
    // ked pohnem mysou tak ho znicim
    clearTimeout(debounceTimer);
    // ked sa hybem tak sa timer zabija, ked sa prestanem tak sa odpali funkcia
    debounceTimer = setTimeout(() => { // pockat pol sekundy a potom sa displaynu koordinaty
        displayCoords(event);
    }, 500);
});

function displayCoords(event) {
	document.body.textContent = 'Mouse at ' + event.pageX + ', ' + event.pageY;
	console.log('fired');
}
