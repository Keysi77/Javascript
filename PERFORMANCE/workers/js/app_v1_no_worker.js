const list = document.querySelector('ol');
let items = []; // budu tam vytiahnute slova

axios.get('https://jsonplaceholder.typicode.com/todos').then( response => {

	response.data.forEach(item => {
		let words = item.title.split(' ');
		items = items.concat( words ); // pole zlucim s polom tychto slov
	});

	// usporiada podla abecedy
	items.sort();

	// odfiltruje vsetky stringy, ktorych dlzka nieje aspon 4 znaky
	items = items.filter(name => name.length > 4);

	// slova dat do li elemntov ktore sa daju do HTML strakny aby sa zobrazili
	items = items.map(name => `<li>${name}</li>`);
	// toto pole pridame do HTML
	list.innerHTML = items.join('');

});
