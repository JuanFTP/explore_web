// Global state
let globalState = {
	"statusBar": {
		"small": true,
		"collapsed": false,
		"expanded": false
	}
}

// Consts
const click = "click";

// Statusbar
const statusBar = document.getElementById("statusBar");
const statusBar_small = document.getElementById("statusBar-small");
const statusBar_collapsed = document.getElementById("statusBar-collapsed");

// Status-item-icons
const statusItemsIcon = document.getElementsByClassName("status-item-icon");

const lockScreen = document.getElementById("lockScreen");
const launcher = document.getElementById("launcher");
const currentTimeObjects = document.getElementsByClassName("clock");


if (currentTimeObjects.length > 0) {
	for (var x = 0; x < currentTimeObjects.length; x++) {
		setObjectToUpdate(currentTimeObjects[x], true, true);
	}
	clock();
}

// TODO: Refactorizar llamado de comprobación
lockScreen.addEventListener(click, (ev) => {
	Utilities.hideElement(lockScreen);

	if (globalState.statusBar.collapsed) {
		hideStatusBarCollapsed();
	}
});

launcher.addEventListener(click, (ev) => {
	Utilities.showElement(lockScreen);

	if (globalState.statusBar.collapsed) {
		hideStatusBarCollapsed();
	}
});

// Functions statusBar
statusBar_small.addEventListener(click, (ev) => {
	fireStatusBarCollapsed();
});

function fireStatusBarCollapsed() {
	if (globalState.statusBar.collapsed) {
		hideStatusBarCollapsed();
	} else {
		showStatusBarCollapsed();
	}
}

function showStatusBarCollapsed() {
	// Agregar
	statusBar.classList.add("br", "bds", "x16", "blur", "bg-dark-75");
	statusBar_collapsed.classList.remove("dnone");
	globalState.statusBar.collapsed = true;
}

function hideStatusBarCollapsed() {
	// Quitar
	statusBar_collapsed.classList.add("dnone");
	statusBar.classList.remove("br", "bds", "x16", "blur", "bg-dark-75");
	globalState.statusBar.collapsed = false;
}

// Functions status-item-icon
function setEventGroupItems(event, list) {
	for (var x = 0; x < list.length; x++) {
		setEventToItem(list[x], event, "active");
	}
}

function setEventToItem(item, reaction, classToFollow) {
	item.addEventListener(reaction, (ev) => {
		if (item.classList.contains(classToFollow)) {
			item.classList.remove(classToFollow);
		} else {
			item.classList.add(classToFollow);
		}
	});
}

// Events by default
(() => {
	setEventGroupItems(click, statusItemsIcon);
})();