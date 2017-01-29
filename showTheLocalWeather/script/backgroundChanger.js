
function backgroundChanger(localWeather){

	if (localWeather === 'clouds'){
		document.body.style.backgroundImage = 'url("./images/cloudy.jpg")';
		//$(body).css('background-image', 'url("")');
	}else if (localWeather === 'rain'){
		document.body.style.backgroundImage = 'url("./images/rainy.jpg")';
	} else if (localWeather === 'snow'){
		document.body.style.backgroundImage = 'url("./images/snowy.jpg")';
	} else if (localWeather === 'clear'){
		document.body.style.backgroundImage = 'url("./images/sunny.jpg")';
	}else if (localWeather === 'extreme'){
		document.body.style.backgroundImage = 'url("./images/extreme.jpg")';
	} else if (localWeather === 'mist'){
		document.body.style.backgroundImage = 'url("./images/mist.jpg")';
	} else {
		document.body.style.backgroundImage = 'url("./images/light.jpg")';
	}

}