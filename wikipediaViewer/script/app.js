
$(document).ready(function(){

	jQuery.support.cors = true;

	$('#search').on('click', function(){

		var textToBeSearched = $('#inputBox').val();
		var urlSearched = 'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=' + 
						   encodeURIComponent(textToBeSearched);

		console.log(textToBeSearched);

		$.ajax({
			url: urlSearched,
			type: 'GET',
			dataType: 'json',
			crossDomain: true
		})
		.done(function(data) {
			console.log("success");
			console.log(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("Connection with Wikipedias API...");
		});

	});

	$('.closeSearch').on('click', function(){

		
		
	});

});

//para um artigo randomico usar a seguinte url: https://en.wikipedia.org/wiki/Special:Random
//settar a url da pagina para a acima que irá automaticamente para um artigo randomico