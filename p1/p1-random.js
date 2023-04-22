/*
    CIT 281 Project 1
    Name: Mallory Thompson
*/
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
return getRandomInteger(0,4);
const letters = ["a b c d e f", "g h i j k", "l m n o p", "q s t u v", "w x y z"];

let letter = letters[getRandomInteger()];
console.log(letter);




