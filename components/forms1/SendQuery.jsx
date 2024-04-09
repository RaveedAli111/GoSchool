import React from "react";
import { Button, Checkbox, Form, Input, Row, Col, Flex } from "antd";
// import "./SendQuery.scss";
let { TextArea } = Input;
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
      //   wrapperCol={{
      //     span: 16,
      //   }}
      //   style={{
      //     maxWidth: 600,
      //   }}
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
            name="email "
            rules={[
              {
                required: true,
                message: "Please input your contact No!",
              },
            ]}
          >
            <Input placeholder="E-mail" type="email" />
          </Form.Item>
        </Col>
        <Col xl={16} md={16} sm={16} xs={16}>
          <Form.Item
            // label="PhoneNumber"
            name="purpose"
            rules={[
              {
                required: true,
                message: "Please purpose!",
              },
            ]}
          >
            <Input placeholder="Purpose" />
          </Form.Item>
        </Col>
        <Col xl={16} md={16} sm={16} xs={16}>
          <Form.Item
            // label="PhoneNumber"
            name="placeHolder"
            rules={[
              {
                required: true,
                message: "Please input your contact No!",
              },
            ]}
          >
            <TextArea placeholder="Enter your text here" />
          </Form.Item>
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default App;
