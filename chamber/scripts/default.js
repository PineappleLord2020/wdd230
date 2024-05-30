date = document.lastModified
document.getElementById("lastModified").textContent = date;
year = document.querySelector("#year").textContent = new Date().getFullYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

/*function getMessage() {
	let currentDate = new Date();
	let date = localStorage.getItem('date');

	if (date) {
		storeDate = new Date(storeDate);
	}

	if (date) {
		let difference = currentDate.getMilliseconds - storeDate.getMilliseconds;
		
	} else{
		message = "Welcome! Let us know if you have any questions."
	}

	localStorage.setItem('date', currentDate.getTime());

	return message;
}

let displayMessage = getMessage();
document.querySelector('#message').textContent = displayMessage;*/