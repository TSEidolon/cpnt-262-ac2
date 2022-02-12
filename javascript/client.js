
// Declare a variable with const or let and assign it a value of choice.
const firstName = "Edgar";
const lastName = "Caballero";
const birthYear = 1996;
const year = 2022;
const age = year - birthYear;
const watchAnime = true;
const animeShows = ['Naruto','Hunter x Hunter', 'One Piece', 'Fullmetal Alchemist', 'Jujutsu Kaisen'];
const favAnime = animeShows [1]; // HxH


// First way:
// Print a variable in two distinct ways for each of the following value types:

console.log (firstName);
console.log (lastName);
console.log (age);
console.log (typeof(age)); // checking if age is a number
console.log (watchAnime);
console.log (Boolean(watchAnime)); // checking if watchAnime is true
console.log (animeShows.length); // shows the length of the array
console.log (favAnime); // shows the object at location [1] of the array

// Second way:
// Add a label to a console message using multiple console.log arguments.

const edgarIntroduce = `Hello! I'm ${firstName} ${lastName}. I will be turning ${year - birthYear} this ${year}. My favourite animes are ${favAnime} and ${animeShows[0]}.`

console.log (edgarIntroduce);