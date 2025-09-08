import { products } from "../data/products.js";
import { addToCart } from "../utils/utils.js";
import { saveCart } from "../utils/localStorage.js";
import { renderCartItems } from "./renderCartItems.js";
import { renderCartSummary } from "./renderCartSummary.js";

export function showItems(cart, filteredProducts) {
const productsSection = document.getElementById("products-section");

productsSection.innerHTML = '';

  filteredProducts.forEach((product) => {
    const productContainer = document.createElement("div");
    const productText = document.createElement("div");
    const productImg = document.createElement("img");
    const productName = document.createElement("h2");
    const productPrice = document.createElement("p");
    const addCartButton = document.createElement("button");

    productContainer.classList.add("product-container");
    productText.classList.add("product-text");
    productImg.classList.add("product-img");
    productName.classList.add("product-name");
    productPrice.classList.add("product-price");

    productImg.setAttribute("src", product.img);
    productImg.setAttribute("alt", product.name);
    productName.textContent = product.name;
    productPrice.textContent = `$${product.price}`;
    addCartButton.textContent = "Add to Cart";
    addCartButton.classList.add("add-cart-button");
    addCartButton.dataset.id = product.id;

    productContainer.appendChild(productImg);
    productContainer.appendChild(productText);
    productText.appendChild(productName);
    productText.appendChild(productPrice);
    productText.appendChild(addCartButton);
    productsSection.appendChild(productContainer);

    addCartButton.addEventListener("click", () => {
      addToCart(product, cart);
      saveCart(cart);
      renderCartItems(cart);
      renderCartSummary(cart);
    });
  });
}