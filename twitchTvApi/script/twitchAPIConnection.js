var twitchApplication = {

    twitchChannels: [],

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
        //resizing the twitch div
        $('.twitch').height(240 + this.twitchChannels.length * 150);
    },

    /*
     ** param: channelName
     ** return: -
     ** this function adds a channelName to the 
     ** twitchChannels list
     */
    addChannel: function(channelName) {

        this.twitchChannels.push(channelName);
        //console.log(this.twitchChannels);

        //removing an children of the ul element - channelsHolder
        //to do not have duplicate channels after the new connection
        $('.channelsHolder').children().remove();

        //adding all the elements again
        this.connectAllChannels();

        //erasing the label
        $('.channelName').val('');

        console.log(this.twitchChannels);

    },

    /*
     ** param: channelNameList
     ** return: -
     ** this function will remove all the channelsContainers
     ** with the active class and will resize the twitch class
     ** div
     */
    removeChannel: function(channelNameList) {

        for (var element = channelNameList.length - 1; element >= 0; element--) {
            //getting the index position of the element to be deleted
            //we are retrieving the id of the element, parsing it to substring
            //using the substring function to get only the number that -1 will
            //be the position of the element in the list twitchChannels
            var elementId = parseInt($(channelNameList[element]).attr('id').toString().substring(7));
            console.log(elementId - 1);
            //removing the element of the DOM
            //channelNameList[element].remove();
            //removing the element in the list twitchChannels
            this.twitchChannels.splice(elementId - 1, 1);

            //console.log(this.twitchChannels);
        }

        //removing an children of the ul element - channelsHolder
        //to do not have duplicate channels after the new connection
        $('.channelsHolder').children().remove();

        //adding all the elements again
        this.connectAllChannels();
    }

};