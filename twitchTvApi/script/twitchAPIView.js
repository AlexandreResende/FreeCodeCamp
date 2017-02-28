var twitchAPIView = {

    showChannels: function(channel, index, data) {

        var containerOfChannels = [];

        //url of the channel
        var url = 'https://www.twitch.tv/' + channel;
        //html elements variables
        var div, divImg, img, divInfo, anchor, game, status, removeButton;

        removeButton = $('<button class="btn btn-md btn-default removeChannel"><i class="glyphicon glyphicon-remove"></i></button>');

        /*
         **strem on   => object
         **stream off => null
         */
        if (data.stream != null) {

            div = $('<div id="channel' + (index + 1) + '" class="channelContainer"></div>');
            divImg = $('<div class="channelImg"></div>');
            img = $('<img src="' + data.stream.channel.logo + '" alt="' + channel + '" >');
            divInfo = $('<div class="channelInfo text-center"></div>');
            anchor = $('<a class="text-primary" href="' + url + '" target="_blank">' + channel + '</a>');
            game = $('<p>' + data.stream.channel.game + '</p>');
            status = $('<p> Status: ' + data.stream.channel.status + '</p>');

            divImg.append(img);
            divInfo.append(anchor).append(game).append(status).append(removeButton);
            div.append(divImg).append(divInfo);


        } else {

            div = $('<div id="channel' + (index + 1) + '" class="channelContainer"></div>');
            divImg = $('<div class="channelImg"></div>');
            img = $('<span class="offlineChannel">Offline</span>');
            divInfo = $('<div class="channelInfo text-center"></div>');
            anchor = $('<a class="text-primary" href="' + url + '" target="_blank">' + channel + '</a></br>');


            divImg.append(img);
            divInfo.append(anchor).append(removeButton);
            div.append(divImg).append(divInfo);

        }

        var height = $('.twitch').height();
        console.log(height);
        $('.twitch').height(height + 150);
        console.log($('.twitch').height());
        $('.channelsHolder').append(div);

    }

}