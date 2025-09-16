import { MY_API_KEY } from "../config.js";
import {
  addSpinner,
  removeSpinner,
  renderMessage,
  renderSearchResults,
} from "./dom.js";

const BASE_URL = "https://www.omdbapi.com/";
const OMDB_API_KEY = MY_API_KEY;

async function fetchMovie(movieTitle) {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${OMDB_API_KEY}&s=${movieTitle}`
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
    console.error("Error fetching movie:", err);
    renderMessage('Something went wrong. Please try again.')
    return null;
  } finally {
    removeSpinner();
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
