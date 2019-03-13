'use strict';

var Reminder = (function(){

	const list = document.querySelector('ul');
	const inputs = document.querySelectorAll('input[type="text"]');
	const preview = document.getElementsByClassName('preview')[1];
	const previewSmall = document.getElementsByTagName('small')[0];
	const form = document.getElementsByTagName('form')[0];

	let data = [
		{
			"id": 1,
			"who": "Finn the Human",
			"wat": "A silly kid who wants to become a great hero one day.",
			"cool": 9
		},
		{
			"id": 2,
			"who": "Jake the Dog",
			"wat": "Finn's best friend is a wise, old dog with a big heart.",
			"cool": 42
		},
			{
			"id": 3,
			"who": "Ice King",
			"wat": "Armed with a magic crown and an icy heart.",
			"cool": 0
		},
		{
			"id": 4,
			"who": "Princess Bubblegum",
			"wat": "A millionaire nerd enthusiast.",
			"cool": 24
		},
		{
			"id": 5,
			"who": "Marcy the Vampire",
			"wat": "Marceline is a wild rocker girl.",
			"cool": 9
		}
	];

	function showPreview() {
		const firstInput = inputs[0];
		const secondInput = inputs[1];

		for (let input of inputs) {
			input.addEventListener('keyup', function() {
				if (input == firstInput) preview.textContent = input.value;
				else if (input == secondInput) previewSmall.textContent = input.value;
			});
		}
	}

	function deleteItem() {
		list.addEventListener('click', function(event) {
			if (event.target && event.target.matches('a.remove')) {
				event.target.parentNode.remove();
			}
		});
	}

	function checkValue(button) {
		const previousSibling = button.previousElementSibling;
		button.value < 10 ? previousSibling.classList.add('faded') : previousSibling.classList.remove('faded');
		button.value > 50 ? previousSibling.classList.add('gold') : previousSibling.classList.remove('gold');
	}

	function incDec() {
		list.addEventListener('click', function(event) {
			if (event.target && event.target.matches('input[type="number"]')) {
				checkValue(event.target);
			}
		});

		setInterval(function() {
			const incDecButtons = document.querySelectorAll('input[type="number"]');

			incDecButtons.forEach(button => {
				checkValue(button);
			});
		}, 200);
	}

	function addItem() {
		const firstInput = inputs[0];
		const secondInput = inputs[1];
		let inputValues = [];

		for (let input of inputs) {
			input.addEventListener('keyup', function(event) {
				if (event.keyCode === 13) {
					inputValues.push(firstInput.value);
					inputValues.push(secondInput.value);
					createItem(inputValues);
					form.reset();
					preview.textContent = '';
					previewSmall.textContent = '';
					firstInput.focus();
					inputValues = [];
				}
			});
		}
	}

	function createItem(array, who = array[0], wat = array[1], cool = Math.floor(Math.random()*60)) {
		let newLi = document.createElement('li');
		newLi.classList.add('dude');
		let newA = document.createElement('a');
		newA.classList.add('ctrl');
		newA.classList.add('remove');
		newA.textContent = 'x';
		let newArticle = document.createElement('article');
		newArticle.textContent = who;
		let newSpan = document.createElement('span');
		newSpan.textContent = wat;
		newArticle.appendChild(newSpan);
		let newInput = document.createElement('input');
		newInput.classList.add('ctrl');
		newInput.setAttribute("type", "number");
		newInput.value = cool
		newLi.appendChild(newA);
		newLi.appendChild(newArticle);
		newLi.appendChild(newInput);
		list.appendChild(newLi);
	}

	function retrieveItems() {
		data.forEach(function(element) {
			createItem([], element.who, element.wat, element.cool)
		});
	}

	return {
		showPreview,
		deleteItem,
		incDec,
		addItem,
		retrieveItems
	}
}());

Reminder.retrieveItems();
Reminder.showPreview();
Reminder.deleteItem();
Reminder.incDec();
Reminder.addItem();
