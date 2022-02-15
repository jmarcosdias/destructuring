/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let johnAge = ages[0]
// let maryAge = ages[1]
// let joeAge = ages[2]
let [johnAge, maryAge, joeAge] = ages;
console.log(johnAge, maryAge, joeAge);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
}
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];

let [johnNativeLanguage, johnSecondaryLanguage] = languages;
console.log(johnNativeLanguage, johnSecondaryLanguage)

let [, , maryNativeLanguage, marySecondaryLanguage] = languages;
console.log(maryNativeLanguage, marySecondaryLanguage)

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
}
let { secondLanguage, fourthLanguage } = languages2;
console.log(secondLanguage, fourthLanguage);

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favoriteFruit, secondFavoritFruit, ...othersFruits] = fruits;
console.log(favoriteFruit, secondFavoritFruit, othersFruits);

let favoriteFood = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak',
}
let { brian, anna, ...rest } = favoriteFood;
console.log(brian, anna, rest);
