#! /usr/bin/env node

// Importing the inquirer module:
import inquirer from "inquirer";

// Currency conversion rates:
const currency: any = {
    USD: 1,    // Dummy Currency:
    BDT: 85,
    CAD: 1.25,
    PKR: 180,
    INR: 75
}

// Prompting the user for input:
let userAmount = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from amount",
        type: "list",
        choices: ['USD', 'BDT', 'CAD', 'PKR', 'IND']
    },
    {
        name: "to",
        message: "Enter to amount",
        type: "list",
        choices: ['USD', 'BDT', 'CAD', 'PKR', 'IND']
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    },
]);

// Getting the conversion rates for the selected currencies:
let fromAmount = currency[userAmount.from];
let toAmount = currency[userAmount.to];
let user_amount = userAmount.amount;

// Converting the user's amount to the base currency:
let baseAmount = user_amount / fromAmount;

// Converting the base currency amount to the target currency:
let convertAmount = baseAmount * toAmount;

// Displaying the rounded converted amount to two decimal places:
console.log(convertAmount.toFixed(2));


