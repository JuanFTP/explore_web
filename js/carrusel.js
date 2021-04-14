document.addEventListener("DOMContentLoaded", () => {
	let itemsCarousel = document.getElementsByClassName("item");
	let itemActive = document.getElementsByClassName("active")[0];

	const ctrlLeft = document.getElementById("ctrl-left");
	const ctrlRight = document.getElementById("ctrl-right");
	
	function nextItem() {
		console.debug("nextItem");
	}

	function prevItem() {
		console.debug("prevItem");
	}

	ctrlLeft.addEventListener("click", prevItem);
	ctrlRight.addEventListener("click", nextItem);
});