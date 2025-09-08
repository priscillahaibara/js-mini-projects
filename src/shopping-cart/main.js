import { loadCart } from "./js/utils/localStorage.js";
import { renderCartSummary } from "./js/components/renderCartSummary.js";
import { renderCartItems } from "./js/components/renderCartItems.js";
import { showItems } from "./js/components/showItems.js";
import { setupCartModal } from "./js/components/setupCartModal.js";


let cart = loadCart();

showItems(cart);
renderCartItems(cart);
renderCartSummary(cart);
setupCartModal();