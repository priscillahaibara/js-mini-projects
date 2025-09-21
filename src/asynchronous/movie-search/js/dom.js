import { getFavorites, saveFavorites } from "./favorites.js";

const PLACEHOLDER_POSTER = "https://placehold.co/200x300";

const resultsContainer = document.querySelector(".results__container");

export function addSpinner() {
  if (resultsContainer.querySelector(".spinner")) return;

  const spinnerContainer = document.createElement("div");
  spinnerContainer.classList.add("spinner");
  resultsContainer.appendChild(spinnerContainer);
}

export function removeSpinner() {
  const spinnerContainer = document.querySelector(".spinner");
  if (spinnerContainer) spinnerContainer.remove();
}

export function renderMessage(message) {
  const resultsError = document.querySelector(".results__error");
  resultsError.textContent = `${message}`;
}

export function renderSearchResults(movies) {
  resultsContainer.innerHTML = "";

  const movieListContainer = document.createElement("div");
  movieListContainer.classList.add("movie__list-container");

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const poster = document.createElement("img");
    const movieTitle = document.createElement("h4");
    const movieYear = document.createElement("p");

    movieContainer.classList.add("movie__container");
    movieContainer.dataset.id = movie.imdbID;

    poster.setAttribute(
      "src",
      movie.Poster != "N/A" ? movie.Poster : PLACEHOLDER_POSTER
    );
    poster.setAttribute("alt", movie.Title);
    poster.classList.add("movie__poster");

    movieTitle.textContent = movie.Title;
    movieTitle.classList.add("movie__title");

    movieYear.textContent = movie.Year;
    movieYear.classList.add("movie__year");

    movieContainer.appendChild(poster);
    movieContainer.appendChild(movieTitle);
    movieContainer.appendChild(movieYear);
    movieListContainer.appendChild(movieContainer);
    resultsContainer.appendChild(movieListContainer);
  });
}

export function renderMovieDetails(data, lastResults = []) {
  resultsContainer.innerHTML = "";

  const movieDetailContainer = document.createElement("div");
  movieDetailContainer.classList.add("movie__container--detail");

  const movieIcons = document.createElement("div");
  movieIcons.classList.add("movie__icons");

  const backButton = document.createElement("button");
  const backIcon = document.createElement("ion-icon");
  backIcon.classList.add("movie__icon--back");
  backIcon.setAttribute("name", "arrow-back-circle-outline");

  backButton.addEventListener("click", () => {
    renderSearchResults(lastResults);
  });

  const favoriteButton = document.createElement("button");
  const favoriteIcon = document.createElement("ion-icon");
  favoriteIcon.classList.add("movie__icon--favorite");
  favoriteIcon.setAttribute("name", "star-outline");

  favoriteButton.addEventListener("click", () => {
    console.log("clicked");
    saveFavorites(data);
    renderFavorites();
  });

  const poster = document.createElement("img");
  poster.setAttribute(
    "src",
    data.Poster != "N/A" ? data.Poster : PLACEHOLDER_POSTER
  );
  poster.setAttribute("alt", data.Title);
  poster.classList.add("movie__poster--detail");

  const movieTitle = document.createElement("h4");
  movieTitle.classList.add("movie__title--detail");
  movieTitle.textContent = data.Title;

  const moviePlot = document.createElement("p");
  moviePlot.textContent = data.Plot;

  const movieGenre = document.createElement("p");
  movieGenre.classList.add("movie__genre");
  movieGenre.textContent = `Genre: ${data.Genre}`;

  const movieDuration = document.createElement("p");
  movieDuration.textContent = `Duration: ${data.Runtime}`;

  const movieRating = document.createElement("p");
  movieRating.textContent = `IMDB rating: ${data.imdbRating}`;

  backButton.appendChild(backIcon);
  favoriteButton.appendChild(favoriteIcon);
  movieIcons.appendChild(backButton);
  movieIcons.appendChild(favoriteButton);
  movieDetailContainer.appendChild(movieIcons);
  movieDetailContainer.appendChild(poster);
  movieDetailContainer.appendChild(movieTitle);
  movieDetailContainer.appendChild(moviePlot);
  movieDetailContainer.appendChild(movieGenre);
  movieDetailContainer.appendChild(movieDuration);
  movieDetailContainer.appendChild(movieRating);
  resultsContainer.appendChild(movieDetailContainer);
}

export function renderFavorites() {
  const favorites = getFavorites();
  const favoritesContainer = document.querySelector(".favorites__container");

  favoritesContainer.innerHTML = "";

  const movieListContainer = document.createElement("div");
  movieListContainer.classList.add("movie__list-container");

  favorites.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const poster = document.createElement("img");
    const movieTitle = document.createElement("h4");
    const movieYear = document.createElement("p");

    movieContainer.classList.add("movie__container");
    movieContainer.dataset.id = movie.imdbID;

    poster.setAttribute(
      "src",
      movie.Poster != "N/A" ? movie.Poster : PLACEHOLDER_POSTER
    );
    poster.setAttribute("alt", movie.Title);
    poster.classList.add("movie__poster");

    movieTitle.textContent = movie.Title;
    movieTitle.classList.add("movie__title");

    movieYear.textContent = movie.Year;
    movieYear.classList.add("movie__year");

    movieContainer.appendChild(poster);
    movieContainer.appendChild(movieTitle);
    movieContainer.appendChild(movieYear);
    movieListContainer.appendChild(movieContainer);
    favoritesContainer.appendChild(movieListContainer);
  });
}
