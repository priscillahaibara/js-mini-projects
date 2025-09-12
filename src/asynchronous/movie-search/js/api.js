import { OMDB_API_KEY } from "../config.js";

async function fetchMovie(movieTitle) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieTitle}`
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

export function searchMovie() {
  const searchInput = document.querySelector(".search__input");

  searchInput.addEventListener("input", (e) => {
    const movieTitle = e.target.value;
    fetchMovie(movieTitle);
  });
}

