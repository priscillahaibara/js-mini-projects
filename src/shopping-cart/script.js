const products = [
  { id: 1, name: "t-shirt", price: 20, img: "./assets/products/tshirt.jpg" },
  { id: 2, name: "shoes", price: 50, img: "./assets/products/shoes.jpg" },
  { id: 3, name: "jeans", price: 30, img: "./assets/products/jeans.jpg" },
  { id: 4, name: "hat", price: 15, img: "./assets/products/hat.jpg" },
  { id: 5, name: "dress", price: 40, img: "./assets/products/dress.jpg" },
];

const productsContainer = document.getElementById("products-container");

products.forEach((product) => {
  const productContainer = document.createElement("div");
  const productImg = document.createElement("img");
  const productName = document.createElement("h2");
  const productPrice = document.createElement("p");
  const addProductButton = document.createElement("button");

  productContainer.classList.add('product-container');
  productImg.setAttribute("src", product.img);
  productImg.setAttribute('alt', product.name);
  productName.textContent = product.name;
  productPrice.textContent = `$${product.price}`;
  addProductButton.textContent = "Add to Cart";
  addProductButton.classList.add('add-product-button');
  addProductButton.dataset.id = product.id;

  productContainer.appendChild(productImg);
  productContainer.appendChild(productName);
  productContainer.appendChild(productPrice);
  productContainer.appendChild(addProductButton);
  productsContainer.appendChild(productContainer);
});
