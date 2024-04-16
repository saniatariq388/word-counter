import inquirer from "inquirer";
console.log(`******************************************************`);

console.log(`       WELCOME TO THE WORD COUNTER APPLICATION        `);

console.log(`******************************************************`);


//Declare a const "answer" n assign it with the result of inquirer.prompt function

const answer :{
    sentence: string
} = await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:"Enter your  sentence to count the words:"
        }
    ]
)

const words = answer.sentence.trim().split(" ")

// print the array  of words in  the console
 console.log(words);

// print the word count of the sentence to the console
console.log(`Your sentence word count is  ${words.length} `);


console.log(`********************************************************`);


console.log(`                      THANK YOU                         `);

console.log(`********************************************************`);