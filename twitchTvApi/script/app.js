/*
problems with the remove channel
after a deletion it is displaying
the wrongs channels

analyze the twitchApplication.twitchChannels
scope because it is not possible to use it
inside the ajax functions call

need refactoring - the functions are not good enough
probably it will be better if I make an schema and code again
some parts of the project

the view part
*/

$(document).ready(function() {

    //twitchApplication.connectAllChannels();
    //resizing twitch div
    $('.twitch').height(240 + twitchApplication.twitchChannels.length * 170);
    //connecting all pre defined channels
    //twitchApplication.connectAllChannels();

    $('.addChannel').on('click', function() {

        //getting the channelName inputed by the user
        var channelName = $('.channelName').val();

        if (channelName) {

            twitchApplication.addChannel(channelName);
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

        var channelsToRemove = document.getElementsByClassName('active');
        twitchApplication.removeChannel(channelsToRemove);

    });

});