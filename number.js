#! /usr/bin/env node
import inquirer from "inquirer";
const systemgeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Guess a number between 1 to 10 and write it",
    }]);
const { userGuess } = answers;
console.log(`Guessed no:${userGuess},Correct Answer is: ${systemgeneratedNo}`);
if (userGuess === systemgeneratedNo) {
    console.log("Correct Answer! Congratulation You Win!");
}
else {
    ("Wrong answer! better luck next time");
}
;
