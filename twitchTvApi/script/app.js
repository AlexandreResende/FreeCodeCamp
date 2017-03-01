$(document).ready(function() {

    twitchApplication.connectAllChannels();
    //resizing twitch div
    $('.twitch').height(240 + twitchApplication.twitchChannels.length * 150);

    //console.log('Logged...');

    $('.addChannel').on('click', function() {

        var channelName = $('.channelName').val();
        if (channelName) {
            twitchApplication.addChannel(channelName);
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

        var channelsToRemove = document.getElementsByClassName('active');
        twitchApplication.removeChannel(channelsToRemove);

    });

});