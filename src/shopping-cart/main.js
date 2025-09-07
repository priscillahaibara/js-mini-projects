import { products } from "./js/data/products.js";
import { loadCart, saveCart } from "./js/utils/localStorage.js";
import { addToCart, updateCartSummary } from "./js/utils/utils.js";

const productsSection = document.getElementById("products-section");
const cartItems = document.getElementById("cart-items");

let cart = loadCart();

function showItems() {
  products.forEach((product) => {
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
      renderCartItems();
      renderCartSummary();
    });
  });
}

function renderCartItems() {
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    const p = document.createElement("p");
    p.textContent = `${item.name}: ${item.quantity}`;

    const buttonDecrement = document.createElement("button");
    buttonDecrement.textContent = "-";
    buttonDecrement.classList.add("button-decrement");
    buttonDecrement.dataset.id = item.id;

    const buttonIncrement = document.createElement("button");
    buttonIncrement.textContent = "+";
    buttonIncrement.classList.add("button-increment");
    buttonIncrement.dataset.id = item.id;

    div.appendChild(buttonDecrement);
    div.appendChild(p);
    div.appendChild(buttonIncrement);

    cartItems.appendChild(div);

    cartItems;

    buttonIncrement.addEventListener("click", () => {
      const cartItem = cart.find((c) => c.id === item.id);

      if (cartItem) {
        cartItem.quantity += 1;
        saveCart(cart);
        renderCartItems();
        renderCartSummary();
      }
    });

    buttonDecrement.addEventListener("click", () => {
      const cartItemIndex = cart.findIndex((c) => c.id === item.id);

      if (cartItemIndex !== -1) {
        if (cart[cartItemIndex].quantity > 1) {
          cart[cartItemIndex].quantity -= 1;
        } else {
          cart.splice(cartItemIndex, 1);
        }

        saveCart(cart);
        renderCartItems();
        renderCartSummary();
      }
    });
  });
}

function renderCartSummary() {
  const { sumItems, sumPrice } = updateCartSummary(cart);

  const totalQuantity = document.getElementById("total-quantity");
  const totalPrice = document.getElementById("total-price");

  totalQuantity.textContent = `Total quantity: ${sumItems}`;
  totalPrice.textContent = `Total price: $${sumPrice.toFixed(2)}`;
}

showItems();
renderCartItems();
renderCartSummary();

const openCartBtn = document.getElementById("cart-icon");
const closeCartBtn = document.getElementById("close-cart-button");
const cartModal = document.querySelector(".cart-modal");

openCartBtn.addEventListener("click", () => {
  cartModal.classList.toggle("visible");
});

closeCartBtn.addEventListener("click", () => {
  cartModal.classList.remove("visible");
});
