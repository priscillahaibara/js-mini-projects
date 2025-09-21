export function getFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return favorites;
}

export function saveFavorites(movie) {
  const favorites = getFavorites();
  const existsMovie = favorites.find((f) => f.imdbID === movie.imdbID);

  if (!existsMovie) {
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

export function updateFavorites(newFavorites) {
  localStorage.setItem('favorites', JSON.stringify(newFavorites))
}