import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../scss/styles.scss";
import ProductDisplay from "../components/partials/ProductDisplay";

const Home = () => {
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
    <>
      {products.map((product) => (
        <ProductDisplay product={product} key={product._id} />
      ))}
    </>
  );
};

export default Home;
