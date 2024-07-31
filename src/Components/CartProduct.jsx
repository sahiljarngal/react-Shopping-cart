import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  // function to increase the iteams
  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  // function to decrease the iteams
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };
  // cart Layout
  return (
    <div className="d-flex border m-2">
      <img src={product.thumbnail} className="w-25 h-25" alt={product.title} />
      <div className="detail ms-4">
        <h5>{product.title}</h5>
        <h6>${product.price}</h6>
        <div className="buttons ">
          <button
            className="px-2 btn btn-light border border-secondary"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="px-2  btn  border border-secondary ">
            {product.quantity}
          </button>
          <button
            className="px-2 btn btn-light border border-secondary"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-sm btn-warning m-2"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
