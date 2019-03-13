const list = document.querySelector('ol');

axios.get('https://jsonplaceholder.typicode.com/todos').then( response => {

 // let worker = new Worker('js/worker_v1.js');
	let worker = new Worker('js/worker_v2_with_map.js');

	worker.postMessage([
		'hi, bro',
		response.data
	]);

	// pocuva ci sa posielaju data z Workera, ak hej tak ich joine na HTML
	worker.addEventListener('message', event => {
		list.innerHTML = event.data.join('');
	});

});