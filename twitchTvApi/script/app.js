
$(document).ready(function(){

	var twitchChannels = ['freecodecamp', 'loxodontes', 'quin69', 'riotgamesbrazil', 'brunofin ', 'picoca'];	
	
	twitchChannels.forEach( (channel, index) => {

		twitchAPIConnection(channel, index);

	});

});