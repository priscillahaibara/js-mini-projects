import { MY_API_KEY } from "../config.js";
import {
  addSpinner,
  removeSpinner,
  renderMessage,
  renderMovieDetails,
  renderSearchResults,
} from "./dom.js";

const BASE_URL = "https://www.omdbapi.com/";
const OMDB_API_KEY = MY_API_KEY;

let controller = null;

async function fetchMovie(movieTitle) {
  if (controller) controller.abort();

  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${OMDB_API_KEY}&s=${movieTitle}`,
      { signal }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    if (data.Search && data.Search.length > 0) {
      renderSearchResults(data.Search);
    } else {
      renderMessage("No movies found for this title.");
    }
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted due to new input");
    } else {
      console.error("Error fetching movie:", err);
      renderMessage("Something went wrong. Please try again.");
      return null;
    }
  } finally {
    removeSpinner();
  }
}

async function fetchMovieDetails(imdbID) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Movie details:", data);
    renderMovieDetails(data);
  } catch (err) {
    console.error("Error fetching movie details:", err);
    renderMessage("Something went wrong while fetching movie details.");
    return null;
  }
}

export function searchMovie() {
  const searchInput = document.querySelector(".search__input");

  let debounceTimer;

  searchInput.addEventListener("input", (e) => {
    const movieTitle = e.target.value;

    if (movieTitle === "") {
      renderSearchResults([]);
      renderMessage("");
      return;
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (movieTitle.trim().length < 3) {
        renderMessage("Type at least 3 characters to search.");
        return;
      }

      addSpinner();

      fetchMovie(movieTitle);
    }, 500);
  });
}

export function setupMovieDetails() {
  const resultsContainer = document.querySelector(".results__container");

  if (!resultsContainer) return;

  resultsContainer.addEventListener("click", (e) => {
    const movieContainer = e.target.closest(".movie__container");
    if (!movieContainer) return;

    const imdbID = movieContainer.dataset.id;
    fetchMovieDetails(imdbID);
  });
}
