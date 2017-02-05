
/*
**Wikipedia API connection
**param {String} seachItem
**return Wikipedia API connection object
*/

function connectionWikiAPI(seachItem){

	var urlSearched = 'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=' + 
					   encodeURIComponent(seachItem);

	return $.ajax({
				url: urlSearched,
				type: 'GET',
				dataType: 'json',
				crossDomain: true
			});

}