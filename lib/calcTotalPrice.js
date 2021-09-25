export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be deleted but they could still be in y our cart
    return tally + cartItem.product.price * cartItem.quantity;
  }, 0);
}
