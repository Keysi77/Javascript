const list = document.querySelector('ol');
let items = [];

axios.get('https://jsonplaceholder.typicode.com/todos').then( response => {

	response.data.forEach(item => {
		let words = item.title.split(' ');
		items = items.concat( words );
	});

	// sort alphabetically
	items.sort();

	// under 4 letters, go fuck yourself
	items = items.filter(name => name.length > 4);

	// prepare for insertion
	items = items.map(name => `<li>${name}</li>`);

	list.innerHTML = items.join('');

});
