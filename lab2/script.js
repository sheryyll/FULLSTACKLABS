let cities = ['Udupi', 'Manipal', 'Moodubidre', 'Karkala', 'Padubidre', 'Mangalore'];

console.log(`The total number of cities is ${cities.length}`);

cities.push(prompt("Enter the new city to add to the end"));

cities.shift();

console.log(`Updated list of cities: ${cities}`);

let target = prompt("Enter the city to search for: ");
console.log(`Index of ${target}: ${cities.indexOf(target)}`);