import { updateCartSummary } from "../utils/utils.js";

export function renderCartSummary(cart) {
  const { sumItems, sumPrice } = updateCartSummary(cart);

  const totalQuantity = document.getElementById("total-quantity");
  const totalPrice = document.getElementById("total-price");

  totalQuantity.textContent = `Total quantity: ${sumItems}`;
  totalPrice.textContent = `Total price: $${sumPrice.toFixed(2)}`;
}