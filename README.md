# Constructor-Hangman
Constructor Hangman Node Application for HW9 UMN Bootcamp

This Node application runs in command prompt/terminal and requires the node package *inquirer*.

### How to Play

The Constructor Hangman application allows you to play a simple game of hangman in your command prompt/terminal, with the special theme of **80s Movies**. To start playing, merely direct your directory path into the folder that houses your *index.js* file, then commence the program by writing the following into your terminal line.

```
node index.js
```
You will then be prompted with your current score, a chain of underscores representing the hidden 80s movie, and a prompt to guess a letter. You start each game with 10 guesses and a score of 0. If the letter you enter is in the word, your guesses stay the same, you are congratulated, and you are again prompted for a letter. If the letter you enter is not in the word, your guess number goes down by 1, and you are again prompted. If you enter a that has already been guessed or enter a key that is not a letter, you are prompted again at no penalty to your guess number.

If you get the word without using all your guesses, your score goes up by 1, you are shown the finished movie title, and are prompted to play again. If you wish to play again, you are again given a movie title. If you do not wish to play again, the program will close.

If you do not get the word within the 10 guesses, your score goes down by 1 and you are prompted to play again.

Enjoy playing Hangman, but remember...

**Life moves pretty fast. You don't stop and look around once in a while, you could miss it**


