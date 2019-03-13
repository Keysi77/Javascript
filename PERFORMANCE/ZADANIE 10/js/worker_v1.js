addEventListener('message', event => {

	// let t0 = performance.now();


	let items = event.data[1];

	items.forEach(item => {
		let words = item.title.split(' ');
		items = items.concat(words);
	});

	// sort alphabetically
	items.sort();

	// under 4 letters, go fuck yourself
	items = items.filter(name => name.length > 4);

	// prepare for insertion
	items = items.map(name => `<li>${name}</li>`);


	// console.log( items );

	// send them home
	postMessage(items);


	// let t1 = performance.now();
	// console.log(
	// 	(t1 - t0) + 'ms'
	// );

});