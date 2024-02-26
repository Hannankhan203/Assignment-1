// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(City, Country) {
    if (City === void 0) { City = 'Lahore'; }
    if (Country === void 0) { Country = 'Pakistan'; }
    console.log("\"".concat(City, ", ").concat(Country, "\""));
}
city_country();
city_country('Madrid', 'Spain');
city_country('Istanbul', 'Turkey');
