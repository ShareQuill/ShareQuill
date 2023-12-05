import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../scss/styles.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
        <div
          className="container"
          key={product._id}
          onClick={() => {
            navigate(`/products/${product._id}`, { product: {product} });
          }}
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={product.imageUrl}
              style={{ width: "12rem" }}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.rates.hourly_rate}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Home;
