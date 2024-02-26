// 13. Your Own Array: Think of your favorite mode of transportation, such as a motocycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as "I would like to own a Honda motocycle."
var Fav_Array = ["Tesla Model S", "BMW M3"];
for (var j = 0; j < Fav_Array.length; j++) {
    console.log("I would like to own a ".concat(Fav_Array[j], " one day!"));
}
