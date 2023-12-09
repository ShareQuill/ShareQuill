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
      case "rates.daily_rate":
        return [...data].sort(
          (a, b) => a.rates.daily_rate - b.rates.daily_rate
        );
      case "name":
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return data;
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Recently Posted
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductDisplay product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
