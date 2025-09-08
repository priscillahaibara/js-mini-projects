export function setupCartModal() {
  const openCartBtn = document.getElementById("cart-icon");
  const closeCartBtn = document.getElementById("close-cart-button");
  const cartModal = document.querySelector(".cart-modal");

  openCartBtn.addEventListener("click", () => {
    cartModal.classList.toggle("visible");
  });

  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.remove("visible");
  });
}
