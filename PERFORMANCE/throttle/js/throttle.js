'use strict';

// throttle - obmedzovac ako casto sa moze funkcia spustiot
let scheduled = false, // pomocna pre timer, ze nieje este naplanovany odpal funkcie
	lastEvent;

addEventListener('mousemove', function (event) {
	lastEvent = event; // ulozenie kde sa mys nachadza pri poslednom evente

	if ( ! scheduled ) {
		scheduled = true; // som naplanova
		setTimeout(() => {
			displayCoords(lastEvent); // vypise koordinaty mysi
			scheduled = false; // v momente odpalu zasa niesom
		}, 2000); // kazde dve sekundy sa spusti funkcia - limit ako casto sa funkcia moze spustit
	}
});


function displayCoords(event) {
	document.body.textContent = 'Mouse at ' + event.pageX + ', ' + event.pageY;
	console.log('fired');
}

// debounce