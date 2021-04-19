const lockScreen = document.getElementById("lockScreen");
const launcher = document.getElementById("launcher");
const currentTimeObjects = document.getElementsByClassName("clock");


if (currentTimeObjects.length > 0) {
	for (var x = 0; x < currentTimeObjects.length; x++) {
		setObjectToUpdate(currentTimeObjects[x], true, true);
	}
	clock();
}

lockScreen.addEventListener("click", (ev) => {
	Utilities.hideElement(lockScreen);
});

launcher.addEventListener("click", (ev) => {
	Utilities.showElement(lockScreen);
});