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

    /*
     ** param: channelName
     ** return: -
     ** this function adds a channelName to the 
     ** twitchChannels list
     */
    addChannel: function(channelName) {

        if (channelName) {
            this.twitchChannels.push(channelName);
            console.log(this.twitchChannels);
            //removing ann children of the ul element - channelsHolder
            $('.channelsHolder').children().remove();
            //adding all the elements again
            this.connectAllChannels();
            $('.channelName').val('');
        } else {
            alert('Please, type a twitch channel name.');
        }

    },

    /*
     ** param: channelNameList
     ** return: -
     ** this function will remove all the channelsContainers
     ** with the active class and will resize the twitch class
     ** div
     */
    removeChannel: function(channelNameList) {

        for (element of channelNameList) {
            var height = $('.twitch').height();
            element.remove();
            $('.twitch').height(height - 150);
        }
    }

};