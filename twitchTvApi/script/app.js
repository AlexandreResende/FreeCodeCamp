
$(document).ready(function(){

	var twitchChannels = ['freecodecamp'];//, 'loxodontes', 'quin69', 'riotgamesbrazil', 'brunofin ', 'picoca'];	
	
	twitchChannels.forEach( (channel, index) => {
		console.log(channel);
		twitchAPIConnection(channel, index);

	});

	$('.channelContainer').on('click', function(){
		$(this).toggleClass('active');
	});

});