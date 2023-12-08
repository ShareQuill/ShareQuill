import React, { useEffect, useState } from "react";
import ProductDisplay from "../partials/ProductDisplay";
import ProductsSort from "../partials/ProductsSort";

function ProductCard() {
  // State variables for sort option and data copy
  const [sortOption, setSortOption] = useState("created_time");
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/home/fetch"
        );
        const data = await response.json();
        setProducts(data);
        setSortedProducts([...data]); // Create a copy for sorting
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle sort change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setSortedProducts(sortData(products, event.target.value));
  };

  // Function to sort products based on selected option
  const sortData = (data, option) => {
    switch (option) {
      case "created_time":
        return [...data].sort(
          (a, b) => new Date(b.created_time) - new Date(a.created_time)
        );
      case "rates.hourly_rate":
        return [...data].sort(
          (a, b) => a.rates.hourly_rate - b.rates.hourly_rate
        );
      case "name":
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return data;
    }
  };

  return (
    <>
      {/* Sort Options Display */}
      <ProductsSort
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      />
      {/* Display Sorted Products */}
      {sortedProducts.map((product) => (
        <ProductDisplay product={product} key={product._id} />
      ))}
    </>
  );
}

export default ProductCard;
