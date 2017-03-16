var twitchApplication = {

    twitchChannels: [], //'freecodecamp', 'brunofin'

    //used to be channel and index teh parameters
    /*connectionStream: function(index = twitchApplication.twitchChannels.length - 1) {

        var twitchChannels = twitchApplication.twitchChannels;
        //channel name
        var ch = twitchChannels[twitchChannels.length - 1];
        //index of the channel
        var idx = index;
        var url = 'https://api.twitch.tv/kraken/streams/' + ch;

        console.log('At connect stream.\nIndex: ' + idx + ' Channel: ' + ch);

        $.ajax({
                url: url,
                headers: {
                    'Client-ID': 'z6qd7dtxvbs8oz6yik78d9yci86xsf'
                },
                type: 'GET',
                dataType: 'json',
            })
            .done(function(data) {

                twitchAPIView.showChannels(ch, idx, data);

                //resizing the twitch div
                $('.twitch').height(240 + (idx + 1) * 160);

            })
            .fail(function(xhr, error) {
                //console.log('An error occured: ' + error);
                //insert error 404 on the channel here....
                //DOM element for that situation
                twitchAPIView.showChannelsInexistentch(ch, idx);
            });
    },*/

    connectionChannel: function(index = this.twitchChannels.length - 1) {

        //channel name
        var ch = this.twitchChannels[index];
        //index of the channel
        var idx = index;
        var url = 'https://api.twitch.tv/kraken/channels/' + ch;
        var connectionStream = this.connectionStream;

        console.log('At connect channels.\nIndex: ' + idx + ' Channel: ' + ch);

        $.ajax({
                url: url,
                headers: {
                    'Client-ID': 'z6qd7dtxvbs8oz6yik78d9yci86xsf'
                },
                type: 'GET',
                dataType: 'json',
            })
            .done(function(data) {
                //call connectionStream...
                //console.log(idx);
                //console.log(twitchApplication.twitchChannels);
                //connectionStream(idx);

                var twitchChannels = twitchApplication.twitchChannels;
                //channel name
                var ch = twitchChannels[twitchChannels.length - 1];
                //index of the channel
                var idx = index;
                var url = 'https://api.twitch.tv/kraken/streams/' + ch;

                console.log('At connect stream.\nIndex: ' + idx + ' Channel: ' + ch);

                $.ajax({
                        url: url,
                        headers: {
                            'Client-ID': 'z6qd7dtxvbs8oz6yik78d9yci86xsf'
                        },
                        type: 'GET',
                        dataType: 'json',
                    })
                    .done(function(data) {

                        twitchAPIView.showChannels(ch, idx, data);

                        //resizing the twitch div
                        $('.twitch').height(240 + (idx + 1) * 160);

                    })
                    .fail(function(xhr, error) {
                        //console.log('An error occured: ' + error);
                        //insert error 404 on the channel here....
                        //DOM element for that situation
                        twitchAPIView.showChannelsInexistentch(ch, idx);
                    });


            })
            .fail(function(xhr, err, errorThrown) {
                twitchAPIView.showChannelsInexistent(idx);

                //resizing the twitch div
                twitchAPIView.resizeTwitchDiv();
            });

    },

    connectAllChannels: function() {
        //changed
        for (let ans = 0; ans < this.twitchChannels.length; ans++) {
            //console.log('aki ' + this.twitchChannels[ans]);
            this.connectionChannel(ans);
        }

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
        //erasing the label
        $('.channelName').val('');

    },

    /*
     ** param: channelNameList
     ** return: -
     ** this function will remove all the channelsContainers
     ** with the active class and will resize the twitch class
     ** div
     */
    removeChannel: function(channelNameList) {

        //index of the channels to be removed
        var channelRemoveIndex = [];

        for (var element = 0; element < channelNameList.length; element++) {
            //getting the index of the element in the twitchChannels list
            //console.log($(channelNameList[element]).attr('id').toString());
            var channelIndex = $(channelNameList[element]).attr('id').toString().substring(7);
            channelRemoveIndex.push(channelIndex - 1);
        }

        //sorting the list in descending order
        channelRemoveIndex.sort((a, b) => b - a);

        for (var element = 0; element < channelRemoveIndex.length; element++) {
            //removing the channel of the list
            //using the index of the element instead of  the indexOf with
            //the name of the channel
            this.twitchChannels.splice(channelRemoveIndex[element], 1);
        }

        //removing an children of the ul element - channelsHolder
        //to do not have duplicate channels after the new connection
        $('.channelsHolder').children().remove();

        //adding all the elements again
        this.connectAllChannels();
        //console.log(this.twitchChannels);
        if (!this.twitchChannels.length) {
            twitchAPIView.resizeTwitchDiv();
        }

    }

};