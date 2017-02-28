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

    $('.removeChannel').on('click', function() {

        //not working need fix
        console.log(this.parent());

    });

});