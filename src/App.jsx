import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/pages/Products";
import "./App.css";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
