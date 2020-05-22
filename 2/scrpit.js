"use strict";
let numberOfFilms = +prompt('Сколько фильмов Вы просмотрели', '');

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const   a = prompt("Last film?"),
        b = prompt("your rate?"),
        c = prompt("Last film?"),
        d = prompt("your rate?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);