const resultsContainer = document.querySelector(".results__container");

export function renderMessage(message) {
  resultsContainer.textContent = `${message}`;
}

export function renderSearchResults(movies) {
  resultsContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const poster = document.createElement("img");
    const movieTitle = document.createElement("h4");
    const movieYear = document.createElement("p");

    movieContainer.classList.add('movie__container')

    poster.setAttribute("src", movie.Poster);
    poster.setAttribute("alt", movie.Title);
    poster.classList.add('movie__poster');

    movieTitle.textContent = movie.Title;
    movieTitle.classList.add('movie__title');

    movieYear.textContent = movie.Year;
    movieYear.classList.add('movie__year');

    movieContainer.appendChild(poster);
    movieContainer.appendChild(movieTitle);
    movieContainer.appendChild(movieYear);
    resultsContainer.appendChild(movieContainer);
  });
}
