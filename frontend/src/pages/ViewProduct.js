import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ViewProduct = () => {
  const { product } = useLocation();
  console.log(product);
  return <></>;
};

export default ViewProduct;
