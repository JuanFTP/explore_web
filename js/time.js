const days = {
	"es": ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
	"en": []
};
const months = {
	"es": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Noviembre", "Diciembre"],
	"en": []
}
let timeSystemInterval = null;
let time = null;
let elementsToSetData = [
	// obj, time, seconds, date, 
];

function clock() {
	updateClock();
	timeSystemInterval = setInterval(updateClock, 1000);
}

function updateClock() {
	time = new Date();
	updateComponents();
}

function stopClock() {
	clearInterval(timeSystemInterval);
	time = null;
}

function setObjectToUpdate(element, rLongTime, rLongDate) {
	elementsToSetData.push([element, rLongTime, rLongDate]);
}

function updateComponents() {
	// Set data to object
	elementsToSetData.forEach(item => {
		item[0].innerHTML = validateMinValue(time.getHours(), 10, '0') + ":" + validateMinValue(time.getMinutes(), 10, '0');
	});
}