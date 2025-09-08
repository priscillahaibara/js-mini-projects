import { saveCart } from "../utils/localStorage.js";
import { renderCartSummary } from "./renderCartSummary.js";

export function renderCartItems(cart) {
  const cartItems = document.getElementById("cart-items");

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item-content");

    const itemName = document.createElement("p");
    itemName.textContent = item.name;
    itemName.classList.add("item-name");

    const itemQuantity = document.createElement("p");
    itemQuantity.textContent = item.quantity;

    const buttonDecrement = document.createElement("button");
    buttonDecrement.textContent = '-';
    buttonDecrement.classList.add("button-decrement");
    buttonDecrement.dataset.id = item.id;

    const buttonIncrement = document.createElement("button");
    buttonIncrement.textContent = "+";
    buttonIncrement.classList.add("button-increment");
    buttonIncrement.dataset.id = item.id;

    div.appendChild(buttonDecrement);
    div.appendChild(itemQuantity);
    div.appendChild(buttonIncrement);
    cartItems.appendChild(itemName);
    cartItems.appendChild(div);

    buttonIncrement.addEventListener("click", () => {
      const cartItem = cart.find((c) => c.id === item.id);

      if (cartItem) {
        cartItem.quantity += 1;
        saveCart(cart);
        renderCartItems(cart);
        renderCartSummary(cart);
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
        renderCartItems(cart);
        renderCartSummary(cart);
      }
    });
  });
}
