let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let answerFilm = prompt('Один из просмотренных фильмов?');
    let answerOpinion = prompt('На сколько оцените его?');

    if (answerFilm != null && answerFilm.length < 50 && answerOpinion != null && answerFilm != "" && answerOpinion != '') {
        personalMovieDB.movies[answerFilm] = answerOpinion;
    } else {
        console.log("Произошла ошибка");
        i--;
    }

}




if (personalMovieDB.count < 10) {
    console.log("Просмотрено слишком мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 50) {
    console.log("Вы киноман");
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);


