// 3. Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase and titlecase.

// Uppercase

let Person: string = "Henry";
let upper = Person.toUpperCase();
console.log(upper);

Person = "JOHNATHAN";
let lower = Person.toLowerCase();
console.log(lower);

function toTitleCase(str: string): string {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
Person = "thomas shelby";
let title = toTitleCase(Person);
console.log(title);
