
$(document).ready(function(){

	$('#newQuote').on('click', function(){
		
		function getQuote(){

			$.ajax({
					url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
					type: 'POST',
					headers: {
						"X-Mashape-Key": "gcPuVOpglDmshtzOwHTp2VUlC2C6p1WKbexjsnS4eFKiOPMu6p",
						"Content-Type": "application/x-www-form-urlencoded",
						"Accept": "application/json"
					}
				})
				.done(function(data){
					data = JSON.parse(data);
					$('#quote').text(data.quote);
					$('#author').text(data.author);
				})
				.fail(function( xhr, status, error){
					console.log('Sorry, there was a problem!');
					console.log('Status: ' + status);
					console.log('Error: ' + error);
				})
				.always(function(){
					console.log('AJAX request to the server was successful.');
				});

		}

		function displayLoadingGif(){

			$('.loadingGif').css({display: 'block'});
			$('#quote').text('');
			$('#author').text('');

		}

		function removeLoadingGif(){

			$('.loadingGif').css({display: 'none'});

		}

		displayLoadingGif();

		setTimeout(removeLoadingGif, 4000)
		setTimeout(getQuote, 4000);

	});

	$('#tweetIt').on('click', function(){
		
		var tweet = $('#quote').text();
		var author = $('#author').text();

		$(this).attr('href', 'https://twitter.com/intent/tweet?text='+tweet+' Author:'+author);

	});

});

