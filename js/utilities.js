var intervalAnimate = null;
var timeStep = 1;
var element = null;
var to = 0;
var upTo = 0;
var up = false;

let Utilities = {
	"hideElement": (hE) => {
		animateElement(hE, 0, 100, true);
	},
	"showElement": (sE) => {
		animateElement(sE, 100, 0, false);
	}
};

function animateElement(element, to, upTo, asc) {
	this.element = element;
	this.now = to;
	this.upTo = upTo;
	this.up = asc;

	intervalAnimate = setInterval(stepAnimate, timeStep);
}

function stepAnimate() {
	now = (up ? now + 1 : now - 1);
	element.style.top = (now * -1) + "%";
	element.style.opacity = (100 - now + "%");

	if (now === upTo) {
		clearInterval(intervalAnimate);
	}
}

function validateMinValue(value, min, character) {
	return (value < min ? character + value : value);
}