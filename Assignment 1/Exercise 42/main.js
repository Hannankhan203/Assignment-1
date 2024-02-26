// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Harry Houdini", "David Copperfield", "David Blaine"];
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " The Great!"); });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
magicians = make_great(magicians);
show_magicians(magicians);
