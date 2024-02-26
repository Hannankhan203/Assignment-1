// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["Lion", "Cheetah", "Leopard"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var name_1 = animals_1[_i];
    console.log(name_1);
}
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    if (animal.includes("Lion")) {
        console.log(animal, "are famous for being the king of the jungle due to their majestic appearance, impressive roars, and status as apex predators in their habitats");
    }
    else if (animal.includes("Cheetah")) {
        console.log(animal, "are famous for being the fastest land animals, capable of reaching speeds of up to 70 miles per hour in short burst, enabling them to swiftly chase down prey during hunts");
    }
    else {
        console.log(animal, "are famous for their remarkable stealth and adaptability, thriving in diverse habitats ranging from dense forests to arid savannas, and for their distinctive rosette-patterned fur");
    }
}
console.log(animals, "are all members of felid family, sharing characteristics such as retractable claws, sharp teeth, and a carnivorous diet, while each exhibiting unique adaptations for their respective hunting strategies and habitats");
