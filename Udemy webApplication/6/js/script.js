



'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let advertiesment = document.querySelector(".promo__adv");

let adv = document.querySelectorAll('.promo__adv img');

let remove = (arr) => {
    arr.forEach((item) => {
        item.remove();
    });
};
remove(adv);

document.querySelector('.promo__genre').textContent = "Драма";

let promoBg = document.querySelector('.promo__bg');

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

let MovieList = document.querySelector('.promo__interactive-list');

let sortArr = (arr) => {
    arr.sort();
};

sortArr(movieDB.movies);

function getMovieList(films, list) {
    list.innerHTML = "";
    films.forEach((film, i) => {
        list.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });
    document.querySelectorAll('.delete').forEach((basket, i) => {
        basket.addEventListener('click', () => {
            basket.parentElement.remove();
            movieDB.movies.splice(i, 1);
            getMovieList(films, list);
        });
    });

}

let addForm = document.querySelector('form.add');

let addInput = document.querySelector('.adding__input');

let checkBox = addForm.querySelector("[type='checkbox']");

addForm.addEventListener('submit', (Event) => {
    Event.preventDefault();
    let Films = addInput.value;
    let Check = checkBox.checked;
    if (Films) {
        if (Films.length > 21) {
            Films = `${Films.substring(0, 22)}...`;
        }
        if (Check) {
            console.log(`Фильм ${Films} любимый`);
        }
        movieDB.movies.push(Films);
        sortArr(movieDB.movies);

        getMovieList(movieDB.movies, MovieList);
    }


    Event.target.reset();
});










