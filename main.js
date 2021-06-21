let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
	let futureDate = new Date("1 Jan 2022");
	let currentDate = new Date();
	let mydate = futureDate - currentDate;

	let days = Math.floor(mydate / 1000 / 60 / 60 / 24);

	let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;

	let min = Math.floor(mydate / 1000 / 60) % 60;

	let sec = Math.floor(mydate / 1000) % 60;
 
	daysItem.innerHTML = days;
	hoursItem.innerHTML = hours;
	minItem.innerHTML = min;
	secItem.innerHTML = sec;
}
countDown();

setInterval(countDown,1000);