import React, { useEffect, useState } from "react";
import ProductDisplay from "../partials/ProductDisplay";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/home/fetch"
        );
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container d-flex space-between">
      {products.map((product) => (
        <ProductDisplay product={product} key={product._id} />
      ))}
    </div>
  );
}

export default ProductCard;
