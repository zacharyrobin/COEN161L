import * as variables from './variables.js';

const {
    num1,
    num2,
    num3,
    num4,
    str1,
    str2,
    str3,
    str4
} = variables;


// export const num1 = 1;  
// export const num2 = 1.01;
// export const num3 = 1e3;
// export const str1 = "hello";
// export const str2 = "there";
// export const str3 = "world";

// What does this statement log and why?
// console: 2.01
// explanation: you are adding 1 and 1.01 which gives you 2.01
// console.log(num1 + num2);

// What does this statement log and why?
// console: TypeError
// explanation: you are attempting to add a double to an int if num1 was 1.0 then you would be able to add num2
// console.log(num1 += num2);

// What does this statement log and why?
// console: NaN
// explanation: Not a Number ie, you are attempting to add a string and num3 which is a float
// console.log(num3 + num4);

// What does this statement log and why?
// console: SyntaxError: redeclaration of const num4
// explanation: you have already defined num4 as a const and thus it cannot be redifened so it is throwing an error
// let num4 = 0;
// console.log(num3 + num4);

// What does this statement log and why?
// console: hello world
// explantation: you are logging two strings "hello" and "world" however I am unsure as to where the space is coming from and why it is not just "helloworld"
// console.log(str1, str3);

// What does this statement log and why?
// console: hello there world undefined
// explanation: similar to the previous exlanation you are loggin three strings "hello" "there" adn "world" however str4 has not been defined in variables.js and thus is undefined
console.log(str1, str2, str3, str4);