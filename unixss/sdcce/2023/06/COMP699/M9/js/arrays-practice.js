//STEP 1
const five_favorite_movies = [
    "The Magnificent 7",
    "Lawrence of Arabia",
    "Ben Hur",
    "2001: A Space Odyssey",
    "How The West Was Won"];

//  console.log(five_favorite_movies[1]);

//STEP 2

//  let movies = new Array(5);

//  for (let i = 0; i < five_favorite_movies.length; i++) {
//	movies[i] = five_favorite_movies[i];
//  }
//  console.log(movies[0]);

//STEP 3
//  let slice1 = movies.slice(0,3);
//  let slice2 = movies.slice(3,5);
//  movies = slice1;
//  movies = movies.concat('Braveheart');
//  movies = movies.concat(slice2);

//  console.log(movies.length);

//STEP 4

//  const movies = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won"];
//  
//  movies.shift();
//  console.log(movies);
//STEP 5

//  const movies = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];

//  for (let movie in movies){ console.log(movies[movie])};

//STEP 6

//  for (let movie of movies){ console.log(movie)};

//STEP 7

// for (let movie of movies.sort()){ console.log(movie)};

//STEP 8

const leastFavMovies = [
    "The Ridiculous 6 (2015)",
    "Gold Diggers (2003)",
    "Cabin Fever (2016)"
];
//  console.log("\nMovies I like:\n\n");
//  for (let movie of movies){ console.log(movie)};
//  console.log("\nMovies I regret watching:\n\n");
//  for (let movie of leastFavMovies){ console.log(movie)};

//STEP 9
//  const movies1 = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//  const movies = movies1.concat(leastFavMovies);
//  movies.sort();
//  for (let movie of movies.reverse()){ console.log(movie)};


//STEP 10
//  const movies1 = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//  const movies = movies1.concat(leastFavMovies);
//  movies.sort();
//  movies.reverse();
//  console.log(movies.pop());


//STEP 11
const movies1 = [
    "The Magnificent 7",
    "Lawrence of Arabia",
    "Ben Hur",
    "2001: A Space Odyssey",
    "How The West Was Won",
    "Some Like It Hot",
    "Harvey"];

const movies = movies1.concat(leastFavMovies);
movies.sort();
movies.reverse();
console.log(movies[0]);

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17
