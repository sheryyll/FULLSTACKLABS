// const userInput = document.getElementById('userInput').value;
const userInput = prompt("Enter a string: ");
console.log(`the length of user input is: ${userInput.length}`);

const extract = "JavaScript";
const startIdx = userInput.indexOf(extract);
let extracted = "";
if(startIdx !== -1){
    extracted = userInput.substring(startIdx, startIdx + extract.length);
}
console.log(`Extracted substring: ${extracted}`);

const oldword = "example";
const newword = "sample";

let replacedString = userInput.replace(oldword, newword);
console.log(`String after replacement: ${replacedString}`);


function isPalindrome(s){
    const clean = s.toLowerCase().replace(/ /g, "");
    const reversed = clean.split("").reverse().join("");
    return s == reversed;
}

if(isPalindrome(userInput)){
    console.log(`User input is plaindrome`);
}else{
    console.log("Not palindrome");
}