const list = document.querySelector('ol');
const button = document.querySelector('a');

axios.get('https://jsonplaceholder.typicode.com/todos').then( response => {

	// let worker = new Worker('js/worker_v1.js');
	let worker = new Worker('js/worker_v2_with_map.js');

	button.addEventListener('click', event => {
		event.preventDefault();

		worker.postMessage([
			'hi, bro',
			response.data
		]);

	})


	worker.addEventListener('message', event => {
		list.innerHTML = event.data.join('');
	});

});
