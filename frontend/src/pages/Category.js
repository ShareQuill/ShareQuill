import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductDisplay from "../components/partials/ProductDisplay";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  console.log("Category..", category);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/category/${category}`
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

export default Category;
