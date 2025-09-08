import { loadCart } from "./js/utils/localStorage.js";
import { renderCartSummary } from "./js/components/renderCartSummary.js";
import { renderCartItems } from "./js/components/renderCartItems.js";
import { setupCartModal } from "./js/components/setupCartModal.js";
import { products } from "./js/data/products.js";
import { updateProductDisplay, getFilteredInput } from "./js/components/updateProductsDisplay.js";

let cart = loadCart();

getFilteredInput(cart);
updateProductDisplay(cart, products);
renderCartItems(cart);
renderCartSummary(cart);
setupCartModal();