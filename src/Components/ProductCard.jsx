import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  // Card design for Product
  return (
    <>
      <div className="col">
        <div className="card h-100 ">
          <img
            src={product.thumbnail}
            className="card-img-top h-5 w-75"
            alt={product.title}
          />
          <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <h5 className="">${product.price}</h5>
            <p className="card-text">{product.description}</p>
            <button
              href="#"
              className="btn btn-primary"
              onClick={() => dispatch({ type: "Add", product: product })}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
