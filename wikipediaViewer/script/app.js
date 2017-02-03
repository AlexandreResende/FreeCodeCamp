
$(document).ready(function(){

	//jQuery.support.cors = true;

	$('#search').on('click', function(){

		var textToBeSearched = $('#inputBox').val();
		var urlSearched = 'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=' + 
						   encodeURIComponent(textToBeSearched);

		$.ajax({
			url: urlSearched,
			type: 'GET',
			dataType: 'json',
			crossDomain: true
		})
		.done(function(data) {

			if (data.query){

				var pages         = data.query.pages;
				var wikiUrl       = 'https://en.wikipedia.org/wiki/';
				var openElement   = '<a class="btn btn-block btn-info elementsFound" href="';
				var middleElement = '" target="_blank"><div>';
				var closeElement  = '</div></a>'; 

				$('.closeSearch').css('display', 'block');
				$('.searchElements').css('margin-top', '5%');

				for (var page in pages){

					var titleOfCurrentPage = pages[page].title;

					$('.father').append(openElement + 
										wikiUrl +
										titleOfCurrentPage.replace(/[\s]+/g, '_') +
										middleElement +
										titleOfCurrentPage +
										closeElement);

				}

			}
			else {
				alert('Searched element not found.');
			}
			
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("Connection with Wikipedias API...");
		});

	});

	$('.closeSearch').on('click', function(){

		$('.closeSearch').css('display', 'none');
		$('.searchElements').css('margin-top', '20%');
		$('.elementsFound').remove();
		$('#inputBox').val('');
		
	});

});



