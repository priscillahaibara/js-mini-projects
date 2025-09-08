import { showItems } from "./showItems.js";
import { products } from "../data/products.js";

export function updateProductDisplay(cart, filteredProducts) {
  const productsSection = document.getElementById("products-section");

  productsSection.innerHTML = "";
  showItems(cart, filteredProducts);
}

export function getFilteredInput(cart) {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    updateProductDisplay(cart, filteredProducts);
  });
}
