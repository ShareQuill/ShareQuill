import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="container"
      onClick={() => {
        navigate(`/products/${product._id}`, { state: { product } });
      }}
    >
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={product.photos_directory.imageUrl[0]}
          style={{ width: "12rem" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.rates.hourly_rate}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDisplay;
