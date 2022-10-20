'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};






function getMovieRating() {
    for (let i = 0; i < 2; i++) {
        let answerFilm = prompt('Один из просмотренных фильмов?');
        let answerOpinion = +prompt('На сколько оцените его?');

        if (answerFilm != null && answerFilm.length < 50 && answerOpinion != null && answerFilm != "" && answerOpinion != '') {
            personalMovieDB.movies[answerFilm] = answerOpinion;
        } else {
            console.log("Произошла ошибка");
            i--;
        }

    }

}

getMovieRating();


function checkLevelUser() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено слишком мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log('Произошла ошибка');
    }
}

checkLevelUser();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB.privat);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let answerGenres = prompt(`Ваш любимый жанр под номером: ${i}`);
        personalMovieDB.genres[i - 1] = answerGenres;
    }
}
writeYourGenres();






console.log(personalMovieDB);


