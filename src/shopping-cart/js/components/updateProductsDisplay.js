import { showItems } from "./showItems.js";
import { products } from "../data/products.js";

export function updateProductDisplay(cart, filteredProducts) {
  const productsSection = document.getElementById("products-section");

  productsSection.innerHTML = "";
  showItems(cart, filteredProducts);
}

export function getFilteredInput(cart) {
  const searchInput = document.getElementById("search-input");
  const selectFilter = document.getElementById("select-filter");

  let timeoutId;

  function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const category = selectFilter.value;

    const filteredProducts = products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesCategory = category === "all" ? true : product.category === category;

      return matchesName && matchesCategory;
    });

    updateProductDisplay(cart, filteredProducts);
  }

  [searchInput, selectFilter].forEach((el) =>
    el.addEventListener("input", () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(applyFilters, 500);
    })
  );
}
