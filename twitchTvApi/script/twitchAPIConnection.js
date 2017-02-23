
var twitchApplication = {

	twitchChannels: ['arteezy', 'loxodontes'],//, 'loxodontes', 'quin69', 'riotgamesbrazil', 'brunofin ', 'picoca'];

	connection: function(channel, index){
		var url = 'https://api.twitch.tv/kraken/streams/' + channel;

		$.ajax({
			url: url,
			headers: {
				'Client-ID': 'z6qd7dtxvbs8oz6yik78d9yci86xsf'
			},
			type: 'GET',
			dataType: 'json',
		})
		.done(function(data) {

			twitchAPIView.showChannels(channel, index, data);

			console.log(data);

		})
		.fail(function(xhr, error) {
			console.log('An error occured: ' + error);
		})
		.always(function() {
			console.log("Something happened...");
		});
	},

	connectAllChannels: function(){

		this.twitchChannels.forEach( (channel, index) => {
			this.connection(channel, index);
		});
	},

	addChannel: function(channelName){
		this.twitchChannels.push(channelName);
		console.log(this.twitchChannels);
	},

	removeChannel: function(channelNameArray, channelsArray){
		channelNameArray.forEach( element => {
			var position = channelsArray.indexOf(element);
			channelsArray.splice(position, 1);
		});
		//currently working
		console.log(this.twitchChannels);
	}

};



/*
**This function will make the twitch api connection and
**use jquery to modify the index.html with the specific
**channel

function twitchAPIConnection(channelName, channelArrayPosition){

	var url = 'https://api.twitch.tv/kraken/streams/' + channelName;

	$.ajax({
		url: url,
		headers: {
			'Client-ID': 'z6qd7dtxvbs8oz6yik78d9yci86xsf'
		},
		type: 'GET',
		dataType: 'json',
	})
	.done(function(data) {

		var element = '#channel' + (channelArrayPosition+1);

		$(element).parent().attr('href', 'https://www.twitch.tv/' + channelName);

		console.log(data);

	})
	.fail(function(xhr, error) {
		console.log('An error occured: ' + error);
	})
	.always(function() {
		console.log("Something happened...");
	});
	
}
*/