'use strict';
let battery = document.querySelector(".battery-icon");
console.log("Loaded");
//Display Time Function
function displayTime() {
	let dateTime = new Date();
	let hrs = dateTime.getHours();
	let min = dateTime.getMinutes();
	let sec = dateTime.getSeconds();

	if(hrs < 10) {
		hours.innerHTML = `0${hrs}`
	}else {
		hours.innerHTML = `${hrs}`
	}

	if(min < 10) {
		minutes.innerHTML = `0${min}`
	}else {
		minutes.innerHTML = `${min}`
	}

	//document.getElementById('hours').innerHTML = hrs;
}

function batteryLevel() {
	let dateTime = new Date();
	let hrs = dateTime.getHours();
	let min = dateTime.getMinutes();
	let sec = dateTime.getSeconds();

	if(hrs > 12 && hrs < 15) {
		battery.classList.remove('fa-battery-full');
		battery.classList.add('fa-battery-three-quarters');
	}

	if(hrs > 15 && hrs < 18 ) {
		battery.classList.remove('fa-battery-three-quarters');
		battery.classList.add('fa-battery-half');
	}

	if(hrs > 18 && hrs < 24) {
		battery.classList.remove('fa-battery-half');
		battery.classList.add('fa-battery-empty');
	}else {
		battery.classList.add('fa-battery-full')
	}
}

setInterval(displayTime, 10);
batteryLevel();