// Declaring a variable
// keyword identifier/variableName = value
var firstName = "Patrick";
let lastName = "Davies";
let age = 28;
let isMarried = true;
let children = ["Bright", "Simon", "Patrick"];
let other = {
    favoriteColor: "Red",
    FavoriteSport: "Cards",
    FavoriteFruit: "Pawpaw"
};
const fullName = firstName + " " + lastName; 
const myself = 'my name ${firstName} ${lastName}.'; 
console.log(myself);



// STRING
let sentence = "This is a story of Phils Garment";
console.log(sentence.length);
console.log(sentence.split ("Patrick"));
console.log(sentence.replace("Patrick", "Philomena"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith());
console.log(sentence.endsWith());
console.log(sentence.includes());



// ARRAY
const days = ["Mondat", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop())
days.unshift("Sunday");
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Friday"));
console.log(days[5]); // retrieving data
days[5] = "Sunday"; // change data in the array
console.log(days);



//OBJECT
let person = {
    firstName: "Patrick",
    lastName: "Davies",
    age: 27,
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));