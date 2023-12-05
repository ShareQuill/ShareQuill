import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const PostItems = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      console.log("Selected files:", files);
      setSelectedImages(files);
    } else {
      console.error("No files selected");
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
          console.log("Images uploaded successfully:", data);
        })
        .catch((error) => {
          console.error("Error uploading images:", error);
        });
    }
  };

  useEffect(() => {
    // This will log the updated value of selectedImages
    console.log(selectedImages);
  }, [selectedImages]);

  const postData = {
    category: "Electronics",
    sub_category: "Latest Printers",
    type: "laser_printers",
    name: "Printer Name",
    description: "Item Description",
    condition: "excellent",
    age: "less_than_3_months",
    rates: {
      hourly_rate: "",
      daily_rate: "",
      weekly_rate: "",
      monthly_rate: "",
      sale: "",
    },
    location: {
      apartment_name: "Sample Apartment",
      area: "Downtown",
      zip_code: "12345",
      city: "Sample City",
      state: "Sample State",
    },
    photos_directory: "",
    frequency: "",
  };

  const handleSubmit = () => {
    // Send formData to the backend (you can use fetch or axios)
    console.log(postData);
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
