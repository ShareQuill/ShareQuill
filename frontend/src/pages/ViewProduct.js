import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";

const ViewProduct = () => {
  const location = useLocation();
  const product = location.state.product;

  const makePayment = async (product) => {
    const stripe = await loadStripe(
      "pk_test_51OHtYWHfFaxHofKUsnnno0r5QE3LVagHBag6E53tayznGP6vJtVkQPdSL805NPEHiWXgt7Es4r0NhGhOxRyS0cm500ono6kauf"
    );
    const body = { product };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:5000/api/stripe/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      <div className="container" key={product._id}>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={product.photos_directory.imageUrl[0]}
            style={{ width: "12rem" }}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button onClick={() => makePayment(product)}>Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ViewProduct;
