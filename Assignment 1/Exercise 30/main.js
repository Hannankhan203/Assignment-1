// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var myNArray = ["Admin", "Hannan", "Anas", "Umair", "Arij"];
for (var _i = 0, myNArray_1 = myNArray; _i < myNArray_1.length; _i++) {
    var username = myNArray_1[_i];
    if (username === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello", username, ", thank you for loggong in again");
    }
}
