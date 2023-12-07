import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Tilt } from 'react-tilt';

const ProductDisplay = ({ product }) => {
  const navigate = useNavigate();
  const hourly_rate = product.rates.hourly_rate;
  const daily_rate = product.rates.daily_rate;
  const weekly_rate = product.rates.weekly_rate;
  const monthly_rate = product.rates.monthly_rate;
  const sale = product.rates.sale;

  return (
    <div
      onClick={() => {
        navigate(`/products/${product._id}`, { state: { product } });
      }}
    >
      <Tilt options={{ max: 25, perspective: 1000, scale: 1.1 }}>
              <Card className='card-display m-md-4 position-relative'>
                <Card.Img className='card-image' src={product.photos_directory.imageUrl[0]} />
                <Card.Body className=''>
                  <Card.Title className='d-inline'>{product.name}</Card.Title>
                  <Card.Text className="mt-0">{product.description}</Card.Text>
                  {hourly_rate ? <Card.Text className="d-inline mt-0">Hourly Rate : ${hourly_rate}</Card.Text> : <></>}
                  {daily_rate ? <Card.Text className="mt-0">Daily Rate : ${daily_rate}</Card.Text> : <></>}
                  {weekly_rate ? <Card.Text className="d-inline mt-0">Weekly Rate : ${weekly_rate}</Card.Text> : <></>}
                  {monthly_rate ? <Card.Text className="mt-0">Monthly Rate : ${monthly_rate}</Card.Text> : <></>}
                  {sale ? <Card.Text>Buy : ${sale}</Card.Text> : <></>}
                  <Button className='btn btn-outline-light btn-float' variant="primary">
                    Rent now
                  </Button>
                </Card.Body>
              </Card>
            </Tilt>
    </div>
  );
};

export default ProductDisplay;
