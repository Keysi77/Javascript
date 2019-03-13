import anime from 'animejs';


const ball = document.querySelector('.ball');


let mover = anime({
	targets: ball,
	translateX: [
		{ value: 300, duration: 1200 },
		{ value: 0, duration: 800 }
	],
	rotate: '1turn',
	duration: 2000,
	loop: true
});


ball.addEventListener('click', () => {
	mover.pause();

	mover = anime({
		targets: ball,
		translateX: '+=0',
		translateY: {
			value: 500,
			duration: 5000
		},
		scaleX: {
			value: 0.5,
			duration: 800,
			delay: 100
		},
		complete: function() {
			console.log( 'he dead' );
			ball.remove();
		}
	});
});