const products = [
  { id: 1, name: "t-shirt", price: 20, img: "./assets/products/tshirt.jpg" },
  { id: 2, name: "shoes", price: 50, img: "./assets/products/shoes.jpg" },
  { id: 3, name: "jeans", price: 30, img: "./assets/products/jeans.jpg" },
  { id: 4, name: "hat", price: 15, img: "./assets/products/hat.jpg" },
  { id: 5, name: "dress", price: 40, img: "./assets/products/dress.jpg" },
];

const productsContainer = document.getElementById("products-container");
const inputItems = document.getElementById("input-items");
const addInputButton = document.getElementById("add-input-button");

let cart = [];

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
    productsContainer.appendChild(productContainer);
  });

  addItemToCart();
}

function addItemToCart() {
  const addCartButton = document.querySelectorAll(".add-cart-button");

  addCartButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.dataset.id);
      const product = products.find((p) => productId === p.id);
      cart.push(product)
      console.log('Cart:', cart)
    });
  });
}

showItems();
