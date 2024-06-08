#! usr/bin/env node
//shabang
//npm is used to manage and install packages

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        message: "Guess the number: ",
        type: "number",
        name: "num"
    }
]);

const numberGuessingFunction = () => {
    if(Math.random() * 10 === answer.num)
        console.log("You guessed it right!");
    else
        console.log("You guessed it wrong!");
}

numberGuessingFunction();