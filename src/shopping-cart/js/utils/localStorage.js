export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function loadCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
