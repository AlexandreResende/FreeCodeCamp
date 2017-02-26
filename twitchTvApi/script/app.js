$(document).ready(function() {

    twitchApplication.connectAllChannels();

    console.log('Logged...');

    $('.channelInfo').on('click', function() {
        console.log(this);
    });

    $('.addChannel').on('click', function() {

        var channelName = $('.channelName').val();

        twitchApplication.addChannel(channelName);

    });

    $('.removeChannel').on('click', function() {

        //not working need fix
        console.log(this.parent());

    });

});