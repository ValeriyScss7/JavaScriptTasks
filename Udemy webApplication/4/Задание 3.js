'use strict';





let personalMovieDB = {
    count: 0,
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    movies: {},
    getMovieRating() {
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
    },
    checkLevelUser() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено слишком мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB.privat);
        }
    },
    actors: {},
    genres: [],
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let answerGenres = prompt(`Ваш любимый жанр под номером: ${i}`);
            if (answerGenres == '' || answerGenres == null) {
                console.log('Вы ввели неверные данные или их не ввели');
                i--;
            }
            else {
                this.genres[i - 1] = answerGenres;
            }
            this.genres.forEach(function (item, a,) {
                console.log(`Любимый жанр под номером : ${a + 1} это ${item}`);
            });
        }
    },
    privat: false,
    toggleVisibleMyDB() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },


};





console.log(personalMovieDB.writeYourGenres());












