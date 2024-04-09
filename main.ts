#! usr/env/bin node
import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
    "Pkr": 1, //Base Currency
    "Dollar" : 280.50,
    "Euro" : 302.90,
    "Pound" : 353.00,
    "Saudi Riyal" : 74.05,
    "UAE" : 76.20,
    "Inr": 3 


}

let userInput = await inquirer.prompt
(
    [
        {
            name: "currency",
            type: "list",
            choices: ["Dollar", "Euro", "Pound", "Pkr", "Inr","Saudi Riyal", "UAE"],
            message: chalk.magenta.bold("Select your currency")
        },
        {
            name : "amount",
            type : "number",
            message : chalk.magentaBright.bold("Enter your amount")

        },
        {
            name:"convert",
            type:"list",
            choices:["Dollar", "Euro", "Pound", "Pkr", "Inr","Saudi Riyal", "UAE"],
            message:chalk.magenta.bold("Select your currency")
        }
    
    ] 

)

let inputCurrency : any = currency[userInput.currency]
let outputCurrency : any = currency[userInput.convert] 
let baseAmount = inputCurrency * userInput.amount
let result = Math.round((baseAmount / outputCurrency)*100)/100
console.log(chalk.blue.bold(`Your converted amount is`, chalk.yellow.bold.italic(`${result}`),`${userInput.convert}`))

// console.log(inputCurrency,outputCurrency,result)
// let roundoff = Math.round(result * 100) / 100 