'use strict';

/**
 *
 * PROGRESS BAR
 *
 */

class ProgressBar {

	constructor(element) {
		this.element = element;
		this.max = document.body.scrollHeight - window.innerHeight;
		this.debounceTimer = null;

		this.element.max = this.max;

		this.scrollSpy();
		this.recalculate();
	}

	scrollSpy() {
		window.addEventListener('scroll', () => {
			this.element.value = Math.abs(document.body.getBoundingClientRect().top);

			clearTimeout(this.debounceTimer);
			this.debounceTimer = setTimeout(() => {
				console.log('Position stored in DB.');
			}, 1000);
		});
	}

	recalculate() {
		window.addEventListener('resize', () => {
			this.element.max = document.body.getBoundingClientRect().height - window.innerHeight;
		});
	}
}

new ProgressBar(document.querySelector('progress'));
