
var twitchAPIView = {

	showChannels: function(channel, index, data){

		var containerOfChannels = [];

		//url of the channel
		var url = 'https://www.twitch.tv/' + channel;
		var div, divImg, img, divInfo, anchor;

		/*
		**strem on   => object
		**stream off => null
		*/
		if (data.stream){

			/* example of a channel container
			<div id="channel1" class="channelContainer">
				<div class="channelImg">
					<img  src="https://static-cdn.jtvnw.net/jtv_user_pictures/arteezy-profile_image-f2f55f87a5cd6e15-300x300.png">
				</div>	
				<div class="channelInfo">
					<a class="btn btn-block" href="https://www.twitch.tv/arteezy" target="_blank">Arteezy</a>	
				</div>					
			</div>
			*/

		}else{

			div     = $('<div id="channel' + (index+1) + '" class="channelContainer"></div>');
			divImg  = $('<div class="channelImg"></div>');
			img     = $('<img class="glyphicon glyphicon-remove">');
			divInfo = $('<div class="channelInfo"></div>');
			anchor  = $('<a class="btn btn-block" href="' + url +'" target="_blank">');

			divImg.append(img);
			divInfo.append(anchor);
			div.append(divImg).append(divInfo);
			

		}

		var height = $('.twitch').height();
		$('.twitch').height( height + 150 );
		$('.channelsHolder').append(div);

	}

}