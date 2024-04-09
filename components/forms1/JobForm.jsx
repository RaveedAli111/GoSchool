import React from "react";
import { Button, Checkbox, Form, Input, Row, Col, Select, Upload } from "antd";
// import Upload from "antd/es/upload/Upload";
// import "./JobForm.scss";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => (
  <div className="main">
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {" "}
      <Row gutter={12}>
        <Col xl={16} md={16} sm={16} xs={16}>
          <Form.Item
            // label="FullName"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
        </Col>
        <Col xl={16} md={16} sm={16} xs={16}>
          <Form.Item
            // label="PhoneNumber"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please input your contact No!",
              },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col xl={16} md={16} sm={16} xs={16}>
          <Form.Item
            // label="PhoneNumber"
            name="email"
            rules={[
              {
                required: true,
                message: "Please email!",
              },
            ]}
          >
            <Input placeholder="E-Mail" />
          </Form.Item>
        </Col>
        <Col xl={16} md={16} sm={16} xs={16}>
          <Form.Item
            name="ecperience"
            rules={[
              {
                required: true,
                message: "Please input your Experience!",
              },
            ]}
          >
            <Select placeholder="Apply For">
              <Select.Option value="1">As a Lab Attendend</Select.Option>
              <Option value="2">As a Teacher</Option>
              <Option value="3">As a Co-Ordinator</Option>
              <Option value="more">Others</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col xl={16} md={16} sm={16} xs={16}>
          <Form.Item
            name="ecperience"
            rules={[
              {
                required: true,
                message: "Please input your Experience!",
              },
            ]}
          >
            <Select placeholder="Experience">
              <Select.Option value="1">1 year</Select.Option>
              <Option value="2">2 Year</Option>
              <Option value="3">3 Year</Option>
              <Option value="more">More Than 1 year</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xl={16} md={16} sm={16} xs={16}>
          <Upload.Dragger
            multiple
            listType="picture"
            action={"http://localhost:5173/"}
          >
            {" "}
            Upload Image
          </Upload.Dragger>
        </Col>
        <Col xl={16} md={16} sm={16} xs={16}>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{ marginTop: 50 }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default App;
