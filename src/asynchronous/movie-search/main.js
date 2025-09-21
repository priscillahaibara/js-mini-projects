import { setupMovieDetails, searchMovie } from "./js/api.js";
import { renderFavorites } from "./js/dom.js";
import { getFavorites } from "./js/favorites.js";

searchMovie();
setupMovieDetails();
renderFavorites();