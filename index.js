var Word = require('./word.js');
var inquirer = require('inquirer');

var score = 0;
var guesses = 10;
var guessedRight = 0;
var spaces = 0;
var lettersGuessed = [];
var possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
						'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
						'w', 'x', 'y', 'z']

var NewWord = function(array) {
	this.array = array;
	this.newWord = new Word(array[Math.floor(Math.random() * wordArray.length)]);

	console.log("Current Score: " + score);

}

NewWord.prototype.letterGuess = function() {
	var wordObject = this.newWord;
	wordObject.displayWord();
	promptLetter(wordObject);

}

function promptLetter(wordObject) {
	var word = wordObject;

	if (guesses === 0) {
		console.log("You ran out of guesses...")
		score --;
		guessedRight = 0;
		spaces = 0;
		guesses = 10;
		lettersGuessed = [];

			inquirer.prompt([
				{
					type: 'confirm',
					name: 'playAgain',
					message: 'Would you like to play again?'
				}
			]).then(function(inquirerResponse) {
				if (inquirerResponse.playAgain) {
					wordRandom = new NewWord(wordArray);
					wordRandom.letterGuess();
				}
				else {
					process.exit();
				}
			})
	}

	else {

		inquirer.prompt([
			{
				type: 'input',
				name: 'letterGuess',
				message: 'Guess a letter: '
			}
			]).then(function(inquirerResponse) {
				var letterGuess = inquirerResponse.letterGuess;

				if (lettersGuessed.indexOf(letterGuess) >= 0) {
					console.log("You already guessed this letter");
					wordRandom.letterGuess();
				}

				else if (possibleLetters.indexOf(letterGuess) >= 0) {
					lettersGuessed.push(letterGuess)

					word.guessLetter(letterGuess);
					var thisGuess = 0;

					for (var i = 0; i < word.wordArray.length; i ++) {
						if (word.wordArray[i].guessed) {
							thisGuess ++;
						}

						if (word.wordArray[i].space) {
							spaces ++;
						}
					}

					if (thisGuess === spaces) {
						console.log("Guess again...")
						guesses --;
						console.log("Guesses left: " + guesses)
						spaces = 0
					}

					else if (thisGuess > guessedRight) {
						console.log("Correct!")
						console.log("Guesses left:" + guesses)
						guessedRight = thisGuess
						spaces = 0
					}

					else {
						console.log("Guess again...")
						guesses --;
						console.log("Guesses left: " + guesses)
						spaces = 0
					}

					if (guessedRight === word.word.length) {
						console.log("You got the word!");
						word.displayWord();
						score ++;
						guessedRight = 0;
						spaces = 0;
						guesses = 10;
						lettersGuessed = [];

						inquirer.prompt([
							{
								type: 'confirm',
								name: 'playAgain',
								message: 'Would you like to play again?'
							}
						]).then(function(inquirerResponse) {
							if (inquirerResponse.playAgain) {
								wordRandom = new NewWord(wordArray);
								wordRandom.letterGuess();
							}
							else {
								process.exit();
							}
						})
					}

					else {
				
						wordRandom.letterGuess();	
					}

				}

				else {
					console.log("You did not enter a valid letter");
					wordRandom.letterGuess();
				}
			})

	}
}


console.log('HANGMAN 80s MOVIES EDITION')
var wordArray = ["the goonies", 
	"the breakfast club", 
	"stand by me", 
	"back to the future", 
	"gremlins", 
	"dirty dancing",
	"the princess bride",
	"heathers",
	"footloose",
	"the karate kid",
	"flashdance",
	"ghostbusters",
	"raiders of the lost ark",
	"the empire strikes back",
	"ferris buellers day off"];

var wordRandom = new NewWord(wordArray);
wordRandom.letterGuess();

