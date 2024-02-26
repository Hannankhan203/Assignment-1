// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest_Array = ["John", "Tommy", "Paul"];
var Invite = "I would like to invite to a dinner with me.";
for (var a = 0; a < Guest_Array.length; a++) {
    console.log("".concat(Guest_Array[a], ", ").concat(Invite));
}
