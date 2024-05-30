date = document.lastModified
document.getElementById("lastModified").textContent = date;
year = document.querySelector("#year").textContent = new Date().getFullYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#59C9A5";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

function getVisitCount() {
	let count = localStorage.getItem('visitCount');

	if (count) {
		count++;
	} else {
		count = 1;
	}

	localStorage.setItem('visitCount', count);

	return count;
}

let visitCount = getVisitCount();
document.querySelector('#count').textContent = visitCount;
