import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ setNoOfDays, price, setPrice, setDateSelected }) => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    const noOfDays =
      (new Date(newValue.endDate) - new Date(newValue.startDate)) /
      (1000 * 3600 * 24);
    setNoOfDays(noOfDays);
    setPrice(price * noOfDays);
    setValue(newValue);
    console.log(noOfDays);
    setDateSelected(noOfDays);
  };

  return (
    <Datepicker 
    primaryColor={"blue"} 
    value={value} 
    onChange={handleValueChange} 
    showShortcuts={true} 
    /> 
    );
};
export default DatePicker;
