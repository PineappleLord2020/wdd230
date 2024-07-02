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

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#captionDesc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=34.36597806132115&lon=-89.51930703708217&appid=70acdbc7066a8c4ce4c025b90a2fa3b0&units=imperial'


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

/*const futureTemp = document.querySelector('#future-temp');
const weatherWeekIcon = document.querySelector('#weather-week-icon');
const captionForcastDesc = document.querySelector('#forcastDesc');

const fiveDayURL = 'api.openweathermap.org/data/2.5/forecast?lat=34.36597806132115&lon=-89.51930703708217&appid=70acdbc7066a8c4ce4c025b90a2fa3b0&units=imperial'
const futureForcast = document.querySelector("#weatherForcast")

async function FiveDayFetch() {
    try {
        const response = await fetch(fiveDayURL);
        if (response.ok) {
            const dataWeek = await response.json();
            console.log(dataWeek);
            displayResults(dataWeek);
        } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

FiveDayFetch();



function displayResults = (results) => {
	results.forEach((result) => {
		const temperature = document.createElement("span");
		futureForcast.appendChild(temperature);

		results.list.forEach((listElement) => {
			const weekTemp = document.createElement("p");
			weekTemp.textContent = listElement.main.temp;
			const weekDescription = document.createElement("figcaption");
			weekDescription = listElement.weather.main;
			futureForcast.appendChild(weekTemp);
		})
	})
}
	
    futureTemp.innerHTML = `${dataWeek.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${dataWeek.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}*/


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
