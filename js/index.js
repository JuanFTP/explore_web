document.addEventListener("DOMContentLoaded", () => {
	let filesSpace = document.getElementById("files-space");
	let btnReload = document.getElementById("btn-reload");
	let innerHTMLContent = "";
	let files = [
		["<i class='far fa-file-code'></i>", "./carrusel.html", "Projects carousel"],
		["<i class='far fa-file-code'></i>", "./smart.html", "Smartphone System"]
	];

	function constructInner() {
		if (files.length > 0) {
			for (var x = 0; x < files.length; x++) {
				if (x === 0) {
					innerHTMLContent += `<tr><td width='48px'>${files[x][0]}</td><td><a href='${files[x][1]}'>${files[x][2]}</a></td></tr>`;
				} else {
					innerHTMLContent += `<tr><td>${files[x][0]}</td><td><a href='${files[x][1]}'>${files[x][2]}</a></td></tr>`;
				}
			}
		} else {
			innerHTMLContent += `<tr><td style='text-align: center;'>No files :(</td></tr>`;
		}
	}

	function setInnerContent() {
		if (innerHTMLContent !== "") {
			filesSpace.innerHTML = innerHTMLContent;
		}
	}

	btnReload.addEventListener("click", () => {
		window.location.reload();
	});

	(() => {
		constructInner();
		setInnerContent();
	})();
});