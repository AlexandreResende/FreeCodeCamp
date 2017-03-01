var twitchAPIView = {

    showChannels: function(channel, index, data) {

        var containerOfChannels = [];

        //url of the channel
        var url = 'https://www.twitch.tv/' + channel;
        //html elements variables
        var div, divImg, img, divInfo, anchor, game, status, height;

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
            divInfo.append(anchor).append(game).append(status);
            div.append(divImg).append(divInfo);

        } else {

            div = $('<div id="channel' + (index + 1) + '" class="channelContainer"></div>');
            divImg = $('<div class="channelImg"></div>');
            img = $('<span class="offlineChannel">Offline</span>');
            divInfo = $('<div class="channelInfo text-center"></div>');
            anchor = $('<a class="text-primary" href="' + url + '" target="_blank">' + channel + '</a></br>');


            divImg.append(img);
            divInfo.append(anchor);
            div.append(divImg).append(divInfo);

        }

        //getting the height of the .twitch div
        //height = $('.twitch').height();
        //resizing it
        //$('.twitch').height(height + 150);

        $('.channelsHolder').append(div);

    }

}