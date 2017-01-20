
$(document).ready(function(){

	function connectWeatherAPI(urlWeatherAPI){
		$.ajax(
			{
				dataType: 'json',
				url: urlWeatherAPI,
				type: 'POST'
			}
		).done(function(data){
			console.log(data.weather[0].main);
		}).fail(function(xhr, status, error){
			console.log('Status Code: ' + status);
			console.log('Error happened: ' + error);
		}).always(function(xhr, status){
			console.log('WUJU!');
		});
	}

	var userLatitude;
	var userLongitude;
	var urlAPI;

	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			userLatitude  = position.coords.latitude.toFixed(2);
			userLongitude = position.coords.longitude.toFixed(2);
			urlAPI = 'http://api.openweathermap.org/data/2.5/weather?lat='+ userLatitude +'&lon=' + userLongitude + '&APPID=f4b716720c1f7fd4bedc8bc968bc6714';
			console.log(urlAPI);
			connectWeatherAPI(urlAPI);
		});
	} else {
		console.log('Geolocation not found!');
	}

});


