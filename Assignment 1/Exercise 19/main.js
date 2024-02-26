// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var Guest_Array = ["John", "Tommy", "Paul"];
var Invite = "I would like to invite to a dinner with me.";
Guest_Array[2] = "Ryan";
while (Guest_Array.length >= 1) {
    var removedGuest = Guest_Array.pop();
}
Guest_Array = ["Olivia", "Dua"];
Invite = "I would like to invite some more people, as I have a bigger dinner table now!";
Guest_Array.push("Billie");
while (Guest_Array.length > 2) {
    var removedGuest = Guest_Array.pop();
}
for (var i = 0; i < Guest_Array.length; i++) {
    console.log("I'm stil inviting, ".concat(Guest_Array[i], " to the dinner."));
}
