// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician_names = ["Harry Houdini", "David Copperfield", "David Blaine"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
show_magicians(magician_names);
