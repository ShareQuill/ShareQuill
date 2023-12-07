import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Tilt } from "react-tilt";

const ProductDisplay = ({ product }) => {
  const navigate = useNavigate();
  const hourly_rate = product.rates.hourly_rate;
  const daily_rate = product.rates.daily_rate;
  const weekly_rate = product.rates.weekly_rate;
  const monthly_rate = product.rates.monthly_rate;
  const sale = product.rates.sale;

  return (
    <>
      <Tilt options={{ max: 25, perspective: 1000, scale: 1.1 }}>
        <Card className="card-display m-md-4 position-relative">
          <Card.Img variant="top" src={product.photos_directory.imageUrl[0]} />
          <Card.Body className="">
            <Card.Title className="d-inline">{product.name}</Card.Title>
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
              className="btn btn-outline-light btn-float"
              variant="primary"
              onClick={() => {
                navigate(`/products/${product._id}`, { state: { product } });
              }}
            >
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Tilt>
    </>
  );
};

export default ProductDisplay;
