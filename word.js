var Letter = require('./letter.js')

var Word = function(word) {
	this.word = word;
	this.wordArray = [];

	var startArray = word.split('');

	for (var i = 0; i < startArray.length; i ++ ) {
		var letter = new Letter(startArray[i]);
		this.wordArray.push(letter)
	} 

}

Word.prototype.displayWord = function() {
	console.log(this.wordArray.join(' '));
}

Word.prototype.guessLetter = function(userGuess) {

	for (var i = 0; i < this.wordArray.length; i ++ ) {
		this.wordArray[i].userGuess(userGuess)
	}

}

module.exports = Word
