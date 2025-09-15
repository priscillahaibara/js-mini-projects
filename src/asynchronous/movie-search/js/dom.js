const PLACEHOLDER_POSTER = 'https://placehold.co/200x300';

export function renderMessage(message) {
  const resultsError = document.querySelector(".results__error");
  resultsError.textContent = `${message}`;
}

export function renderSearchResults(movies) {
  const resultsContainer = document.querySelector(".results__container");
  resultsContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const poster = document.createElement("img");
    const movieTitle = document.createElement("h4");
    const movieYear = document.createElement("p");

    movieContainer.classList.add("movie__container");

    poster.setAttribute("src", movie.Poster != 'N/A' ? movie.Poster : PLACEHOLDER_POSTER);
    poster.setAttribute("alt", movie.Title);
    poster.classList.add("movie__poster");

    movieTitle.textContent = movie.Title;
    movieTitle.classList.add("movie__title");

    movieYear.textContent = movie.Year;
    movieYear.classList.add("movie__year");

    movieContainer.appendChild(poster);
    movieContainer.appendChild(movieTitle);
    movieContainer.appendChild(movieYear);
    resultsContainer.appendChild(movieContainer);
  });
}
