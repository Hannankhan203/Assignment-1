// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var myPArray = ["Makkah", "Medinah", "Spain", "Japan", "Turkey"];
console.log(myPArray);
var Sorted_myPArray = myPArray.slice().sort(function (a, b) { return a.localeCompare(b); });
console.log("Original Array : ", myPArray);
console.log("Sorted Array : ", Sorted_myPArray);
var RSorted_myPArray = myPArray.slice().sort(function (a, b) { return b.localeCompare(a); });
console.log("Original Array : ", myPArray);
console.log("Reverse Sorted Array : ", RSorted_myPArray);
RSorted_myPArray.reverse();
console.log("reversing the sorted Array : ", RSorted_myPArray);
RSorted_myPArray.reverse();
console.log("Reversing the sorted Array for the 2nd time : ", RSorted_myPArray);
RSorted_myPArray.sort(function (a, b) { return a.localeCompare(b); });
console.log(RSorted_myPArray);
RSorted_myPArray.sort(function (a, b) { return b.localeCompare(a); });
console.log(RSorted_myPArray);
