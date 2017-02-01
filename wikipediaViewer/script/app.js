
$(document).ready(function(){

	$('#search').on('click', function(){

		var textToBeSearched = $('#inputBox').val();
		console.log(textToBeSearched);

		$.ajax({
			url: 'https://en.wikipedia.org/wiki/Special:Random',
			type: 'GET',
			dataType: 'json',
		})
		.done(function(data) {
			console.log("success");
			console.log(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

	$('#random').on('click', function(){

		window.location = 'https://en.wikipedia.org/wiki/Special:Random';

	});

});

//para um artigo randomico usar a seguinte url: https://en.wikipedia.org/wiki/Special:Random
//settar a url da pagina para a acima que irá automaticamente para um artigo randomico