import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Calendar = ({ setNoOfDays, price, setPrice }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    const noOfDays =
      (new Date(newValue.endDate) - new Date(newValue.startDate)) /
      (1000 * 3600 * 24);
    setNoOfDays(noOfDays);
    setPrice(price * noOfDays);
    setValue(newValue);
  };

  return (
    <Datepicker
      toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
      value={value}
      onChange={handleValueChange}
    />
  );
};
export default Calendar;
