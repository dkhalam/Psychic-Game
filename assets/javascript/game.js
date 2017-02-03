var game = {
	wins: 0,
	losses: 0,
	guessLimit: 9,

	// winChange: function () {

	// }

	// lossChange: function () {

	// }

	// guessChange: function () {

	// }
	
	keyPressed: function(usersChoice) {

		var letters = ["a", "b", "c", "d", 
			"e", "f", "g", "h", 
			"i", "j", "k", "l", 
			"m", "n", "o", "p", 
			"q", "r", "s", "t", 
			"u", "v", "w", "x", 
			"y", "z"];

		var usersChoice = event.key.toLowerCase();

		var guessList = document.getElementById("guessHistory")

		// var guessList = guessList.appendChild(usersChoice);

		// var guessList = [];

		// usersChoice.appendChild(guessList);

		if(letters.indexOf(usersChoice) > -1) {

			var randomNumber = Math.floor(Math.random() * letters.length);

			var computersChoice = letters[randomNumber];

		if(usersChoice !== computersChoice) {

				// winChange: function() {
					// for (i = 0; i < letters.length; i++) {
						var newGuessList = document.createElement("div");
						newGuessList.innerHTML = usersChoice[i];
						guessList.appendChild(newGuessList);
						document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + usersChoice;
						document.getElementById("myGuessesLeft").innerHTML = "Guesses Left: " + this.guessLimit;
					// }

					// while (keyPressed) {
					// 	document.getElementById("myGuessesLeft").innerHTML = "Guesses Left: " + 9;
					// }

				// document.getElementById('myWins').innerHTML = "Wins: " + this.wins + 1;

				// }

				// document.body.innerHTML = "<h3>YOU WIN!</h3>";

			} 

			else {

				// guessChange: function() {
					// for (i = 9; i < guessLimit; i--) {
					// 	document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + usersChoice;
					// }
				// }
				document.getElementById('myWins').innerHTML = "Wins: " + this.wins + 1;
				document.getElementById('myGuessesLeft').innerHTML = "Guesses Left: " + this.guessLimit;
				// document.body.innerHTML = "<h3>YOU LOST!</h3>";

			}

			// else {

			// 		document.getElementById('myLosses').innerHTML = "Losses: " + this.losses + 1;
			// 		document.getElementById('myGuessesLeft').innerHTML = "Guesses Left: " this.guessLimit: 9


			// 	}

		}

	}

};

// if(usersChoice === computersChoice) {

// 				// winChange: function() {
// 				document.getElementById('myWins').innerHTML = "Wins: " + this.wins + 1;

// 				// }

// 				// document.body.innerHTML = "<h3>YOU WIN!</h3>";

// 			} 

// 			else if(usersChoice !== computersChoice) {

// 				// guessChange: function() {
// 					for (i = 9; i < guessLimit; i--) {
// 						document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + usersChoice;
// 					}
// 				// }

// 				// document.body.innerHTML = "<h3>YOU LOST!</h3>";

// 			}

// 			else {

// 					document.getElementById('myLosses').innerHTML = "Losses: " + this.losses + 1;

// 				}

window.onkeydown = function(event) {

	game.keyPressed(event.key.toLowerCase())
}

window.onload = function score(){
		
	var myElement = ('pizza');
	document.getElementById('myDiv').innerHTML = myElement;	

};