document.addEventListener("DOMContentLoaded", () => {
	let frame = document.getElementById("frame");
	const coolors = [
		"3AB795",
		"86BAA1",
		"A0E8AF",
		"264653",
		"2A9D8F",
		"1D3557",
		"FEC5BB",
		"FCD5CE",
		"FAE1DD",
		"F8EDEB",
		"E8E8E4",
		"D8E2DC",
		"ECE4DB",
		"FFE5D9",
		"FFD7BA",
		"FEC89A"
	];
	let i = 0;

	function getNextCoolor() {
		if (i < coolors.length - 1)
			i++;
		else
			i = 0;
		return coolors[i];
	}

	function setCoolorToFrame(color) {
		frame.style.backgroundColor = "#" + color;
	}

	function changeCoolorOfFrame() {
		setCoolorToFrame(getNextCoolor());
	}

	setInterval(changeCoolorOfFrame, 24000);
	(() => {setCoolorToFrame(coolors[i]);})();
});