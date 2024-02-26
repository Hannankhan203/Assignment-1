// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let Alien_Color: string[] = ["green", "red", "yellow"];
if (Alien_Color.includes("green")) {
    console.log("You gained 5 points!");
}
else if (Alien_Color.includes("yellow")) {
    console.log("You gained 10 points!");
}
else if (Alien_Color.includes("red")) {
    console.log("You gained 15 points!");
}
else {
    console.log("--");
}
if (Alien_Color.includes("blue")) {
    console.log("You gained 5 points!");
}
else if (Alien_Color.includes("yellow")) {
    console.log("You gained 10 points!");
}
else if (Alien_Color.includes("red")) {
    console.log("You gained 15 points!");
}
else {
    console.log("--");
}
if (Alien_Color.includes("blue")) {
    console.log("You gained 5 points!");
}
else if (Alien_Color.includes("purple")) {
    console.log("You gained 10 points!");
}
else if (Alien_Color.includes("red")) {
    console.log("You gained 15 points!");
}
else {
    console.log("--");
}
if (Alien_Color.includes("blue")) {
    console.log("You gained 5 points!");
}
else if (Alien_Color.includes("purple")) {
    console.log("You gained 10 points!");
}
else if (Alien_Color.includes("black")) {
    console.log("You gained 15 points!");
}
else {
    console.log("--");
}