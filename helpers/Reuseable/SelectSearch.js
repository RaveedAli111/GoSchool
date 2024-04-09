import React, { useState, useEffect } from "react";
import { Select } from "antd";
import jwtAxios from "../../utils/Apis";

const { Option } = Select;

const SelectSearch = ({
  route,
  onBlur,
  onSelect,
  autoFocus,
  otherProps,
  record,
  fields,
}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(" ");
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAPI = async (query) => {
    let params = query ? { q: query } : {};
    if (fields) {
      params.fields = fields;
    }
    const response = await jwtAxios.get(route, { params });
    return response.data.result;
  };
  useEffect(() => {
    setLoading(true);
    fetchAPI(search)
      .then((newData) => {
        setData(newData);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [search]);

  const handleSelect = (val, options) => {
    let finalValue = val;
    setValue(finalValue);
    if (onSelect) {
      onSelect(finalValue);
    }
  };

  const options = data.map((d) => (
    <Option key={d._id} value={d[values]}>
      {labels.map((prop) => d[prop]).join(" - ")}
    </Option>
  ));

  return (
    <Select
      showSearch
      value={value}
      onBlur={onBlur}
      style={{
        marginLeft: "7px",
        // padding: "10px",
        border: "1px solid #ccc",
        width: "390px",
      }}
      onSelect={(e) => handleSelect(e, data, record)}
      autoFocus={autoFocus}
      onSearch={setSearch}
      loading={loading}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {options}
    </Select>
  );
};

export default SelectSearch;
