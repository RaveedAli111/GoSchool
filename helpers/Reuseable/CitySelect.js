import React, { useEffect, useState } from "react";
import { Select, message } from "antd";
import cityData from "./cities.json";

const { Option } = Select;

const CitySelect = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const getData = async () => {
    try {
      let url = "https://ipinfo.io/json?token=04bf9dcfa06112";
      let response = await fetch(url);
      let data = await response.json();

      // Find the corresponding city option in cityData
      const foundCity = cityData?.find((city) => city.name === data?.city);
      if (foundCity) {
        setSelectedCity(foundCity?.name);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Fetch location when the component mounts

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a city"
      optionFilterProp="children"
      value={selectedCity}
      onChange={handleCityChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {cityData?.map((city) => (
        <Option key={city.name} value={city.name}>
          {city.name}
        </Option>
      ))}
    </Select>
  );
};

export default CitySelect;
