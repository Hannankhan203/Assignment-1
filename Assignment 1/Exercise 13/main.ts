// 13. Your Own Array: Think of your favorite mode of transportation, such as a motocycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as "I would like to own a Honda motocycle."

let Fav_Array: string[] = ["Tesla Model S", "BMW M3"];
for (let j = 0; j < Fav_Array.length; j++) {
    console.log(`I would like to own a ${Fav_Array[j]} one day!`);
}