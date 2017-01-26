
$(document).ready(function(){

	function connectWeatherAPI(urlWeatherAPI){
		$.ajax(
			{
				dataType: 'json',
				url: urlWeatherAPI,
				type: 'POST'
			}
		).done(function(data){
			//console.log(data.weather[0].main);
			var localWeatherOfTheDay = data.weather[0].main.toLowerCase();

			//console.log(data);

			//console.log(data.weather[0].main.toLowerCase());
			//backgroundChanger('sunny');
			//backgroundChanger(localWeatherOfTheDay);

			$('#currentTemperature').text('Local temperature: ' + kelvinToCelsius(data.main.temp)  + ' F');

			$('#temperatureScale').on('click', function(){
		
				var textValue = $(this);

				if(textValue.text() == 'Fahrenheit'){

					textValue.text('Celsius');
					textValue.removeClass('btn-danger').addClass('btn-success');
					$('#currentTemperature').text('Local temperature: ' + kelvinToFahrenheit(data.main.temp) + ' F');

				} else {

					textValue.text('Fahrenheit');
					textValue.removeClass('btn-success').addClass('btn-danger');
					$('#currentTemperature').text('Local temperature: ' + kelvinToCelsius(data.main.temp) + ' C');

				}
			});


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


