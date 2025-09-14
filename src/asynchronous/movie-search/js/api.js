import { MY_API_KEY } from "../config.js";

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
    console.log('Fetched data:', data);
    return data;
  } catch (err) {
    console.error("Error fetching movie:", err);
    return null;
  }
}

export function searchMovie() {
  const searchInput = document.querySelector(".search__input");
  let debounceTimer;

  searchInput.addEventListener("input", (e) => {
    const movieTitle = e.target.value;

    if (movieTitle.trim().length < 3) return;

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fetchMovie(movieTitle), 500);
  });
}
