import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
import { useContext } from "react";
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="shadow-lg  navbar-light rounded">
        <nav className="navbar navbar-light navheight paint">
          <div className="container-fluid ">
            <button type="button" className="btn btn-outline-primary">
              <Link to="/" className="navbar-brand ">
                Home
              </Link>
            </button>

            <button type="button" className="btn btn-success">
              <Link to="/cart" className="navbar-brand">
                Cart <IoCartOutline />
                {cart.length}
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
