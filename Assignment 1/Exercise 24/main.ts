// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Test 1

let strng1 = "Hello World";
let strng2 = "Hello World";
console.log(strng1 === strng2);
console.log(strng1 !== strng2);

// Test 2

let LowerCase = "hello world";

console.log(LowerCase == "hello world");
console.log(LowerCase == "HELLO WORLD");

// Test 3

let num1 = 5;
let num2 = 10;

if (num1 === num2){
    console.log(num1, "is equal to", num2);
}
else {
    console.log(num1, "is not equal to", num2);
}
if (num1 !== num2){
    console.log(num1, "is not equal to", num2);
}
else {
    console.log(num1, "is equal to", num2);
}
if (num1 < num2){
    console.log(num1, "is less than", num2);
}
else {
    console.log(num1, "is greater than", num2);
}
if (num1 > num2){
    console.log(num1, "is greater than", num2);
}
else {
    console.log(num1, "is less than", num2);
}
if (num1 <= num2){
    console.log(num1, "is less than equal to", num2);
}
else {
    console.log(num1, "is greater than equal to", num2);
}
if (num1 >= num2){
    console.log(num1, "is greater than equal to", num2);
}
else {
    console.log(num1, "is less than equal to", num2);
}

// Test 4

let var1 = 20;
let var2 = 10;
let var3 = 30;
if (var1 > var2 && var1 > var3){
    console.log(var1, "is greater than", var2, "and", var3);
}
else if (var2 > var1 && var2 > var3){
    console.log(var2, "is greater than", var1, "and", var3);
}
else {
    console.log(var3, "is greater than", var1, "and", var2);
}
if (var1 > var2 || var1 > var3) {
    console.log("Atleast one condition is true");
}
else {
    console.log("Neither of the statements are true");
}

// Test 5

let myCondArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let itemcheck: number = 5;
if (myCondArray.includes(itemcheck)) {
    console.log("The item", itemcheck, "is in the array");
}
else {
    console.log(itemcheck, "is not present in the array");
}

// Test 6

let myCondArray2: number[] = [11, 12, 13, 14, 15];
let itemcheck2: number = 20;
if (myCondArray2.includes(itemcheck2)) {
    console.log("the item", itemcheck2, "is in the array");
}
else {
    console.log(itemcheck2, "is not present in the array");
}