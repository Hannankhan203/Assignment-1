// 3. Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase and titlecase.
// Uppercase
var Person = "Henry";
var upper = Person.toUpperCase();
console.log(upper);
Person = "JOHNATHAN";
var lower = Person.toLowerCase();
console.log(lower);
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
}
Person = "thomas shelby";
var title = toTitleCase(Person);
console.log(title);
