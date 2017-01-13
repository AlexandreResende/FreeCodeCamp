

var quotes = quoteGenerator();

for (key in quotes){
	document.write(quotes[key].quote+ ' ' + quotes[key].author + '\n');
}
