
const API_KEY = '9997aea9-b4b1-4e28-8e62-38e3584c9ce4';

getFilms()

function getFilms() {
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(film => topFilms(film))
        .catch(err => console.log(err))

}

function topFilms(film) {
    const moviesEl = document.querySelector(".slider__items");

    film.films.forEach(movies => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("slider-item");
        movieEl.innerHTML = `
        <a  href="#">
        <img class="slider__img" src="${movies.posterUrl}" alt="">
        </a>
        <div class="slider__name">${movies.nameRu}</div>
        <div class="slider__data">${movies.year}г.</div>
        <div class="slider__rating">Рейтинг Кинопоиска: <span>${movies.rating}</span></div>
        `;
        moviesEl.appendChild(movieEl);
    });
    $('.slider__items').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: ".slider__link-back",
        nextArrow: ".slider__link-next"
    });
}

getFilmsFantasy()

function getFilmsFantasy() {
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=5&order=RATING&type=ALL&ratingFrom=5&ratingTo=10&yearFrom=2000&yearTo=2022&page=1', {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(film =>fantasyFilms(film))
        .catch(err => console.log(err))

}

function fantasyFilms(film) {
    const fantasy = document.querySelector(".slider__elements");

    film.items.forEach(movie => {
        const fantasyEl = document.createElement("div");
        fantasyEl.classList.add("slider-element");
        fantasyEl.innerHTML = `
        <a class="slider__btn" href="#">
            <img class="slider__img" src="${movie.posterUrl}" alt="">
        </a>
        <div class="slider__name">${movie.nameRu}</div>
        <div class="slider__data">${movie.year}г.</div>
        <div class="slider__rating">Рейтинг Кинопоиска: <span>${movie.ratingKinopoisk}</span></div>
        `;
        fantasy.appendChild(fantasyEl);
    });

    $('.slider__elements').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: ".slider__link-backspace",
        nextArrow: ".slider__link-further"
    });
}
