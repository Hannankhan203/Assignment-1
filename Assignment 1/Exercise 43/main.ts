// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Harry Houdini", "David Copperfield", "David Blaine"];
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} The Great!`);
}
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
magicians = make_great(magicians);
show_magicians(magicians);
let OgMagicians: string[] = ["Harry Houdini", "David Copperfield"];
let ModMagicians: string[] = make_great([...OgMagicians]);
console.log("Original Magicians:");
show_magicians(OgMagicians);
console.log("\nModifiedMagicians");
show_magicians(ModMagicians);