// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Guest_Array: string[] = ["John", "Tommy", "Paul"];
let Invite = "I would like to invite to a dinner with me.";
Guest_Array[2] = "Ryan";
console.log("Sorry, I can only invite two people for dinner.");
while (Guest_Array.length >= 1) {
    const removedGuest = Guest_Array.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
Guest_Array = ["Olivia", "Dua"];
Invite = "I would like to invite some more people, as I have a bigger dinner table now!";
Guest_Array.push("Billie");
while (Guest_Array.length > 2) {
    const removedGuest = Guest_Array.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
for (let i = 0; i < Guest_Array.length; i++) {
    console.log(`${Guest_Array[i]}, you're still invited.`);
}
Guest_Array = [];
console.log(Guest_Array);