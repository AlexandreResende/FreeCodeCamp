

function newQuote(){

	var quotes = quoteGenerator();
	var randomQuoteSelected = rng();

	console.log(randomQuoteSelected);

	document.getElementById('quote').innerHTML = quotes[randomQuoteSelected].quote;
	document.getElementById('author').innerHTML = 'Author: ' + quotes[randomQuoteSelected].author;

}