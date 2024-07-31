import React, { useState } from "react";
import Data from "../../../data.json";
import ProductCard from "../ProductCard";
const Products = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    <>
      {/*  map all products form data.json file */}
      <div className="container mt-5 ">
        <div className="row row-cols-1 row-cols-md-4 g-4 h-25">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
          /
        </div>
      </div>
    </>
  );
};

export default Products;
