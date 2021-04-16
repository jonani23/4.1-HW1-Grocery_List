// Grocery List Task 1 
let item1 = prompt("Grocery item number 1: ");
let amt1 = Number(prompt(`How many ${item1} would you like?`))


let item2 = prompt("Grocery item number 2: ");
let amt2 = Number(prompt(`How many ${item2} would you like?`))


let item3 = prompt("Grocery item number 3: ");
let amt3 = Number(prompt(`How many ${item1} would you like?`))

let sum = parseInt(amt1) + parseInt(amt2) + parseInt(amt3);
console.log(`Your shopping cart: 
${amt1} ${item1}
${amt2} ${item2}
${amt3} ${item3}
Total number of items: ${sum}
Thank you for shopping with us please come again!`)



console.log("Task 2:Tongue Twister")
let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";
let pangram = "The quick brown fox jumps over the lazy dog.";
let anotherPangram = "The five boxing wizards jump quickly.";

// Task 2.2 //
let tongueTwisterLower = tongueTwister.toLowerCase();
console.log("Tongue twister transformed to all lower case: ");
console.log(tongueTwisterLower);


// Task 2.3 //
console.log("The first occurrence of 'fox' in panagram is index: ");
console.log(pangram.indexOf("fox"));
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
pangramFox = replaceAt(pangram, pangram.indexOf("fox"),"F");

// Task 2.4 //
console.log("'fox' is capitalized to 'Fox' in panagram");
console.log(pangramFox);

console.log("The 11th character in anotherPangram is: ");
console.log(anotherPangram[10]);