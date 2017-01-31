// var game = {
// 	wins: 0,
// 	losses: 0,
// 	guessLimit: 9,
window.onkeydown = function(event) {

	var letters = ["a", "b", "c", "d", 
		"e", "f", "g", "h", 
		"i", "j", "k", "l", 
		"m", "n", "o", "p", 
		"q", "r", "s", "t", 
		"u", "v", "w", "x", 
		"y", "z"];

	var usersChoice = event.key.toLowerCase();

	if(letters.indexOf(usersChoice) > -1) {

		var randomNumber = Math.floor(Math.random() * letters.length);

		var computersChoice = letters[randomNumber];

		if(usersChoice === computersChoice) {

			document.body.innerHTML = "<h3>YOU WIN!</h3>";

		} else {

			document.body.innerHTML = "<h3>YOU LOST!</h3>";
		}
	}

};