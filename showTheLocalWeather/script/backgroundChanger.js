
function backgroundChanger(localWeather){
	
	if (localWeather === 'cloudy'){
		document.body.style.backgroundImage = 'url("./images/cloudy.jpg")';
		//$(body).css('background-image', 'url("")');
	}else if (localWeather === 'rainy'){
		document.body.style.backgroundImage = 'url("./images/rainy.jpg")';
	} else if (localWeather === 'snowy'){
		document.body.style.backgroundImage = 'url("./images/snowy.jpg")';
	} else if (localWeather === 'sunny'){
		document.body.style.backgroundImage = 'url("./images/sunny.jpg")';
	}else if (localWeather === 'extreme'){
		document.body.style.backgroundImage = 'url("./images/extreme.jpg")';
	} else {
		document.body.style.backgroundImage = 'url("./images/light.jpg")';
	}

}