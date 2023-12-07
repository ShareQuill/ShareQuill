import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

const PostItems = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      setSelectedImages(files);
    } else {
      console.error("[ERROR] No files selected");
    }
  };

  const handleImageUpload = () => {
    if (selectedImages.length > 0) {
      const formData = new FormData();

      // Append each selected image to the FormData object
      for (let i = 0; i < selectedImages.length; i++) {
        formData.append("images", selectedImages[i]);
      }

      // Send formData to the backend (you can use fetch or axios)
      fetch("http://localhost:5000/api/products/images/post", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setImageURLs(data);
          console.log("Images uploaded successfully:", data);
        })
        .catch((error) => {
          console.error("Error uploading images:", error);
        });
    }
  };

  const postData = {
    category: "Electronics",
    sub_category: "Latest Printers",
    type: "laser_printers",
    name: "Printer Name",
    description: "Item Description",
    condition: "excellent",
    age: "less_than_3_months",
    rates: {
      hourly_rate: 40,
      daily_rate: 30,
      weekly_rate: 20,
      monthly_rate: 10,
      sale: 50,
    },
    location: {
      apartment_name: "Sample Apartment",
      area: "Downtown",
      zip_code: 12345,
      city: "Sample City",
      state: "Sample State",
    },
    photos_directory: "",
    frequency: "",
  };

  const handleSubmit = () => {
    // Send formData to the backend (you can use fetch or axios)
    postData.photos_directory = imageURLs;
    fetch("http://localhost:5000/api/products/specs/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <>
      <div>
        <input
          type="file"
          accept="image/*"
          name="images"
          multiple
          onChange={handleImageChange}
        />
        <Button onClick={handleImageUpload}>Upload Image</Button>
      </div>
      <Button onClick={handleSubmit}>Click Here</Button>
    </>
  );
};

export default PostItems;
