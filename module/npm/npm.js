const randomFruitesName = require('random-fruits-name');
console.log(randomFruitesName());

const randomMovieName = require('random-movie-names');
console.log(randomMovieName());

const moviesNames = require('movies-names');
console.log(moviesNames.all); //return all the movies
console.log(moviesNames.random()); // returns a random movie name
console.log(moviesNames.random(2)); // returns specified number of random movies



