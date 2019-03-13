'use strict';

const toggleAnim = document.querySelector('.toggle-anim'),
	  balls = document.getElementsByClassName('ball');

toggleAnim.addEventListener('click', () => {

	anime({
	  targets: '.ball',
	  translateX:
	  [
	  	{
	  		value: '+=200px',
	  		duration: 500,
	  	},
	  	{
	  		value: '+=0px',
	  		duration: 500,
	  	},
	  	{
	  		value: '-=200px',
	  		duration: 500,
	  	},
	  	{
	  		value: '-=0px',
	  		duration: 500,
	  	}
	  ],
	  translateY:
	  [
	  	{
	  		value: '+=0px',
	  		duration: 500,
	  	},
	  	{
	  		value: '+=200px',
	  		duration: 500,
	  	},
	  	{
	  		value: '-=0px',
	  		duration: 500,
	  	},
	  	{
	  		value: '-=200px',
	  		duration: 500,
	  	}
	  ],
	  easing: 'easeInOutQuart'
	});
});

// len aby sa poposuvali, aby si videl ze ich je tam kopa
for (let i = 0; i < balls.length; i++) {
	const ball = balls[i];

	ball.style.top  = i * 3 + 'px';
	ball.style.left = i * 3 + 'px';
}
