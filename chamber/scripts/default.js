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

const fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=34.36597806132115&lon=-89.51930703708217&appid=70acdbc7066a8c4ce4c025b90a2fa3b0&units=imperial'
const futureForcast = document.querySelector("#weatherForcast")

async function FiveDayFetch() {
    try {
        const response = await fetch(fiveDayURL);
        if (response.ok) {
            const dataWeek = await response.json();
            console.log(dataWeek);
            displayWeekResults(dataWeek);
        } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

FiveDayFetch();



function displayWeekResults (results){
	for(let i = 0; i < results.list.length; i+= 14) {
		const temperature = document.createElement("span");

		futureForcast.appendChild(temperature);

			const weatherWeekIcon = document.createElement('img');
			const weekTemp = document.createElement("p");
			const captionForcastDesc = document.createElement('p');
			weekTemp.textContent = results.list[i].main.temp;
			const weekDescription = document.createElement("figcaption");
			weekDescription.textContent = results.list[i].weather.main;
			futureForcast.appendChild(weekTemp);
			futureForcast.appendChild(weatherWeekIcon);
			futureForcast.appendChild(weekDescription);

			weekDescription.textContent = results.list[i].weather[0].description;
    		const iconsrc = `https://openweathermap.org/img/w/${results.list[i].weather[0].icon}.png`;
    		let desc = results.list[i].weather.description;
    		weatherWeekIcon.setAttribute('src', iconsrc);
    		weatherWeekIcon.setAttribute('alt', desc);
    		captionForcastDesc.textContent = `${desc}`;
	};
}

const banner = document.querySelector("#banner");

function showBanner() {
	const date = new Date();
	const day = date.getDay();
	const close = document.querySelector("#hide");
	if (day === 1 || day === 2 || day === 3){
		console.log(day);
		banner.classList.toggle("show");
	};
	close.addEventListener("click", () => {
		banner.classList.toggle("hidden");	
	})
};

showBanner();



let displayMessage = getMessage();
document.querySelector('#message').textContent = displayMessage;