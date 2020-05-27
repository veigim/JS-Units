"use strict";
let numberOfFilms;

function start() {
        numberOfFilms= +prompt('Сколько фильмов Вы просмотрели', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                numberOfFilms= +prompt('Сколько фильмов Вы просмотрели', '');
        }
}

start();

let personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : true
};


// for (let i = 0; i < 2; i++) {
//     const   a = prompt("Last film?", ``),
//             b = prompt("your rate?", ``);

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log(`done`);
//     }    else {
//             console.log('error');
//             i--;
//     }
// }

function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
                const   a = prompt('Один из последних просмотренных фильмов?', ''),
                        b = prompt('На сколько оцените его?', '');
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                } else {
                        console.log('error');
                        i--;
                }
        }        
}

// rememberMyFilms();

function detectPersinalLevel() {
        if (personalMovieDB.count < 10) {
                console.log('Посмотрели мало фильмов');
        }       else if (personalMovieDB.count >= 10 && (personalMovieDB.count < 30)) {
                        console.log('Вы классический зритель');
        }       else if (personalMovieDB.count >= 30) {
                        console.log('Киноман');
        }       else { 
                        console.log(`ошибка`);
        }
        
}

// detectPersinalLevel();

function showMyDB () {
        if ( personalMovieDB.privat )  {
                console.log(personalMovieDB);
        }
}

// showMyDB();

console.log(personalMovieDB);

function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
                const genre = prompt(`Ваш любимый жанр под номером ${i}`);
                personalMovieDB.genres[i - 1] = genre;
        }
        
}

writeYourGenres();