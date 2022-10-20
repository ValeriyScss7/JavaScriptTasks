let NumberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDb = {
    count: NumberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false,
    FilmRaiting() {
        for (i = 0; i < 2; i++) {
            let Film = prompt('Один из последних просмотренных фильмов?')
            let Rating = prompt('Ваша оценка?');
            this.movies[Film] = Rating;
        }
    }

}

personalMovieDb.FilmRaiting();

console.log(personalMovieDb);



