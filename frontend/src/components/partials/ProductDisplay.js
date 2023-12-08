import React from "react";
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
              
            </Tilt>
    </div>
  );
};

export default ProductDisplay;
