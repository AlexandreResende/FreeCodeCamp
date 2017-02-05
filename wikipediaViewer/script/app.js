
$(document).ready(function(){

	$('#search').on('click', function(){
		
		/*
		**I chose to encapsulate the procedure of searching something
		**on wikipedia through my front, because the app.js was getting
		**very long and probably confusing. So this way I created different
		**files with the AJAX connection and another one with the treatment
		**of the result gotten from the API.
		*/
		dataTreatment();

	});

	$('.closeSearch').on('click', function(){

		$('.closeSearch').css('display', 'none');
		$('.searchElements').css('margin-top', '20%');
		$('.elementsFound').remove();
		$('#inputBox').val('');
		$('#inputBox').prop('disabled', false);
		
	});

});



