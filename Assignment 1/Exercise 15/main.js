// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var Guest_Array = ["John", "Tommy", "Paul"];
var Invite = "I would like to invite to a dinner with me.";
// for (let a = 0; a < Guest_Array.length; a++) {
//     console.log(`${Guest_Array[a]}, ${Invite}`);
// }
console.log("Paul can't make it to the dinner!");
Guest_Array[2] = "Ryan";
for (var a = 0; a < Guest_Array.length; a++) {
    console.log("".concat(Guest_Array[a], ", ").concat(Invite));
}
