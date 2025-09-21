import { setupMovieDetails, searchMovie, setupFavoritesDetails } from "./js/api.js";
import { renderFavorites } from "./js/dom.js";

searchMovie();
setupMovieDetails();
renderFavorites();
setupFavoritesDetails();