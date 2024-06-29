date = document.lastModified
document.getElementById("lastModified").textContent = date;
year = document.querySelector("#year").textContent = new Date().getFullYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function getMessage() {
	let currentDate = new Date();
	let storedDate;
	let message;

	let date = localStorage.getItem('date');

	if (date) {
		storedDate = new Date(parseInt(date));
	}

	if (date) {
		let differenceInTime = currentDate.getTime() - storedDate.getTime();
		
		if (differenceInTime < 86400000) {
			message = "Back so soon! Awesome!";
		} else {
			let differenceInDays = Math.round(differenceInTime / (1000 * 3600 *24));
			message = `You last visited ${differenceInDays} days ago.`;
		}
	} else {
		message = "Welcome! Let us know if you have any questions."
	}
	

	localStorage.setItem('date', currentDate.getTime());

	return message;
}

let displayMessage = getMessage();
document.querySelector('#message').textContent = displayMessage;

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
