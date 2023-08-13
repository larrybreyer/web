//  Global variables

const five_favorite_movies = [
    "The Magnificent 7",
    "Lawrence of Arabia",
    "Ben Hur",
    "2001: A Space Odyssey",
    "How The West Was Won"
];

//STEP 1
function step01() {
    let movies = five_favorite_movies;
    console.log(five_favorite_movies[1]);
}
//STEP 2
function step02() {
    let movies = new Array(5);
    movies[0] = five_favorite_movies[0];
    movies[1] = five_favorite_movies[1];
    movies[2] = five_favorite_movies[2];
    movies[3] = five_favorite_movies[3];
    movies[4] = five_favorite_movies[4];

    console.log(movies[0]);
}
//STEP 3
function step03() {
    let movies = new Array(5);
    movies[0] = five_favorite_movies[0];
    movies[1] = five_favorite_movies[1];
    movies[2] = five_favorite_movies[2];
    movies[3] = five_favorite_movies[3];
    movies[4] = five_favorite_movies[4];
    let slice1 = movies.slice(0,3);
    let slice2 = movies.slice(3,5);
    movies = slice1;
    movies = movies.concat('Braveheart');
    movies = movies.concat(slice2);
 
    console.log(movies.length);
}
//STEP 4
function step04() {
    let movies = five_favorite_movies;
    movies.shift();
    console.log(movies);
}
//STEP 5
function step05() {
    const movies = [
        "The Magnificent 7",
        "Lawrence of Arabia",
        "Ben Hur",
        "2001: A Space Odyssey",
        "How The West Was Won",
        "Some Like It Hot",
        "Harvey"];

    for (let movie in movies){ console.log(movies[movie])};
}
//STEP 6
function step06() {
    const movies = [
        "The Magnificent 7",
        "Lawrence of Arabia",
        "Ben Hur",
        "2001: A Space Odyssey",
        "How The West Was Won",
        "Some Like It Hot",
        "Harvey"];

    for (let movie of movies){ console.log(movie)};
}
//STEP 7
function step07() {
    const movies = [
        "The Magnificent 7",
        "Lawrence of Arabia",
        "Ben Hur",
        "2001: A Space Odyssey",
        "How The West Was Won",
        "Some Like It Hot",
        "Harvey"];

   for (let movie of movies.sort()){ console.log(movie)};
}

//STEP 8
function step08() {
    const movies = [
        "The Magnificent 7",
        "Lawrence of Arabia",
        "Ben Hur",
        "2001: A Space Odyssey",
        "How The West Was Won",
        "Some Like It Hot",
        "Harvey"];

    const leastFavMovies = [
        "The Ridiculous 6 (2015)",
        "Gold Diggers (2003)",
        "Cabin Fever (2016)"
    ];

    console.log("\nMovies I like:\n\n");
    for (let movie of movies){ console.log(movie)};
    console.log("\nMovies I regret watching:\n\n");
    for (let movie of leastFavMovies){ console.log(movie)};
}
//STEP 9
function step09() {
    const movies1 = [
        "The Magnificent 7",
        "Lawrence of Arabia",
        "Ben Hur",
        "2001: A Space Odyssey",
        "How The West Was Won",
        "Some Like It Hot",
        "Harvey"];

    const leastFavMovies = [
        "The Ridiculous 6 (2015)",
        "Gold Diggers (2003)",
        "Cabin Fever (2016)"
    ];
    
    const movies = movies1.concat(leastFavMovies);
    movies.sort();
    for (let movie of movies.reverse()){ console.log(movie)};
}

//STEP 10
function step10() {
    const movies1 = [
        "The Magnificent 7",
        "Lawrence of Arabia",
        "Ben Hur",
        "2001: A Space Odyssey",
        "How The West Was Won",
        "Some Like It Hot",
        "Harvey"];

    const leastFavMovies = [
        "The Ridiculous 6 (2015)",
        "Gold Diggers (2003)",
        "Cabin Fever (2016)"
    ];
    
    const movies = movies1.concat(leastFavMovies);
    movies.sort();
    movies.reverse();
    console.log(movies[movies.length - 1]);
}

//STEP 11
function step11() {
    const movies1 = [
        "The Magnificent 7",
        "Lawrence of Arabia",
        "Ben Hur",
        "2001: A Space Odyssey",
        "How The West Was Won",
        "Some Like It Hot",
        "Harvey"];

    const leastFavMovies = [
        "The Ridiculous 6 (2015)",
        "Gold Diggers (2003)",
        "Cabin Fever (2016)"
    ];

    const movies = movies1.concat(leastFavMovies);
    movies.sort();
    movies.reverse();
    console.log(movies[0]);
}
//STEP 12
function step12() {
    const movies = [
        "The Ridiculous 6 (2015)",
        "The Magnificent 7",
        "Some Like It Hot",
        "Lawrence of Arabia",
        "How The West Was Won",
        "Harvey",
        "Gold Diggers (2003)",
        "Cabin Fever (2016)",
        "Ben Hur",
        "2001: A Space Odyssey" 
    ];

    const leastFavMovies = [
        "The Ridiculous 6 (2015)",
        "Gold Diggers (2003)",
        "Cabin Fever (2016)"
    ];

    for (let movie of leastFavMovies ) {
        console.log(movies.findIndex(movie));
    }

}

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17

// vim: ai ts=4 et 
