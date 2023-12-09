import React, { useState, useEffect } from "react";
import Form from "../components/form/Form";
import Appheader from "../components/header/header";
import Mainfooter from "./main/footer";

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
    category: "Clothings",
    sub_category: "Men",
    type: "Jackets",
    name: "Winter Jacket - Vayanga",
    description: "Wind Proof, Water Proof",
    condition: "excellent",
    age: "less_than_3_months",
    rates: {
      hourly_rate: 10,
      daily_rate: 8,
      weekly_rate: 5,
      monthly_rate: 3,
      sale: 15,
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
    <Appheader/>
    <Form/>
    <Mainfooter/>
      {/* <div>
        <input
          type="file"
          accept="image/*"
          name="images"
          multiple
          onChange={handleImageChange}
        />
        <button onClick={handleImageUpload}>Upload Image</button>
      </div>
      <button onClick={handleSubmit}>Submit Form</button> */}
    </>
  );
};

export default PostItems;
