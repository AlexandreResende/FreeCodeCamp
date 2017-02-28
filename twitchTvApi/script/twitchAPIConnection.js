var twitchApplication = {

    twitchChannels: [], //, 'loxodontes', 'quin69', 'riotgamesbrazil', 'brunofin ', 'picoca'];

    connection: function(channel, index) {
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

    connectAllChannels: function() {

        this.twitchChannels.forEach((channel, index) => {
            this.connection(channel, index);
        });
    },

    addChannel: function(channelName) {
        this.twitchChannels.push(channelName);
        console.log(this.twitchChannels);
        //removing ann children of the ul element - channelsHolder
        $('.channelsHolder').children().remove();
        //adding all the elements again
        this.connectAllChannels();
        $('.channelName').val('');
    },

    removeChannel: function(channelNameArray, channelsArray) {
        channelNameArray.forEach(element => {
            var position = channelsArray.indexOf(element);
            channelsArray.splice(position, 1);
        });
        //currently working
        console.log(this.twitchChannels);
    }

};