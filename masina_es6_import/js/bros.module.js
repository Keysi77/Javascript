// grab them dudes
var dudes = document.querySelectorAll('.choice img');
	dudes = Array.prototype.slice.call(dudes); // Array.from( dudes );

// this one is private
var privateMethod = function () {
	console.log('they can\'t see me');
};

// return 'em all
var getAllDudes = function () {
	privateMethod();
	return dudes;
};

// vasho -> scoreVasho
var getKeyFrom = function (dude) {
	return 'score' + _.capitalize(dude.alt);
};

// get scoreVasho from localStorage
var getScore = function (dude) {
	return +localStorage.getItem(getKeyFrom(dude)) || 0;
};

// set scoreVasho to localStorage
var setScore = function (dude, score) {
	localStorage.setItem(getKeyFrom(dude), score);
};

// update dudes DOM element
var updateDude = function (dude) {
	var score = getScore(dude);
	dude.nextElementSibling.textContent = score;
};

// increase score for dude, both DOM and localStorage
var increaseScore = function (dude) {
	var score = getScore(dude);
	score++;

	setScore(dude, score);
	updateDude(dude);
};

export var Bros = {
	all: getAllDudes,
	updateDOM: updateDude,
	getScore: getScore,
	setScore: setScore,
	increaseScore: increaseScore
};