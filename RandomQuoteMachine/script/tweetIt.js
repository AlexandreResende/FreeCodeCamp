
function tweetIt(){

	var quote = encodeURIComponent(document.getElementById('quote').innerHTML);
	var author = encodeURIComponent(document.getElementById('author').innerHTML);
	var tweetUrl = "https://twitter.com/intent/tweet?text=" + quote + author;

	document.getElementById('tweet').href = tweetUrl;
}