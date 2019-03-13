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
		if ( ! map.has(item) ) // podmienka ci sa nachadzuaju rovnake itemy v mape
			map.set( item, { count: 1 } ); // slovo bolo iba raz ak podmienka je FALSE
		else // inak napise kolko krat sa slovo nachadza v mape
			map.set(item, { count: ++map.get(item).count } );
	});

	let result = [];

	map.forEach( (meta, name)  => {
		result.push(`<li>${name} <small>(${meta.count})</small></li>`);
	});


	// send them home
	postMessage(result);

});