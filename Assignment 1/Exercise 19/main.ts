// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let Guest_Array: string[] = ["John", "Tommy", "Paul"];
let Invite = "I would like to invite to a dinner with me.";
Guest_Array[2] = "Ryan";
while (Guest_Array.length >= 1) {
    const removedGuest = Guest_Array.pop();
}
Guest_Array = ["Olivia", "Dua"];
Invite = "I would like to invite some more people, as I have a bigger dinner table now!";
Guest_Array.push("Billie");
while (Guest_Array.length > 2) {
    const removedGuest = Guest_Array.pop();
}
for (let i = 0; i < Guest_Array.length; i++) {
    console.log(`I'm stil inviting, ${Guest_Array[i]} to the dinner.`);
}