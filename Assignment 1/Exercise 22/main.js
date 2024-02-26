// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var myEArray = [1, 2, 3, 4, 5];
var inError = myEArray[2];
console.log(inError);
inError = myEArray[20];
console.log(inError);
// let myErrorArray2 : { [index: string]: string} = {
//     "apple" : "red",
//     "banana" : "yellow",
//     "orange" : "orange"
// }
// let indexError2 = myErrorArray2["apple"];
// console.log(indexError2);
// let myErrorArray2 : { [index: string]: string} = {
//     "apple" : "red",
//     "banana" : "yellow",
//     "orange" : "orange"
// }
// let indexError2 = myErrorArray2["pineapple"];
// console.log(indexError2);
