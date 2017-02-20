
$(document).ready(function(){

	twitchApplication.connectAllChannels();

	$('.channelContainer').on('click', function(){
		$(this).toggleClass('active');
	});

	$('.addChannel').on('click', function() {
		
		var channelName = $('.channelName').value();

		twitchApplication.addChannel(channelName);

	});

	$('removeChannel').on('click', function(){

		//to be tested and implemented
		var removeArray = $('.active');
		var removeChannels = [];

		removeArray.forEach( element => {
			removeChannels.push(element.value());
		});

		twitchApplication.removeChannels(removeChannels);

	});

});
