$(document).ready(function() {

    //twitchApplication.connectAllChannels();
    //resizing twitch div
    twitchAPIView.resizeTwitchDiv();
    //connecting all pre defined channels
    //twitchApplication.connectAllChannels();

    $('.addChannel').on('click', function() {

        //getting the channelName inputed by the user
        var channelName = $('.channelName').val();

        if (channelName) {

            //adding channel to twitchApplication.twitchChannels
            twitchApplication.addChannel(channelName);
            //connecting channel to the html page
            twitchApplication.connectionChannel();

        } else {
            alert('Please, type a twitch channel name.');
        }

    });

    //adding/removing the active class to a channelContainer
    $(document.body).on('click', '.channelContainer', function() {
        $(this).toggleClass('active');
    });

    // event for click on removeChannel button
    $('.removeChannel').on('click', function() {

        //adding to channelsRemove all the elements with the active class to be deleted
        var channelsToRemove = document.getElementsByClassName('active');
        twitchApplication.removeChannel(channelsToRemove);

    });

});