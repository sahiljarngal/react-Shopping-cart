import { CartContext } from "../../Features/ContextProvider";
import { useContext } from "react";
import CartProduct from "../CartProduct";
import { totalItem, totalPrice } from "../../Features/CartReducer";
const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      {/* map used for mapping all items of cart */}
      <div className="container">
        <div className="row">
          <div className="col-8 m-3">
            {cart.map((p) => (
              <CartProduct product={p} key={p.id} />
            ))}
          </div>
          {/* summary of cart */}
          <div className="col-4 h-auto w-auto">
            <div className="card bg-secondary p-3 text-white">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group">
                  <h5>Total items:{totalItem(cart)}</h5>
                </li>
                <li className="list-group">
                  <h5>Total Price:${totalPrice(cart)}</h5>
                </li>
              </ul>
              <div className="card-body">
                <button className="btn btn-warning">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
