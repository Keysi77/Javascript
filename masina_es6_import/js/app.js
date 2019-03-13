// import suborov

import './lodash.min.js';
import { Bros } from './bros.module.js';


var dudes = Bros.all();

dudes.forEach(function(dude) {

	// load score from localStorage
	Bros.updateDOM(dude);

	// on click, increase score
	dude.addEventListener('click', function() {
		Bros.increaseScore( dude );
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
