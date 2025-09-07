import { loadCart } from "./js/utils/localStorage.js";
import { renderCartSummary } from "./js/components/renderCartSummary.js";
import { renderCartItems } from "./js/components/renderCartItems.js";
import { showItems } from "./js/components/showItems.js";


let cart = loadCart();

showItems(cart);
renderCartItems(cart);
renderCartSummary(cart);

const openCartBtn = document.getElementById("cart-icon");
const closeCartBtn = document.getElementById("close-cart-button");
const cartModal = document.querySelector(".cart-modal");

openCartBtn.addEventListener("click", () => {
  cartModal.classList.toggle("visible");
});

closeCartBtn.addEventListener("click", () => {
  cartModal.classList.remove("visible");
});
