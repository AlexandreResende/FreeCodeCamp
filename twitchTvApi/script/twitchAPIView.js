
var twitchAPIView = {

	showChannels: function(arrayOfChannels, data){

		var containerOfChannels = [];

		arrayOfChannels.forEach( (element, index) => {

			var url = 'https://www.twitch.tv/' + element;

			/*
			**strem on   => object
			**stream off => null
			*/
			if (data.stream){



			}else{

				var div = $('<div id="channel' + (index+1) + '" class="channelContainer"></div>');
				var anchor = $('<a class="btn btn-block" href="' + url +'" target="_blank">');
				var img = $();

			}

			var el = $('<div></div>');

			//$('.channelsHolder').append('elementtobeadded');

		});

	}

}