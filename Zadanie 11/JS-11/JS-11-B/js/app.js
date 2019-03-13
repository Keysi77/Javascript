const ball = document.querySelector('.ball');


let mover = anime({
	targets: ball,
	translateX: [
		{ value: 1132, duration: 1200 },
		{ value: 0, duration: 1200 }
	],
	duration: 2000,
	loop: true
});


ball.addEventListener('click', () => {
	mover.pause();

	mover = anime({
		targets: ball,
		translateX: '+=1050px',
		translateY: {
			value: 800,
			duration: 4000
		},
		scale: {
			value: 0.5,
			duration: 800,
			delay: 100
		},
		complete: function() {
			ball.remove();
		}
	});
});
