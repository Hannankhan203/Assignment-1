// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var Guest_Array = ["John", "Tommy", "Paul"];
var Invite = "I would like to invite to a dinner with me.";
console.log("Paul can't make it to the dinner!");
Guest_Array[2] = "Ryan";
// for (let a = 0; a < Guest_Array.length; a++) {
//     console.log(`${Guest_Array[a]}, ${Invite}`);
// }
Guest_Array = ["Olivia", "Dua"];
Invite = "I would like to invite some more people, as I have a bigger dinner table now!";
Guest_Array.push("Billie");
for (var a = 0; a < Guest_Array.length; a++) {
    console.log("".concat(Guest_Array[a], ", ").concat(Invite));
}
