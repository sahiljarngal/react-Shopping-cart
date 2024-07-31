export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};
export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};
// Context Api for defining all methods and state of cart
const CartReducer = (state, action) => {
  // Switch condition for identify action type and appropriate method for each action
  switch (action.type) {
    case "Add":
      return [...state, action.product];

    case "Remove":
      return state.filter((p) => p.id !== action.id);

    case "Increase": {
      const IndexI = state.findIndex((p) => p.id === action.id);

      state[IndexI].quantity += 1;
      return [...state];
    }
    case "Decrease": {
      const IndexI = state.findIndex((p) => p.id === action.id);
      state[IndexI].quantity -= 1;
      return [...state];
    }

    default:
      state;
  }
};
export default CartReducer;
