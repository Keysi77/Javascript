let i = 0;

// setInterval(() => {
// 	if ( i++ < 1 ) {
// 		heavyCoding();
// 		console.log( performance.now() );
// 	}
// }, 100);


// setInterval(() => {
// 	console.log( performance.now() );
// }, 1000 / 60);

// setTimeout(() => {
// 	console.log( performance.now() );
// }, 1000);


// const tick = () => {
// 	console.log( performance.now() );
// 	requestAnimationFrame(tick);
// }
// tick();



// (function tick() {
// 	console.log( performance.now() );
// 	requestAnimationFrame(tick);
// }())



// const tick = function() {
// 	console.log( performance.now() );
// 	setTimeout(tick, 100);
// };
// tick();


// (function tick() {
// 	console.log(performance.now());
// 	setTimeout(tick, 100);
// }());


// const tick = function() {
//  	console.log( performance.now() );
//  	requestAnimationFrame(tick);
// };
// tick();


// const tick = function () {
// 	console.log(performance.now());
// 	setTimeout(tick, 1000);
// }
// setTimeout(tick, 1000);






function heavyCoding() {
	var start = Date.now();
	// var stoptime = Math.floor(Math.random() * 200) + 200;
	var stoptime = 1000;

	// this a blocking operation
	// a real ajax call, for example, would not be blocking
	// but this serves to illustrate a point
	// about how expensive constantly firing events is
	while (Date.now() - start < stoptime) {
		// sleep
	}

	console.log('fired', Date.now());
}