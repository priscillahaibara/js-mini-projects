const products = [
  { id: 1, name: "t-shirt", price: 20, img: "./assets/products/tshirt.jpg" },
  { id: 2, name: "shoes", price: 50, img: "./assets/products/shoes.jpg" },
  { id: 3, name: "jeans", price: 30, img: "./assets/products/jeans.jpg" },
  { id: 4, name: "hat", price: 15, img: "./assets/products/hat.jpg" },
  { id: 5, name: "dress", price: 40, img: "./assets/products/dress.jpg" },
];

const productsSection = document.getElementById("products-section");
const cartItems = document.getElementById("cart-items");
const inputItems = document.getElementById("input-items");
const addInputButton = document.getElementById("add-input-button");
const totalQuantity = document.getElementById("total-quantity");
const totalPrice = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("item")) || [];

function saveItem() {
  localStorage.setItem("item", JSON.stringify(cart));
}

function showItems() {
  products.forEach((product) => {
    const productContainer = document.createElement("div");
    const productImg = document.createElement("img");
    const productName = document.createElement("h2");
    const productPrice = document.createElement("p");
    const addCartButton = document.createElement("button");

    productContainer.classList.add("product-container");
    productImg.setAttribute("src", product.img);
    productImg.setAttribute("alt", product.name);
    productName.textContent = product.name;
    productPrice.textContent = `$${product.price}`;
    addCartButton.textContent = "Add to Cart";
    addCartButton.classList.add("add-cart-button");
    addCartButton.dataset.id = product.id;

    productContainer.appendChild(productImg);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(addCartButton);
    productsSection.appendChild(productContainer);

    addCartButton.addEventListener("click", () => {
      const productId = product.id;
      const item = cart.find((i) => i.id === productId);

      if (item) {
        item.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      saveItem();
      renderCartItems();
      updateCartSummary();
    });
  });
}

function updateCartSummary() {
  const sumItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const sumPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  totalQuantity.textContent = `Total quantity: ${sumItems}`;
  totalPrice.textContent = `Total price: $${sumPrice.toFixed(2)}`;
}

function renderCartItems() {
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = `${item.name}: ${item.price} x ${item.quantity} = ${
      item.price * item.quantity
    }`;
    div.appendChild(p);
    cartItems.appendChild(div);
  });
}

showItems();
renderCartItems();
updateCartSummary();
