import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  const navigate = useNavigate();
  const hourly_rate = product.rates.hourly_rate;
  const daily_rate = product.rates.daily_rate;
  const weekly_rate = product.rates.weekly_rate;
  const monthly_rate = product.rates.monthly_rate;
  const sale = product.rates.sale;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.photos_directory.imageUrl[0]} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          {hourly_rate ? (
            <Card.Text>Hourly Rate : ${hourly_rate}</Card.Text>
          ) : (
            <></>
          )}
          {daily_rate ? (
            <Card.Text>Daily Rate : ${daily_rate}</Card.Text>
          ) : (
            <></>
          )}
          {weekly_rate ? (
            <Card.Text>Weekly Rate : ${weekly_rate}</Card.Text>
          ) : (
            <></>
          )}
          {monthly_rate ? (
            <Card.Text>Monthly Rate : ${monthly_rate}</Card.Text>
          ) : (
            <></>
          )}
          {sale ? <Card.Text>Buy : ${sale}</Card.Text> : <></>}
          <Button
            variant="primary"
            onClick={() => {
              navigate(`/products/${product._id}`, { state: { product } });
            }}
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductDisplay;
