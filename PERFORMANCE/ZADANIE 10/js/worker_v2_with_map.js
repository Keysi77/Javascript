addEventListener('message', event => {

	let items = event.data[1];

	// split into separate words
	items.forEach(item => {
		let words = item.title.split(' ');
		items = items.concat(words);
	});

	// sort alphabetically
	items.sort();

	// under 4 letters, go fuck yourself
	items = items.filter(name => name.length > 4);


	// append count to each word
	let map = new Map();
	items.forEach( item => {
		if ( ! map.has(item) )
			map.set( item, { count: 1 } );
		else
			map.set(item, { count: ++map.get(item).count } );
	});

	let result = [];

	map.forEach( (meta, name)  => {
		result.push(`<li>${name} <small>(${meta.count})</small></li>`);
	});


	// send them home
	postMessage(result);

});