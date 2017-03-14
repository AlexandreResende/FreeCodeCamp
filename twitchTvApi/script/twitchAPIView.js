var twitchAPIView = {

    resizeTwitchDiv: function() {

        //resizing twitch div
        $('.twitch').height(240 + twitchApplication.twitchChannels.length * 170);

    },

    showChannels: function(channel, index, data) {

        //url of the channel
        var url = 'https://www.twitch.tv/' + channel;
        //html elements variables
        var div, divImg, img, divInfo, anchor, game, status;

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

        $('.channelsHolder').append(div);

    },

    showChannelsInexistent: function(index) {

        //html elements variables
        var div, divImg, img, divInfo, channel;

        div = $('<div id="channel' + (index + 1) + '" class="channelContainer"></div>');
        divImg = $('<div class="channelImg"></div>');
        //add 404 img here
        img = $('<img src="http://www.submitawebsite.com/blog/wp-content/uploads/2010/06/404.png" alt="notFound" >');
        divInfo = $('<div class="channelInfo text-center"></div>');
        //add a paragraph with the info of channel does not exist
        channel = $('<p>Channel not found!</p><p>This channel was deleted or does not exist!</p>');

        divImg.append(img);
        divInfo.append(channel);
        div.append(divImg).append(divInfo);

        $('.channelsHolder').append(div);

    }

}