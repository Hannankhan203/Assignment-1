// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let Guest_Array: string[] = ["John", "Tommy", "Paul"];
let Invite = "I would like to invite to a dinner with me.";
for (let a = 0; a < Guest_Array.length; a++) {
    console.log(`${Guest_Array[a]}, ${Invite}`);
}