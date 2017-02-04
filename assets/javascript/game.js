var game = {
	wins: 1,
	losses: 1,
	guessLimit: 9,

	winChange: function() {
		document.getElementById("myWins").innerHTML = "Wins: " + this.wins;
		this.wins = this.wins +1;
		document.getElementById("myGuessesLeft").innerHTML = "Guesses Left: " + this.guessLimit;
		this.guessLimit = 9;
		document.getElementById("guessHistory").innerHTML = "Your guesses so far: ";
	},

	lossChange: function() {
		document.getElementById("myLosses").innerHTML = "Losses: " + this.losses;
		this.losses = this.losses + 1;
		document.getElementById("myGuessesLeft").innerHTML = "Guesses Left: " + this.guessLimit;
		this.guessLimit = 9;
		document.getElementById("guessHistory").innerHTML = "Your guesses so far: ";
	},

	guessLimitChange: function() {
		document.getElementById("myGuessesLeft").innerHTML = "Guesses Left: " + this.guessLimit;
		this.guessLimit = this.guessLimit - 1;
		if(this.guessLimit < 1) {
			game.lossChange();
		}
	}

	// guessListChange: function() {
	// 	document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + this.guessList.appendChild(usersChoice);
	// }

};

	window.onkeydown = function(event) {
		// game.keyPressed(event.key.toLowerCase());
		var letters = ["a", "b", "c", "d", 
			"e", "f", "g", "h", 
			"i", "j", "k", "l", 
			"m", "n", "o", "p", 
			"q", "r", "s", "t", 
			"u", "v", "w", "x", 
			"y", "z"];

		function guessListChange() {
		var guessList = document.createElement("guessHistory");
		var usersChoice = document.createTextNode(event.key.toLowerCase());
		guessList.appendChild(usersChoice);
		document.getElementById("guessHistory").appendChild(guessList);
		}

		var guessList = [""];

		var usersChoice = event.key.toLowerCase();

		// var guessList = document.getElementById("guessHistory");

		if(letters.indexOf(usersChoice) > -1) {

			var randomNumber = Math.floor(Math.random() * letters.length);

			var computersChoice = letters[randomNumber];

		}

		if(usersChoice === computersChoice) {
			game.winChange();
		}

		else {
			game.guessLimitChange();
			// document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + guessList.appendChild(this.usersChoice);
			guessListChange();
		}

	};
	
	// keyPressed: function(usersChoice) {

		// var guessList = guessList.appendChild(usersChoice);

		// var guessList = [];

		// usersChoice.appendChild(guessList);

// 		if(usersChoice !== computersChoice) {

// 					if(this.guessLimit > -1) {
// 					var newGuessList = document.createElement("div");
// 					newGuessList.innerHTML = usersChoice;
// 					guessList.appendChild(newGuessList);
// 					document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + guessList + newGuessList;
// 					document.getElementById("myGuessesLeft").innerHTML = "Guesses Left: " + this.guessLimit;
// 					}
// 					// winChange: function() {
// 						// for (i = 0; i < letters.length; i++) {
// 						// 	var newGuessList = document.createElement("div");
// 						// 	newGuessList.innerHTML = usersChoice[i];
// 						// 	guessList.appendChild(newGuessList);
// 						// 	document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + usersChoice;
// 						// 	document.getElementById("myGuessesLeft").innerHTML = "Guesses Left: " + this.guessLimit;
// 						// }

// 						// while (keyPressed) {
// 						// 	document.getElementById("myGuessesLeft").innerHTML = "Guesses Left: " + 9;
// 						// }

// 					// document.getElementById('myWins').innerHTML = "Wins: " + this.wins + 1;

// 					// }

// 					// document.body.innerHTML = "<h3>YOU WIN!</h3>";
// 					else {
// 						document.getElementById('myLosses').innerHTML = "Losses: " + this.losses + 1;
// 						document.getElementById('myGuessesLeft').innerHTML = "Guesses Left: " + this.guessLimit;
// 					}	

// 		} 

// 				else {

// 					// guessChange: function() {
// 						// for (i = 9; i < guessLimit; i--) {
// 						// 	document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + usersChoice;
// 						// }
// 					// }
// 					document.getElementById('myWins').innerHTML = "Wins: " + this.wins + 1;
// 					document.getElementById('myGuessesLeft').innerHTML = "Guesses Left: " + this.guessLimit;
// 					// document.body.innerHTML = "<h3>YOU LOST!</h3>";

// 				}

// 			// else {

// 			// 		document.getElementById('myLosses').innerHTML = "Losses: " + this.losses + 1;
// 			// 		document.getElementById('myGuessesLeft').innerHTML = "Guesses Left: " this.guessLimit: 9


// 			// 	}

// 	}

// };

// // if(usersChoice === computersChoice) {

// // 				// winChange: function() {
// // 				document.getElementById('myWins').innerHTML = "Wins: " + this.wins + 1;

// // 				// }

// // 				// document.body.innerHTML = "<h3>YOU WIN!</h3>";

// // 			} 

// // 			else if(usersChoice !== computersChoice) {

// // 				// guessChange: function() {
// // 					for (i = 9; i < guessLimit; i--) {
// // 						document.getElementById("guessHistory").innerHTML = "Your guesses so far: " + usersChoice;
// // 					}
// // 				// }

// // 				// document.body.innerHTML = "<h3>YOU LOST!</h3>";

// // 			}

// // 			else {

// // 					document.getElementById('myLosses').innerHTML = "Losses: " + this.losses + 1;

// // 				}

// window.onkeyup = function(event) {

// 	game.keyPressed(event.key.toLowerCase());
// };

window.onload = function score(){
		
	var myElement = ('pizza');
	document.getElementById('myDiv').innerHTML = myElement;	

};