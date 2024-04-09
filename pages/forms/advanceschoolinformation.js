import React from "react";
import { DatePicker, Form, Input, InputNumber, Radio, Select } from "antd";

// const onFinish = async (values) => {
//   try {
//     const config = {
//       "Content-Type": "application/json",
//     };
//     const submitData = await axios.post(
//       // "http://localhost:5000/school/post",
//       "http://localhost:5000/school/basicschoolinformation",
//       values,
//       config
//     );
//     if (submitData) {
//       alert("Data has been posted to MongoDB...");
//       console.log("submitData", submitData);
//     }
//   } catch (error) {
//     console.log("Error", error);
//   }
// };

const AdvanceSchoolinformation = () => (
  <div style={{ width: "80%", margin: "auto" }}>
    {/* Heading */}
    <h3
      style={{
        display: "block",
        backgroundColor: "blueviolet",
        color: "white",
        marginTop: "15px",
      }}
    >
      Advance School information
    </h3>

    {/* School type */}
    <Form.Item
      name="schoolStatus"
      label="School Status"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please select any school",
        },
      ]}
    >
      <Select placeholder="Please select a School">
        <Select.Option value="Government-School">
          Government-School
        </Select.Option>
        <Select.Option value="Semi-Government-School">
          Semi-Government-School
        </Select.Option>
        <Select.Option value="Foundation-School">
          Foundation School
        </Select.Option>
        <Select.Option value="Charity-School">Charity School</Select.Option>
        <Select.Option value="Other">Other...</Select.Option>
      </Select>
    </Form.Item>

    {/* Year of establishment */}
    <Form.Item
      name="yearOfEstablishment"
      label="Year of Establishment"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please select year",
        },
      ]}
    >
      <Select placeholder="Year of Establishment" id="year" name="year">
        <Option value="">year</Option>
        <Option value="1940">1940</Option>
        <Option value="1941">1941</Option>
        <Option value="1942">1942</Option>
        <Option value="1943">1943</Option>
        <Option value="1944">1944</Option>
        <Option value="1945">1945</Option>
        <Option value="1946">1946</Option>
        <Option value="1947">1947</Option>
        <Option value="1948">1948</Option>
        <Option value="1949">1949</Option>
        <Option value="1950">1950</Option>
        <Option value="1951">1951</Option>
        <Option value="1952">1952</Option>
        <Option value="1953">1953</Option>
        <Option value="1954">1954</Option>
        <Option value="1955">1955</Option>
        <Option value="1956">1956</Option>
        <Option value="1957">1957</Option>
        <Option value="1958">1958</Option>
        <Option value="1959">1959</Option>
        <Option value="1960">1960</Option>
        <Option value="1961">1961</Option>
        <Option value="1962">1962</Option>
        <Option value="1963">1963</Option>
        <Option value="1964">1964</Option>
        <Option value="1965">1965</Option>
        <Option value="1966">1966</Option>
        <Option value="1967">1967</Option>
        <Option value="1968">1968</Option>
        <Option value="1969">1969</Option>
        <Option value="1970">1970</Option>
        <Option value="1971">1971</Option>
        <Option value="1972">1972</Option>
        <Option value="1973">1973</Option>
        <Option value="1974">1974</Option>
        <Option value="1975">1975</Option>
        <Option value="1976">1976</Option>
        <Option value="1977">1977</Option>
        <Option value="1978">1978</Option>
        <Option value="1979">1979</Option>
        <Option value="1980">1980</Option>
        <Option value="1981">1981</Option>
        <Option value="1982">1982</Option>
        <Option value="1983">1983</Option>
        <Option value="1984">1984</Option>
        <Option value="1985">1985</Option>
        <Option value="1986">1986</Option>
        <Option value="1987">1987</Option>
        <Option value="1988">1988</Option>
        <Option value="1989">1989</Option>
        <Option value="1990">1990</Option>
        <Option value="1991">1991</Option>
        <Option value="1992">1992</Option>
        <Option value="1993">1993</Option>
        <Option value="1994">1994</Option>
        <Option value="1995">1995</Option>
        <Option value="1996">1996</Option>
        <Option value="1997">1997</Option>
        <Option value="1998">1998</Option>
        <Option value="1999">1999</Option>
        <Option value="2000">2000</Option>
        <Option value="2001">2001</Option>
        <Option value="2002">2002</Option>
        <Option value="2003">2003</Option>
        <Option value="2004">2004</Option>
        <Option value="2005">2005</Option>
        <Option value="2006">2006</Option>
        <Option value="2007">2007</Option>
        <Option value="2008">2008</Option>
        <Option value="2009">2009</Option>
        <Option value="2010">2010</Option>
        <Option value="2011">2011</Option>
        <Option value="2012">2012</Option>
        <Option value="2013">2013</Option>
        <Option value="2014">2014</Option>
        <Option value="2015">2015</Option>
        <Option value="2016">2016</Option>
        <Option value="2017">2017</Option>
        <Option value="2018">2018</Option>
        <Option value="2019">2019</Option>
        <Option value="2020">2020</Option>
        <Option value="2021">2021</Option>
        <Option value="2022">2022</Option>
        <Option value="2023">2023</Option>
        <Option value="2024">2024</Option>
      </Select>
    </Form.Item>

    {/* School type */}
    <Form.Item
      name="schoolType"
      label="School type"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please select school type",
        },
      ]}
    >
      <Select placeholder="School type">
        <Option value="Co-Education">Co-Education</Option>
        <Option value="Only for Boys">Only for Boys</Option>
        <Option value="Only for Girls">Only for Girls</Option>
      </Select>
    </Form.Item>

    {/* Sibling Discount */}
    <Form.Item label="Sibling Discount" name="siblingDiscounts">
      <Radio.Group>
        <Radio value={true}>Yes</Radio>
        <Radio value={false}>No</Radio>
      </Radio.Group>
    </Form.Item>

    {/* Admission Process */}
    <Form.Item label=" Admission Process" name="admissionProcess" hasFeedback>
      <Radio.Group>
        <Radio value={true}>Ongoing</Radio>
        <Radio value={false}>Closed</Radio>
      </Radio.Group>
    </Form.Item>

    {/* Last date for applying admission */}
    <Form.Item
      label="Last date for applying admission"
      name="lastDateOfAdmission"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Last date for applying admission",
        },
      ]}
    >
      <DatePicker
        style={{ display: "flex", flexWrap: "wrap" }}
        format={"DD-MM-YYYY"}
      />
    </Form.Item>

    {/* Monthly fee range */}
    <Form.Item
      label="Monthly fee range"
      hasFeedback
      style={{ marginBottom: "0px" }}
    >
      <Form.Item
        name="minimumFee"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Minimum is fee is required",
          },
        ]}
        style={{ display: "inline-block", width: "calc(50% - 8px)" }}
      >
        <InputNumber
          min={0}
          placeholder="Minimum Fee"
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        name="maximumFee"
        hasFeedback
        rules={[
          {
            required: true,

            message: "Maximum is fee is required",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50% - 8px)",
          margin: "0px 8px",
        }}
      >
        <InputNumber
          min={1}
          placeholder="Maximum Fee"
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
    </Form.Item>

    {/* Language of Instructions */}
    <Form.Item
      name="langInstructions"
      label="Language of Instructions"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please select any language",
        },
      ]}
    >
      <Select placeholder="Language of Instructions" style={{ width: "49%" }}>
        <Option value="English">English</Option>
        <Option value="Urdu">Urdu</Option>
        <Option value="Pashto">Pashto</Option>
        <Option value="Punjabi">Punjabi</Option>
        <Option value="Blochi">Blochi</Option>
        <Option value="Sindhi">Sindhi</Option>
        <Option value="Sraiki">Sraiki</Option>
        <Option value="Other">Other...</Option>
      </Select>
    </Form.Item>

    {/* Documents are required  */}
    <Form.Item
      name="docTextArea"
      label="Documents are required"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Documents are required",
        },
      ]}
    >
      <Input.TextArea style={{ width: "100%", height: "150px" }} />
    </Form.Item>

    {/* <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">reset</Button>
        </Space>
      </Form.Item> */}
  </div>
);

export default AdvanceSchoolinformation;
