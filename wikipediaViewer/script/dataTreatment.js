
/*
**Treatment of the data gotten from the API
**param -
**return -
*/

function dataTreatment(){

	var textToBeSearched = $('#inputBox').val();

	connectionWikiAPI(textToBeSearched).done(function(data) {

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

			$('#inputBox').prop('disabled', true);

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

}