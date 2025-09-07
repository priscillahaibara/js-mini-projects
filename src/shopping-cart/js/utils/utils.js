export const addToCart = (product, cart) => {
  const productId = product.id;
  const cartItem = cart.find((i) => i.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  return cart;
};

export const updateCartSummary = (cart) => {
  const sumItems = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
  const sumPrice = cart.reduce(
    (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
    0
  );

  return { sumItems, sumPrice }
};
