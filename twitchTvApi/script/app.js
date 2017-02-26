$(document).ready(function() {

    twitchApplication.connectAllChannels();

    console.log('Logged...');

    $('.channelInfo').on('click', function() {
        console.log(this);
    });

    $('.addChannel').on('click', function() {

        var channelName = $('.channelName').value();

        twitchApplication.addChannel(channelName);

    });

    $('.removeChannel').on('click', function() {

        //add an X on each div channel to remove it

        //to be tested and implemented
        var removeArray = $('.active');
        var removeChannels = [];

        removeArray.forEach(element => {
            removeChannels.push(element.value());
        });

        twitchApplication.removeChannels(removeChannels);

    });

});