import React from "react";

const ProductsSort = ({ sortOption, handleSortChange }) => {
  return (
    <div className="sort-options">
      Sort By
      <div className="d-block">
        <label htmlFor="sort-hourly_rate">Hourly Rate</label>
        <input
          type="radio"
          id="sort-hourly_rate"
          name="sort-by"
          value="rates.hourly_rate"
          checked={sortOption === "rates.hourly_rate"}
          onChange={handleSortChange}
        />
      </div>
      <div className="d-block">
        <label htmlFor="sort-name">Name</label>
        <input
          type="radio"
          id="sort-name"
          name="sort-by"
          value="name"
          checked={sortOption === "name"}
          onChange={handleSortChange}
        />
      </div>
      <div className="d-block">
        <label htmlFor="sort-created_time">Latest First</label>
        <input
          type="radio"
          id="sort-created_time"
          name="sort-by"
          value="created_time"
          checked={sortOption === "created_time"}
          onChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default ProductsSort;
