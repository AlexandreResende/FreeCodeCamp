$(document).ready(function() {

    twitchApplication.connectAllChannels();

    console.log('Logged...');

    $('.channelInfo').on('click', function() {
        console.log(this);
    });

    $('.addChannel').on('click', function() {

        //reseting the .twitch height so we wont
        //get any container bigger than it should
        $('.twitch').height(240);

        var channelName = $('.channelName').val();

        twitchApplication.addChannel(channelName);

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