
$(document).ready(function(){

	function connectWeatherAPI(urlWeatherAPI){
		$.ajax(
			{
				dataType: 'json',
				url: urlWeatherAPI,
				type: 'GET'
			}
		).done(function(data){
			var localWeatherOfTheDay = data.weather[0].main.toLowerCase();
			var location             = data.name;
			var country              = data.sys.country;

			backgroundChanger(localWeatherOfTheDay);

			$('#location').text(location + ', ' + country);
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

	$.ajax({
		url: ' http://ip-api.com/json',
		type: 'GET',
		dataType: 'json',
	})
	.done(function(data) {
		userLatitude  = data.lat;
		userLongitude = data.lon;
		urlAPI = 'http://api.openweathermap.org/data/2.5/weather?lat='+ userLatitude +'&lon=' + userLongitude + '&APPID=f4b716720c1f7fd4bedc8bc968bc6714';
		connectWeatherAPI(urlAPI);
	})
	.fail(function(xhr, status, error) {
		console.log("error");
	})
	.always(function(xhr, status) {
		console.log("complete");
	});

});


